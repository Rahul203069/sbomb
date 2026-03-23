"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function MotionButton({
  children,
  className = "",
  href,
}: MotionButtonProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -2, scale: 1.01, boxShadow: "0 18px 40px rgba(15, 23, 42, 0.12)" }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.a>
  );
}
