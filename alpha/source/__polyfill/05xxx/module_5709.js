// Module ID: 5709
// Function ID: 5710
// Dependencies: [5708, 5654]
// Exports: useExclusiveGestures

// Module 5709
import ComposedGestureName from "ComposedGestureName" /* 5654 */;
import _mod5708 from "module_5708" /* 5708 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5708.useComposedGesture;
  _mod5708;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
