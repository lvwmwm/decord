// Module ID: 6428
// Function ID: 6429
// Dependencies: [6403, 6418, 6394]
// Exports: useManualGesture

// Module 6428
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6403 */;
import _mod6418 from "module_6418" /* 6418 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6418;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
