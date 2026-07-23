// Module ID: 574
// Function ID: 6949
// Name: debounce
// Dependencies: [575, 573, 586]

// Module 574 (debounce)

export default function debounce(arg0, arg1, leading) {
  const _require = arg0;
  let dependencyMap = arg1;
  function invokeFunc(arg0) {
    let c3;
    let c2;
    let closure_8 = arg0;
    const applyResult = callback.apply(c3, c2);
    return applyResult;
  }
  function shouldInvoke(arg0) {
    const diff = arg0 - closure_7;
    let tmp2 = undefined === closure_7;
    if (!tmp2) {
      tmp2 = diff >= closure_1;
    }
    if (!tmp2) {
      tmp2 = diff < 0;
    }
    if (!tmp2) {
      let tmp4 = c10;
      if (c10) {
        tmp4 = arg0 - c8 >= closure_4;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }
  function timerExpired() {
    const tmp = callback(586)();
    if (shouldInvoke(tmp)) {
      return trailingEdge(tmp);
    } else {
      const diff = dependencyMap - (tmp - closure_7);
      let tmp8 = diff;
      if (c10) {
        tmp8 = outer1_3(diff, closure_4 - (tmp - c8));
      }
      const timeout = setTimeout(timerExpired, tmp8);
    }
  }
  function trailingEdge(arg0) {
    let c6;
    if (flag) {
      if (c2) {
        let tmp2 = invokeFunc(arg0);
      }
      return tmp2;
    }
    let c3;
    c2 = undefined;
    tmp2 = closure_5;
  }
  function debounced() {
    const tmp = callback(586)();
    let closure_2 = arguments;
    const self = this;
    let closure_7 = tmp;
    if (shouldInvoke(tmp)) {
      if (undefined === timeout) {
        let closure_8 = closure_7;
        const _setTimeout3 = setTimeout;
        timeout = setTimeout(timerExpired, dependencyMap);
        if (leading) {
          let tmp19 = invokeFunc(closure_7);
        } else {
          tmp19 = closure_5;
        }
        return tmp19;
      } else if (c10) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(timerExpired, dependencyMap);
        return invokeFunc(closure_7);
      }
    }
    if (undefined === timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(timerExpired, dependencyMap);
    }
    return closure_5;
  }
  let c8 = 0;
  leading = false;
  let c10 = false;
  let flag = true;
  if ("function" !== typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let tmp = _require(575)(arg1) || 0;
    dependencyMap = tmp;
    if (_require(573)(leading)) {
      leading = leading.leading;
      c10 = tmp4;
      let tmp6Result;
      if ("maxWait" in leading) {
        tmp6Result = max(_require(575)(leading.maxWait) || 0, tmp);
        const tmp6 = max;
        const tmp9 = _require(575)(leading.maxWait) || 0;
      }
      let closure_4 = tmp6Result;
      flag = true;
      if ("trailing" in leading) {
        flag = leading.trailing;
      }
    }
    debounced.cancel = function cancel() {
      if (undefined !== c6) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c6);
      }
      let c8 = 0;
      c6 = undefined;
      let c3;
      let c7;
      let c2;
    };
    debounced.flush = function flush() {
      if (undefined === closure_6) {
        let tmp4 = closure_5;
      } else {
        tmp4 = trailingEdge(callback(586)());
      }
      return tmp4;
    };
    return debounced;
  }
};
