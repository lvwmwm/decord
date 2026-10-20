// Module ID: 5352
// Function ID: 5353
// Dependencies: [5326, 5341, 5317]
// Exports: useNativeGesture

// Module 5352
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5326 */;
import _mod5341 from "module_5341" /* 5341 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5341;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
