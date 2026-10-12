// Module ID: 1697
// Function ID: 1698
// Dependencies: [1659, 1693]
// Exports: isReducedMotionEnabledInSystem

// Module 1697
import module_1659 from "module_1659" /* 1659 */;
import module_1693_mod from "module_1693" /* 1693 */;

let module_1693;
let prop;
if (module_1659.isWeb()) {
  const _module1 = module_1659;
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
  uiValue: module_1693.makeMutable(prop),
  setEnabled(jsValue) {
    obj.jsValue = jsValue;
    obj.uiValue.value = jsValue;
  }
};
function isReducedMotionEnabledInSystem() {
  let prop;
  const obj = module_1659;
  if (obj.isWeb()) {
    const tmpResult = module_1659;
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
module_1693 = module_1693_mod;

export { isReducedMotionEnabledInSystem };
export { ReducedMotionManager };
