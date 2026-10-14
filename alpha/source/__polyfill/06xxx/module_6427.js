// Module ID: 6427
// Function ID: 6428
// Dependencies: [6407, 6422, 6398]
// Exports: useFlingGesture

// Module 6427
import ComposedGestureName from "ComposedGestureName" /* 6398 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6407 */;
import _mod6422 from "module_6422" /* 6422 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6422;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
