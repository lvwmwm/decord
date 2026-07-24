// Module ID: 1623
// Function ID: 18079
// Name: isReducedMotionEnabledInSystem
// Dependencies: [1585, 1619]
// Exports: isReducedMotionEnabledInSystem

// Module 1623 (isReducedMotionEnabledInSystem)
import checkInvalidReadDuringRender from "checkInvalidReadDuringRender";

function isReducedMotionEnabledInSystem() {
  if (obj.isWeb()) {
    const tmp5 = !require(1585) /* isJest */.isWindowAvailable();
    let matches = !tmp5;
    if (!tmp5) {
      const _window = window;
      matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    let prop = matches;
    const obj2 = require(1585) /* isJest */;
  } else {
    prop = global._REANIMATED_IS_REDUCED_MOTION;
  }
  return prop;
}
const result = isReducedMotionEnabledInSystem();
const obj = { jsValue: result };
obj.uiValue = checkInvalidReadDuringRender.makeMutable(result);
obj.setEnabled = function setEnabled(jsValue) {
  obj.jsValue = jsValue;
  obj.uiValue.value = jsValue;
};

export { isReducedMotionEnabledInSystem };
export const ReducedMotionManager = obj;
