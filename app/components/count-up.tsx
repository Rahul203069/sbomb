"use client";

import { animate, motion, useInView, useReducedMotion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
};

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    latest.toFixed(decimals)
  );

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (shouldReduceMotion) {
      count.set(to);
      return;
    }

    const controls = animate(count, to, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, isInView, shouldReduceMotion, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
