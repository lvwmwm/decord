// Module ID: 5622
// Function ID: 5623
// Dependencies: [5606, 5623, 5597]
// Exports: useTapGesture

// Module 5622
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import _mod5606 from "module_5606" /* 5606 */;
import _mod5623 from "module_5623" /* 5623 */;

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
  const obj = _mod5606;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformTapProps);
  const obj2 = _mod5623;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
