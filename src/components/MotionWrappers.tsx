import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import {
  defaultTransition,
  defaultViewport,
  getEntranceVariants,
  useIsRtl,
} from "../animations/motion-config";

/**
 * Parent Section Container
 * Ensures overflow-hidden so horizontal slide offsets don't cause horizontal scrollbars on mobile devices
 */
export interface ScrollSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "main" | "article";
}

export function ScrollSection({
  children,
  className = "",
  as: Component = "section",
  ...props
}: ScrollSectionProps) {
  return (
    <Component className={`w-full overflow-hidden ${className}`} {...props}>
      {children}
    </Component>
  );
}

/**
 * Alternating Left-hand and Right-hand Columns/Cards
 * Left: initial={{ opacity: 0, x: -50 }} (RTL: 50)
 * Right: initial={{ opacity: 0, x: 50 }} (RTL: -50)
 * whileInView={{ opacity: 1, x: 0, y: 0 }}
 * viewport={{ once: true, amount: 0.15 }}
 */
export interface AnimatedColumnProps extends HTMLMotionProps<"div"> {
  direction: "left" | "right";
  index?: number;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedColumn({
  direction,
  index = 0,
  children,
  className = "",
  ...props
}: AnimatedColumnProps) {
  const isRtl = useIsRtl();
  const variants = getEntranceVariants(direction, isRtl, index);

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.whileInView}
      viewport={defaultViewport}
      transition={variants.transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Center / Row Items Staggered Entrance
 * Uses index-based delays: (delay: idx * 0.1)
 */
export interface StaggeredItemProps extends HTMLMotionProps<"div"> {
  index: number;
  children: React.ReactNode;
  className?: string;
}

export function StaggeredItem({
  index,
  children,
  className = "",
  ...props
}: StaggeredItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{
        ...defaultTransition,
        delay: index * 0.1,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Text Elements: Inner headings, descriptions, and tag pills
 * Smoothly fade in: (initial={{ opacity: 0 }} -> whileInView={{ opacity: 1 }})
 */
export interface FadeInTextProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export function FadeInText({
  delay = 0,
  children,
  className = "",
  ...props
}: FadeInTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={defaultViewport}
      transition={{
        ...defaultTransition,
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
