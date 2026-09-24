// Module ID: 7092
// Function ID: 7093
// Dependencies: [7093, 7044]
// Exports: useCompetingGestures

// Module 7092
import ComposedGestureName from "ComposedGestureName" /* 7044 */;
import _mod7093 from "module_7093" /* 7093 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod7093.useComposedGesture.apply(items1);
};
