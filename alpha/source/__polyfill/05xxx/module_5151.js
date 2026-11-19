// Module ID: 5151
// Function ID: 5152
// Dependencies: [5123, 5140, 5114]
// Exports: useManualGesture

// Module 5151
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import _mod5123 from "module_5123" /* 5123 */;
import _mod5140 from "module_5140" /* 5140 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5123;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5140;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
