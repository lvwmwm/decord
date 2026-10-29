// Module ID: 5443
// Function ID: 5444
// Dependencies: [5442, 5393]
// Exports: useExclusiveGestures

// Module 5443
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import _mod5442 from "module_5442" /* 5442 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5442.useComposedGesture;
  _mod5442;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
