// Module ID: 6688
// Function ID: 6689
// Name: useManualGesture
// Dependencies: [6663, 6678, 6654]

// Module 6688 (useManualGesture)
import ComposedGestureName from "ComposedGestureName" /* 6654 */;
import isGestureEnabled from "isGestureEnabled" /* 6663 */;
import useGesture from "useGesture" /* 6678 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
