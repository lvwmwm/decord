// Module ID: 6666
// Function ID: 6667
// Dependencies: [6667, 6618]
// Exports: useCompetingGestures

// Module 6666
import ComposedGestureName from "ComposedGestureName" /* 6618 */;
import _mod6667 from "module_6667" /* 6667 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6667.useComposedGesture;
  _mod6667;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
