// Module ID: 5716
// Function ID: 5717
// Dependencies: [5714, 5660]
// Exports: useSimultaneousGestures

// Module 5716
import ComposedGestureName from "ComposedGestureName" /* 5660 */;
import _mod5714 from "module_5714" /* 5714 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5714.useComposedGesture;
  _mod5714;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
