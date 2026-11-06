// Module ID: 5567
// Function ID: 5568
// Dependencies: [5566, 5512]
// Exports: useExclusiveGestures

// Module 5567
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import _mod5566 from "module_5566" /* 5566 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5566.useComposedGesture;
  _mod5566;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
