// Module ID: 6701
// Function ID: 6702
// Dependencies: [6680, 6695, 6671]
// Exports: useLongPressGesture

// Module 6701
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6680 */;
import _mod6695 from "module_6695" /* 6695 */;

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
  const obj2 = _mod6695;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
