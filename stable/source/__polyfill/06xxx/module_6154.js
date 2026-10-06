// Module ID: 6154
// Function ID: 6155
// Dependencies: [6134, 6149, 6125]
// Exports: useFlingGesture

// Module 6154
import ComposedGestureName from "ComposedGestureName" /* 6125 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6134 */;
import _mod6149 from "module_6149" /* 6149 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6149;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
