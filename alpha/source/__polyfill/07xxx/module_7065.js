// Module ID: 7065
// Function ID: 7066
// Dependencies: [7051, 7066, 7042]
// Exports: useTapGesture

// Module 7065
import ComposedGestureName from "ComposedGestureName" /* 7042 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 7051 */;
import _mod7066 from "module_7066" /* 7066 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod7066.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
