// Module ID: 5292
// Function ID: 5293
// Dependencies: [5293, 5239]
// Exports: useCompetingGestures

// Module 5292
import ComposedGestureName from "ComposedGestureName" /* 5239 */;
import _mod5293 from "module_5293" /* 5293 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5293.useComposedGesture;
  _mod5293;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
