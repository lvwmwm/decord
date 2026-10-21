// Module ID: 5386
// Function ID: 5387
// Dependencies: [5387, 5338]
// Exports: useCompetingGestures

// Module 5386
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import _mod5387 from "module_5387" /* 5387 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5387.useComposedGesture;
  _mod5387;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
