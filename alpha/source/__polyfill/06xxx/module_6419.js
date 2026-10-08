// Module ID: 6419
// Function ID: 6420
// Dependencies: [6394, 6409, 6385]
// Exports: useManualGesture

// Module 6419
import ComposedGestureName from "ComposedGestureName" /* 6385 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6394 */;
import _mod6409 from "module_6409" /* 6409 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6409;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
