// Module ID: 5535
// Function ID: 5536
// Dependencies: [5536, 5482]
// Exports: useCompetingGestures

// Module 5535
import ComposedGestureName from "ComposedGestureName" /* 5482 */;
import _mod5536 from "module_5536" /* 5536 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5536.useComposedGesture;
  _mod5536;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
