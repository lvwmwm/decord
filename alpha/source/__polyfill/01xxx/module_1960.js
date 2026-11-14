// Module ID: 1960
// Function ID: 1961
// Dependencies: [1708, 1668]
// Exports: setGestureState

// Module 1960
import _mod1668 from "module_1668" /* 1668 */;
import _mod1708 from "module_1708" /* 1708 */;

let tmp2;
let tmp3;
let tmp4;
const items = [{ code: "(function setGestureStateNative_Pnpm_setGestureStateNativeTs1(handlerTag,newState){let[RuntimeKind,logger]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){logger.warn('You can not use setGestureState in non-worklet function.');return;}global._setGestureState(handlerTag,newState);})" }, _mod1708.RuntimeKind, _mod1668.logger];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
let setGestureStateJest = function setGestureStateNative(arg0, arg1) {
  if (globalThis.__RUNTIME_KIND !== _undefined.ReactNative) {
    global._setGestureState(arg0, arg1);
  } else {
    _undefined2.warn("You can not use setGestureState in non-worklet function.");
  }
};
const items1 = [tmp3, tmp4];
setGestureStateJest.__closure = items1;
setGestureStateJest.__workletHash = 10884479007598;
setGestureStateJest.__initData = tmp2;
if (_mod1668.IS_JEST) {
  setGestureStateJest = function setGestureStateJest() {
    const logger = _mod1668.logger;
    logger.warn("setGestureState() cannot be used with Jest.");
  };
}

export const setGestureState = setGestureStateJest;
