// Module ID: 5418
// Function ID: 5419
// Dependencies: [5419, 5365]
// Exports: useCompetingGestures

// Module 5418
import ComposedGestureName from "ComposedGestureName" /* 5365 */;
import _mod5419 from "module_5419" /* 5419 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5419.useComposedGesture;
  _mod5419;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
