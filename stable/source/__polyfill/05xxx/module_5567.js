// Module ID: 5567
// Function ID: 5568
// Dependencies: [5568, 5514]
// Exports: useCompetingGestures

// Module 5567
import ComposedGestureName from "ComposedGestureName" /* 5514 */;
import _mod5568 from "module_5568" /* 5568 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5568.useComposedGesture;
  _mod5568;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
