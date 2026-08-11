// Module ID: 1815
// Function ID: 1816
// Name: useReducedMotion
// Dependencies: [1694]
// Exports: useReducedMotion

// Module 1815 (useReducedMotion)
import isReducedMotionEnabledInSystem from "isReducedMotionEnabledInSystem";

isReducedMotionEnabledInSystem = isReducedMotionEnabledInSystem.isReducedMotionEnabledInSystem();

export function useReducedMotion() {
  return isReducedMotionEnabledInSystem;
}
