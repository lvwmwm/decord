// Module ID: 5404
// Function ID: 5405
// Dependencies: [5403, 5354]
// Exports: useExclusiveGestures

// Module 5404
import ComposedGestureName from "ComposedGestureName" /* 5354 */;
import _mod5403 from "module_5403" /* 5403 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5403.useComposedGesture;
  _mod5403;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
