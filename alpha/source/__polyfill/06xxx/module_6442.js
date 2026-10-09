// Module ID: 6442
// Function ID: 6443
// Dependencies: [6441, 6392]
// Exports: useExclusiveGestures

// Module 6442
import ComposedGestureName from "ComposedGestureName" /* 6392 */;
import _mod6441 from "module_6441" /* 6441 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6441.useComposedGesture;
  _mod6441;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
