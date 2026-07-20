// Module ID: 14500
// Function ID: 109206
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getUseStateFromStoresDebuggingEnabled, getUseStateFromStoresExecutionCountWarningThreshold, getUseStateFromStoresExecutionTimeWarningThresholdMs, getUseStateFromStoresExecutionWindowThresholdMs, getUseStateFromStoresHookInfo, getUseStateFromStoresSpecificHookFilter, setUseStateFromStoresDebuggingEnabled, setUseStateFromStoresExecutionCountWarningThreshold, setUseStateFromStoresExecutionTimeWarningThresholdMs, setUseStateFromStoresExecutionWindowThresholdMs, setUseStateFromStoresSpecificHookFilter, trackGetStateFromStoresPerformance

// Module 14500 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    if ("" === closure_7) {
      logger.log("No violators found");
    }
    const tmp12 = _createForOfIteratorHelperLoose(map);
    let iter4 = tmp12();
    if (!iter4.done) {
      do {
        let tmp13 = closure_2;
        let tmp14 = closure_2(iter4.value, 2);
        let first1 = tmp14[0];
        let tmp16 = tmp14[1];
        tmp16.warned = false;
        tmp16.execTime = 0;
        tmp16.execCount = 0;
        let iter5 = tmp12();
        iter4 = iter5;
        done = iter5.done;
      } while (!done);
    }
  }
  printViolators();
}
let closure_2 = importDefault(dependencyMap[0]);
const logger = new arg1(dependencyMap[1]).Logger("useStateFromStores");
let closure_4 = getUseStateFromStoresExecutionWindowThresholdMs();
let closure_5 = getUseStateFromStoresExecutionTimeWarningThresholdMs();
let closure_6 = getUseStateFromStoresExecutionCountWarningThreshold();
let closure_7 = getUseStateFromStoresSpecificHookFilter();
const useStateFromStoresDebuggingEnabled = getUseStateFromStoresDebuggingEnabled();
let interval;
if (useStateFromStoresDebuggingEnabled) {
  const _setInterval = setInterval;
  interval = setInterval(flushViolators, closure_4);
}
const map = new Map();
function printViolators() {
  let iter2;
  let obj;
  let tmp12;
  let num = arg0;
  let num2 = arg1;
  let num3 = arg2;
  let sum = arg3;
  if (arg0 === undefined) {
    num = 34;
  }
  if (num2 === undefined) {
    num2 = 20;
  }
  if (num3 === undefined) {
    num3 = 20;
  }
  if (sum === undefined) {
    sum = num + num2 + num3 + 6;
  }
  logger.log(`${"|".padEnd(tmp, "-")}|`);
  logger.log(`${"| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(tmp, " ")}|`);
  logger.log(`${"|".padEnd(tmp, "-")}|`);
  const padEndResult = "Function/Component Name".padEnd(num, " ");
  logger.log("| " + padEndResult + "| " + "Total Exec Time".padEnd(num2, " ") + "| " + "Total Exec Count".padEnd(num3, " ") + "|");
  logger.log(`${"|".padEnd(tmp, "-")}|`);
  const tmp9 = _createForOfIteratorHelperLoose(map);
  let iter = tmp9();
  if (!iter.done) {
    do {
      let tmp10 = closure_2;
      let tmp11 = closure_2(iter.value, 2);
      [obj, tmp12] = tmp11;
      let tmp13 = closure_7;
      let tmp14 = "" !== closure_7;
      if (tmp14) {
        let tmp15 = closure_7;
        tmp14 = obj === closure_7;
      }
      if (!tmp14) {
        let tmp16 = closure_14;
        tmp14 = closure_14(tmp12);
      }
      if (tmp14) {
        let tmp17 = closure_3;
        let padEndResult2 = obj.padEnd(num, " ");
        let execTime = tmp12.execTime;
        let text = `${execTime.toFixed(2)}ms`;
        let str = tmp12.execCount;
        let padEndResult3 = `${execTime.toFixed(2)}ms`.padEnd(num2, " ");
        str = str.toString();
        let _HermesInternal = HermesInternal;
        let str2 = "| ";
        let tmp21 = padEndResult2;
        let str3 = "| ";
        let str4 = "| ";
        let str5 = "|";
        let logResult5 = closure_3.log("| " + padEndResult2 + "| " + padEndResult3 + "| " + str.padEnd(num3, " ") + "|");
      }
      iter2 = tmp9();
      iter = iter2;
    } while (!iter2.done);
  }
  logger.log(`${"|".padEnd(tmp, "-")}|`);
}
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx");

export { getUseStateFromStoresExecutionWindowThresholdMs };
export const setUseStateFromStoresExecutionWindowThresholdMs = function setUseStateFromStoresExecutionWindowThresholdMs(arg0) {
  let closure_4 = arg0;
  const Storage = arg1(dependencyMap[2]).Storage;
  const result = Storage.set("useStateFromStoresExecutionWindowThresholdMs", arg0);
  clearInterval(interval);
  if (useStateFromStoresDebuggingEnabled) {
    const _setInterval = setInterval;
    const interval = setInterval(flushViolators, closure_4);
  }
};
export { getUseStateFromStoresExecutionTimeWarningThresholdMs };
export const setUseStateFromStoresExecutionTimeWarningThresholdMs = function setUseStateFromStoresExecutionTimeWarningThresholdMs(arg0) {
  let closure_5 = arg0;
  const Storage = arg1(dependencyMap[2]).Storage;
  const result = Storage.set("useStateFromStoresExecutionTimeWarningThresholdMs", arg0);
};
export { getUseStateFromStoresExecutionCountWarningThreshold };
export const setUseStateFromStoresExecutionCountWarningThreshold = function setUseStateFromStoresExecutionCountWarningThreshold(arg0) {
  let closure_6 = arg0;
  const Storage = arg1(dependencyMap[2]).Storage;
  const result = Storage.set("useStateFromStoresExecutionCountWarningThreshold", arg0);
};
export const setUseStateFromStoresSpecificHookFilter = function setUseStateFromStoresSpecificHookFilter(first1) {
  let closure_7 = first1;
  const Storage = arg1(dependencyMap[2]).Storage;
  const result = Storage.set("useStateFromStoresSpecificHookFilter", first1);
};
export { getUseStateFromStoresSpecificHookFilter };
export { getUseStateFromStoresDebuggingEnabled };
export const setUseStateFromStoresDebuggingEnabled = function setUseStateFromStoresDebuggingEnabled(first) {
  const useStateFromStoresDebuggingEnabled = first;
  const Storage = arg1(dependencyMap[2]).Storage;
  const result = Storage.set("useStateFromStoresDebuggingEnabled", first);
  if (useStateFromStoresDebuggingEnabled) {
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
      const obj = { name: str8 };
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
