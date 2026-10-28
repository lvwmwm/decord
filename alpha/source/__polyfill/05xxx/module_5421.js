// Module ID: 5421
// Function ID: 5422
// Dependencies: [5401, 5416, 5392]
// Exports: useFlingGesture

// Module 5421
import ComposedGestureName from "ComposedGestureName" /* 5392 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5401 */;
import _mod5416 from "module_5416" /* 5416 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5416;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
