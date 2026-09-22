// Module ID: 6838
// Function ID: 6839
// Dependencies: [6824, 6839, 6815]
// Exports: useTapGesture

// Module 6838
import ComposedGestureName from "ComposedGestureName" /* 6815 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6824 */;
import _mod6839 from "module_6839" /* 6839 */;

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
  return _mod6839.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
