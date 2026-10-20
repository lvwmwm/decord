// Module ID: 5367
// Function ID: 5368
// Dependencies: [5366, 5317]
// Exports: useExclusiveGestures

// Module 5367
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import _mod5366 from "module_5366" /* 5366 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5366.useComposedGesture;
  _mod5366;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
