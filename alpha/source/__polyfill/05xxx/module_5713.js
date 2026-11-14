// Module ID: 5713
// Function ID: 5714
// Dependencies: [5714, 5660]
// Exports: useCompetingGestures

// Module 5713
import ComposedGestureName from "ComposedGestureName" /* 5660 */;
import _mod5714 from "module_5714" /* 5714 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5714.useComposedGesture;
  _mod5714;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
