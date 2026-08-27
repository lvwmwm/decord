// Module ID: 5714
// Function ID: 5715
// Name: useSimultaneousGestures
// Dependencies: [5712, 5663]

// Module 5714 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 5663 */;
import useComposedGesture from "useComposedGesture" /* 5712 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
