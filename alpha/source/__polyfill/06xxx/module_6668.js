// Module ID: 6668
// Function ID: 6669
// Dependencies: [6667, 6618]
// Exports: useExclusiveGestures

// Module 6668
import ComposedGestureName from "ComposedGestureName" /* 6618 */;
import _mod6667 from "module_6667" /* 6667 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6667.useComposedGesture;
  _mod6667;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
