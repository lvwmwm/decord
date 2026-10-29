// Module ID: 5416
// Function ID: 5417
// Dependencies: [5402, 5417, 5393]
// Exports: useTapGesture

// Module 5416
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 5402 */;
import _mod5417 from "module_5417" /* 5417 */;

const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export function useTapGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_3;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp, map);
  const obj2 = _mod5417;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
