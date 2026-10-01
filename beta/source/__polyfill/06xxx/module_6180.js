// Module ID: 6180
// Function ID: 6181
// Dependencies: [6181, 6132]
// Exports: useCompetingGestures

// Module 6180
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import _mod6181 from "module_6181" /* 6181 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6181.useComposedGesture;
  _mod6181;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
