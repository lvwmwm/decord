// Module ID: 5535
// Function ID: 5536
// Dependencies: [5534, 5485]
// Exports: useExclusiveGestures

// Module 5535
import ComposedGestureName from "ComposedGestureName" /* 5485 */;
import _mod5534 from "module_5534" /* 5534 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5534.useComposedGesture;
  _mod5534;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
