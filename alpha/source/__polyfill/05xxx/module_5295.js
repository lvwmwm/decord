// Module ID: 5295
// Function ID: 5296
// Dependencies: [5293, 5239]
// Exports: useSimultaneousGestures

// Module 5295
import ComposedGestureName from "ComposedGestureName" /* 5239 */;
import _mod5293 from "module_5293" /* 5293 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5293.useComposedGesture;
  _mod5293;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
