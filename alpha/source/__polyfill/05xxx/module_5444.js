// Module ID: 5444
// Function ID: 5445
// Dependencies: [5442, 5393]
// Exports: useSimultaneousGestures

// Module 5444
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import _mod5442 from "module_5442" /* 5442 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5442.useComposedGesture;
  _mod5442;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
