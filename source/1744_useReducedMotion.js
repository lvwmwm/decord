// Module ID: 1744
// Function ID: 19528
// Name: useReducedMotion
// Dependencies: [1623]
// Exports: useReducedMotion

// Module 1744 (useReducedMotion)
import isReducedMotionEnabledInSystem from "isReducedMotionEnabledInSystem";

isReducedMotionEnabledInSystem = isReducedMotionEnabledInSystem.isReducedMotionEnabledInSystem();

export function useReducedMotion() {
  return isReducedMotionEnabledInSystem;
}
