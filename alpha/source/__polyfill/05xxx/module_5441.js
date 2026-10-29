// Module ID: 5441
// Function ID: 5442
// Dependencies: [5442, 5393]
// Exports: useCompetingGestures

// Module 5441
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import _mod5442 from "module_5442" /* 5442 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5442.useComposedGesture;
  _mod5442;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
