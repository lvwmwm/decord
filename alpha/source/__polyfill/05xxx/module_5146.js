// Module ID: 5146
// Function ID: 5147
// Dependencies: [5123, 5140, 5114]
// Exports: useFlingGesture

// Module 5146
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import _mod5123 from "module_5123" /* 5123 */;
import _mod5140 from "module_5140" /* 5140 */;

let closure_2 = {};

export function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5123;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5140;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
