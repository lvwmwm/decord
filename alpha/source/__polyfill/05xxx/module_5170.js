// Module ID: 5170
// Function ID: 5171
// Dependencies: [5168, 5114]
// Exports: useSimultaneousGestures

// Module 5170
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import _mod5168 from "module_5168" /* 5168 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5168.useComposedGesture;
  _mod5168;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
