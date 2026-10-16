// Module ID: 6667
// Function ID: 6668
// Dependencies: [6665, 6616]
// Exports: useSimultaneousGestures

// Module 6667
import ComposedGestureName from "ComposedGestureName" /* 6616 */;
import _mod6665 from "module_6665" /* 6665 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6665.useComposedGesture;
  _mod6665;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
