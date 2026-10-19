// Module ID: 6694
// Function ID: 6695
// Dependencies: [6680, 6695, 6671]
// Exports: useTapGesture

// Module 6694
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6680 */;
import _mod6695 from "module_6695" /* 6695 */;

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
  const obj2 = _mod6695;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
