// Module ID: 6159
// Function ID: 6160
// Dependencies: [6134, 6149, 6125]
// Exports: useManualGesture

// Module 6159
import ComposedGestureName from "ComposedGestureName" /* 6125 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6134 */;
import _mod6149 from "module_6149" /* 6149 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6149;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
