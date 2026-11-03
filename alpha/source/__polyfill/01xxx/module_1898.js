// Module ID: 1898
// Function ID: 1899
// Dependencies: [1705]
// Exports: areWorkletHandlersEqual, ensureWorkletHandlers

// Module 1898
import _mod1705 from "module_1705" /* 1705 */;

if (typeof Object.is === "function") {
  let _Object = Object;
  let fn = Object.is;
} else {
  fn = (arg0, arg1) => {
    let tmp = arg0 === arg1;
    if (tmp) {
      tmp = 0 !== arg0 || 1 / arg0 === 1 / arg1;
      const tmp2 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    }
    if (!tmp) {
      const _Number = Number;
      let isNaNResult = Number.isNaN(arg0);
      if (isNaNResult) {
        const _Number2 = Number;
        isNaNResult = Number.isNaN(arg1);
      }
      tmp = isNaNResult;
    }
    return tmp;
  };
}
function areDependenciesEqual(arr, arg1) {
  let closure_0 = arg1;
  let tmp = !arr;
  if (arr) {
    tmp = !arg1;
  }
  if (!tmp) {
    tmp = arr.length !== arg1.length;
  }
  const tmp2 = !tmp && arr.every((item, index) => closure_2_2(item, __closure1[index]));
  return tmp2;
}

export function ensureWorkletHandlers(arg0) {
  const entries = Object.entries(arg0);
  const reduced = entries.reduce((arr, item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const obj = _mod1705;
    if (!obj.isWorkletFunction(tmp2)) {
      arr.push(tmp);
    }
    return arr;
  }, []);
  if (reduced.length > 0) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] Passed handlers that are not worklets. Only worklet functions are allowed. Handlers \"" + reduced.join(", ") + "\" are not worklets.");
    const tmp2 = error;
    throw error;
  }
}
export function areWorkletHandlersEqual(memoizedGestureCallbacks, prevHandlers) {
  if (memoizedGestureCallbacks) {
    if (prevHandlers) {
      const tmp = globalThis;
      const _Object = Object;
      const keys = Object.keys(memoizedGestureCallbacks);
      const _Object2 = Object;
      const tmp2 = keys.length === Object.keys(prevHandlers).length && keys.every((item) => {
        let tmp3 = !tmp;
        if (memoizedGestureCallbacks[item]) {
          tmp3 = !tmp2;
        }
        let tmp4 = !tmp3;
        if (tmp4) {
          let tmp6 = fn(tmp, tmp2);
          if (!tmp6) {
            let tmp7 = tmp.__workletHash === tmp2.__workletHash;
            if (tmp7) {
              let tmp8 = undefined === tmp.__closure && undefined === tmp2.__closure;
              if (!tmp8) {
                const __closure = tmp.__closure;
                const __closure1 = tmp2.__closure;
                if (typeof areDependenciesEqual === "function") {
                  let tmp10 = !__closure;
                  if (__closure) {
                    tmp10 = !__closure1;
                  }
                  if (!tmp10) {
                    tmp10 = __closure.length !== __closure1.length;
                  }
                  tmp8 = !tmp10 && __closure.every((item, index) => closure_2_2(item, __closure1[index]));
                  !tmp10 && __closure.every((item, index) => closure_2_2(item, __closure1[index]));
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              tmp7 = tmp8;
            }
            tmp6 = tmp7;
          }
          tmp4 = tmp6;
        }
        return tmp4;
      });
      return tmp2;
    }
  }
  return false;
}
export { areDependenciesEqual };
