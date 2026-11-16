// Module ID: 5703
// Function ID: 5704
// Dependencies: [5704, 5650]
// Exports: useCompetingGestures

// Module 5703
import ComposedGestureName from "ComposedGestureName" /* 5650 */;
import _mod5704 from "module_5704" /* 5704 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5704.useComposedGesture;
  _mod5704;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
