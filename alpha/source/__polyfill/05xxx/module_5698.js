// Module ID: 5698
// Function ID: 5699
// Dependencies: [5669, 5686, 5660]
// Exports: useNativeGesture

// Module 5698
import ComposedGestureName from "ComposedGestureName" /* 5660 */;
import _mod5669 from "module_5669" /* 5669 */;
import _mod5686 from "module_5686" /* 5686 */;

let closure_2 = {};

export function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5669;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5686;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
