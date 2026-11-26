// Module ID: 1845
// Function ID: 1846
// Dependencies: [1846]
// Exports: isReducedMotionEnabledInSystem

// Module 1845
import mutablesNative from "module_1846" /* 1846 */;


export function isReducedMotionEnabledInSystem() {
  return global._REANIMATED_IS_REDUCED_MOTION;
}
export const ReducedMotionManager = mutablesNative.createReducedMotionManager(global._REANIMATED_IS_REDUCED_MOTION);
