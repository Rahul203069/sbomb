"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type HeroStaggerProps = {
  children: ReactNode;
  className?: string;
};

type HeroItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type ParallaxCardProps = {
  children: ReactNode;
  className?: string;
};

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroStagger({ children, className = "" }: HeroStaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? undefined : "hidden"}
      animate={reduceMotion ? undefined : "show"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className = "",
  delay = 0,
}: HeroItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay,
                  ease: easing,
                },
              },
            }
      }
      initial={reduceMotion ? { opacity: 1 } : undefined}
      animate={reduceMotion ? { opacity: 1 } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxCard({ children, className = "" }: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [32, -32]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [2.5, -2.5]
  );

  return (
    <motion.div ref={ref} className={className} style={{ y, rotate }}>
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 6.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
