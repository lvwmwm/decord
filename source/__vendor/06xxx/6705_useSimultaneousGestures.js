// Module ID: 6705
// Function ID: 6706
// Name: useSimultaneousGestures
// Dependencies: [6703, 6654]

// Module 6705 (useSimultaneousGestures)
import ComposedGestureName from "ComposedGestureName" /* 6654 */;
import useComposedGesture from "useComposedGesture" /* 6703 */;

require = arg1;
const dependencyMap = arg6;
arg5.useSimultaneousGestures = function useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture) {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
