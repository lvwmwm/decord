// Module ID: 5390
// Function ID: 5391
// Dependencies: [5388, 5334]
// Exports: useSimultaneousGestures

// Module 5390
import ComposedGestureName from "ComposedGestureName" /* 5334 */;
import _mod5388 from "module_5388" /* 5388 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5388.useComposedGesture;
  _mod5388;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
