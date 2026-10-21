// Module ID: 5372
// Function ID: 5373
// Dependencies: [5347, 5362, 5338]
// Exports: useManualGesture

// Module 5372
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5347 */;
import _mod5362 from "module_5362" /* 5362 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5362;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
