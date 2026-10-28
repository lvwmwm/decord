// Module ID: 5426
// Function ID: 5427
// Dependencies: [5401, 5416, 5392]
// Exports: useManualGesture

// Module 5426
import ComposedGestureName from "ComposedGestureName" /* 5392 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5401 */;
import _mod5416 from "module_5416" /* 5416 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5416;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
