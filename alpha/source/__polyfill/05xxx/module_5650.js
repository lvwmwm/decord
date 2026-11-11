// Module ID: 5650
// Function ID: 5651
// Dependencies: [5651, 5597]
// Exports: useCompetingGestures

// Module 5650
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import _mod5651 from "module_5651" /* 5651 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5651.useComposedGesture;
  _mod5651;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
