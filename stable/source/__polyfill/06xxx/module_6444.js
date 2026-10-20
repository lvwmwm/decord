// Module ID: 6444
// Function ID: 6445
// Dependencies: [6443, 6394]
// Exports: useExclusiveGestures

// Module 6444
import ComposedGestureName from "ComposedGestureName" /* 6394 */;
import _mod6443 from "module_6443" /* 6443 */;


export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod6443.useComposedGesture;
  _mod6443;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
