// Module ID: 882
// Function ID: 9763
// Name: debounce
// Dependencies: []

// Module 882 (debounce)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.debounce = function debounce(arg0, arg1, maxWait) {
  function invokeFunc() {
    cancelTimers();
    const tmp2 = arg0();
    return tmp2;
  }
  function cancelTimers() {
    if (undefined !== closure_3) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_3);
    }
    if (undefined !== closure_4) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_4);
    }
    closure_4 = undefined;
    closure_3 = undefined;
  }
  function debounced() {
    if (closure_3) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_3);
    }
    closure_3 = setTimeoutImpl(invokeFunc, arg1);
    let tmp4 = num;
    if (num) {
      tmp4 = undefined === closure_4;
    }
    if (tmp4) {
      closure_4 = setTimeoutImpl(invokeFunc, num);
    }
    return closure_2;
  }
  let num = 0;
  if (null != maxWait) {
    num = 0;
    if (maxWait.maxWait) {
      const _Math = Math;
      num = Math.max(maxWait.maxWait, arg1);
    }
  }
  let setTimeoutImpl;
  if (null != maxWait) {
    setTimeoutImpl = maxWait.setTimeoutImpl;
  }
  if (!setTimeoutImpl) {
    setTimeoutImpl = setTimeout;
  }
  debounced.cancel = cancelTimers;
  debounced.flush = function flush() {
    if (undefined === closure_3) {
      if (undefined === closure_4) {
        let tmp2 = closure_2;
      }
      return tmp2;
    }
    tmp2 = invokeFunc();
  };
  return debounced;
};
