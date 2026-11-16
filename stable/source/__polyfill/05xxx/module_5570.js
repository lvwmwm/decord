// Module ID: 5570
// Function ID: 5571
// Dependencies: [5568, 5514]
// Exports: useSimultaneousGestures

// Module 5570
import ComposedGestureName from "ComposedGestureName" /* 5514 */;
import _mod5568 from "module_5568" /* 5568 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5568.useComposedGesture;
  _mod5568;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
