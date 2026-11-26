// Module ID: 5420
// Function ID: 5421
// Dependencies: [5419, 5365]
// Exports: useExclusiveGestures

// Module 5420
import ComposedGestureName from "ComposedGestureName" /* 5365 */;
import _mod5419 from "module_5419" /* 5419 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5419.useComposedGesture;
  _mod5419;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
