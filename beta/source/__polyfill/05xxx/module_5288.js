// Module ID: 5288
// Function ID: 5289
// Dependencies: [5289, 5235]
// Exports: useCompetingGestures

// Module 5288
import ComposedGestureName from "ComposedGestureName" /* 5235 */;
import _mod5289 from "module_5289" /* 5289 */;


export function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5289.useComposedGesture;
  _mod5289;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
}
