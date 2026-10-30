// Module ID: 5387
// Function ID: 5388
// Dependencies: [5366, 5381, 5357]
// Exports: useLongPressGesture

// Module 5387
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5366 */;
import _mod5381 from "module_5381" /* 5381 */;

function transformLongPressProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [["minDuration", "minDurationMs"], ["maxDistance", "maxDist"]];
const map = new Map(items);
let closure_4 = {};

export function useLongPressGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_4;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  const obj2 = _mod5381;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}
