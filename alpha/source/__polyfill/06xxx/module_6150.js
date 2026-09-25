// Module ID: 6150
// Function ID: 6151
// Dependencies: [6136, 6151, 6127]
// Exports: useTapGesture

// Module 6150
import ComposedGestureName from "ComposedGestureName" /* 6127 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6136 */;
import _mod6151 from "module_6151" /* 6151 */;

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
  return _mod6151.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
