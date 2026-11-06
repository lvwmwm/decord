// Module ID: 5544
// Function ID: 5545
// Dependencies: [5521, 5538, 5512]
// Exports: useFlingGesture

// Module 5544
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import _mod5521 from "module_5521" /* 5521 */;
import _mod5538 from "module_5538" /* 5538 */;

let closure_2 = {};

export function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5521;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5538;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
