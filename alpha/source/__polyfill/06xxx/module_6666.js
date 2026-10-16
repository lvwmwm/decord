// Module ID: 6666
// Function ID: 6667
// Dependencies: [6665, 6616]
// Exports: useExclusiveGestures

// Module 6666
import ComposedGestureName from "ComposedGestureName" /* 6616 */;
import _mod6665 from "module_6665" /* 6665 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6665.useComposedGesture;
  _mod6665;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
