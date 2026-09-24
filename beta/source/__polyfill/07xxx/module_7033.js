// Module ID: 7033
// Function ID: 7034
// Dependencies: [7031, 6982]
// Exports: useSimultaneousGestures

// Module 7033
import ComposedGestureName from "ComposedGestureName" /* 6982 */;
import _mod7031 from "module_7031" /* 7031 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod7031.useComposedGesture.apply(items1);
};
