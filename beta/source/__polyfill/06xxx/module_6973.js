// Module ID: 6973
// Function ID: 6974
// Dependencies: [6959, 6974, 6950]
// Exports: useTapGesture

// Module 6973
import ComposedGestureName from "ComposedGestureName" /* 6950 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6959 */;
import _mod6974 from "module_6974" /* 6974 */;

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
  return _mod6974.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
