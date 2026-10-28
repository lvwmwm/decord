// Module ID: 5417
// Function ID: 5418
// Dependencies: [5397, 5412, 5388]
// Exports: useFlingGesture

// Module 5417
import ComposedGestureName from "ComposedGestureName" /* 5388 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5397 */;
import _mod5412 from "module_5412" /* 5412 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5412;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
