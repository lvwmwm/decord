// Module ID: 6449
// Function ID: 6450
// Dependencies: [6447, 6398]
// Exports: useSimultaneousGestures

// Module 6449
import ComposedGestureName from "ComposedGestureName" /* 6398 */;
import _mod6447 from "module_6447" /* 6447 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6447.useComposedGesture;
  _mod6447;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
