// Module ID: 5407
// Function ID: 5408
// Dependencies: [5406, 5357]
// Exports: useExclusiveGestures

// Module 5407
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import _mod5406 from "module_5406" /* 5406 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5406.useComposedGesture;
  _mod5406;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
