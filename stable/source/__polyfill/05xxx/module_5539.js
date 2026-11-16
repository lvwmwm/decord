// Module ID: 5539
// Function ID: 5540
// Dependencies: [5523, 5540, 5514]
// Exports: useTapGesture

// Module 5539
import ComposedGestureName from "ComposedGestureName" /* 5514 */;
import _mod5523 from "module_5523" /* 5523 */;
import _mod5540 from "module_5540" /* 5540 */;

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
  const obj = _mod5523;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformTapProps);
  const obj2 = _mod5540;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
