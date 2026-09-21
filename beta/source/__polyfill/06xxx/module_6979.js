// Module ID: 6979
// Function ID: 6980
// Dependencies: [6959, 6974, 6950]
// Exports: useFlingGesture

// Module 6979
import ComposedGestureName from "ComposedGestureName" /* 6950 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6959 */;
import _mod6974 from "module_6974" /* 6974 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture(cResult) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6974.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
