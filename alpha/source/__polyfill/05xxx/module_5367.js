// Module ID: 5367
// Function ID: 5368
// Dependencies: [5347, 5362, 5338]
// Exports: useFlingGesture

// Module 5367
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5347 */;
import _mod5362 from "module_5362" /* 5362 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5362;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
