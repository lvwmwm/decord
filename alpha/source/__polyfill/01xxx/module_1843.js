// Module ID: 1843
// Function ID: 1844
// Dependencies: [1844]
// Exports: isReducedMotionEnabledInSystem

// Module 1843
import mutablesNative from "module_1844" /* 1844 */;


export function isReducedMotionEnabledInSystem() {
  return global._REANIMATED_IS_REDUCED_MOTION;
}
export const ReducedMotionManager = mutablesNative.createReducedMotionManager(global._REANIMATED_IS_REDUCED_MOTION);
