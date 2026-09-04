// Module ID: 6677
// Function ID: 6678
// Name: map
// Dependencies: [6663, 6678, 6654]

// Module 6677 (map)
import ComposedGestureName from "ComposedGestureName" /* 6654 */;
import isGestureEnabled from "isGestureEnabled" /* 6663 */;
import useGesture from "useGesture" /* 6678 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};
arg5.useTapGesture = function useTapGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp, map);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
