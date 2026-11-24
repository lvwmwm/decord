// Module ID: 5267
// Function ID: 5268
// Dependencies: [5244, 5261, 5235]
// Exports: useFlingGesture

// Module 5267
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import _mod5244 from "module_5244" /* 5244 */;
import _mod5261 from "module_5261" /* 5261 */;

let closure_2 = {};

export function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5244;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5261;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
