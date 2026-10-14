// Module ID: 6448
// Function ID: 6449
// Dependencies: [6447, 6398]
// Exports: useExclusiveGestures

// Module 6448
import ComposedGestureName from "ComposedGestureName" /* 6398 */;
import _mod6447 from "module_6447" /* 6447 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6447.useComposedGesture;
  _mod6447;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
