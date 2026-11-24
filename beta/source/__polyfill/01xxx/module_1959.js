// Module ID: 1959
// Function ID: 1960
// Dependencies: [1706, 1666]
// Exports: setNativeProps

// Module 1959
import _mod1666 from "module_1666" /* 1666 */;
import _mod1706 from "module_1706" /* 1706 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let items = [{ code: "(function setNativePropsNative_Pnpm_setNativePropsNativeTs1(animatedRef,updates){let[RuntimeKind,logger,processColorsInProps]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const shadowNodeWrapper=animatedRef.value;processColorsInProps(updates);global._updateProps([{shadowNodeWrapper:shadowNodeWrapper,updates:updates}]);})" }, _mod1706.RuntimeKind, _mod1666.logger, _mod1666.processColorsInProps];
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
let setNativePropsJest = function setNativePropsNative(value, updates) {
  if (globalThis.__RUNTIME_KIND !== _undefined.ReactNative) {
    value = value.value;
    _undefined3(updates);
    const items = [{ shadowNodeWrapper: value, updates }];
    const obj = { shadowNodeWrapper: value, updates };
    global._updateProps(items);
  } else {
    _undefined2.warn("setNativeProps() can only be used on the UI runtime.");
  }
};
const items1 = [tmp3, tmp4, tmp5];
setNativePropsJest.__closure = items1;
setNativePropsJest.__workletHash = 9620176991482;
setNativePropsJest.__initData = tmp2;
if (_mod1666.IS_JEST) {
  setNativePropsJest = function setNativePropsJest() {
    const logger = _mod1666.logger;
    logger.warn("setNativeProps() is not supported with Jest.");
  };
}

export const setNativeProps = setNativePropsJest;
