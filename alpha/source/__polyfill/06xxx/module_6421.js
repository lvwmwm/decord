// Module ID: 6421
// Function ID: 6422
// Dependencies: [6407, 6422, 6398]
// Exports: useTapGesture

// Module 6421
import ComposedGestureName from "ComposedGestureName" /* 6398 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6407 */;
import _mod6422 from "module_6422" /* 6422 */;

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
  const obj2 = _mod6422;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
