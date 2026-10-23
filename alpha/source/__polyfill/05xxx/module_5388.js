// Module ID: 5388
// Function ID: 5389
// Dependencies: [5363, 5378, 5354]
// Exports: useManualGesture

// Module 5388
import ComposedGestureName from "ComposedGestureName" /* 5354 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5363 */;
import _mod5378 from "module_5378" /* 5378 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5378;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
