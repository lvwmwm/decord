// Module ID: 5545
// Function ID: 5546
// Dependencies: [5544, 5490]
// Exports: useExclusiveGestures

// Module 5545
import ComposedGestureName from "ComposedGestureName" /* 5490 */;
import _mod5544 from "module_5544" /* 5544 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5544.useComposedGesture;
  _mod5544;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
