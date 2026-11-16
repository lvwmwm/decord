// Module ID: 5552
// Function ID: 5553
// Dependencies: [5523, 5540, 5514]
// Exports: useNativeGesture

// Module 5552
import ComposedGestureName from "ComposedGestureName" /* 5514 */;
import _mod5523 from "module_5523" /* 5523 */;
import _mod5540 from "module_5540" /* 5540 */;

let closure_2 = {};

export function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5523;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5540;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
