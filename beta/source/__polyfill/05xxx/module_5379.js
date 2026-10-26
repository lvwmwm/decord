// Module ID: 5379
// Function ID: 5380
// Dependencies: [5365, 5380, 5356]
// Exports: useTapGesture

// Module 5379
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5365 */;
import _mod5380 from "module_5380" /* 5380 */;

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
  const obj2 = _mod5380;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
