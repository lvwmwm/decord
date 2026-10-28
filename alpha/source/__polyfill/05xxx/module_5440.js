// Module ID: 5440
// Function ID: 5441
// Dependencies: [5441, 5392]
// Exports: useCompetingGestures

// Module 5440
import ComposedGestureName from "ComposedGestureName" /* 5392 */;
import _mod5441 from "module_5441" /* 5441 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5441.useComposedGesture;
  _mod5441;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
