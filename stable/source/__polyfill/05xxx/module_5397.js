// Module ID: 5397
// Function ID: 5398
// Dependencies: [5371, 5386, 5362]
// Exports: useNativeGesture

// Module 5397
import ComposedGestureName from "ComposedGestureName" /* 5362 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5371 */;
import _mod5386 from "module_5386" /* 5386 */;

let closure_2 = {};

export function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5386;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
