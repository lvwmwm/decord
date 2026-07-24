// Module ID: 7239
// Function ID: 58303
// Name: createStackParser
// Dependencies: [65]
// Exports: getFramesFromEvent, getFunctionName, stackParserFromStackParserOptions

// Module 7239 (createStackParser)
import _toConsumableArray from "_toConsumableArray";

function createStackParser() {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  const sorted = array.sort((arg0, arg1) => arg0[0] - arg1[0]);
  let closure_0 = sorted.map((arg0) => arg0[1]);
  return (str) => {
    let num = 0;
    if (arguments.length > 1) {
      num = 0;
      if (undefined !== arguments[1]) {
        num = arguments[1];
      }
    }
    let num2 = 0;
    if (arguments.length > 2) {
      num2 = 0;
      if (undefined !== arguments[2]) {
        num2 = arguments[2];
      }
    }
    const items = [];
    const parts = str.split("\n");
    if (num < parts.length) {
      while (true) {
        let arr3 = parts[num];
        if (arr3.length <= 1024) {
          let tmp12 = outer1_1;
          str = arr3;
          if (outer1_1.test(arr3)) {
            let tmp = outer1_1;
            str = arr3.replace(outer1_1, "$1");
          }
          let tmp2 = str;
          if (!str.match(/\S*Error: /)) {
            let tmp3 = closure_0;
            let tmp4 = closure_0;
            for (const item10036 of closure_0) {
              let tmp5 = str;
              let item10036Result = item10036(tmp2);
              if (item10036Result) {
                let tmp8 = items;
                let tmp9 = item10036Result;
                let arr = items.push(tmp7);
                obj.return();
                break;
              }
              continue;
            }
            let tmp11 = items;
            if (items.length >= 50 + num2) {
              break;
            }
          }
          break;
        }
        num = num + 1;
        if (num >= parts.length) {
          break;
        }
      }
    }
    return outer1_4(items.slice(num2));
  };
}
function stripSentryFramesAndReverse(arg0) {
  if (arg0.length) {
    const _Array = Array;
    let arr = Array.from(arg0);
    if (obj.test(tmp3)) {
      arr = arr.pop();
    }
    const reversed = arr.reverse();
    obj = /sentryWrapped/;
    tmp3 = getLastStackFrame(arr).function || "";
    if (regex.test(tmp8)) {
      arr = arr.pop();
      if (regex.test(tmp12)) {
        arr.pop();
      }
      tmp12 = getLastStackFrame(arr).function || "";
    }
    const substr = arr.slice(0, 50);
    return substr.map((filename) => {
      const obj = {};
      filename = filename.filename;
      if (!filename) {
        filename = outer1_5(arr).filename;
      }
      obj.filename = filename;
      obj.function = filename.function || "?";
      return Object.assign({}, filename, obj);
    });
  } else {
    return [];
  }
}
function getLastStackFrame(arg0) {
  return arg0[arg0.length - 1] || {};
}
const re1 = /\(error: (.*)\)/;
const re2 = /captureMessage|captureException/;

export const UNKNOWN_FUNCTION = "?";
export { createStackParser };
export const getFramesFromEvent = function getFramesFromEvent(exception) {
  exception = exception.exception;
  if (exception) {
    const items = [];
    const values = exception.values;
    const item = values.forEach((stacktrace) => {
      if (stacktrace.stacktrace.frames) {
        const push = items.push;
        push.apply(items, items(stacktrace.stacktrace.frames));
      }
    });
    return items;
  }
};
export const getFunctionName = function getFunctionName(name) {
  let tmp = name;
  if (name) {
    tmp = "function" === typeof name;
  }
  name = tmp;
  if (tmp) {
    name = name.name;
  }
  let str2 = name;
  if (!name) {
    str2 = "<anonymous>";
  }
  return str2;
};
export const stackParserFromStackParserOptions = function stackParserFromStackParserOptions(arg0) {
  let applyResult = arg0;
  if (Array.isArray(arg0)) {
    applyResult = createStackParser.apply(undefined, _toConsumableArray(arg0));
  }
  return applyResult;
};
export { stripSentryFramesAndReverse };
