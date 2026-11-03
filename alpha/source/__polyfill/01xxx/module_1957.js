// Module ID: 1957
// Function ID: 1958
// Dependencies: [1705, 1665]
// Exports: setGestureState

// Module 1957
import _mod1665 from "module_1665" /* 1665 */;
import _mod1705 from "module_1705" /* 1705 */;

let tmp2;
let tmp3;
let tmp4;
const items = [{ code: "(function setGestureStateNative_Pnpm_setGestureStateNativeTs1(handlerTag,newState){let[RuntimeKind,logger]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){logger.warn('You can not use setGestureState in non-worklet function.');return;}global._setGestureState(handlerTag,newState);})" }, _mod1705.RuntimeKind, _mod1665.logger];
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
if (_mod1665.IS_JEST) {
  setGestureStateJest = function setGestureStateJest() {
    const logger = _mod1665.logger;
    logger.warn("setGestureState() cannot be used with Jest.");
  };
}

export const setGestureState = setGestureStateJest;
