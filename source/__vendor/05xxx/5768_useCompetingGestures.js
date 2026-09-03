// Module ID: 5768
// Function ID: 5769
// Name: useCompetingGestures
// Dependencies: [5769, 5720]

// Module 5768 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 5720 */;
import useComposedGesture from "useComposedGesture" /* 5769 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
