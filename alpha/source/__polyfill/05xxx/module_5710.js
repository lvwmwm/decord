// Module ID: 5710
// Function ID: 5711
// Dependencies: [5708, 5654]
// Exports: useSimultaneousGestures

// Module 5710
import ComposedGestureName from "ComposedGestureName" /* 5654 */;
import _mod5708 from "module_5708" /* 5708 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5708.useComposedGesture;
  _mod5708;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
