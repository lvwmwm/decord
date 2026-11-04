// Module ID: 5410
// Function ID: 5411
// Dependencies: [5411, 5362]
// Exports: useCompetingGestures

// Module 5410
import ComposedGestureName from "ComposedGestureName" /* 5362 */;
import _mod5411 from "module_5411" /* 5411 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5411.useComposedGesture;
  _mod5411;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
