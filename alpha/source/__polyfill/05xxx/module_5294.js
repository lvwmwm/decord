// Module ID: 5294
// Function ID: 5295
// Dependencies: [5293, 5239]
// Exports: useExclusiveGestures

// Module 5294
import ComposedGestureName from "ComposedGestureName" /* 5239 */;
import _mod5293 from "module_5293" /* 5293 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5293.useComposedGesture;
  _mod5293;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
