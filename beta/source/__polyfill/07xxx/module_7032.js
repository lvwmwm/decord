// Module ID: 7032
// Function ID: 7033
// Dependencies: [7031, 6982]
// Exports: useExclusiveGestures

// Module 7032
import ComposedGestureName from "ComposedGestureName" /* 6982 */;
import _mod7031 from "module_7031" /* 7031 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod7031.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
