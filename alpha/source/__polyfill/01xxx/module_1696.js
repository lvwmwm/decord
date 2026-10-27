// Module ID: 1696
// Function ID: 1697
// Dependencies: [1658, 1692]
// Exports: isReducedMotionEnabledInSystem

// Module 1696
import module_1658 from "module_1658" /* 1658 */;
import module_1692_mod from "module_1692" /* 1692 */;

let module_1692;
let prop;
if (module_1658.isWeb()) {
  const _module1 = module_1658;
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
  uiValue: module_1692.makeMutable(prop),
  setEnabled(jsValue) {
    obj.jsValue = jsValue;
    obj.uiValue.value = jsValue;
  }
};
function isReducedMotionEnabledInSystem() {
  let prop;
  const obj = module_1658;
  if (obj.isWeb()) {
    const tmpResult = module_1658;
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
module_1692 = module_1692_mod;

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };
