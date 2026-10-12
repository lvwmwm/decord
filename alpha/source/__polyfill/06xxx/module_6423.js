// Module ID: 6423
// Function ID: 6424
// Dependencies: [6403, 6418, 6394]
// Exports: useFlingGesture

// Module 6423
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6403 */;
import _mod6418 from "module_6418" /* 6418 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6418;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
