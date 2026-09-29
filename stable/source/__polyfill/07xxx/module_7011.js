// Module ID: 7011
// Function ID: 7012
// Dependencies: [6997, 7012, 6988]
// Exports: useTapGesture

// Module 7011
import ComposedGestureName from "ComposedGestureName" /* 6988 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6997 */;
import _mod7012 from "module_7012" /* 7012 */;

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
  return _mod7012.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
