// Module ID: 6436
// Function ID: 6437
// Dependencies: [6434, 6385]
// Exports: useSimultaneousGestures

// Module 6436
import ComposedGestureName from "ComposedGestureName" /* 6385 */;
import _mod6434 from "module_6434" /* 6434 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6434.useComposedGesture;
  _mod6434;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
