// Module ID: 6653
// Function ID: 6654
// Dependencies: [6627, 6642, 6618]
// Exports: useNativeGesture

// Module 6653
import ComposedGestureName from "ComposedGestureName" /* 6618 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6627 */;
import _mod6642 from "module_6642" /* 6642 */;

let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6642;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
