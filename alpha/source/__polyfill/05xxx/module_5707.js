// Module ID: 5707
// Function ID: 5708
// Dependencies: [5708, 5654]
// Exports: useCompetingGestures

// Module 5707
import ComposedGestureName from "ComposedGestureName" /* 5654 */;
import _mod5708 from "module_5708" /* 5708 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5708.useComposedGesture;
  _mod5708;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
