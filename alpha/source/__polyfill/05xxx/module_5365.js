// Module ID: 5365
// Function ID: 5366
// Dependencies: [5366, 5317]
// Exports: useCompetingGestures

// Module 5365
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import _mod5366 from "module_5366" /* 5366 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5366.useComposedGesture;
  _mod5366;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
