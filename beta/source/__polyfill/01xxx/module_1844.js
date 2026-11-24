// Module ID: 1844
// Function ID: 1845
// Dependencies: [1845]
// Exports: isReducedMotionEnabledInSystem

// Module 1844
import mutablesNative from "module_1845" /* 1845 */;


export function isReducedMotionEnabledInSystem() {
  return global._REANIMATED_IS_REDUCED_MOTION;
}
export const ReducedMotionManager = mutablesNative.createReducedMotionManager(global._REANIMATED_IS_REDUCED_MOTION);
