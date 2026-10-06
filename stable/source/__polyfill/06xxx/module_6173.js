// Module ID: 6173
// Function ID: 6174
// Dependencies: [6174, 6125]
// Exports: useCompetingGestures

// Module 6173
import ComposedGestureName from "ComposedGestureName" /* 6125 */;
import _mod6174 from "module_6174" /* 6174 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6174.useComposedGesture;
  _mod6174;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
