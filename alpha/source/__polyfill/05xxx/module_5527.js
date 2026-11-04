// Module ID: 5527
// Function ID: 5528
// Dependencies: [5499, 5516, 5490]
// Exports: useManualGesture

// Module 5527
import ComposedGestureName from "ComposedGestureName" /* 5490 */;
import _mod5499 from "module_5499" /* 5499 */;
import _mod5516 from "module_5516" /* 5516 */;

let closure_2 = {};

export function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5499;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5516;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
