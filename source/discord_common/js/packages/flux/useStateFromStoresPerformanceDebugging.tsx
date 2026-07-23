// Module ID: 14632
// Function ID: 111464
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4, 587, 2]
// Exports: getUseStateFromStoresDebuggingEnabled, getUseStateFromStoresExecutionCountWarningThreshold, getUseStateFromStoresExecutionTimeWarningThresholdMs, getUseStateFromStoresExecutionWindowThresholdMs, getUseStateFromStoresHookInfo, getUseStateFromStoresSpecificHookFilter, setUseStateFromStoresDebuggingEnabled, setUseStateFromStoresExecutionCountWarningThreshold, setUseStateFromStoresExecutionTimeWarningThresholdMs, setUseStateFromStoresExecutionWindowThresholdMs, setUseStateFromStoresSpecificHookFilter, trackGetStateFromStoresPerformance

// Module 14632 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getUseStateFromStoresExecutionWindowThresholdMs() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 60000;
  }
  return num;
}
function getUseStateFromStoresExecutionTimeWarningThresholdMs() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 10;
  }
  return num;
}
function getUseStateFromStoresExecutionCountWarningThreshold() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 1000;
  }
  return num;
}
function getUseStateFromStoresSpecificHookFilter() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "";
  }
  return str;
}
function getUseStateFromStoresDebuggingEnabled() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  return flag;
}
function hasExceededThreshold(name) {
  let tmp = "anonymous" !== name.name;
  if (tmp) {
    let tmp3 = "" === closure_7;
    if (!tmp3) {
      tmp3 = name.name === closure_7;
    }
    if (tmp3) {
      let tmp6 = name.execCount > closure_6;
      if (!tmp6) {
        tmp6 = name.execTime > closure_5;
      }
      tmp3 = tmp6;
    }
    tmp = tmp3;
  }
  return tmp;
}
function flushViolators() {
  let done;
  let iter5;
  let obj;
  let tmp19;
  const tmp = _createForOfIteratorHelperLoose(map);
  const iter = tmp();
  let iter2 = iter;
  let flag = false;
  if (!iter.done) {
    const tmp3 = callback(iter2.value, 2);
    const first = tmp3[0];
    flag = true;
    while (!hasExceededThreshold(tmp3[1])) {
      let iter3 = tmp();
      iter2 = iter3;
      flag = false;
      if (iter3.done) {
        break;
      }
    }
  }
  if (!flag) {
    let str = "";
    if ("" === closure_7) {
      logger.log("No violators found");
    }
    const tmp33 = _createForOfIteratorHelperLoose(map);
    let iter6 = tmp33();
    if (!iter6.done) {
      do {
        let tmp34 = callback;
        let tmp35 = callback(iter6.value, 2);
        let first1 = tmp35[0];
        let tmp37 = tmp35[1];
        tmp37.warned = false;
        tmp37.execTime = 0;
        tmp37.execCount = 0;
        let iter7 = tmp33();
        iter6 = iter7;
        done = iter7.done;
      } while (!done);
    }
  }
  logger.log(`${"|".padEnd(80, "-")}|`);
  logger.log(`${"| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(80, " ")}|`);
  logger.log(`${"|".padEnd(80, "-")}|`);
  const padEndResult = "Function/Component Name".padEnd(34, " ");
  logger.log("| " + padEndResult + "| " + "Total Exec Time".padEnd(20, " ") + "| " + "Total Exec Count".padEnd(20, " ") + "|");
  logger.log(`${"|".padEnd(80, "-")}|`);
  const tmp16 = _createForOfIteratorHelperLoose(map);
  let iter4 = tmp16();
  if (!iter4.done) {
    do {
      let tmp17 = callback;
      let tmp18 = callback(iter4.value, 2);
      [obj, tmp19] = tmp18;
      let tmp20 = closure_7;
      let tmp21 = "" !== closure_7;
      if (tmp21) {
        let tmp22 = closure_7;
        tmp21 = obj === closure_7;
      }
      if (!tmp21) {
        let tmp23 = hasExceededThreshold;
        tmp21 = hasExceededThreshold(tmp19);
      }
      if (tmp21) {
        let tmp24 = logger;
        let padEndResult2 = obj.padEnd(34, " ");
        let execTime = tmp19.execTime;
        let text = `${execTime.toFixed(2)}ms`;
        let str3 = tmp19.execCount;
        let padEndResult3 = `${execTime.toFixed(2)}ms`.padEnd(20, " ");
        str = str3.toString();
        let _HermesInternal = HermesInternal;
        let str4 = "| ";
        let tmp28 = padEndResult2;
        let str5 = "| ";
        let str6 = "| ";
        let str7 = "|";
        let logResult6 = logger.log("| " + padEndResult2 + "| " + padEndResult3 + "| " + str.padEnd(20, " ") + "|");
      }
      iter5 = tmp16();
      iter4 = iter5;
    } while (!iter5.done);
  }
  logger.log(`${"|".padEnd(80, "-")}|`);
}
const logger = new require("log").Logger("useStateFromStores");
let closure_4 = getUseStateFromStoresExecutionWindowThresholdMs();
let closure_5 = getUseStateFromStoresExecutionTimeWarningThresholdMs();
let closure_6 = getUseStateFromStoresExecutionCountWarningThreshold();
let closure_7 = getUseStateFromStoresSpecificHookFilter();
const useStateFromStoresDebuggingEnabled = getUseStateFromStoresDebuggingEnabled();
let interval;
if (useStateFromStoresDebuggingEnabled) {
  let _setInterval = setInterval;
  interval = setInterval(flushViolators, closure_4);
}
const map = new Map();
let result = require("Storage").fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx");

export { getUseStateFromStoresExecutionWindowThresholdMs };
export const setUseStateFromStoresExecutionWindowThresholdMs = function setUseStateFromStoresExecutionWindowThresholdMs(arg0) {
  let closure_4 = arg0;
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("useStateFromStoresExecutionWindowThresholdMs", arg0);
  clearInterval(interval);
  if (useStateFromStoresDebuggingEnabled) {
    const _setInterval = setInterval;
    interval = setInterval(flushViolators, closure_4);
  }
};
export { getUseStateFromStoresExecutionTimeWarningThresholdMs };
export const setUseStateFromStoresExecutionTimeWarningThresholdMs = function setUseStateFromStoresExecutionTimeWarningThresholdMs(arg0) {
  let closure_5 = arg0;
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("useStateFromStoresExecutionTimeWarningThresholdMs", arg0);
};
export { getUseStateFromStoresExecutionCountWarningThreshold };
export const setUseStateFromStoresExecutionCountWarningThreshold = function setUseStateFromStoresExecutionCountWarningThreshold(arg0) {
  let closure_6 = arg0;
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("useStateFromStoresExecutionCountWarningThreshold", arg0);
};
export const setUseStateFromStoresSpecificHookFilter = function setUseStateFromStoresSpecificHookFilter(first1) {
  let closure_7 = first1;
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("useStateFromStoresSpecificHookFilter", first1);
};
export { getUseStateFromStoresSpecificHookFilter };
export { getUseStateFromStoresDebuggingEnabled };
export const setUseStateFromStoresDebuggingEnabled = function setUseStateFromStoresDebuggingEnabled(first) {
  let closure_8 = first;
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("useStateFromStoresDebuggingEnabled", first);
  if (closure_8) {
    const _setInterval = setInterval;
    let interval = setInterval(flushViolators, closure_4);
  } else {
    const _clearInterval = clearInterval;
    clearInterval(interval);
    interval = undefined;
  }
};
export const getUseStateFromStoresHookInfo = function getUseStateFromStoresHookInfo() {
  if (useStateFromStoresDebuggingEnabled) {
    const _Error = Error;
    const error = new Error();
    let parts;
    if (null != error.stack) {
      parts = str.split("\n");
    }
    if (null == parts) {
      parts = [];
    }
    let num = 3;
    let str8 = "unknown";
    if (3 < parts.length) {
      while (true) {
        let str9 = parts[num];
        let str10 = str9.trim();
        let tmp7 = str10.split(" ")[1];
        if ("useStateFromStores" !== tmp7) {
          if ("useStateFromStoresArray" !== tmp7) {
            str8 = tmp7;
            if ("useStateFromStoresObject" !== tmp7) {
              break;
            }
          }
          break;
        }
        num = num + 1;
        str8 = "unknown";
        if (num >= parts.length) {
          break;
        }
      }
    }
    let value = map.get(str8);
    if (null == value) {
      const obj = { name: str8, execCount: 0, execTime: 0, warned: false };
      value = obj;
    }
    const result = map.set(str8, value);
    return value;
  }
};
export const trackGetStateFromStoresPerformance = function trackGetStateFromStoresPerformance(execTime) {
  if (useStateFromStoresDebuggingEnabled) {
    if (null != execTime) {
      const _performance = performance;
      const _performance2 = performance;
      const nowResult = performance.now();
      execTime.execTime = execTime.execTime + (performance.now() - nowResult);
      execTime.execCount = execTime.execCount + 1;
      if (false === execTime.warned) {
        if (hasExceededThreshold(execTime)) {
          execTime.warned = true;
          const _HermesInternal = HermesInternal;
          logger.log("" + execTime.name + " cumulatively used " + execTime.execTime + "ms of execution time and ran " + execTime.execCount + " times.");
        }
      }
      return arg1();
    }
  }
  return arg1();
};
