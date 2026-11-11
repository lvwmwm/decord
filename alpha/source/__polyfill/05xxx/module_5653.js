// Module ID: 5653
// Function ID: 5654
// Dependencies: [5651, 5597]
// Exports: useSimultaneousGestures

// Module 5653
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import _mod5651 from "module_5651" /* 5651 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5651.useComposedGesture;
  _mod5651;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
