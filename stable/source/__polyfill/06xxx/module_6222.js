// Module ID: 6222
// Function ID: 6223
// Dependencies: [6208, 6223, 6199]
// Exports: useTapGesture

// Module 6222
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6208 */;
import _mod6223 from "module_6223" /* 6223 */;

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
  const obj2 = _mod6223;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
