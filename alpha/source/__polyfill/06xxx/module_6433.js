// Module ID: 6433
// Function ID: 6434
// Dependencies: [6434, 6385]
// Exports: useCompetingGestures

// Module 6433
import ComposedGestureName from "ComposedGestureName" /* 6385 */;
import _mod6434 from "module_6434" /* 6434 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6434.useComposedGesture;
  _mod6434;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
