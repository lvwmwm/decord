// Module ID: 5411
// Function ID: 5412
// Dependencies: [5397, 5412, 5388]
// Exports: useTapGesture

// Module 5411
import ComposedGestureName from "ComposedGestureName" /* 5388 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5397 */;
import _mod5412 from "module_5412" /* 5412 */;

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
  const obj2 = _mod5412;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
