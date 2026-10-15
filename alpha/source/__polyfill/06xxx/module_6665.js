// Module ID: 6665
// Function ID: 6666
// Dependencies: [6663, 6614]
// Exports: useSimultaneousGestures

// Module 6665
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import _mod6663 from "module_6663" /* 6663 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6663.useComposedGesture;
  _mod6663;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
