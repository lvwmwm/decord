// Module ID: 6235
// Function ID: 6236
// Dependencies: [6215, 6230, 6206]
// Exports: useFlingGesture

// Module 6235
import ComposedGestureName from "ComposedGestureName" /* 6206 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6215 */;
import _mod6230 from "module_6230" /* 6230 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6230;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
