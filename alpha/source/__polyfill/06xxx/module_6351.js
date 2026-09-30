// Module ID: 6351
// Function ID: 6352
// Dependencies: [6337, 6352, 6328]
// Exports: useTapGesture

// Module 6351
import ComposedGestureName from "ComposedGestureName" /* 6328 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6337 */;
import _mod6352 from "module_6352" /* 6352 */;

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
  return _mod6352.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
