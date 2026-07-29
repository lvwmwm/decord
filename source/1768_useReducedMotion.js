// Module ID: 1768
// Function ID: 1769
// Name: useReducedMotion
// Dependencies: [1647]
// Exports: useReducedMotion

// Module 1768 (useReducedMotion)
import isReducedMotionEnabledInSystem from "isReducedMotionEnabledInSystem";

isReducedMotionEnabledInSystem = isReducedMotionEnabledInSystem.isReducedMotionEnabledInSystem();

export function useReducedMotion() {
  return isReducedMotionEnabledInSystem;
}
