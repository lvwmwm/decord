// Module ID: 5407
// Function ID: 5408
// Dependencies: [5405, 5356]
// Exports: useSimultaneousGestures

// Module 5407
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import _mod5405 from "module_5405" /* 5405 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5405.useComposedGesture;
  _mod5405;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
