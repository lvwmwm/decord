// Module ID: 5422
// Function ID: 5423
// Dependencies: [5397, 5412, 5388]
// Exports: useManualGesture

// Module 5422
import ComposedGestureName from "ComposedGestureName" /* 5388 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5397 */;
import _mod5412 from "module_5412" /* 5412 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5412;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
