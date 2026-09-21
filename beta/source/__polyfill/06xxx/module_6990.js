// Module ID: 6990
// Function ID: 6991
// Dependencies: [6965, 6980, 6956]
// Exports: useManualGesture

// Module 6990
import ComposedGestureName from "ComposedGestureName" /* 6956 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6965 */;
import _mod6980 from "module_6980" /* 6980 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6980.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
