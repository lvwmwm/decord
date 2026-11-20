// Module ID: 5153
// Function ID: 5154
// Dependencies: [5125, 5142, 5116]
// Exports: useManualGesture

// Module 5153
import ComposedGestureName from "ComposedGestureName" /* 5116 */;
import _mod5125 from "module_5125" /* 5125 */;
import _mod5142 from "module_5142" /* 5142 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5125;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5142;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
