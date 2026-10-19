// Module ID: 6721
// Function ID: 6722
// Dependencies: [6720, 6671]
// Exports: useExclusiveGestures

// Module 6721
import ComposedGestureName from "ComposedGestureName" /* 6671 */;
import _mod6720 from "module_6720" /* 6720 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6720.useComposedGesture;
  _mod6720;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
