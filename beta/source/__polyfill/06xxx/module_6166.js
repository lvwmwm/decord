// Module ID: 6166
// Function ID: 6167
// Dependencies: [6141, 6156, 6132]
// Exports: useManualGesture

// Module 6166
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6156.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
