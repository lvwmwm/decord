// Module ID: 5290
// Function ID: 5291
// Dependencies: [5289, 5235]
// Exports: useExclusiveGestures

// Module 5290
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import _mod5289 from "module_5289" /* 5289 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5289.useComposedGesture;
  _mod5289;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
