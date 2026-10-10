// Module ID: 6443
// Function ID: 6444
// Dependencies: [6442, 6393]
// Exports: useExclusiveGestures

// Module 6443
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import _mod6442 from "module_6442" /* 6442 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6442.useComposedGesture;
  _mod6442;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
