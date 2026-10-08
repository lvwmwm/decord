// Module ID: 6420
// Function ID: 6421
// Dependencies: [6394, 6409, 6385]
// Exports: useNativeGesture

// Module 6420
import ComposedGestureName from "ComposedGestureName" /* 6385 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6394 */;
import _mod6409 from "module_6409" /* 6409 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6409;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
