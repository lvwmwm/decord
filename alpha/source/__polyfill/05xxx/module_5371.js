// Module ID: 5371
// Function ID: 5372
// Dependencies: [5343, 5360, 5334]
// Exports: useManualGesture

// Module 5371
import ComposedGestureName from "ComposedGestureName" /* 5334 */;
import _mod5343 from "module_5343" /* 5343 */;
import _mod5360 from "module_5360" /* 5360 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5343;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5360;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
