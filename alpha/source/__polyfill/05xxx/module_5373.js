// Module ID: 5373
// Function ID: 5374
// Dependencies: [5347, 5362, 5338]
// Exports: useNativeGesture

// Module 5373
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5347 */;
import _mod5362 from "module_5362" /* 5362 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5362;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
