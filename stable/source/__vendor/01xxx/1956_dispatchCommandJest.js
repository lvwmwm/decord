// Module ID: 1956
// Function ID: 1957
// Name: dispatchCommandJest
// Dependencies: [1708, 1668]
// Exports: dispatchCommand

// Module 1956 (dispatchCommandJest)
import _mod1668 from "module_1668" /* 1668 */;
import _mod1708 from "module_1708" /* 1708 */;

let tmp2;
let tmp3;
let tmp4;
let items = [{ code: "(function dispatchCommandNative_Pnpm_dispatchCommandNativeTs1(animatedRef,commandName,args=[]){let[RuntimeKind,logger]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){return;}const shadowNodeWrapper=animatedRef.value;if(!shadowNodeWrapper){logger.warn(\"Tried to dispatch command \\\"\"+commandName+\"\\\" with an uninitialized ref. Make sure to pass the animated ref to the component before using it.\");return;}global._dispatchCommand(shadowNodeWrapper,commandName,args);})" }, _mod1708.RuntimeKind, _mod1668.logger];
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
if (_mod1668.IS_JEST) {
  dispatchCommandJest = function dispatchCommandJest() {
    const logger = _mod1668.logger;
    logger.warn("dispatchCommand() is not supported with Jest.");
  };
}

export const dispatchCommand = dispatchCommandJest;
