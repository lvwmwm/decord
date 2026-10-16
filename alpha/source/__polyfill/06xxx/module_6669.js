// Module ID: 6669
// Function ID: 6670
// Dependencies: [6667, 6618]
// Exports: useSimultaneousGestures

// Module 6669
import ComposedGestureName from "ComposedGestureName" /* 6618 */;
import _mod6667 from "module_6667" /* 6667 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6667.useComposedGesture;
  _mod6667;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
