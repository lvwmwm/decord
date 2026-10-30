// Module ID: 1692
// Function ID: 1693
// Dependencies: [1654, 1688]
// Exports: isReducedMotionEnabledInSystem

// Module 1692
import module_1654 from "module_1654" /* 1654 */;
import module_1688_mod from "module_1688" /* 1688 */;

let module_1688;
let prop;
if (module_1654.isWeb()) {
  const _module1 = module_1654;
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
  uiValue: module_1688.makeMutable(prop),
  setEnabled(jsValue) {
    obj.jsValue = jsValue;
    obj.uiValue.value = jsValue;
  }
};
function isReducedMotionEnabledInSystem() {
  let prop;
  const obj = module_1654;
  if (obj.isWeb()) {
    const tmpResult = module_1654;
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
module_1688 = module_1688_mod;

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };
