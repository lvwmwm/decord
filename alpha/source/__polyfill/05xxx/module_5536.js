// Module ID: 5536
// Function ID: 5537
// Dependencies: [5534, 5485]
// Exports: useSimultaneousGestures

// Module 5536
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import _mod5534 from "module_5534" /* 5534 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5534.useComposedGesture;
  _mod5534;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
