// Module ID: 1847
// Function ID: 1848
// Dependencies: [1834]
// Exports: createReducedMotionManager

// Module 1847
import mutablesNative from "mutablesNative" /* 1834 */;


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
