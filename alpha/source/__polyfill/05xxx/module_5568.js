// Module ID: 5568
// Function ID: 5569
// Dependencies: [5566, 5512]
// Exports: useSimultaneousGestures

// Module 5568
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import _mod5566 from "module_5566" /* 5566 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5566.useComposedGesture;
  _mod5566;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
