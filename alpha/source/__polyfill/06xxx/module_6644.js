// Module ID: 6644
// Function ID: 6645
// Dependencies: [6623, 6638, 6614]
// Exports: useLongPressGesture

// Module 6644
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6623 */;
import _mod6638 from "module_6638" /* 6638 */;

function transformLongPressProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [["minDuration", "minDurationMs"], ["maxDistance", "maxDist"]];
const map = new Map(items);
let closure_4 = {};

export const useLongPressGesture = function useLongPressGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_4;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  const obj2 = _mod6638;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
