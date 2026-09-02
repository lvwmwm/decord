// Module ID: 5770
// Function ID: 5771
// Name: useSimultaneousGestures
// Dependencies: [5768, 5719]

// Module 5770 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 5719 */;
import useComposedGesture from "useComposedGesture" /* 5768 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
