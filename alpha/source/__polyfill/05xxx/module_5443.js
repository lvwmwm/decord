// Module ID: 5443
// Function ID: 5444
// Dependencies: [5441, 5392]
// Exports: useSimultaneousGestures

// Module 5443
import ComposedGestureName from "ComposedGestureName" /* 5392 */;
import _mod5441 from "module_5441" /* 5441 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5441.useComposedGesture;
  _mod5441;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
