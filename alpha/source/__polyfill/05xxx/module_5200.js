// Module ID: 5200
// Function ID: 5201
// Dependencies: [5199, 5145]
// Exports: useExclusiveGestures

// Module 5200
import ComposedGestureName from "ComposedGestureName" /* 5145 */;
import _mod5199 from "module_5199" /* 5199 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5199.useComposedGesture;
  _mod5199;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
