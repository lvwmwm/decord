// Module ID: 7092
// Function ID: 7093
// Dependencies: [7091, 7042]
// Exports: useExclusiveGestures

// Module 7092
import ComposedGestureName from "ComposedGestureName" /* 7042 */;
import _mod7091 from "module_7091" /* 7091 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod7091.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
