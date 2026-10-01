// Module ID: 6183
// Function ID: 6184
// Dependencies: [6181, 6132]
// Exports: useSimultaneousGestures

// Module 6183
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import _mod6181 from "module_6181" /* 6181 */;


export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6181.useComposedGesture;
  _mod6181;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
};
