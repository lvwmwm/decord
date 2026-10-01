// Module ID: 6166
// Function ID: 6167
// Dependencies: [6141, 6156, 6132]
// Exports: useManualGesture

// Module 6166
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6156;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
