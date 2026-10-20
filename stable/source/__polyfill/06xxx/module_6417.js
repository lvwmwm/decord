// Module ID: 6417
// Function ID: 6418
// Dependencies: [6403, 6418, 6394]
// Exports: useTapGesture

// Module 6417
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6403 */;
import _mod6418 from "module_6418" /* 6418 */;

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
  const obj2 = _mod6418;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
