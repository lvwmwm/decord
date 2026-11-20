// Module ID: 1954
// Function ID: 1955
// Name: dispatchCommandJest
// Dependencies: [1706, 1666]
// Exports: dispatchCommand

// Module 1954 (dispatchCommandJest)
import _mod1666 from "module_1666" /* 1666 */;
import _mod1706 from "module_1706" /* 1706 */;

let tmp2;
let tmp3;
let tmp4;
let items = [{ code: "(function dispatchCommandNative_Pnpm_dispatchCommandNativeTs1(animatedRef,commandName,args=[]){let[RuntimeKind,logger]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){return;}const shadowNodeWrapper=animatedRef.value;if(!shadowNodeWrapper){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommand(shadowNodeWrapper,commandName,args);})" }, _mod1706.RuntimeKind, _mod1666.logger];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
let dispatchCommandJest = function dispatchCommandNative(value, arg1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  if (globalThis.__RUNTIME_KIND !== _undefined.ReactNative) {
    value = value.value;
    if (value) {
      global._dispatchCommand(value, arg1, items);
    } else {
      const _HermesInternal = HermesInternal;
      _undefined2.warn("Tried to dispatch command \"" + arg1 + "\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.");
    }
  }
};
const items1 = [tmp3, tmp4];
dispatchCommandJest.__closure = items1;
dispatchCommandJest.__workletHash = 26995694413;
dispatchCommandJest.__initData = tmp2;
if (_mod1666.IS_JEST) {
  dispatchCommandJest = function dispatchCommandJest() {
    const logger = _mod1666.logger;
    logger.warn("dispatchCommand() is not supported with Jest.");
  };
}

export const dispatchCommand = dispatchCommandJest;
