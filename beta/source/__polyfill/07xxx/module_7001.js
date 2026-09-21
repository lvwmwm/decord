// Module ID: 7001
// Function ID: 7002
// Dependencies: [6999, 6950]
// Exports: useSimultaneousGestures

// Module 7001
import ComposedGestureName from "ComposedGestureName" /* 6950 */;
import _mod6999 from "module_6999" /* 6999 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6999.useComposedGesture.apply(items1);
};
