// Module ID: 5396
// Function ID: 5397
// Dependencies: [5371, 5386, 5362]
// Exports: useManualGesture

// Module 5396
import ComposedGestureName from "ComposedGestureName" /* 5362 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5371 */;
import _mod5386 from "module_5386" /* 5386 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5386;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
