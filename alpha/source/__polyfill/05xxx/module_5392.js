// Module ID: 5392
// Function ID: 5393
// Dependencies: [5391, 5342]
// Exports: useExclusiveGestures

// Module 5392
import ComposedGestureName from "ComposedGestureName" /* 5342 */;
import _mod5391 from "module_5391" /* 5391 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5391.useComposedGesture;
  _mod5391;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
