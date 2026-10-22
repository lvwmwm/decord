// Module ID: 5365
// Function ID: 5366
// Dependencies: [5351, 5366, 5342]
// Exports: useTapGesture

// Module 5365
import ComposedGestureName from "ComposedGestureName" /* 5342 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5351 */;
import _mod5366 from "module_5366" /* 5366 */;

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
  const obj2 = _mod5366;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
