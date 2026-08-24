// Module ID: 6515
// Function ID: 6516
// Name: useCompetingGestures
// Dependencies: [6516, 6467]

// Module 6515 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 6467 */;
import useComposedGesture from "useComposedGesture" /* 6516 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
