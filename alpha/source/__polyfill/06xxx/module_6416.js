// Module ID: 6416
// Function ID: 6417
// Dependencies: [6402, 6417, 6393]
// Exports: useTapGesture

// Module 6416
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6402 */;
import _mod6417 from "module_6417" /* 6417 */;

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
  const obj2 = _mod6417;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
