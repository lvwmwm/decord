// Module ID: 5565
// Function ID: 5566
// Dependencies: [5566, 5512]
// Exports: useCompetingGestures

// Module 5565
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import _mod5566 from "module_5566" /* 5566 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5566.useComposedGesture;
  _mod5566;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
