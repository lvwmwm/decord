// Module ID: 6722
// Function ID: 6723
// Dependencies: [6720, 6671]
// Exports: useSimultaneousGestures

// Module 6722
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import _mod6720 from "module_6720" /* 6720 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6720.useComposedGesture;
  _mod6720;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
