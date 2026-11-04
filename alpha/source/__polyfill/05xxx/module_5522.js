// Module ID: 5522
// Function ID: 5523
// Dependencies: [5499, 5516, 5490]
// Exports: useFlingGesture

// Module 5522
import ComposedGestureName from "ComposedGestureName" /* 5490 */;
import _mod5499 from "module_5499" /* 5499 */;
import _mod5516 from "module_5516" /* 5516 */;

let closure_2 = {};

export function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5499;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5516;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
