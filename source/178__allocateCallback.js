// Module ID: 178
// Function ID: 2584
// Name: _allocateCallback
// Dependencies: [1627390328, 1654, 1792]

// Module 178 (_allocateCallback)
function _allocateCallback(loop, queueReactNativeMicrotask) {
  let closure_12 = tmp + 1;
  let length = arr.pop();
  if (undefined === length) {
    length = closure_7.length;
  }
  closure_7[length] = +closure_12;
  closure_5[length] = loop;
  closure_6[length] = queueReactNativeMicrotask;
  return +closure_12;
}
function _callTimer(arg0, arg1, didTimeout) {
  const global = arg1;
  if (arg0 > closure_12) {
    const _console = console;
    console.warn("Tried to call timer with ID %s but no such timer exists.", arg0);
  }
  const index = closure_7.indexOf(arg0);
  if (-1 !== index) {
    if (closure_5[index]) {
      if (tmp23) {
        if ("setInterval" !== tmp23) {
          _clearIndex(index);
        }
        if ("setTimeout" !== tmp23) {
          if ("setInterval" !== tmp23) {
            if ("queueReactNativeMicrotask" !== tmp23) {
              if ("requestAnimationFrame" === tmp23) {
                const _performance = global.performance;
                tmp26(_performance.now());
              } else if ("requestIdleCallback" === tmp23) {
                const obj = {
                  timeRemaining() {
                                  const _performance = arg1.performance;
                                  return Math.max(0, closure_4 - (_performance.now() - arg1));
                                },
                  didTimeout
                };
                tmp26(obj);
              } else {
                const _console3 = console;
                console.error(`Tried to call a callback with invalid type: ${tmp23}`);
              }
            }
          }
        }
        tmp25();
      }
    }
    const _console2 = console;
    console.error(`No callback found for timerID ${arg0}`);
  }
}
function _callReactNativeMicrotasksPass() {
  let length;
  if (0 === arr2.length) {
    return false;
  } else {
    const arr2 = [];
    let num = 0;
    if (0 < arr2.length) {
      do {
        let tmp = closure_17;
        let tmp2 = closure_17(arr[num], 0);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
    return arr2.length > 0;
  }
}
function _clearIndex(index) {
  closure_7[index] = null;
  closure_5[index] = null;
  closure_6[index] = null;
}
function _freeCallback(_animationFrame) {
  if (null != _animationFrame) {
    const index = closure_7.indexOf(_animationFrame);
    if (-1 !== index) {
      _clearIndex(index);
      let tmp5 = "queueReactNativeMicrotask" !== tmp2;
      if (tmp5) {
        tmp5 = "requestIdleCallback" !== tmp2;
      }
      if (tmp5) {
        arg1(dependencyMap[0])(importDefault(dependencyMap[1]), "NativeTiming is available");
        const tmp8 = arg1(dependencyMap[0]);
        importDefault(dependencyMap[1]).deleteTimer(_animationFrame);
        const obj = importDefault(dependencyMap[1]);
      }
    }
  }
}
function createTimer(arg0, arg1, arg2, arg3) {
  arg1(dependencyMap[0])(importDefault(dependencyMap[1]), "NativeTiming is available");
  const tmp = arg1(dependencyMap[0]);
  const timer = importDefault(dependencyMap[1]).createTimer(arg0, arg1, arg2, arg3);
}
function setSendIdleEvents(arg0) {
  arg1(dependencyMap[0])(importDefault(dependencyMap[1]), "NativeTiming is available");
  const tmp = arg1(dependencyMap[0]);
  importDefault(dependencyMap[1]).setSendIdleEvents(arg0);
}
let closure_4 = 16.666666666666668;
let closure_5 = [];
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
let closure_9 = [];
let closure_10 = [];
let closure_11 = {};
let closure_12 = 1;
let closure_13 = [];
let closure_14 = false;
let obj = {
  setTimeout(arg0, arg1) {
    let num = arg1;
    const global = arg0;
    const length = arguments.length;
    let num2 = 0;
    if (length > 2) {
      num2 = length - 2;
    }
    const array = new Array(num2);
    arg1 = array;
    for (let num3 = 2; num3 < length; num3 = num3 + 1) {
      array[num3 - 2] = arguments[num3];
    }
    const tmp2 = _allocateCallback(() => arg0.apply(undefined, array), "setTimeout");
    if (!num) {
      num = 0;
    }
    createTimer(tmp2, num, Date.now(), false);
    return tmp2;
  },
  setInterval(arg0, arg1) {
    let num = arg1;
    const global = arg0;
    const length = arguments.length;
    let num2 = 0;
    if (length > 2) {
      num2 = length - 2;
    }
    const array = new Array(num2);
    arg1 = array;
    for (let num3 = 2; num3 < length; num3 = num3 + 1) {
      array[num3 - 2] = arguments[num3];
    }
    const tmp2 = _allocateCallback(() => arg0.apply(undefined, array), "setInterval");
    if (!num) {
      num = 0;
    }
    createTimer(tmp2, num, Date.now(), true);
    return tmp2;
  },
  queueReactNativeMicrotask(arg0) {
    const global = arg0;
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    const arg1 = array;
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    const tmp2 = _allocateCallback(() => arg0.apply(undefined, array), "queueReactNativeMicrotask");
    arr2.push(tmp2);
    return tmp2;
  },
  requestAnimationFrame(loop, items) {
    const tmp = _allocateCallback(loop, "requestAnimationFrame");
    createTimer(tmp, 1, Date.now(), false);
    return tmp;
  },
  requestIdleCallback(runOnce, timeout) {
    let fn = runOnce;
    const global = runOnce;
    if (0 === arr3.length) {
      setSendIdleEvents(true);
    }
    if (timeout) {
      timeout = timeout.timeout;
    }
    if (null != timeout) {
      fn = (arg0) => {
        if (closure_11[closure_1]) {
          closure_15.clearTimeout(tmp);
          delete r2[r1];
        }
        return arg0(arg0);
      };
    }
    const tmp3Result = _allocateCallback(fn, "requestIdleCallback");
    timeout = tmp3Result;
    arr3.push(tmp3Result);
    if (null != timeout) {
      closure_11[tmp3Result] = obj.setTimeout(() => {
        const index = arr.indexOf(tmp3Result);
        if (index > -1) {
          arr.splice(index, 1);
          const _performance = arg0.performance;
          callback(tmp3Result, _performance.now(), true);
        }
        delete r2[r1];
        if (0 === arr.length) {
          callback2(false);
        }
      }, timeout);
    }
    return tmp3Result;
  },
  cancelIdleCallback(closure_5) {
    _freeCallback(closure_5);
    const index = arr3.indexOf(closure_5);
    if (-1 !== index) {
      arr3.splice(index, 1);
    }
    if (closure_11[closure_5]) {
      obj.clearTimeout(tmp5);
      delete r2[r3];
    }
    if (0 === arr3.length) {
      setSendIdleEvents(false);
    }
  },
  clearTimeout(_animationFrame) {
    _freeCallback(_animationFrame);
  },
  clearInterval(closure_0) {
    _freeCallback(closure_0);
  },
  clearReactNativeMicrotask(_animationFrame) {
    _freeCallback(_animationFrame);
    const index = arr2.indexOf(_animationFrame);
    if (-1 !== index) {
      arr2.splice(index, 1);
    }
  },
  cancelAnimationFrame(_animationFrame) {
    _freeCallback(_animationFrame);
  },
  callTimers(arg0) {
    let length;
    arg1(dependencyMap[0])(0 !== arg0.length, "Cannot call `callTimers` with an empty list of IDs.");
    closure_13.length = 0;
    let num = 0;
    if (0 < arg0.length) {
      do {
        let tmp2 = closure_17;
        let tmp3 = closure_17(arg0[num], 0);
        num = num + 1;
        length = arg0.length;
      } while (num < length);
    }
    if (closure_13.length > 0) {
      let num2 = 1;
      if (length2 > 1) {
        while (num2 < length2) {
          let tmp5 = obj;
          let fn = (arg0) => {
            throw arg0;
          };
          let tmp6 = closure_13;
          let timerId = obj.setTimeout(fn.bind(null, closure_13[num2]), 0);
          num2 = num2 + 1;
        }
      }
      throw closure_13[0];
    }
  },
  callIdleCallbacks(arg0) {
    let length;
    if (closure_4 - (Date.now() - arg0) >= 1) {
      closure_13.length = 0;
      if (arr3.length > 0) {
        const arr3 = [];
        let num = 0;
        if (0 < arr3.length) {
          do {
            let tmp = closure_17;
            let tmp2 = closure_17(arr[num], arg0);
            num = num + 1;
            length = arr.length;
          } while (num < length);
        }
      }
      if (0 === arr3.length) {
        setSendIdleEvents(false);
      }
      const item = closure_13.forEach((arg0) => timeout.setTimeout(() => {
        throw arg0;
      }, 0));
    }
  },
  callReactNativeMicrotasks() {
    let tmp2;
    closure_13.length = 0;
    if (_callReactNativeMicrotasksPass()) {
      do {
        let tmp = closure_18;
        tmp2 = closure_18();
      } while (tmp2);
    }
    const item = closure_13.forEach((arg0) => timeout.setTimeout(() => {
      throw arg0;
    }, 0));
  },
  emitTimeDriftWarning(arg0) {
    if (!closure_14) {
      closure_14 = true;
      const _console = console;
      console.warn(arg0);
    }
  }
};
let tmp2 = obj;
if (!require("withClamp")) {
  const _console = console;
  console.warn("Timing native module is not available, can't set timers.");
  obj = {};
  ({ callReactNativeMicrotasks: obj2.callReactNativeMicrotasks, queueReactNativeMicrotask: obj2.queueReactNativeMicrotask } = obj);
  tmp2 = obj;
}
const result = require("forwardRef").default.setReactNativeMicrotasksCallback(obj.callReactNativeMicrotasks);
global._flushReactNativeMicrotasks = () => obj.callReactNativeMicrotasks();

export default tmp2;
