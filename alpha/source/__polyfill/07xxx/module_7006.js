// Module ID: 7006
// Function ID: 7007
// Dependencies: [7007, 6958]
// Exports: useCompetingGestures

// Module 7006
import ComposedGestureName from "ComposedGestureName" /* 6958 */;
import _mod7007 from "module_7007" /* 7007 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod7007.useComposedGesture.apply(items1);
};
