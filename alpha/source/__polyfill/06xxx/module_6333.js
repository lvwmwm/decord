// Module ID: 6333
// Function ID: 6334
// Dependencies: [6307, 6322, 6298]
// Exports: useNativeGesture

// Module 6333
import ComposedGestureName from "ComposedGestureName" /* 6298 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6307 */;
import _mod6322 from "module_6322" /* 6322 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6322.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
