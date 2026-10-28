// Module ID: 5438
// Function ID: 5439
// Dependencies: [5437, 5388]
// Exports: useExclusiveGestures

// Module 5438
import ComposedGestureName from "ComposedGestureName" /* 5388 */;
import _mod5437 from "module_5437" /* 5437 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5437.useComposedGesture;
  _mod5437;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
