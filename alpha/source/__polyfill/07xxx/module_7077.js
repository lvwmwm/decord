// Module ID: 7077
// Function ID: 7078
// Dependencies: [7051, 7066, 7042]
// Exports: useNativeGesture

// Module 7077
import ComposedGestureName from "ComposedGestureName" /* 7042 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 7051 */;
import _mod7066 from "module_7066" /* 7066 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod7066.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
