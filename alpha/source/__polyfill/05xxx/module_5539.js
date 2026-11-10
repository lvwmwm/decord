// Module ID: 5539
// Function ID: 5540
// Dependencies: [5538, 5484]
// Exports: useExclusiveGestures

// Module 5539
import ComposedGestureName from "ComposedGestureName" /* 5484 */;
import _mod5538 from "module_5538" /* 5538 */;


export function useExclusiveGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5538.useComposedGesture;
  _mod5538;
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
}
