// Module ID: 5538
// Function ID: 5539
// Dependencies: [5536, 5482]
// Exports: useSimultaneousGestures

// Module 5538
import ComposedGestureName from "ComposedGestureName" /* 5482 */;
import _mod5536 from "module_5536" /* 5536 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5536.useComposedGesture;
  _mod5536;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
