// Module ID: 5277
// Function ID: 5278
// Dependencies: [5248, 5265, 5239]
// Exports: useNativeGesture

// Module 5277
import ComposedGestureName from "ComposedGestureName" /* 5239 */;
import _mod5248 from "module_5248" /* 5248 */;
import _mod5265 from "module_5265" /* 5265 */;

let closure_2 = {};

export function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5248;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5265;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
