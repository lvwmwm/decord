// Module ID: 5629
// Function ID: 5630
// Dependencies: [5606, 5623, 5597]
// Exports: useFlingGesture

// Module 5629
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import _mod5606 from "module_5606" /* 5606 */;
import _mod5623 from "module_5623" /* 5623 */;

let closure_2 = {};

export function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5606;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5623;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
