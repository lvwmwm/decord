// Module ID: 5705
// Function ID: 5706
// Dependencies: [5704, 5650]
// Exports: useExclusiveGestures

// Module 5705
import ComposedGestureName from "ComposedGestureName" /* 5650 */;
import _mod5704 from "module_5704" /* 5704 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5704.useComposedGesture;
  _mod5704;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
