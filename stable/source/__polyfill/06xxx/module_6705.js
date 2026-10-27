// Module ID: 6705
// Function ID: 6706
// Dependencies: [6680, 6695, 6671]
// Exports: useManualGesture

// Module 6705
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6680 */;
import _mod6695 from "module_6695" /* 6695 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6695;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
