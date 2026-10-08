// Module ID: 6415
// Function ID: 6416
// Dependencies: [6394, 6409, 6385]
// Exports: useLongPressGesture

// Module 6415
import ComposedGestureName from "ComposedGestureName" /* 6385 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6394 */;
import _mod6409 from "module_6409" /* 6409 */;

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
  const obj2 = _mod6409;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
