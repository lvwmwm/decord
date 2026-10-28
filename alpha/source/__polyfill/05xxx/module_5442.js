// Module ID: 5442
// Function ID: 5443
// Dependencies: [5441, 5392]
// Exports: useExclusiveGestures

// Module 5442
import ComposedGestureName from "ComposedGestureName" /* 5392 */;
import _mod5441 from "module_5441" /* 5441 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5441.useComposedGesture;
  _mod5441;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
