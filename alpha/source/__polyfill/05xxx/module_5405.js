// Module ID: 5405
// Function ID: 5406
// Dependencies: [5406, 5357]
// Exports: useCompetingGestures

// Module 5405
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import _mod5406 from "module_5406" /* 5406 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5406.useComposedGesture;
  _mod5406;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
