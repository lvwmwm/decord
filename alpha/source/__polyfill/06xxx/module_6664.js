// Module ID: 6664
// Function ID: 6665
// Dependencies: [6663, 6614]
// Exports: useExclusiveGestures

// Module 6664
import ComposedGestureName from "ComposedGestureName" /* 6614 */;
import _mod6663 from "module_6663" /* 6663 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6663.useComposedGesture;
  _mod6663;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
