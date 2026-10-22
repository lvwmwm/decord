// Module ID: 5393
// Function ID: 5394
// Dependencies: [5391, 5342]
// Exports: useSimultaneousGestures

// Module 5393
import ComposedGestureName from "ComposedGestureName" /* 5342 */;
import _mod5391 from "module_5391" /* 5391 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5391.useComposedGesture;
  _mod5391;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
