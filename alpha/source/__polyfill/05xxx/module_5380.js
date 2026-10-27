// Module ID: 5380
// Function ID: 5381
// Dependencies: [5366, 5381, 5357]
// Exports: useTapGesture

// Module 5380
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5366 */;
import _mod5381 from "module_5381" /* 5381 */;

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
  const obj2 = _mod5381;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
