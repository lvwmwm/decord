// Module ID: 7017
// Function ID: 7018
// Dependencies: [6997, 7012, 6988]
// Exports: useFlingGesture

// Module 7017
import ComposedGestureName from "ComposedGestureName" /* 6988 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6997 */;
import _mod7012 from "module_7012" /* 7012 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod7012.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
