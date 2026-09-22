// Module ID: 6866
// Function ID: 6867
// Dependencies: [6864, 6815]
// Exports: useSimultaneousGestures

// Module 6866
import ComposedGestureName from "ComposedGestureName" /* 6815 */;
import _mod6864 from "module_6864" /* 6864 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6864.useComposedGesture.apply(items1);
};
