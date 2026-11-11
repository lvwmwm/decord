// Module ID: 5652
// Function ID: 5653
// Dependencies: [5651, 5597]
// Exports: useExclusiveGestures

// Module 5652
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import _mod5651 from "module_5651" /* 5651 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5651.useComposedGesture;
  _mod5651;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
