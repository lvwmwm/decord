// Module ID: 5403
// Function ID: 5404
// Dependencies: [5374, 5391, 5365]
// Exports: useNativeGesture

// Module 5403
import ComposedGestureName from "ComposedGestureName" /* 5365 */;
import _mod5374 from "module_5374" /* 5374 */;
import _mod5391 from "module_5391" /* 5391 */;

let closure_2 = {};

export function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5374;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5391;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
