// Module ID: 5397
// Function ID: 5398
// Dependencies: [5374, 5391, 5365]
// Exports: useFlingGesture

// Module 5397
import ComposedGestureName from "ComposedGestureName" /* 5365 */;
import _mod5374 from "module_5374" /* 5374 */;
import _mod5391 from "module_5391" /* 5391 */;

let closure_2 = {};

export function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const obj = _mod5374;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5391;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
