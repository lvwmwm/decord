// Module ID: 1816
// Function ID: 1817
// Name: useReducedMotion
// Dependencies: [1695]
// Exports: useReducedMotion

// Module 1816 (useReducedMotion)
import isReducedMotionEnabledInSystem from "isReducedMotionEnabledInSystem";

isReducedMotionEnabledInSystem = isReducedMotionEnabledInSystem.isReducedMotionEnabledInSystem();

export function useReducedMotion() {
  return isReducedMotionEnabledInSystem;
}
