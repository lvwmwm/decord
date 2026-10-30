// Module ID: 5408
// Function ID: 5409
// Dependencies: [5406, 5357]
// Exports: useSimultaneousGestures

// Module 5408
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import _mod5406 from "module_5406" /* 5406 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5406.useComposedGesture;
  _mod5406;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
