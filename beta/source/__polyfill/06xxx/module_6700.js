// Module ID: 6700
// Function ID: 6701
// Dependencies: [6680, 6695, 6671]
// Exports: useFlingGesture

// Module 6700
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6680 */;
import _mod6695 from "module_6695" /* 6695 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6695;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
