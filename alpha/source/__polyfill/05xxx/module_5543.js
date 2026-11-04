// Module ID: 5543
// Function ID: 5544
// Dependencies: [5544, 5490]
// Exports: useCompetingGestures

// Module 5543
import ComposedGestureName from "ComposedGestureName" /* 5490 */;
import _mod5544 from "module_5544" /* 5544 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5544.useComposedGesture;
  _mod5544;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
