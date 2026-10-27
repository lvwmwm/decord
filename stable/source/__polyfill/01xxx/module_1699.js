// Module ID: 1699
// Function ID: 1700
// Dependencies: [1661, 1695]
// Exports: isReducedMotionEnabledInSystem

// Module 1699
import module_1661 from "module_1661" /* 1661 */;
import module_1695_mod from "module_1695" /* 1695 */;

let module_1695;
let prop;
if (module_1661.isWeb()) {
  const _module1 = module_1661;
  let matches = _module1.isWindowAvailable();
  if (matches) {
    let _window = window;
    matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  prop = matches;
} else {
  prop = global._REANIMATED_IS_REDUCED_MOTION;
}
const ReducedMotionManager = {
  jsValue: prop,
  uiValue: module_1695.makeMutable(prop),
  setEnabled(jsValue) {
    obj.jsValue = jsValue;
    obj.uiValue.value = jsValue;
  }
};
function isReducedMotionEnabledInSystem() {
  let prop;
  const obj = module_1661;
  if (obj.isWeb()) {
    const tmpResult = module_1661;
    let matches = tmpResult.isWindowAvailable();
    if (matches) {
      const _window = window;
      matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    prop = matches;
  } else {
    prop = global._REANIMATED_IS_REDUCED_MOTION;
  }
  return prop;
}
module_1695 = module_1695_mod;

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };
