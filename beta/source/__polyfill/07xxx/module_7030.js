// Module ID: 7030
// Function ID: 7031
// Dependencies: [7031, 6982]
// Exports: useCompetingGestures

// Module 7030
import ComposedGestureName from "ComposedGestureName" /* 6982 */;
import _mod7031 from "module_7031" /* 7031 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod7031.useComposedGesture.apply(items1);
};
