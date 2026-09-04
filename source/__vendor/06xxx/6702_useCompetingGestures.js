// Module ID: 6702
// Function ID: 6703
// Name: useCompetingGestures
// Dependencies: [6703, 6654]

// Module 6702 (useCompetingGestures)
import ComposedGestureName from "ComposedGestureName" /* 6654 */;
import useComposedGesture from "useComposedGesture" /* 6703 */;

require = arg1;
const dependencyMap = arg6;
arg5.useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.useComposedGesture.apply(items1);
};
