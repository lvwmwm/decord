// Module ID: 7017
// Function ID: 7018
// Dependencies: [6991, 7006, 6982]
// Exports: useNativeGesture

// Module 7017
import ComposedGestureName from "ComposedGestureName" /* 6982 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6991 */;
import _mod7006 from "module_7006" /* 7006 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod7006.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
