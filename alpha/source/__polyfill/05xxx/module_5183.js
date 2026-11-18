// Module ID: 5183
// Function ID: 5184
// Dependencies: [5154, 5171, 5145]
// Exports: useNativeGesture

// Module 5183
import ComposedGestureName from "ComposedGestureName" /* 5145 */;
import _mod5154 from "module_5154" /* 5154 */;
import _mod5171 from "module_5171" /* 5171 */;

let closure_2 = {};

export function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5154;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5171;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
