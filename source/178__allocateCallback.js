// Module ID: 178
// Function ID: 2584
// Name: _allocateCallback
// Dependencies: [44, 179, 63]

// Module 178 (_allocateCallback)
let require = arg1;
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
function _callTimer(arg0, arg1) {
  const _global = arg1;
  if (arg0 > c12) {
    const _console = console;
    console.warn("Tried to call timer with ID %s but no such timer exists.", arg0);
  }
  const index = closure_7.indexOf(arg0);
  if (-1 !== index) {
    if (table[index]) {
      if (tmp23) {
        if ("setInterval" !== tmp23) {
          _clearIndex(index);
        }
        if ("setTimeout" !== tmp23) {
          if ("setInterval" !== tmp23) {
            if ("queueReactNativeMicrotask" !== tmp23) {
              if ("requestAnimationFrame" === tmp23) {
                let _performance = _global.performance;
                tmp26(_performance.now());
              } else if ("requestIdleCallback" === tmp23) {
                const obj = {
                  timeRemaining() {
                                  _performance = _performance.performance;
                                  return Math.max(0, outer1_4 - (_performance.now() - _performance));
                                },
                  didTimeout: arg2
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
    arr2 = [];
    let num = 0;
    if (0 < arr2.length) {
      do {
        let tmp = _callTimer;
        let tmp2 = _callTimer(arr[num], 0);
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
        require(44) /* invariant */(importDefault(179), "NativeTiming is available");
        const tmp8 = require(44) /* invariant */;
        importDefault(179).deleteTimer(_animationFrame);
        const obj = importDefault(179);
      }
    }
  }
}
function createTimer(arg0, arg1, arg2, arg3) {
  require(44) /* invariant */(importDefault(179), "NativeTiming is available");
  const tmp = require(44) /* invariant */;
  const timer = importDefault(179).createTimer(arg0, arg1, arg2, arg3);
}
function setSendIdleEvents(arg0) {
  require(44) /* invariant */(importDefault(179), "NativeTiming is available");
  const tmp = require(44) /* invariant */;
  importDefault(179).setSendIdleEvents(arg0);
}
let c4 = 16.666666666666668;
let closure_5 = [];
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
let closure_9 = [];
let closure_10 = [];
let closure_11 = {};
let c12 = 1;
let closure_13 = [];
let c14 = false;
let obj = {
  setTimeout(arg0, arg1) {
    let num = arg1;
    let closure_0 = arg0;
    const length = arguments.length;
    let num2 = 0;
    if (length > 2) {
      num2 = length - 2;
    }
    const array = new Array(num2);
    for (let num3 = 2; num3 < length; num3 = num3 + 1) {
      array[num3 - 2] = arguments[num3];
    }
    const tmp2 = _allocateCallback(() => callback.apply(undefined, array), "setTimeout");
    if (!num) {
      num = 0;
    }
    createTimer(tmp2, num, Date.now(), false);
    return tmp2;
  },
  setInterval(arg0, arg1) {
    let num = arg1;
    let closure_0 = arg0;
    const length = arguments.length;
    let num2 = 0;
    if (length > 2) {
      num2 = length - 2;
    }
    const array = new Array(num2);
    for (let num3 = 2; num3 < length; num3 = num3 + 1) {
      array[num3 - 2] = arguments[num3];
    }
    const tmp2 = _allocateCallback(() => callback.apply(undefined, array), "setInterval");
    if (!num) {
      num = 0;
    }
    createTimer(tmp2, num, Date.now(), true);
    return tmp2;
  },
  queueReactNativeMicrotask(arg0) {
    let closure_0 = arg0;
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    const tmp2 = _allocateCallback(() => callback.apply(undefined, array), "queueReactNativeMicrotask");
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
    let closure_0 = runOnce;
    if (0 === arr3.length) {
      setSendIdleEvents(true);
    }
    if (timeout) {
      timeout = timeout.timeout;
    }
    if (null != timeout) {
      fn = (arg0) => {
        if (outer1_11[closure_1]) {
          outer1_15.clearTimeout(tmp3);
          delete tmp2[tmp];
        }
        return lib(arg0);
      };
    }
    const tmp3Result = _allocateCallback(fn, "requestIdleCallback");
    const require = tmp3Result;
    arr3.push(tmp3Result);
    if (null != timeout) {
      closure_11[tmp3Result] = obj.setTimeout(() => {
        const index = outer1_10.indexOf(closure_1);
        if (index > -1) {
          outer1_10.splice(index, 1);
          const _performance = lib.performance;
          outer1_17(closure_1, _performance.now(), true);
        }
        delete tmp2[tmp];
        if (0 === outer1_10.length) {
          outer1_22(false);
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
    if (table2[closure_5]) {
      obj.clearTimeout(tmp7);
      delete tmp[tmp2];
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
    require(44) /* invariant */(0 !== arg0.length, "Cannot call `callTimers` with an empty list of IDs.");
    closure_13.length = 0;
    let num = 0;
    if (0 < arg0.length) {
      do {
        let tmp2 = _callTimer;
        let tmp3 = _callTimer(arg0[num], 0);
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
    if (c4 - (Date.now() - arg0) >= 1) {
      closure_13.length = 0;
      if (arr3.length > 0) {
        arr3 = [];
        let num = 0;
        if (0 < arr3.length) {
          do {
            let tmp = _callTimer;
            let tmp2 = _callTimer(arr[num], arg0);
            num = num + 1;
            length = arr.length;
          } while (num < length);
        }
      }
      if (0 === arr3.length) {
        setSendIdleEvents(false);
      }
      const item = closure_13.forEach((arg0) => {
        let closure_0 = arg0;
        return outer1_15.setTimeout(() => {
          throw closure_0;
        }, 0);
      });
    }
  },
  callReactNativeMicrotasks() {
    let tmp2;
    closure_13.length = 0;
    if (_callReactNativeMicrotasksPass()) {
      do {
        let tmp = _callReactNativeMicrotasksPass;
        tmp2 = _callReactNativeMicrotasksPass();
      } while (tmp2);
    }
    const item = closure_13.forEach((arg0) => {
      let closure_0 = arg0;
      return outer1_15.setTimeout(() => {
        throw closure_0;
      }, 0);
    });
  },
  emitTimeDriftWarning(arg0) {
    if (!c14) {
      c14 = true;
      const _console = console;
      console.warn(arg0);
    }
  }
};
let tmp2 = obj;
if (!require("Timing")) {
  let _console = console;
  console.warn("Timing native module is not available, can't set timers.");
  obj = {};
  ({ callReactNativeMicrotasks: obj2.callReactNativeMicrotasks, queueReactNativeMicrotask: obj2.queueReactNativeMicrotask } = obj);
  tmp2 = obj;
}
const result = require("MessageQueue").default.setReactNativeMicrotasksCallback(obj.callReactNativeMicrotasks);
global._flushReactNativeMicrotasks = () => obj.callReactNativeMicrotasks();

export default tmp2;
