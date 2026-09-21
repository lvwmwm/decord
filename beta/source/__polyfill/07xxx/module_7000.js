// Module ID: 7000
// Function ID: 7001
// Dependencies: [6999, 6950]
// Exports: useExclusiveGestures

// Module 7000
import ComposedGestureName from "ComposedGestureName" /* 6950 */;
import _mod6999 from "module_6999" /* 6999 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6999.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
