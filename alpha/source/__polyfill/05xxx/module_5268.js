// Module ID: 5268
// Function ID: 5269
// Dependencies: [5244, 5261, 5235]
// Exports: useLongPressGesture

// Module 5268
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import _mod5244 from "module_5244" /* 5244 */;
import _mod5261 from "module_5261" /* 5261 */;

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
  const obj = _mod5244;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  const obj2 = _mod5261;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}
