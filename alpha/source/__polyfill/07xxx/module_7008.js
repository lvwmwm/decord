// Module ID: 7008
// Function ID: 7009
// Dependencies: [7007, 6958]
// Exports: useExclusiveGestures

// Module 7008
import ComposedGestureName from "ComposedGestureName" /* 6958 */;
import _mod7007 from "module_7007" /* 7007 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod7007.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
