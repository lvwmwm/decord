// Module ID: 5547
// Function ID: 5548
// Dependencies: [5546, 5492]
// Exports: useExclusiveGestures

// Module 5547
import ComposedGestureName from "ComposedGestureName" /* 5492 */;
import _mod5546 from "module_5546" /* 5546 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5546.useComposedGesture;
  _mod5546;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
