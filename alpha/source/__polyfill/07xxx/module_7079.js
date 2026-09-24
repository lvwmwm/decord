// Module ID: 7079
// Function ID: 7080
// Dependencies: [7053, 7068, 7044]
// Exports: useNativeGesture

// Module 7079
import ComposedGestureName from "ComposedGestureName" /* 7044 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 7053 */;
import _mod7068 from "module_7068" /* 7068 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod7068.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
