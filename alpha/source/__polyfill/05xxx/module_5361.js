// Module ID: 5361
// Function ID: 5362
// Dependencies: [5347, 5362, 5338]
// Exports: useTapGesture

// Module 5361
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5347 */;
import _mod5362 from "module_5362" /* 5362 */;

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
  const obj2 = _mod5362;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
