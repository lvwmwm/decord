// Module ID: 6155
// Function ID: 6156
// Dependencies: [6134, 6149, 6125]
// Exports: useLongPressGesture

// Module 6155
import ComposedGestureName from "ComposedGestureName" /* 6125 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6134 */;
import _mod6149 from "module_6149" /* 6149 */;

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
  const obj2 = _mod6149;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
