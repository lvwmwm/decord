// Module ID: 5709
// Function ID: 5710
// Name: useSimultaneousGestures
// Dependencies: [5707, 5658]

// Module 5709 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 5658 */;
import useComposedGesture from "useComposedGesture" /* 5707 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
