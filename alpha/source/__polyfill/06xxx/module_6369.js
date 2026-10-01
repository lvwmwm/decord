// Module ID: 6369
// Function ID: 6370
// Dependencies: [6367, 6318]
// Exports: useSimultaneousGestures

// Module 6369
import ComposedGestureName from "ComposedGestureName" /* 6318 */;
import _mod6367 from "module_6367" /* 6367 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6367.useComposedGesture.apply(items1);
};
