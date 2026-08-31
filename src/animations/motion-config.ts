import { useEffect, useState } from "react";
import type { Transition, ViewportOptions } from "motion/react";

/**
 * Ultra-smooth cubic-bezier curve & duration config
 * ease: [0.16, 1, 0.3, 1], duration: 0.65s
 */
export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.65,
  ease: SMOOTH_EASE,
};

/**
 * Scroll Triggers:
 * Trigger once when 15% of the element is visible
 */
export const defaultViewport: ViewportOptions = {
  once: true,
  amount: 0.15,
};

/**
 * Custom hook to detect RTL document direction (dir="rtl")
 * Reactively updates if the dir attribute changes dynamically
 */
export function useIsRtl(): boolean {
  const [isRtl, setIsRtl] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    return (
      (document.documentElement.getAttribute("dir") ||
        document.body.getAttribute("dir") ||
        "ltr").toLowerCase() === "rtl"
    );
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof MutationObserver === "undefined") return;

    const checkRtl = () => {
      const dir =
        document.documentElement.getAttribute("dir") ||
        document.body.getAttribute("dir") ||
        "ltr";
      setIsRtl(dir.toLowerCase() === "rtl");
    };

    checkRtl();

    const observer = new MutationObserver(checkRtl);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    return () => observer.disconnect();
  }, []);

  return isRtl;
}

/**
 * Helper to build directional motion props accounting for RTL
 * Left-hand: initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
 * Right-hand: initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
 * Center: initial={{ opacity: 0, y: 20 }}
 */
export function getEntranceVariants(
  direction: "left" | "right" | "center" | "fade",
  isRtl = false,
  index = 0
): { initial: Record<string, number>; whileInView: Record<string, any>; transition: Transition } {
  let initialX = 0;
  let initialY = 0;

  if (direction === "left") {
    initialX = isRtl ? 50 : -50;
  } else if (direction === "right") {
    initialX = isRtl ? -50 : 50;
  } else if (direction === "center") {
    initialY = 24;
  }

  return {
    initial: {
      opacity: 0,
      x: initialX,
      y: initialY,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    transition: {
      ...defaultTransition,
      delay: index * 0.1,
    },
  };
}
