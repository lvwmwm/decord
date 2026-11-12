// Module ID: 5569
// Function ID: 5570
// Dependencies: [5568, 5514]
// Exports: useExclusiveGestures

// Module 5569
import ComposedGestureName from "ComposedGestureName" /* 5514 */;
import _mod5568 from "module_5568" /* 5568 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5568.useComposedGesture;
  _mod5568;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
