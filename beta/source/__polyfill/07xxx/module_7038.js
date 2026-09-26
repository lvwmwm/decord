// Module ID: 7038
// Function ID: 7039
// Dependencies: [7037, 6988]
// Exports: useExclusiveGestures

// Module 7038
import ComposedGestureName from "ComposedGestureName" /* 6988 */;
import _mod7037 from "module_7037" /* 7037 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod7037.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
