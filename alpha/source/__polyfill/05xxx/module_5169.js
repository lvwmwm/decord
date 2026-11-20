// Module ID: 5169
// Function ID: 5170
// Dependencies: [5170, 5116]
// Exports: useCompetingGestures

// Module 5169
import ComposedGestureName from "ComposedGestureName" /* 5116 */;
import _mod5170 from "module_5170" /* 5170 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5170.useComposedGesture;
  _mod5170;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
