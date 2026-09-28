// Module ID: 6167
// Function ID: 6168
// Dependencies: [6141, 6156, 6132]
// Exports: useNativeGesture

// Module 6167
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6156.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
