// Module ID: 5405
// Function ID: 5406
// Dependencies: [5403, 5354]
// Exports: useSimultaneousGestures

// Module 5405
import ComposedGestureName from "ComposedGestureName" /* 5354 */;
import _mod5403 from "module_5403" /* 5403 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5403.useComposedGesture;
  _mod5403;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
