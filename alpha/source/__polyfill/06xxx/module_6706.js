// Module ID: 6706
// Function ID: 6707
// Dependencies: [6680, 6695, 6671]
// Exports: useNativeGesture

// Module 6706
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6680 */;
import _mod6695 from "module_6695" /* 6695 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6695;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
