// Module ID: 5389
// Function ID: 5390
// Dependencies: [5388, 5334]
// Exports: useExclusiveGestures

// Module 5389
import ComposedGestureName from "ComposedGestureName" /* 5334 */;
import _mod5388 from "module_5388" /* 5388 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5388.useComposedGesture;
  _mod5388;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
