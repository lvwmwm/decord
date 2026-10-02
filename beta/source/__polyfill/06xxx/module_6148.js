// Module ID: 6148
// Function ID: 6149
// Dependencies: [6134, 6149, 6125]
// Exports: useTapGesture

// Module 6148
import ComposedGestureName from "ComposedGestureName" /* 6125 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6134 */;
import _mod6149 from "module_6149" /* 6149 */;

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
  const obj2 = _mod6149;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
