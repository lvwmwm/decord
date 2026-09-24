// Module ID: 7095
// Function ID: 7096
// Dependencies: [7093, 7044]
// Exports: useSimultaneousGestures

// Module 7095
import ComposedGestureName from "ComposedGestureName" /* 7044 */;
import _mod7093 from "module_7093" /* 7093 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7093.useComposedGesture.apply(items1);
};
