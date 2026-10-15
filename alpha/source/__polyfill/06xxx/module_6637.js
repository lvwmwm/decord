// Module ID: 6637
// Function ID: 6638
// Dependencies: [6623, 6638, 6614]
// Exports: useTapGesture

// Module 6637
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6623 */;
import _mod6638 from "module_6638" /* 6638 */;

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
  const obj2 = _mod6638;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
