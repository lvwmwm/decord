// Module ID: 7039
// Function ID: 7040
// Dependencies: [7037, 6988]
// Exports: useSimultaneousGestures

// Module 7039
import ComposedGestureName from "ComposedGestureName" /* 6988 */;
import _mod7037 from "module_7037" /* 7037 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7037.useComposedGesture.apply(items1);
};
