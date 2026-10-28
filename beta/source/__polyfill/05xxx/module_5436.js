// Module ID: 5436
// Function ID: 5437
// Dependencies: [5437, 5388]
// Exports: useCompetingGestures

// Module 5436
import ComposedGestureName from "ComposedGestureName" /* 5388 */;
import _mod5437 from "module_5437" /* 5437 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5437.useComposedGesture;
  _mod5437;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
