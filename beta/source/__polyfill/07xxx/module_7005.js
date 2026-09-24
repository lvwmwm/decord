// Module ID: 7005
// Function ID: 7006
// Dependencies: [6991, 7006, 6982]
// Exports: useTapGesture

// Module 7005
import ComposedGestureName from "ComposedGestureName" /* 6982 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6991 */;
import _mod7006 from "module_7006" /* 7006 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod7006.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
