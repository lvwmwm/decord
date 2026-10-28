// Module ID: 5439
// Function ID: 5440
// Dependencies: [5437, 5388]
// Exports: useSimultaneousGestures

// Module 5439
import ComposedGestureName from "ComposedGestureName" /* 5388 */;
import _mod5437 from "module_5437" /* 5437 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5437.useComposedGesture;
  _mod5437;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
