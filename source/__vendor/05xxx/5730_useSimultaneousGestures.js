// Module ID: 5730
// Function ID: 5731
// Name: useSimultaneousGestures
// Dependencies: [5728, 5679]

// Module 5730 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 5679 */;
import useComposedGesture from "useComposedGesture" /* 5728 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
