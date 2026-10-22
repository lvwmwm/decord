// Module ID: 5376
// Function ID: 5377
// Dependencies: [5351, 5366, 5342]
// Exports: useManualGesture

// Module 5376
import ComposedGestureName from "ComposedGestureName" /* 5342 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5351 */;
import _mod5366 from "module_5366" /* 5366 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5366;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
