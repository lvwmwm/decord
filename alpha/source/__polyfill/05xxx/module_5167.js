// Module ID: 5167
// Function ID: 5168
// Dependencies: [5168, 5114]
// Exports: useCompetingGestures

// Module 5167
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import _mod5168 from "module_5168" /* 5168 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5168.useComposedGesture;
  _mod5168;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
