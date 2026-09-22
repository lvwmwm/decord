// Module ID: 6863
// Function ID: 6864
// Dependencies: [6864, 6815]
// Exports: useCompetingGestures

// Module 6863
import ComposedGestureName from "ComposedGestureName" /* 6815 */;
import _mod6864 from "module_6864" /* 6864 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6864.useComposedGesture.apply(items1);
};
