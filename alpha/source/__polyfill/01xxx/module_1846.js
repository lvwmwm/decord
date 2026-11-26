// Module ID: 1846
// Function ID: 1847
// Dependencies: [1833]
// Exports: createReducedMotionManager

// Module 1846
import mutablesNative from "mutablesNative" /* 1833 */;


export function createReducedMotionManager(_REANIMATED_IS_REDUCED_MOTION) {
  let obj2;
  const obj = {
    jsValue: _REANIMATED_IS_REDUCED_MOTION,
    uiValue: obj2.makeMutable(_REANIMATED_IS_REDUCED_MOTION),
    setEnabled(jsValue) {
      obj.jsValue = jsValue;
      obj.uiValue.value = jsValue;
    }
  };
  obj2 = mutablesNative;
  return obj;
}
