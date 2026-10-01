// Module ID: 6161
// Function ID: 6162
// Dependencies: [6141, 6156, 6132]
// Exports: useFlingGesture

// Module 6161
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6156;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
