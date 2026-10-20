// Module ID: 5346
// Function ID: 5347
// Dependencies: [5326, 5341, 5317]
// Exports: useFlingGesture

// Module 5346
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5326 */;
import _mod5341 from "module_5341" /* 5341 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod5341;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
