// Module ID: 5171
// Function ID: 5172
// Dependencies: [5170, 5116]
// Exports: useExclusiveGestures

// Module 5171
import ComposedGestureName from "ComposedGestureName" /* 5116 */;
import _mod5170 from "module_5170" /* 5170 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5170.useComposedGesture;
  _mod5170;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
