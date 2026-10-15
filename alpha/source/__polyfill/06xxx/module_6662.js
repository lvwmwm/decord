// Module ID: 6662
// Function ID: 6663
// Dependencies: [6663, 6614]
// Exports: useCompetingGestures

// Module 6662
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import _mod6663 from "module_6663" /* 6663 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6663.useComposedGesture;
  _mod6663;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
