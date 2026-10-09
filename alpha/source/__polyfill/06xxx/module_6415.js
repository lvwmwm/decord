// Module ID: 6415
// Function ID: 6416
// Dependencies: [6401, 6416, 6392]
// Exports: useTapGesture

// Module 6415
import ComposedGestureName from "ComposedGestureName" /* 6392 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6401 */;
import _mod6416 from "module_6416" /* 6416 */;

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
  const obj2 = _mod6416;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
