// Module ID: 5402
// Function ID: 5403
// Dependencies: [5403, 5354]
// Exports: useCompetingGestures

// Module 5402
import ComposedGestureName from "ComposedGestureName" /* 5354 */;
import _mod5403 from "module_5403" /* 5403 */;


export const useCompetingGestures = function useCompetingGestures() {
  const items = [...arguments];
  const useComposedGesture = _mod5403.useComposedGesture;
  _mod5403;
  const items1 = [ComposedGestureName.ComposedGestureName.Race, ...items];
  return useComposedGesture.apply(items1);
};
