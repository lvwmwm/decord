// Module ID: 6641
// Function ID: 6642
// Dependencies: [6627, 6642, 6618]
// Exports: useTapGesture

// Module 6641
import ComposedGestureName from "ComposedGestureName" /* 6618 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6627 */;
import _mod6642 from "module_6642" /* 6642 */;

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
  const obj2 = _mod6642;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
