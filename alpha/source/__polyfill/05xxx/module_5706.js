// Module ID: 5706
// Function ID: 5707
// Dependencies: [5704, 5650]
// Exports: useSimultaneousGestures

// Module 5706
import ComposedGestureName from "ComposedGestureName" /* 5650 */;
import _mod5704 from "module_5704" /* 5704 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5704.useComposedGesture;
  _mod5704;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
