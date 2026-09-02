// Module ID: 5767
// Function ID: 5768
// Name: useCompetingGestures
// Dependencies: [5768, 5719]

// Module 5767 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 5719 */;
import useComposedGesture from "useComposedGesture" /* 5768 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
