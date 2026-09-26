// Module ID: 7036
// Function ID: 7037
// Dependencies: [7037, 6988]
// Exports: useCompetingGestures

// Module 7036
import ComposedGestureName from "ComposedGestureName" /* 6988 */;
import _mod7037 from "module_7037" /* 7037 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod7037.useComposedGesture.apply(items1);
};
