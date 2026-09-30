// Module ID: 6357
// Function ID: 6358
// Dependencies: [6337, 6352, 6328]
// Exports: useFlingGesture

// Module 6357
import ComposedGestureName from "ComposedGestureName" /* 6328 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6337 */;
import _mod6352 from "module_6352" /* 6352 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6352.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};
