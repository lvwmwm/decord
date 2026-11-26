// Module ID: 5421
// Function ID: 5422
// Dependencies: [5419, 5365]
// Exports: useSimultaneousGestures

// Module 5421
import ComposedGestureName from "ComposedGestureName" /* 5365 */;
import _mod5419 from "module_5419" /* 5419 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5419.useComposedGesture;
  _mod5419;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
