// Module ID: 5415
// Function ID: 5416
// Dependencies: [5401, 5416, 5392]
// Exports: useTapGesture

// Module 5415
import ComposedGestureName from "ComposedGestureName" /* 5392 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5401 */;
import _mod5416 from "module_5416" /* 5416 */;

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
  const obj2 = _mod5416;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
