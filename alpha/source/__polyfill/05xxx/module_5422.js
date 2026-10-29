// Module ID: 5422
// Function ID: 5423
// Dependencies: [5402, 5417, 5393]
// Exports: useFlingGesture

// Module 5422
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5402 */;
import _mod5417 from "module_5417" /* 5417 */;

let closure_2 = {};

export function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5417;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}
