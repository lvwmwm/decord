// Module ID: 6639
// Function ID: 6640
// Dependencies: [6625, 6640, 6616]
// Exports: useTapGesture

// Module 6639
import ComposedGestureName from "ComposedGestureName" /* 6616 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6625 */;
import _mod6640 from "module_6640" /* 6640 */;

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
  const obj2 = _mod6640;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
