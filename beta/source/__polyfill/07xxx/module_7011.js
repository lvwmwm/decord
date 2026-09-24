// Module ID: 7011
// Function ID: 7012
// Dependencies: [6991, 7006, 6982]
// Exports: useFlingGesture

// Module 7011
import ComposedGestureName from "ComposedGestureName" /* 6982 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6991 */;
import _mod7006 from "module_7006" /* 7006 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod7006.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
