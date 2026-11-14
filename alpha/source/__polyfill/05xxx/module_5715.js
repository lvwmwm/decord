// Module ID: 5715
// Function ID: 5716
// Dependencies: [5714, 5660]
// Exports: useExclusiveGestures

// Module 5715
import ComposedGestureName from "ComposedGestureName" /* 5660 */;
import _mod5714 from "module_5714" /* 5714 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5714.useComposedGesture;
  _mod5714;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
