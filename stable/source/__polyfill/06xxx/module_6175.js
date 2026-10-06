// Module ID: 6175
// Function ID: 6176
// Dependencies: [6174, 6125]
// Exports: useExclusiveGestures

// Module 6175
import ComposedGestureName from "ComposedGestureName" /* 6125 */;
import _mod6174 from "module_6174" /* 6174 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6174.useComposedGesture;
  _mod6174;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
