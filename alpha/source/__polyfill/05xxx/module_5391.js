// Module ID: 5391
// Function ID: 5392
// Dependencies: [5366, 5381, 5357]
// Exports: useManualGesture

// Module 5391
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5366 */;
import _mod5381 from "module_5381" /* 5381 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5381;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
