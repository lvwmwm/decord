// Module ID: 6177
// Function ID: 6178
// Dependencies: [6176, 6127]
// Exports: useExclusiveGestures

// Module 6177
import ComposedGestureName from "ComposedGestureName" /* 6127 */;
import _mod6176 from "module_6176" /* 6176 */;

require = arg1;
const dependencyMap = arg6;

export const useExclusiveGestures = function useExclusiveGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Exclusive, ...items];
  const applyResult = _mod6176.useComposedGesture.apply(items1);
  applyResult.type = ComposedGestureName.ComposedGestureName.Exclusive;
  return applyResult;
};
