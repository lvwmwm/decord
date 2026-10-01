// Module ID: 6167
// Function ID: 6168
// Dependencies: [6141, 6156, 6132]
// Exports: useNativeGesture

// Module 6167
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6156;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
