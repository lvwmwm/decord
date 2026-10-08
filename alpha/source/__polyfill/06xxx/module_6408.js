// Module ID: 6408
// Function ID: 6409
// Dependencies: [6394, 6409, 6385]
// Exports: useTapGesture

// Module 6408
import ComposedGestureName from "ComposedGestureName" /* 6385 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6394 */;
import _mod6409 from "module_6409" /* 6409 */;

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
  const obj2 = _mod6409;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
