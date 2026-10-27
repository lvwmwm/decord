// Module ID: 5392
// Function ID: 5393
// Dependencies: [5366, 5381, 5357]
// Exports: useNativeGesture

// Module 5392
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5366 */;
import _mod5381 from "module_5381" /* 5381 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5381;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
