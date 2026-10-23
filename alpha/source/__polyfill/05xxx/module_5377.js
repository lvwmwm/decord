// Module ID: 5377
// Function ID: 5378
// Dependencies: [5363, 5378, 5354]
// Exports: useTapGesture

// Module 5377
import ComposedGestureName from "ComposedGestureName" /* 5354 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5363 */;
import _mod5378 from "module_5378" /* 5378 */;

const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_3;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map);
  const obj2 = _mod5378;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
