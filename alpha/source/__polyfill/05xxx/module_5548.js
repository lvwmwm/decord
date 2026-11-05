// Module ID: 5548
// Function ID: 5549
// Dependencies: [5546, 5492]
// Exports: useSimultaneousGestures

// Module 5548
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import _mod5546 from "module_5546" /* 5546 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5546.useComposedGesture;
  _mod5546;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
