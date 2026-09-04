// Module ID: 6683
// Function ID: 6684
// Name: useFlingGesture
// Dependencies: [6663, 6678, 6654]

// Module 6683 (useFlingGesture)
import ComposedGestureName from "ComposedGestureName" /* 6654 */;
import isGestureEnabled from "isGestureEnabled" /* 6663 */;
import useGesture from "useGesture" /* 6678 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
