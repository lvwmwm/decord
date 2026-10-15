// Module ID: 6648
// Function ID: 6649
// Dependencies: [6623, 6638, 6614]
// Exports: useManualGesture

// Module 6648
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6623 */;
import _mod6638 from "module_6638" /* 6638 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6638;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
