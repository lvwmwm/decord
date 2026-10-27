// Module ID: 6719
// Function ID: 6720
// Dependencies: [6720, 6671]
// Exports: useCompetingGestures

// Module 6719
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import _mod6720 from "module_6720" /* 6720 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6720.useComposedGesture;
  _mod6720;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
