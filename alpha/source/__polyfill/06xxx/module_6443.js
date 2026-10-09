// Module ID: 6443
// Function ID: 6444
// Dependencies: [6441, 6392]
// Exports: useSimultaneousGestures

// Module 6443
import ComposedGestureName from "ComposedGestureName" /* 6392 */;
import _mod6441 from "module_6441" /* 6441 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6441.useComposedGesture;
  _mod6441;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
