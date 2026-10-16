// Module ID: 6650
// Function ID: 6651
// Dependencies: [6625, 6640, 6616]
// Exports: useManualGesture

// Module 6650
import ComposedGestureName from "ComposedGestureName" /* 6616 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6625 */;
import _mod6640 from "module_6640" /* 6640 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6640;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
