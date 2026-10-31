// Module ID: 5413
// Function ID: 5414
// Dependencies: [5411, 5362]
// Exports: useSimultaneousGestures

// Module 5413
import ComposedGestureName from "ComposedGestureName" /* 5362 */;
import _mod5411 from "module_5411" /* 5411 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5411.useComposedGesture;
  _mod5411;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
