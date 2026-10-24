// Module ID: 5385
// Function ID: 5386
// Dependencies: [5365, 5380, 5356]
// Exports: useFlingGesture

// Module 5385
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5365 */;
import _mod5380 from "module_5380" /* 5380 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5380;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
