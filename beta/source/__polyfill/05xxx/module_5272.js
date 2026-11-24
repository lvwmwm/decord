// Module ID: 5272
// Function ID: 5273
// Dependencies: [5244, 5261, 5235]
// Exports: useManualGesture

// Module 5272
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import _mod5244 from "module_5244" /* 5244 */;
import _mod5261 from "module_5261" /* 5261 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5244;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5261;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
