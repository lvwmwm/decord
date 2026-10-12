// Module ID: 6445
// Function ID: 6446
// Dependencies: [6443, 6394]
// Exports: useSimultaneousGestures

// Module 6445
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import _mod6443 from "module_6443" /* 6443 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6443.useComposedGesture;
  _mod6443;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
