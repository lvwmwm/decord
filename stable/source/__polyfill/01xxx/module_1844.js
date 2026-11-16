// Module ID: 1844
// Function ID: 1845
// Dependencies: [1831]
// Exports: createReducedMotionManager

// Module 1844
import mutablesNative from "mutablesNative" /* 1831 */;


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
