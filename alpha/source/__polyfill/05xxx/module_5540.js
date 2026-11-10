// Module ID: 5540
// Function ID: 5541
// Dependencies: [5538, 5484]
// Exports: useSimultaneousGestures

// Module 5540
import ComposedGestureName from "ComposedGestureName" /* 5484 */;
import _mod5538 from "module_5538" /* 5538 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5538.useComposedGesture;
  _mod5538;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
