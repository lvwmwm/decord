// Module ID: 5390
// Function ID: 5391
// Dependencies: [5391, 5342]
// Exports: useCompetingGestures

// Module 5390
import ComposedGestureName from "ComposedGestureName" /* 5342 */;
import _mod5391 from "module_5391" /* 5391 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5391.useComposedGesture;
  _mod5391;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
