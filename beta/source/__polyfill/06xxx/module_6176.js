// Module ID: 6176
// Function ID: 6177
// Dependencies: [6174, 6125]
// Exports: useSimultaneousGestures

// Module 6176
import ComposedGestureName from "ComposedGestureName" /* 6125 */;
import _mod6174 from "module_6174" /* 6174 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6174.useComposedGesture;
  _mod6174;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
