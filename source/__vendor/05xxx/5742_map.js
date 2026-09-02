// Module ID: 5742
// Function ID: 5743
// Name: map
// Dependencies: [5728, 5743, 5719]

// Module 5742 (map)
import ComposedGestureName from "ComposedGestureName" /* 5719 */;
import isGestureEnabled from "isGestureEnabled" /* 5728 */;
import useGesture from "useGesture" /* 5743 */;

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
