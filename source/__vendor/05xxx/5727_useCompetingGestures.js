// Module ID: 5727
// Function ID: 5728
// Name: useCompetingGestures
// Dependencies: [5728, 5679]

// Module 5727 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 5679 */;
import useComposedGesture from "useComposedGesture" /* 5728 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
