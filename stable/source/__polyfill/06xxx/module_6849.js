// Module ID: 6849
// Function ID: 6850
// Dependencies: [6824, 6839, 6815]
// Exports: useManualGesture

// Module 6849
import ComposedGestureName from "ComposedGestureName" /* 6815 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6824 */;
import _mod6839 from "module_6839" /* 6839 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6839.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
