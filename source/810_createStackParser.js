// Module ID: 810
// Function ID: 9079
// Name: createStackParser
// Dependencies: [65]
// Exports: getFramesFromEvent, getFunctionName, getVueInternalName, normalizeStackTracePath, stackParserFromStackParserOptions

// Module 810 (createStackParser)
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
        str = arr3;
        if (arr3.length > 1024) {
          str = arr3.slice(0, 1024);
        }
        let tmp = outer1_1;
        let tmp2 = str;
        let str2 = str;
        if (outer1_1.test(str)) {
          let tmp3 = outer1_1;
          str2 = str.replace(outer1_1, "$1");
        }
        let tmp4 = str2;
        if (str2.match(/\S*Error: /)) {
          num = num + 1;
          if (num >= parts.length) {
            break;
          }
        } else {
          let tmp5 = closure_0;
          let tmp6 = closure_0;
          for (const item10043 of closure_0) {
            let tmp7 = str2;
            let item10043Result = item10043(tmp4);
            if (item10043Result) {
              let tmp10 = items;
              let tmp11 = item10043Result;
              let arr = items.push(tmp9);
              obj.return();
              break;
            }
            continue;
          }
          let tmp13 = items;
          if (items.length >= 50 + num2) {
            break;
          }
        }
        break;
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
export const getVueInternalName = function getVueInternalName(__v_isVNode) {
  let str = "[VueViewModel]";
  if ("__v_isVNode" in __v_isVNode) {
    str = "[VueViewModel]";
    if (__v_isVNode.__v_isVNode) {
      str = "[VueVNode]";
    }
  }
  return str;
};
export const normalizeStackTracePath = function normalizeStackTracePath(nextResult) {
  let str = nextResult;
  if (null != nextResult) {
    str = nextResult;
    if (nextResult.startsWith("file://")) {
      str = nextResult.slice(7);
    }
  }
  let substr = str;
  if (tmp) {
    substr = str.slice(1);
  }
  return substr;
};
export const stackParserFromStackParserOptions = function stackParserFromStackParserOptions(arg0) {
  let applyResult = arg0;
  if (Array.isArray(arg0)) {
    applyResult = createStackParser.apply(undefined, _toConsumableArray(arg0));
  }
  return applyResult;
};
export { stripSentryFramesAndReverse };
