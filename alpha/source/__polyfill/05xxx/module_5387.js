// Module ID: 5387
// Function ID: 5388
// Dependencies: [5388, 5334]
// Exports: useCompetingGestures

// Module 5387
import ComposedGestureName from "ComposedGestureName" /* 5334 */;
import _mod5388 from "module_5388" /* 5388 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5388.useComposedGesture;
  _mod5388;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
