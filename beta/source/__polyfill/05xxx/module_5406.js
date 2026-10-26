// Module ID: 5406
// Function ID: 5407
// Dependencies: [5405, 5356]
// Exports: useExclusiveGestures

// Module 5406
import ComposedGestureName from "ComposedGestureName" /* 5356 */;
import _mod5405 from "module_5405" /* 5405 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5405.useComposedGesture;
  _mod5405;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
