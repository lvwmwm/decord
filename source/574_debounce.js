// Module ID: 574
// Function ID: 6949
// Name: debounce
// Dependencies: []

// Module 574 (debounce)

export default function debounce(arg0, arg1, leading) {
  const require = arg0;
  let dependencyMap = arg1;
  function invokeFunc(arg0) {
    let closure_3;
    let closure_2;
    let closure_8 = arg0;
    const applyResult = arg0.apply(closure_3, closure_2);
    return applyResult;
  }
  function shouldInvoke(arg0) {
    const diff = arg0 - closure_7;
    let tmp2 = undefined === closure_7;
    if (!tmp2) {
      tmp2 = diff >= tmp;
    }
    if (!tmp2) {
      tmp2 = diff < 0;
    }
    if (!tmp2) {
      if (tmp4) {
        const tmp4 = arg0 - closure_8 >= tmp6Result;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }
  function timerExpired() {
    const tmp = arg0(tmp[2])();
    if (shouldInvoke(tmp)) {
      return trailingEdge(tmp);
    } else {
      const diff = tmp - (tmp - closure_7);
      let tmp8 = diff;
      if (tmp) {
        tmp8 = callback(diff, tmp6Result - (tmp - closure_8));
      }
      const timeout = setTimeout(timerExpired, tmp8);
    }
  }
  function trailingEdge(arg0) {
    let closure_6;
    if (flag) {
      if (closure_2) {
        let tmp2 = invokeFunc(arg0);
      }
      return tmp2;
    }
    let closure_3;
    closure_2 = undefined;
    tmp2 = closure_5;
  }
  function debounced() {
    const tmp = arg0(tmp[2])();
    let closure_2 = arguments;
    const self = this;
    if (shouldInvoke(tmp)) {
      if (undefined === timeout) {
        let closure_8 = tmp;
        const _setTimeout3 = setTimeout;
        let timeout = setTimeout(timerExpired, tmp);
        if (leading) {
          let tmp19 = invokeFunc(tmp);
        } else {
          tmp19 = closure_5;
        }
        return tmp19;
      } else if (tmp4) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(timerExpired, tmp);
        return invokeFunc(tmp);
      }
    }
    if (undefined === timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(timerExpired, tmp);
    }
    return closure_5;
  }
  let closure_8 = 0;
  leading = false;
  let tmp4 = false;
  let flag = true;
  if ("function" !== typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    const tmp = require(dependencyMap[0])(arg1) || 0;
    dependencyMap = tmp;
    if (require(dependencyMap[1])(leading)) {
      leading = leading.leading;
      tmp4 = "maxWait" in leading;
      let tmp6Result;
      if (tmp4) {
        tmp6Result = max(require(dependencyMap[0])(leading.maxWait) || 0, tmp);
        const tmp6 = max;
        const tmp9 = require(dependencyMap[0])(leading.maxWait) || 0;
      }
      flag = true;
      if ("trailing" in leading) {
        flag = leading.trailing;
      }
    }
    debounced.cancel = function cancel() {
      if (undefined !== closure_6) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_6);
      }
      let closure_8 = 0;
      closure_6 = undefined;
      let closure_3;
      let closure_7;
      let closure_2;
    };
    debounced.flush = function flush() {
      if (undefined === closure_6) {
        let tmp4 = closure_5;
      } else {
        tmp4 = trailingEdge(arg0(tmp[2])());
      }
      return tmp4;
    };
    return debounced;
  }
};
