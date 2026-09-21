// Module ID: 6998
// Function ID: 6999
// Dependencies: [6999, 6950]
// Exports: useCompetingGestures

// Module 6998
import ComposedGestureName from "ComposedGestureName" /* 6950 */;
import _mod6999 from "module_6999" /* 6999 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod6999.useComposedGesture.apply(items1);
};
