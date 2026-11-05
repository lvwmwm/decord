// Module ID: 5529
// Function ID: 5530
// Dependencies: [5501, 5518, 5492]
// Exports: useManualGesture

// Module 5529
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import _mod5501 from "module_5501" /* 5501 */;
import _mod5518 from "module_5518" /* 5518 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5501;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5518;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
