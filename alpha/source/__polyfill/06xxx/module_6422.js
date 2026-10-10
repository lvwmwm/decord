// Module ID: 6422
// Function ID: 6423
// Dependencies: [6402, 6417, 6393]
// Exports: useFlingGesture

// Module 6422
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6402 */;
import _mod6417 from "module_6417" /* 6417 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6417;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
