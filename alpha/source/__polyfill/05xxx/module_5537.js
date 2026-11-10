// Module ID: 5537
// Function ID: 5538
// Dependencies: [5538, 5484]
// Exports: useCompetingGestures

// Module 5537
import ComposedGestureName from "ComposedGestureName" /* 5484 */;
import _mod5538 from "module_5538" /* 5538 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5538.useComposedGesture;
  _mod5538;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
