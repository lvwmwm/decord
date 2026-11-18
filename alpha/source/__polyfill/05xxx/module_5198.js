// Module ID: 5198
// Function ID: 5199
// Dependencies: [5199, 5145]
// Exports: useCompetingGestures

// Module 5198
import ComposedGestureName from "ComposedGestureName" /* 5145 */;
import _mod5199 from "module_5199" /* 5199 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5199.useComposedGesture;
  _mod5199;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
