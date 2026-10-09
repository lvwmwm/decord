// Module ID: 6422
// Function ID: 6423
// Dependencies: [6401, 6416, 6392]
// Exports: useLongPressGesture

// Module 6422
import ComposedGestureName from "ComposedGestureName" /* 6392 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6401 */;
import _mod6416 from "module_6416" /* 6416 */;

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
  const obj2 = _mod6416;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
