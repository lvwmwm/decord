// Module ID: 7023
// Function ID: 7024
// Dependencies: [6997, 7012, 6988]
// Exports: useNativeGesture

// Module 7023
import ComposedGestureName from "ComposedGestureName" /* 6988 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6997 */;
import _mod7012 from "module_7012" /* 7012 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod7012.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
