// Module ID: 1691
// Function ID: 1692
// Dependencies: [1653, 1687]
// Exports: isReducedMotionEnabledInSystem

// Module 1691
import module_1653 from "module_1653" /* 1653 */;
import module_1687_mod from "module_1687" /* 1687 */;

let module_1687;
let prop;
if (module_1653.isWeb()) {
  const _module1 = module_1653;
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
  uiValue: module_1687.makeMutable(prop),
  setEnabled(jsValue) {
    obj.jsValue = jsValue;
    obj.uiValue.value = jsValue;
  }
};
function isReducedMotionEnabledInSystem() {
  let prop;
  const obj = module_1653;
  if (obj.isWeb()) {
    const tmpResult = module_1653;
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
module_1687 = module_1687_mod;

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };
