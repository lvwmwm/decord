// Module ID: 5537
// Function ID: 5538
// Dependencies: [5536, 5482]
// Exports: useExclusiveGestures

// Module 5537
import ComposedGestureName from "ComposedGestureName" /* 5482 */;
import _mod5536 from "module_5536" /* 5536 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5536.useComposedGesture;
  _mod5536;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
