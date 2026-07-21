// Module ID: 1623
// Function ID: 18077
// Name: isReducedMotionEnabledInSystem
// Dependencies: [0, 4294967295]
// Exports: isReducedMotionEnabledInSystem

// Module 1623 (isReducedMotionEnabledInSystem)
function isReducedMotionEnabledInSystem() {
  if (obj.isWeb()) {
    const tmp5 = !require(dependencyMap[0]).isWindowAvailable();
    let matches = !tmp5;
    if (!tmp5) {
      const _window = window;
      matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    let prop = matches;
    const obj2 = require(dependencyMap[0]);
  } else {
    prop = global._REANIMATED_IS_REDUCED_MOTION;
  }
  return prop;
}
const result = isReducedMotionEnabledInSystem();
const obj = { jsValue: result };
const _module = require(dependencyMap[1]);
obj.uiValue = _module.makeMutable(result);
obj.setEnabled = function setEnabled(jsValue) {
  obj.jsValue = jsValue;
  obj.uiValue.value = jsValue;
};

export { isReducedMotionEnabledInSystem };
export const ReducedMotionManager = obj;
