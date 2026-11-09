// Module ID: 5514
// Function ID: 5515
// Dependencies: [5491, 5508, 5482]
// Exports: useFlingGesture

// Module 5514
import ComposedGestureName from "ComposedGestureName" /* 5482 */;
import _mod5491 from "module_5491" /* 5491 */;
import _mod5508 from "module_5508" /* 5508 */;

let closure_2 = {};

export function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5491;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5508;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
