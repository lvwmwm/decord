// Module ID: 5388
// Function ID: 5389
// Dependencies: [5387, 5338]
// Exports: useExclusiveGestures

// Module 5388
import ComposedGestureName from "ComposedGestureName" /* 5338 */;
import _mod5387 from "module_5387" /* 5387 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5387.useComposedGesture;
  _mod5387;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
