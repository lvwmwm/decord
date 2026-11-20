// Module ID: 5141
// Function ID: 5142
// Dependencies: [5125, 5142, 5116]
// Exports: useTapGesture

// Module 5141
import ComposedGestureName from "ComposedGestureName" /* 5116 */;
import _mod5125 from "module_5125" /* 5125 */;
import _mod5142 from "module_5142" /* 5142 */;

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
  const obj = _mod5125;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformTapProps);
  const obj2 = _mod5142;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
