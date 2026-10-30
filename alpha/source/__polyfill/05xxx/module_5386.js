// Module ID: 5386
// Function ID: 5387
// Dependencies: [5366, 5381, 5357]
// Exports: useFlingGesture

// Module 5386
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5366 */;
import _mod5381 from "module_5381" /* 5381 */;

let closure_2 = {};

export function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5381;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
