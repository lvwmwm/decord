// Module ID: 5169
// Function ID: 5170
// Dependencies: [5168, 5114]
// Exports: useExclusiveGestures

// Module 5169
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import _mod5168 from "module_5168" /* 5168 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5168.useComposedGesture;
  _mod5168;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
