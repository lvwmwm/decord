// Module ID: 6737
// Function ID: 6738
// Name: map
// Dependencies: [6723, 6738, 6714]

// Module 6737 (map)
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import isGestureEnabled from "isGestureEnabled" /* 6723 */;
import useGesture from "useGesture" /* 6738 */;

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
