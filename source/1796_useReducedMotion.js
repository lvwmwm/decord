// Module ID: 1796
// Function ID: 1797
// Name: useReducedMotion
// Dependencies: [1675]
// Exports: useReducedMotion

// Module 1796 (useReducedMotion)
import isReducedMotionEnabledInSystem from "isReducedMotionEnabledInSystem";

isReducedMotionEnabledInSystem = isReducedMotionEnabledInSystem.isReducedMotionEnabledInSystem();

export function useReducedMotion() {
  return isReducedMotionEnabledInSystem;
}
