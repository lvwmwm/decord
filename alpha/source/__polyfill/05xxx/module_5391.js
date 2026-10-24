// Module ID: 5391
// Function ID: 5392
// Dependencies: [5365, 5380, 5356]
// Exports: useNativeGesture

// Module 5391
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5365 */;
import _mod5380 from "module_5380" /* 5380 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5380;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
