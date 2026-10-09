// Module ID: 6421
// Function ID: 6422
// Dependencies: [6401, 6416, 6392]
// Exports: useFlingGesture

// Module 6421
import ComposedGestureName from "ComposedGestureName" /* 6392 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6401 */;
import _mod6416 from "module_6416" /* 6416 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6416;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
