// Module ID: 6182
// Function ID: 6183
// Dependencies: [6181, 6132]
// Exports: useExclusiveGestures

// Module 6182
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import _mod6181 from "module_6181" /* 6181 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6181.useComposedGesture;
  _mod6181;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
