// Module ID: 1682
// Function ID: 1683
// Dependencies: [1644, 1678]
// Exports: isReducedMotionEnabledInSystem

// Module 1682
import module_1644 from "module_1644" /* 1644 */;
import module_1678 from "module_1678" /* 1678 */;

if (module_1644.isWeb()) {
  const _module1 = module_1644;
  let matches = _module1.isWindowAvailable();
  if (matches) {
    let _window = window;
    matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  let prop = matches;
} else {
  prop = global._REANIMATED_IS_REDUCED_MOTION;
}
const ReducedMotionManager = { jsValue: prop, uiValue: null, setEnabled: null };
function isReducedMotionEnabledInSystem() {
  if (obj.isWeb()) {
    let matches = module_1644.isWindowAvailable();
    if (matches) {
      const _window = window;
      matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    let prop = matches;
    const tmpResult = module_1644;
  } else {
    prop = global._REANIMATED_IS_REDUCED_MOTION;
  }
  return prop;
}
ReducedMotionManager.uiValue = module_1678.makeMutable(prop);
ReducedMotionManager.setEnabled = function setEnabled(jsValue) {
  obj.jsValue = jsValue;
  obj.uiValue.value = jsValue;
};

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };
