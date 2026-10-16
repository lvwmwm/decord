// Module ID: 6664
// Function ID: 6665
// Dependencies: [6665, 6616]
// Exports: useCompetingGestures

// Module 6664
import ComposedGestureName from "ComposedGestureName" /* 6616 */;
import _mod6665 from "module_6665" /* 6665 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6665.useComposedGesture;
  _mod6665;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
