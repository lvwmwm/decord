// Module ID: 5688
// Function ID: 5689
// Dependencies: [5659, 5676, 5650]
// Exports: useNativeGesture

// Module 5688
import ComposedGestureName from "ComposedGestureName" /* 5650 */;
import _mod5659 from "module_5659" /* 5659 */;
import _mod5676 from "module_5676" /* 5676 */;

let closure_2 = {};

export function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5659;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5676;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
