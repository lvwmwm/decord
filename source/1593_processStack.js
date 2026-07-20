// Module ID: 1593
// Function ID: 17767
// Name: processStack
// Dependencies: []
// Exports: registerWorkletStackDetails, reportFatalErrorOnJS

// Module 1593 (processStack)
function processStack(stack) {
  const match = stack.match(/worklet_(\d+):(\d+):(\d+)/g);
  const global = stack;
  if (null != match) {
    const item = match.forEach((str) => {
      const parts = str.split(/:|_/);
      let replaced = globalThis;
      let num = 4;
      const tmp = callback(parts.map(Number), 4);
      let num2 = 1;
      let tmp2 = tmp[3];
      const value = closure_4.get(tmp[1]);
      if (value) {
        const tmp5 = callback(value, 3);
        let replace = tmp5[2];
        let first;
        if (null != tmp5[0].stack) {
          const parts1 = str.split("\n");
          if (null != parts1) {
            first = parts1[0];
          }
        }
        if (!first) {
          let items = [null, null, null];
          const tmp12 = callback(items, 3);
          const sum = tmp2 + tmp12[2] + replace;
          tmp2 = str;
          replace = str.replace;
          const sum1 = tmp[2] + tmp12[num2] + tmp5[num2];
          num2 = replaced.HermesInternal.concat;
          replaced = replace(str, num2(tmp12[0], ":", sum1, ":", sum));
          str = replaced;
        } else {
          first = /@([^@]+):(\d+):(\d+)/.exec(first);
          const obj2 = /@([^@]+):(\d+):(\d+)/;
        }
        const tmp10 = callback(first, num);
        num = tmp10[3];
        const items1 = [tmp10[num2], replaced.Number(tmp10[2]), ];
        first = replaced.Number(num);
        items1[2] = first;
        items = items1;
      }
    });
  }
  return global;
}
let closure_1 = importDefault(dependencyMap[0]);
class ReanimatedError {
  constructor(arg0) {
    str = "[Reanimated]";
    if (global) {
      _HermesInternal = HermesInternal;
      str2 = "";
      str3 = " ";
      str = "" + "[Reanimated]" + " " + global;
    }
    error = new Error(str);
    error.name = "ReanimatedError";
    return error;
  }
}
ReanimatedError.__closure = {};
ReanimatedError.__workletHash = 17260882889510;
ReanimatedError.__initData = { code: "function ReanimatedError_Pnpm_errorsTs1(message){const prefix='[Reanimated]';const errorInstance=new Error(message?prefix+\" \"+message:prefix);errorInstance.name='ReanimatedError';return errorInstance;}" };
let closure_3 = { code: "function registerReanimatedError_Pnpm_errorsTs2(){const{ReanimatedErrorConstructor}=this.__closure;if(!_WORKLET){throw new Error('[Reanimated] registerReanimatedError() must be called on Worklet runtime');}global.ReanimatedError=ReanimatedErrorConstructor;}" };
const map = new Map();

export { ReanimatedError };
export const registerReanimatedError = () => {
  function registerReanimatedError() {
    if (globalThis._WORKLET) {
      closure_0.ReanimatedError = closure_2;
    } else {
      const _Error = Error;
      const error = new Error("[Reanimated] registerReanimatedError() must be called on Worklet runtime");
      throw error;
    }
  }
  registerReanimatedError.__closure = { ReanimatedErrorConstructor: ReanimatedError };
  registerReanimatedError.__workletHash = 12525509537607;
  registerReanimatedError.__initData = closure_3;
  return registerReanimatedError;
}();
export const registerWorkletStackDetails = function registerWorkletStackDetails(arg0, arg1) {
  const result = map.set(arg0, arg1);
};
export const reportFatalErrorOnJS = function reportFatalErrorOnJS(stack) {
  stack = stack.stack;
  const error = new Error();
  error.message = stack.message;
  let tmp2;
  if (stack) {
    tmp2 = processStack(stack);
  }
  error.stack = tmp2;
  error.name = "ReanimatedError";
  error.jsEngine = "reanimated";
  const _ErrorUtils = global.ErrorUtils;
  _ErrorUtils.reportFatalError(error);
};
