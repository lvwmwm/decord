// Module ID: 6440
// Function ID: 6441
// Dependencies: [6441, 6392]
// Exports: useCompetingGestures

// Module 6440
import ComposedGestureName from "ComposedGestureName" /* 6392 */;
import _mod6441 from "module_6441" /* 6441 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6441.useComposedGesture;
  _mod6441;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
