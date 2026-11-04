// Module ID: 5546
// Function ID: 5547
// Dependencies: [5544, 5490]
// Exports: useSimultaneousGestures

// Module 5546
import ComposedGestureName from "ComposedGestureName" /* 5490 */;
import _mod5544 from "module_5544" /* 5544 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5544.useComposedGesture;
  _mod5544;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
