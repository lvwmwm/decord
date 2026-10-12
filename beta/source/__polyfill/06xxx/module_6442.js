// Module ID: 6442
// Function ID: 6443
// Dependencies: [6443, 6394]
// Exports: useCompetingGestures

// Module 6442
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import _mod6443 from "module_6443" /* 6443 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6443.useComposedGesture;
  _mod6443;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
