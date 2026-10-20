// Module ID: 5368
// Function ID: 5369
// Dependencies: [5366, 5317]
// Exports: useSimultaneousGestures

// Module 5368
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import _mod5366 from "module_5366" /* 5366 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5366.useComposedGesture;
  _mod5366;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
