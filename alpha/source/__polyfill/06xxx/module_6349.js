// Module ID: 6349
// Function ID: 6350
// Dependencies: [6347, 6298]
// Exports: useSimultaneousGestures

// Module 6349
import ComposedGestureName from "ComposedGestureName" /* 6298 */;
import _mod6347 from "module_6347" /* 6347 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6347.useComposedGesture.apply(items1);
};
