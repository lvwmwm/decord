// Module ID: 5291
// Function ID: 5292
// Dependencies: [5289, 5235]
// Exports: useSimultaneousGestures

// Module 5291
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import _mod5289 from "module_5289" /* 5289 */;


export function useSimultaneousGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5289.useComposedGesture;
  _mod5289;
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return useComposedGesture.apply(items1);
}
