// Module ID: 5520
// Function ID: 5521
// Dependencies: [5494, 5509, 5485]
// Exports: useNativeGesture

// Module 5520
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import _mod5494 from "module_5494" /* 5494 */;
import _mod5509 from "module_5509" /* 5509 */;

let closure_2 = {};

export function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5494;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5509;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
