// Module ID: 5404
// Function ID: 5405
// Dependencies: [5405, 5356]
// Exports: useCompetingGestures

// Module 5404
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import _mod5405 from "module_5405" /* 5405 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5405.useComposedGesture;
  _mod5405;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
