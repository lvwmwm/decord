// Module ID: 5521
// Function ID: 5522
// Dependencies: [5493, 5510, 5484]
// Exports: useManualGesture

// Module 5521
import ComposedGestureName from "ComposedGestureName" /* 5484 */;
import _mod5493 from "module_5493" /* 5493 */;
import _mod5510 from "module_5510" /* 5510 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5493;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5510;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
