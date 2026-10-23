// Module ID: 5383
// Function ID: 5384
// Dependencies: [5363, 5378, 5354]
// Exports: useFlingGesture

// Module 5383
import ComposedGestureName from "ComposedGestureName" /* 5354 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5363 */;
import _mod5378 from "module_5378" /* 5378 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5378;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
