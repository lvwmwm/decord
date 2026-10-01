// Module ID: 1679
// Function ID: 1680
// Dependencies: [1641, 1675]
// Exports: isReducedMotionEnabledInSystem

// Module 1679
import module_1641 from "module_1641" /* 1641 */;
import module_1675_mod from "module_1675" /* 1675 */;

let module_1675;
let prop;
if (module_1641.isWeb()) {
  const _module1 = module_1641;
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
  uiValue: module_1675.makeMutable(prop),
  setEnabled(jsValue) {
    obj.jsValue = jsValue;
    obj.uiValue.value = jsValue;
  }
};
function isReducedMotionEnabledInSystem() {
  let prop;
  const obj = module_1641;
  if (obj.isWeb()) {
    const tmpResult = module_1641;
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
module_1675 = module_1675_mod;

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };
