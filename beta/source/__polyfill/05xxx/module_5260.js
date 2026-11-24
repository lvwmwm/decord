// Module ID: 5260
// Function ID: 5261
// Dependencies: [5244, 5261, 5235]
// Exports: useTapGesture

// Module 5260
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import _mod5244 from "module_5244" /* 5244 */;
import _mod5261 from "module_5261" /* 5261 */;

function transformTapProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_4 = {};

export function useTapGesture(tmp82Result) {
  let tmp = tmp82Result;
  if (tmp82Result === undefined) {
    tmp = closure_4;
  }
  const obj = _mod5244;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformTapProps);
  const obj2 = _mod5261;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
