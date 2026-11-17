// Module ID: 5691
// Function ID: 5692
// Dependencies: [5663, 5680, 5654]
// Exports: useManualGesture

// Module 5691
import ComposedGestureName from "ComposedGestureName" /* 5654 */;
import _mod5663 from "module_5663" /* 5663 */;
import _mod5680 from "module_5680" /* 5680 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5663;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5680;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
