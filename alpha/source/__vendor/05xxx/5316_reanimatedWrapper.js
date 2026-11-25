// Module ID: 5316
// Function ID: 5317
// Name: reanimatedWrapper
// Dependencies: [1706, 1653, 5317, 5276, 1824]
// Exports: reanimatedRefreshesAnimatableRef

// Module 5316 (reanimatedWrapper)
import _mod1653 from "module_1653" /* 1653 */;
import _mod1706 from "module_1706" /* 1706 */;
import _mod1824 from "module_1824" /* 1824 */;
import tagMessage from "tagMessage" /* 5276 */;
import installUIRuntimeBindings from "installUIRuntimeBindings" /* 5317 */;

let _module;
let _module1;
function pnpm_reanimatedWrapperTs1Factory(items) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = items;
  function pnpm_reanimatedWrapperTs1() {
    console.warn(closure_1_0("Please use newer version of react-native-reanimated in order to control state of the gestures."));
  }
  items = [tmp2];
  pnpm_reanimatedWrapperTs1.__closure = items;
  pnpm_reanimatedWrapperTs1.__workletHash = 3441713308075;
  pnpm_reanimatedWrapperTs1.__initData = tmp;
  return pnpm_reanimatedWrapperTs1;
}
try {
  _module = _mod1706;
} catch (err) {
}
try {
  _module1 = _mod1653;
} catch (err) {
}
if (undefined !== _module) {
  const _module2 = installUIRuntimeBindings;
  const result = _module2.installUIRuntimeBindings(_module.getUIRuntimeHolder);
}
const setGestureState = undefined === _module1 || _module1.setGestureState;
if (!setGestureState) {
  let items = [{ code: "(function pnpm_reanimatedWrapperTs1(){let[tagMessage]=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));})" }, tagMessage.tagMessage];
  _module1.setGestureState = pnpm_reanimatedWrapperTs1Factory(items);
}
let closure_0 = false;
try {
  const _default = _mod1824.default;
  let _refreshComponentRef;
  if (_default != null) {
    const prototype = _default.prototype;
    if (prototype != null) {
      _refreshComponentRef = prototype._refreshComponentRef;
    }
  }
  closure_0 = typeof _refreshComponentRef === "function";
} catch (err) {
}

export function reanimatedRefreshesAnimatableRef() {
  return closure_0;
}
export const Reanimated = _module1;
export const Worklets = _module;
