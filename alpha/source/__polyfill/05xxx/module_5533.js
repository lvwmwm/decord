// Module ID: 5533
// Function ID: 5534
// Dependencies: [5534, 5485]
// Exports: useCompetingGestures

// Module 5533
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import _mod5534 from "module_5534" /* 5534 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5534.useComposedGesture;
  _mod5534;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
