// Module ID: 7090
// Function ID: 7091
// Dependencies: [7091, 7042]
// Exports: useCompetingGestures

// Module 7090
import ComposedGestureName from "ComposedGestureName" /* 7042 */;
import _mod7091 from "module_7091" /* 7091 */;

require = arg1;
const dependencyMap = arg6;

export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return _mod7091.useComposedGesture.apply(items1);
};
