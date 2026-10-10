// Module ID: 6441
// Function ID: 6442
// Dependencies: [6442, 6393]
// Exports: useCompetingGestures

// Module 6441
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import _mod6442 from "module_6442" /* 6442 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6442.useComposedGesture;
  _mod6442;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
