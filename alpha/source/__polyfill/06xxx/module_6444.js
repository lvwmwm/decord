// Module ID: 6444
// Function ID: 6445
// Dependencies: [6442, 6393]
// Exports: useSimultaneousGestures

// Module 6444
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import _mod6442 from "module_6442" /* 6442 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6442.useComposedGesture;
  _mod6442;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
