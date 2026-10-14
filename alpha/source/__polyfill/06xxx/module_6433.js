// Module ID: 6433
// Function ID: 6434
// Dependencies: [6407, 6422, 6398]
// Exports: useNativeGesture

// Module 6433
import ComposedGestureName from "ComposedGestureName" /* 6398 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6407 */;
import _mod6422 from "module_6422" /* 6422 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6422;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
