// Module ID: 6368
// Function ID: 6369
// Dependencies: [6367, 6318]
// Exports: useExclusiveGestures

// Module 6368
import ComposedGestureName from "ComposedGestureName" /* 6318 */;
import _mod6367 from "module_6367" /* 6367 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6367.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
