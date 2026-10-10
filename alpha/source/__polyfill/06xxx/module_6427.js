// Module ID: 6427
// Function ID: 6428
// Dependencies: [6402, 6417, 6393]
// Exports: useManualGesture

// Module 6427
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6402 */;
import _mod6417 from "module_6417" /* 6417 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6417;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
