// Module ID: 5412
// Function ID: 5413
// Dependencies: [5411, 5362]
// Exports: useExclusiveGestures

// Module 5412
import ComposedGestureName from "ComposedGestureName" /* 5362 */;
import _mod5411 from "module_5411" /* 5411 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5411.useComposedGesture;
  _mod5411;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
