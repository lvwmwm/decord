// Module ID: 1658
// Function ID: 18413
// Name: VELOCITY_EPS
// Dependencies: [1585]

// Module 1658 (VELOCITY_EPS)
import isJest from "isJest";

let num = 1;
if (isJest.isWeb()) {
  num = 0.05;
}
let closure_0 = { code: "function isValidRubberBandConfig_Pnpm_utilsTs1(config){return!!config.rubberBandEffect&&Array.isArray(config.clamp)&&config.clamp.length===2;}" };

export const VELOCITY_EPS = num;
export const SLOPE_FACTOR = 0.1;
export const isValidRubberBandConfig = (() => {
  function isValidRubberBandConfig(rubberBandEffect) {
    let isArray = !tmp;
    if (!!rubberBandEffect.rubberBandEffect) {
      const _Array = Array;
      isArray = Array.isArray(rubberBandEffect.clamp);
    }
    if (isArray) {
      isArray = 2 === rubberBandEffect.clamp.length;
    }
    return isArray;
  }
  isValidRubberBandConfig.__closure = {};
  isValidRubberBandConfig.__workletHash = 5674674993606;
  isValidRubberBandConfig.__initData = closure_0;
  return isValidRubberBandConfig;
})();
