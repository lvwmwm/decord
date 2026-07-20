// Module ID: 274
// Function ID: 3408
// Name: push
// Dependencies: []

// Module 274 (push)
function push(arr) {
  let length = arr.length;
  arr.push(arg1);
  if (0 < length) {
    while (0 < compare(arr[length - 1 >>> 1], arg1)) {
      arr[tmp2] = arg1;
      arr[length] = tmp3;
      length = tmp2;
      if (0 >= tmp2) {
        break;
      }
    }
  }
}
function peek(arg0) {
  let first = null;
  if (0 !== arg0.length) {
    first = arg0[0];
  }
  return first;
}
function pop(arr) {
  if (0 === arr.length) {
    return null;
  } else {
    const first = arr[0];
    arr = arr.pop();
    if (arr !== first) {
      arr[0] = arr;
      let num = 0;
      if (0 < arr.length >>> 1) {
        while (true) {
          let diff = 2 * (num + 1) - 1;
          let tmp2 = arr[diff];
          let sum = diff + 1;
          let tmp4 = arr[sum];
          let tmp5 = compare;
          if (0 > compare(tmp2, arr)) {
            if (sum < length) {
              let tmp8 = compare;
              if (0 > compare(tmp4, tmp2)) {
                arr[num] = tmp4;
                arr[sum] = arr;
                let tmp7 = sum;
                num = tmp7;
                if (tmp7 >= tmp12) {
                  break;
                }
              }
            }
            arr[num] = tmp2;
            arr[diff] = arr;
            tmp7 = diff;
          } else if (sum >= length) {
            break;
          } else {
            let tmp6 = compare;
            if (0 <= compare(tmp4, arr)) {
              break;
            } else {
              arr[num] = tmp4;
              arr[sum] = arr;
              tmp7 = sum;
            }
          }
          break;
        }
      }
    }
    return first;
  }
}
function compare(sortIndex, sortIndex2) {
  let diff = sortIndex.sortIndex - sortIndex2.sortIndex;
  if (0 === diff) {
    diff = sortIndex.id - sortIndex2.id;
  }
  return diff;
}
function advanceTimers(arg0) {
  let tmp = peek(closure_5);
  if (null !== tmp) {
    while (true) {
      if (null === tmp.callback) {
        let tmp8 = pop;
        let tmp9 = closure_5;
        let tmp10 = pop(closure_5);
        let tmp11 = peek;
        let tmp12 = closure_5;
        tmp = peek(closure_5);
        if (null === tmp) {
          break;
        }
      } else if (tmp.startTime > arg0) {
        break;
      } else {
        let tmp2 = pop;
        let tmp3 = closure_5;
        let tmp4 = pop(closure_5);
        tmp.sortIndex = tmp.expirationTime;
        let tmp5 = push;
        let tmp6 = closure_4;
        let tmp7 = push(closure_4, tmp);
      }
      break;
    }
  }
}
function handleTimeout(arg0) {
  let closure_11 = false;
  advanceTimers(arg0);
  if (!closure_10) {
    if (null !== peek(closure_4)) {
      closure_10 = true;
      if (!closure_17) {
        closure_17 = true;
        schedulePerformWorkUntilDeadline();
      }
    } else {
      const tmp7 = peek(closure_5);
      if (null !== tmp7) {
        requestHostTimeout(handleTimeout, tmp7.startTime - arg0);
      }
    }
  }
}
function shouldYieldToHost() {
  let tmp = closure_12;
  if (!closure_12) {
    tmp = 5 <= getCurrentTime() - closure_19;
  }
  return tmp;
}
function performWorkUntilDeadline() {
  let closure_17;
  let tmp18Result;
  let closure_12 = false;
  if (closure_17) {
    const tmp2 = getCurrentTime();
    let tmp3 = tmp2;
    let closure_19 = tmp2;
    let closure_10 = false;
    if (closure_11) {
      closure_11 = false;
      _clearTimeout(closure_18);
      closure_18 = -1;
    }
    let closure_9 = true;
    advanceTimers(tmp3);
    const tmp14 = peek(closure_4);
    let _null = tmp14;
    if (null !== tmp14) {
      if (_null.expirationTime <= tmp3) {
        while (true) {
          let tmp17 = _null;
          let callback = _null.callback;
          if ("function" === typeof callback) {
            let tmp22 = _null;
            _null.callback = null;
            let tmp23 = _null;
            let priorityLevel = _null.priorityLevel;
            let tmp24 = callback;
            let tmp25 = _null;
            let tmp26 = tmp3;
            tmp18Result = tmp18(_null.expirationTime <= tmp3);
            let tmp28 = tmp18Result;
            let tmp29 = getCurrentTime;
            tmp3 = getCurrentTime();
            if ("function" === typeof tmp18Result) {
              break;
            } else {
              let tmp30 = _null;
              let tmp31 = peek;
              let tmp32 = closure_4;
              if (_null === peek(closure_4)) {
                let tmp33 = pop;
                let tmp34 = closure_4;
                let tmp35 = pop(closure_4);
              }
              let tmp36 = advanceTimers;
              let tmp37 = tmp3;
              let tmp38 = advanceTimers(tmp3);
            }
          } else {
            let tmp19 = pop;
            let tmp20 = closure_4;
            let tmp21 = pop(closure_4);
          }
          let tmp39 = peek;
          let tmp40 = closure_4;
          let tmp41 = peek(closure_4);
          _null = tmp41;
          if (null !== tmp41) {
            let tmp42 = _null;
            let tmp43 = tmp3;
            if (_null.expirationTime <= tmp3) {
              continue;
            } else {
              let tmp62 = shouldYieldToHost;
              _null = null;
              let tmp56 = tmp8;
              priorityLevel = tmp8;
              closure_9 = false;
              let tmp57 = flag3;
              if (flag3) {
                let tmp58 = schedulePerformWorkUntilDeadline;
                let tmp59 = schedulePerformWorkUntilDeadline();
              } else {
                closure_17 = false;
              }
            }
          }
        }
        _null.callback = tmp18Result;
        advanceTimers(tmp3);
        let flag3 = true;
      }
    }
    if (null !== _null) {
      flag3 = true;
    } else {
      const tmp51 = peek(closure_5);
      if (null !== tmp51) {
        requestHostTimeout(handleTimeout, tmp51.startTime - tmp3);
      }
      flag3 = false;
    }
  }
}
function requestHostTimeout(handleTimeout, arg1) {
  const getCurrentTime = handleTimeout;
  let closure_18 = _setTimeout(() => {
    arg0(arg0());
  }, arg1);
}
function throwNotImplemented() {
  throw Error("Not implemented.");
}
if ("object" === typeof performance) {
  const _performance = performance;
  if ("function" === typeof performance.now) {
    const _performance2 = performance;
    const getCurrentTime2 = function getCurrentTime() {
      return performance.now();
    };
    let getCurrentTime = getCurrentTime2;
    getCurrentTime = getCurrentTime2;
  }
  let closure_4 = [];
  let closure_5 = [];
  let num = 1;
  let closure_6 = 1;
  let closure_7 = null;
  let num2 = 3;
  let closure_8 = 3;
  let closure_9 = false;
  let closure_10 = false;
  let closure_11 = false;
  let closure_12 = false;
  let _setTimeout = setTimeout;
  _setTimeout = null;
  if ("function" === typeof setTimeout) {
    _setTimeout = setTimeout;
  }
  let _clearTimeout = clearTimeout;
  _clearTimeout = null;
  if ("function" === typeof clearTimeout) {
    _clearTimeout = clearTimeout;
  }
  let _setImmediate = setImmediate;
  _setImmediate = null;
  if ("undefined" !== typeof setImmediate) {
    _setImmediate = setImmediate;
  }
  let closure_17 = false;
  let closure_18 = -1;
  let closure_19 = -1;
  if ("function" === typeof _setImmediate) {
    function schedulePerformWorkUntilDeadline() {
      _setImmediate(performWorkUntilDeadline);
    }
  } else {
    if ("undefined" !== typeof globalThis.MessageChannel) {
      const prototype = globalThis.MessageChannel.prototype;
      const messageChannel = new globalThis.MessageChannel();
      const port2 = messageChannel.port2;
      messageChannel.port1.onmessage = performWorkUntilDeadline;
      schedulePerformWorkUntilDeadline = function schedulePerformWorkUntilDeadline() {
        port2.postMessage(null);
      };
    } else {
      schedulePerformWorkUntilDeadline = function schedulePerformWorkUntilDeadline() {
        _setTimeout(performWorkUntilDeadline, 0);
      };
    }
  }
  let num4 = 2;
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num4 = globalThis.nativeRuntimeScheduler.unstable_UserBlockingPriority;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num2 = globalThis.nativeRuntimeScheduler.unstable_NormalPriority;
  }
  let num5 = 4;
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num5 = globalThis.nativeRuntimeScheduler.unstable_LowPriority;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num = globalThis.nativeRuntimeScheduler.unstable_ImmediatePriority;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    let unstable_scheduleCallback$1 = globalThis.nativeRuntimeScheduler.unstable_scheduleCallback;
  } else {
    unstable_scheduleCallback$1 = function unstable_scheduleCallback$1(priorityLevel, callback, delay) {
      const tmp = getCurrentTime();
      let tmp2 = tmp;
      if ("object" === typeof delay) {
        tmp2 = tmp;
        if (null !== delay) {
          delay = delay.delay;
          let sum = tmp;
          if ("number" === typeof delay) {
            sum = tmp;
            if (0 < delay) {
              sum = tmp + delay;
            }
          }
          tmp2 = sum;
        }
      }
      let num2 = -1;
      let num3 = -1;
      if (1 !== priorityLevel) {
        if (2 === priorityLevel) {
          num3 = 250;
        } else if (5 === priorityLevel) {
          num3 = 1073741823;
        } else {
          num3 = 4 === priorityLevel ? 10000 : 5000;
        }
      }
      const obj = { id: tmp5, callback, priorityLevel };
      let closure_6 = tmp5 + 1;
      obj.startTime = tmp2;
      const sum1 = tmp2 + num3;
      obj.expirationTime = sum1;
      obj.sortIndex = num2;
      if (tmp2 > tmp) {
        obj.sortIndex = tmp2;
        push(closure_5, obj);
        let tmp20 = null === peek(closure_4);
        if (tmp20) {
          tmp20 = obj === peek(closure_5);
        }
        if (tmp20) {
          if (closure_11) {
            _clearTimeout(closure_18);
            closure_18 = num2;
          } else {
            closure_11 = true;
          }
          num2 = requestHostTimeout;
          tmp2 = requestHostTimeout(handleTimeout, tmp2 - tmp);
        }
      } else {
        obj.sortIndex = sum1;
        push(closure_4, obj);
        let tmp10 = closure_10;
        if (!closure_10) {
          tmp10 = closure_9;
        }
        if (!tmp10) {
          closure_10 = true;
          if (!closure_17) {
            closure_17 = true;
            schedulePerformWorkUntilDeadline();
          }
        }
      }
      return obj;
    };
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    let unstable_cancelCallback$1 = globalThis.nativeRuntimeScheduler.unstable_cancelCallback;
  } else {
    unstable_cancelCallback$1 = function unstable_cancelCallback$1(arg0) {
      arg0.callback = null;
    };
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    let unstable_getCurrentPriorityLevel$1 = globalThis.nativeRuntimeScheduler.unstable_getCurrentPriorityLevel;
  } else {
    unstable_getCurrentPriorityLevel$1 = function unstable_getCurrentPriorityLevel$1() {
      return closure_8;
    };
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    shouldYieldToHost = globalThis.nativeRuntimeScheduler.unstable_shouldYield;
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    let requestPaint = globalThis.nativeRuntimeScheduler.unstable_requestPaint;
  } else {
    requestPaint = function requestPaint() {
      let closure_12 = true;
    };
  }
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    getCurrentTime = globalThis.nativeRuntimeScheduler.unstable_now;
  }
  let num6 = 5;
  if ("undefined" !== typeof globalThis.nativeRuntimeScheduler) {
    num6 = globalThis.nativeRuntimeScheduler.unstable_IdlePriority;
  }
  arg5.unstable_IdlePriority = num6;
  arg5.unstable_ImmediatePriority = num;
  arg5.unstable_LowPriority = num5;
  arg5.unstable_NormalPriority = num2;
  arg5.unstable_Profiling = null;
  arg5.unstable_UserBlockingPriority = num4;
  arg5.unstable_cancelCallback = unstable_cancelCallback$1;
  arg5.unstable_forceFrameRate = throwNotImplemented;
  arg5.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel$1;
  arg5.unstable_next = throwNotImplemented;
  arg5.unstable_now = getCurrentTime;
  arg5.unstable_requestPaint = requestPaint;
  arg5.unstable_runWithPriority = throwNotImplemented;
  arg5.unstable_scheduleCallback = unstable_scheduleCallback$1;
  arg5.unstable_shouldYield = shouldYieldToHost;
  arg5.unstable_wrapCallback = throwNotImplemented;
}
let closure_3 = Date.now();
getCurrentTime = function getCurrentTime() {
  return Date.now() - closure_3;
};
