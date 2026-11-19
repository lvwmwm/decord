// Module ID: 5139
// Function ID: 5140
// Dependencies: [5123, 5140, 5114]
// Exports: useTapGesture

// Module 5139
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import _mod5123 from "module_5123" /* 5123 */;
import _mod5140 from "module_5140" /* 5140 */;

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
  const obj = _mod5123;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformTapProps);
  const obj2 = _mod5140;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
