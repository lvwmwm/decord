// Module ID: 5545
// Function ID: 5546
// Dependencies: [5546, 5492]
// Exports: useCompetingGestures

// Module 5545
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import _mod5546 from "module_5546" /* 5546 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5546.useComposedGesture;
  _mod5546;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
