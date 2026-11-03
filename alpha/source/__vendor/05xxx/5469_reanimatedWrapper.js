// Module ID: 5469
// Function ID: 5470
// Name: reanimatedWrapper
// Dependencies: [1652, 1705, 5458, 5470, 5431]

// Module 5469 (reanimatedWrapper)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import tagMessage from "tagMessage" /* 5431 */;
import ghQueueMicrotask from "ghQueueMicrotask" /* 5458 */;
import NativeProxy2 from "NativeProxy" /* 5470 */;

const require = globalThis.__r;

let _module;
function pnpm_reanimatedWrapperTs1Factory(items) {
  let tmp;
  [tmp] = items;
  function pnpm_reanimatedWrapperTs1() {

  }
  pnpm_reanimatedWrapperTs1.__workletHash = 1469700417522;
  pnpm_reanimatedWrapperTs1.__initData = tmp;
  return pnpm_reanimatedWrapperTs1;
}
function pnpm_reanimatedWrapperTs2Factory(items1) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = items1;
  function pnpm_reanimatedWrapperTs2() {
    console.warn(require("Please use newer version of react-native-reanimated in order to control state of the gestures."));
  }
  const items = [tmp2];
  pnpm_reanimatedWrapperTs2.__closure = items;
  pnpm_reanimatedWrapperTs2.__workletHash = 914102765608;
  pnpm_reanimatedWrapperTs2.__initData = tmp;
  return pnpm_reanimatedWrapperTs2;
}
try {
  _module = _mod1652;
  try {
    const _module1 = _mod1705;
    if (_module1 != null) {
      let items = [{ code: "(function pnpm_reanimatedWrapperTs1(){})" }];
      _module1.scheduleOnUI(pnpm_reanimatedWrapperTs1Factory(items));
    }
  } catch (err) {
  }
  const _module2 = ghQueueMicrotask;
  _module2.ghQueueMicrotask(() => {
    const NativeProxy = NativeProxy2.NativeProxy;
    if (!NativeProxy.installUIRuntimeBindings()) {
      const _console = console;
      const tmpResult = tagMessage;
      warn(tmpResult.tagMessage("Failed to install UI runtime bindings. Please report this at https://github.com/software-mansion/react-native-gesture-handler/issues."));
    }
  });
} catch (err) {
}
let useSharedValue;
if (_module != null) {
  useSharedValue = _module.useSharedValue;
}
const setGestureState = undefined === _module || _module.setGestureState;
if (!setGestureState) {
  const items1 = [{ code: "(function pnpm_reanimatedWrapperTs2(){let[tagMessage]=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));})" }, tagMessage.tagMessage];
  _module.setGestureState = pnpm_reanimatedWrapperTs2Factory(items1);
}

export const Reanimated = _module;
