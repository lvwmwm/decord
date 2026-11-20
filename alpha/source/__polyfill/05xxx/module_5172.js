// Module ID: 5172
// Function ID: 5173
// Dependencies: [5170, 5116]
// Exports: useSimultaneousGestures

// Module 5172
import ComposedGestureName from "ComposedGestureName" /* 5116 */;
import _mod5170 from "module_5170" /* 5170 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5170.useComposedGesture;
  _mod5170;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
