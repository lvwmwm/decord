// Module ID: 1685
// Function ID: 1686
// Dependencies: [1647, 1681]
// Exports: isReducedMotionEnabledInSystem

// Module 1685
import module_1647 from "module_1647" /* 1647 */;
import module_1681_mod from "module_1681" /* 1681 */;

let module_1681;
let prop;
if (module_1647.isWeb()) {
  const _module1 = module_1647;
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
  uiValue: module_1681.makeMutable(prop),
  setEnabled(jsValue) {
    obj.jsValue = jsValue;
    obj.uiValue.value = jsValue;
  }
};
function isReducedMotionEnabledInSystem() {
  let prop;
  const obj = module_1647;
  if (obj.isWeb()) {
    const tmpResult = module_1647;
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
module_1681 = module_1681_mod;

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };
