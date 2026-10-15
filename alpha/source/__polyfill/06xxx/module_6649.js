// Module ID: 6649
// Function ID: 6650
// Dependencies: [6623, 6638, 6614]
// Exports: useNativeGesture

// Module 6649
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6623 */;
import _mod6638 from "module_6638" /* 6638 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6638;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
