// Module ID: 1366
// Function ID: 16383
// Name: inspect
// Dependencies: []
// Exports: _extend, callbackify, debuglog, deprecate, format, isNullOrUndefined, isPrimitive, isSymbol, log, promisify

// Module 1366 (inspect)
function inspect(arg0, showHidden) {
  const obj = { seen: [], stylize: stylizeNoColor };
  if (arguments.length >= 3) {
    obj.depth = arguments[2];
  }
  if (arguments.length >= 4) {
    obj.colors = arguments[3];
  }
  if (isBoolean(showHidden)) {
    obj.showHidden = showHidden;
  } else if (showHidden) {
    exports._extend(obj, showHidden);
  }
  if (isUndefined(obj.showHidden)) {
    obj.showHidden = false;
  }
  if (isUndefined(obj.depth)) {
    obj.depth = 2;
  }
  if (isUndefined(obj.colors)) {
    obj.colors = false;
  }
  if (isUndefined(obj.customInspect)) {
    obj.customInspect = true;
  }
  if (obj.colors) {
    obj.stylize = stylizeWithColor;
  }
  return formatValue(obj, arg0, obj.depth);
}
function stylizeWithColor(arg0, arg1) {
  let text = arg0;
  if (inspect.styles[arg1]) {
    text = `${"\u001B[" + closure_7.colors[tmp][0] + "m" + arg0 + "\u001B[" + closure_7.colors[tmp][1]}m`;
  }
  return text;
}
function stylizeNoColor(arg0, arg1) {
  return arg0;
}
function formatValue(customInspect, inspect) {
  const exports = customInspect;
  let closure_1 = inspect;
  let closure_2 = arg2;
  if (customInspect.customInspect) {
    if (inspect) {
      if (isFunction(inspect.inspect)) {
        if (inspect.inspect !== exports.inspect) {
          const inspectResult = inspect.inspect(arg2, customInspect);
          let tmp39 = inspectResult;
          if (!isString(inspectResult)) {
            tmp39 = formatValue(customInspect, inspectResult, arg2);
          }
          return tmp39;
        }
      }
    }
  }
  if (isUndefined(inspect)) {
    let stylizeResult = customInspect.stylize("undefined", "undefined");
  } else if (isString(inspect)) {
    const _JSON = JSON;
    const str4 = JSON.stringify(inspect);
    const str6 = JSON.stringify(inspect).replace(/^"|"$/g, "");
    stylizeResult = customInspect.stylize(`'${JSON.stringify(inspect).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"")}'`, "string");
    const str8 = JSON.stringify(inspect).replace(/^"|"$/g, "").replace(/'/g, "\\'");
  } else if (isNumber(inspect)) {
    stylizeResult = customInspect.stylize("" + inspect, "number");
  } else if (isBoolean(inspect)) {
    stylizeResult = customInspect.stylize("" + inspect, "boolean");
  } else if (isNull(inspect)) {
    stylizeResult = customInspect.stylize("null", "null");
  }
  if (stylizeResult) {
    return stylizeResult;
  } else {
    const _Object = Object;
    const keys = Object.keys(inspect);
    const tmp11 = function arrayToHash(keys) {
      const obj = {};
      keys = obj;
      const item = keys.forEach((arg0, arg1) => {
        obj[arg0] = true;
      });
      return obj;
    }(keys);
    let closure_3 = tmp11;
    let ownPropertyNames = keys;
    if (customInspect.showHidden) {
      const _Object2 = Object;
      ownPropertyNames = Object.getOwnPropertyNames(inspect);
    }
    if (isError(inspect)) {
      return formatError(inspect);
    }
    if (0 === ownPropertyNames.length) {
      if (isFunction(inspect)) {
        let str27 = "";
        if (inspect.name) {
          str27 = `: ${inspect.name}`;
        }
        return customInspect.stylize("[Function" + str27 + "]", "special");
      } else if (isRegExp(inspect)) {
        const _RegExp3 = RegExp;
        return customInspect.stylize(toString4.call(inspect), "regexp");
      } else if (isDate(inspect)) {
        const _Date2 = Date;
        return customInspect.stylize(toString3.call(inspect), "date");
      } else if (isError(inspect)) {
        return formatError(inspect);
      }
    }
    let flag = false;
    let closure_4 = false;
    let items = [null, "borderRadius"];
    if (isArray(inspect)) {
      closure_4 = true;
      items = [null, null];
      flag = true;
    }
    let str14 = "";
    let str15 = "";
    if (isFunction(inspect)) {
      if (inspect.name) {
        str14 = `: ${inspect.name}`;
      }
      str15 = `${" [Function" + str14}]`;
    }
    if (isRegExp(inspect)) {
      const _RegExp = RegExp;
      str15 = ` ${toString.call(inspect)}`;
    }
    if (isDate(inspect)) {
      const _Date = Date;
      str15 = ` ${toUTCString.call(inspect)}`;
    }
    if (isError(inspect)) {
      str15 = ` ${closure_11(inspect)}`;
    }
    if (0 === ownPropertyNames.length) {
      return items[0] + str15 + items[1];
    }
    if (arg2 >= 0) {
      const seen = customInspect.seen;
      seen.push(inspect);
      if (flag) {
        let mapped = function formatArray(customInspect, inspect, arg2, arg3, ownPropertyNames) {
          const items = [];
          let closure_4 = items;
          for (let num = 0; num < length; num = num + 1) {
            let tmp = callback2;
            let _String = String;
            let push = items.push;
            let tmp2 = num;
            if (callback2(inspect, String(num))) {
              let tmp4 = callback;
              let _String2 = String;
              let tmp5 = customInspect;
              let tmp6 = inspect;
              let tmp7 = arg2;
              let tmp8 = arg3;
              let flag = true;
              let arr = push(callback(customInspect, inspect, arg2, arg3, String(num), true));
            } else {
              arr = push("");
            }
          }
          const item = ownPropertyNames.forEach((str) => {
            if (!str.match(/^\d+$/)) {
              items.push(callback(str, arg1, arg2, arg3, str, true));
            }
          });
          return items;
        }(customInspect, inspect, arg2, tmp11, ownPropertyNames);
      } else {
        mapped = ownPropertyNames.map((arg0) => callback(arg0, arg1, arg2, tmp11, arg0, closure_4));
      }
      const seen1 = customInspect.seen;
      seen1.pop();
      function reduceToSingleString(mapped, arg1, items) {
        if (mapped.reduce((arg0, arr) => {
          arr.indexOf("\n") >= 0;
          return arg0 + arr.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60) {
          let str3 = "";
          if ("" !== arg1) {
            str3 = `${arg1}
         `;
          }
          const sum = items[0] + str3;
          return sum + " " + mapped.join(",\n  ") + " " + items[1];
        } else {
          const sum1 = items[0] + arg1;
          return sum1 + " " + mapped.join(", ") + " " + items[1];
        }
      }(mapped, str15, items);
    }
    const stylize = customInspect.stylize;
    if (isRegExp(inspect)) {
      const _RegExp2 = RegExp;
      let stylizeResult1 = stylize(toString2.call(inspect), "regexp");
    } else {
      stylizeResult1 = stylize("[Object]", "special");
    }
  }
}
function formatError(arg0) {
  return "[" + toString.call(arg0) + "]";
}
function formatProperty(stylize, arg1, arg2, arg3, str) {
  let num = arg2;
  let iter = Object.getOwnPropertyDescriptor(arg1, str);
  if (!iter) {
    const obj = { value: arg1[str] };
    iter = obj;
  }
  if (iter.get) {
    stylize = stylize.stylize;
    if (set) {
      let stylizeResult = stylize("[Getter/Setter]", "special");
    } else {
      stylizeResult = stylize("[Getter]", "special");
    }
  } else {
    let stylizeResult1;
    if (set) {
      stylizeResult1 = stylize.stylize("[Setter]", "special");
    }
    if (!hasOwnProperty(arg3, str)) {
      let text = `${"[" + str}]`;
    }
    if (stylizeResult1) {
      if (isUndefined(text)) {
        if (arg5) {
          if (str.match(/^\d+$/)) {
            return stylizeResult1;
          }
        }
        const _JSON = JSON;
        const str12 = JSON.stringify("" + str);
        if (str12.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          text = stylize.stylize(str12.slice(1, -1), "name");
        } else {
          const str14 = str12.replace(/'/g, "\\'");
          text = stylize.stylize(str12.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'"), "string");
          const str16 = str12.replace(/'/g, "\\'").replace(/\\"/g, "\"");
        }
      }
      return text + ": " + stylizeResult1;
    } else {
      const seen = stylize.seen;
      if (seen.indexOf(iter.value) < 0) {
        const value = iter.value;
        if (isNull(num)) {
          let tmp9Result = tmp9(stylize, value, null);
        } else {
          tmp9Result = tmp9(stylize, value, num - 1);
        }
        let str11 = "\n";
        num = -1;
        iter = tmp9Result;
        if (tmp9Result.indexOf("\n") <= -1) {
          let stylizeResult2 = iter;
        } else {
          const parts = iter.split(`
  `);
          let slice = parts.map;
          if (arg5) {
            const substr = slice((arg0) => "  " + arg0);
            str11 = substr.join(`
  `);
            slice = str11.slice;
            let substr1 = slice(2);
          } else {
            const substr2 = slice((arg0) => "   " + arg0);
            substr1 = str11 + substr2.join(str11);
          }
        }
      } else {
        stylizeResult2 = stylize.stylize("[Circular]", "special");
      }
    }
  }
}
function isArray(arg0) {
  return Array.isArray(arg0);
}
function isBoolean(arg0) {
  return "boolean" === typeof arg0;
}
function isNull(arg0) {
  return null === arg0;
}
function isNumber(arg0) {
  return "number" === typeof arg0;
}
function isString(arg0) {
  return "string" === typeof arg0;
}
function isUndefined(arg0) {
  return undefined === arg0;
}
function isRegExp(arg0) {
  let tmp = isObject(arg0);
  if (tmp) {
    tmp = "[object RegExp]" === objectToString(arg0);
  }
  return tmp;
}
function isObject(arg0) {
  let tmp = "object" === typeof arg0;
  if (tmp) {
    tmp = null !== arg0;
  }
  return tmp;
}
function isDate(arg0) {
  let tmp = isObject(arg0);
  if (tmp) {
    tmp = "[object Date]" === objectToString(arg0);
  }
  return tmp;
}
function isError(arg0) {
  let tmp = isObject(arg0);
  if (tmp) {
    let tmp3 = "[object Error]" === objectToString(arg0);
    if (!tmp3) {
      const _Error = Error;
      tmp3 = arg0 instanceof Error;
    }
    tmp = tmp3;
  }
  return tmp;
}
function isFunction(arg0) {
  return "function" === typeof arg0;
}
function objectToString(arg0) {
  return toString.call(arg0);
}
function pad(arg0) {
  if (arg0 < 10) {
    let text = `0${arg0.toString(10)}`;
  } else {
    text = arg0.toString(10);
  }
  return text;
}
function hasOwnProperty(arg0, arg1) {
  return hasOwnProperty.call(arg0, arg1);
}
function callbackifyOnRejected(reason) {
  let tmp = reason;
  if (!reason) {
    const _Error = Error;
    const error = new Error("Promise was rejected with a falsy value");
    error.reason = reason;
    tmp = error;
  }
  return arg1(tmp);
}
let closure_1 = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(arg0) {
  let length;
  const keys = Object.keys(arg0);
  const obj = {};
  let num = 0;
  if (0 < keys.length) {
    do {
      let _Object = Object;
      obj[keys[num]] = Object.getOwnPropertyDescriptor(arg0, keys[num]);
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
  return obj;
};
let closure_2 = /%[sdj%]/g;
let closure_3 = {};
let regExp = /^$/;
if (process.env.NODE_DEBUG) {
  const _process = process;
  const str = process.env.NODE_DEBUG;
  const str3 = process.env.NODE_DEBUG.replace(/[|\\{}()[\]^$+?.]/g, "\\$&");
  const str5 = process.env.NODE_DEBUG.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*");
  const _RegExp = RegExp;
  regExp = new RegExp("^" + process.env.NODE_DEBUG.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase() + "$", "i");
  const str7 = process.env.NODE_DEBUG.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
}
inspect.colors = { bold: [null, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008759466039198], italic: [], underline: [], inverse: [], white: [], grey: [], black: [], blue: [], cyan: [], green: [null, null], magenta: [], red: [], yellow: ["body", "lick"] };
inspect.styles = { variant: "y", tabularNumbers: "LastReceivedChangelogId", variant: "HighlightsOff", grow: "HighlightsOff", shrink: "CTA", size: "RowType", placeholder: "isArray", onChange: "isArray" };
exports.types.isRegExp = isRegExp;
exports.types.isDate = isDate;
exports.types.isNativeError = isError;
let closure_5 = ["tongue", null, null, null, null, null, null, null, null, null, null, null];
let SymbolResult;
if ("undefined" !== typeof Symbol) {
  const _Symbol = Symbol;
  SymbolResult = Symbol("util.promisify.custom");
}
exports.promisify.custom = SymbolResult;

export const format = (arg0) => {
  let length;
  let sum1;
  if (isString(arg0)) {
    let closure_0 = 1;
    let closure_1 = arguments;
    const length2 = arguments.length;
    let closure_2 = length2;
    const _String = String;
    let replaced = String(arg0).replace(closure_2, (arg0) => {
      if ("%%" === arg0) {
        return "%";
      } else if (closure_0 >= length2) {
        return arg0;
      } else if ("%s" === arg0) {
        const _String = String;
        closure_0 = tmp12 + 1;
        return String(closure_1[+closure_0]);
      } else if ("%d" === arg0) {
        const _Number = Number;
        closure_0 = tmp8 + 1;
        return Number(closure_1[+closure_0]);
      } else if ("%j" === arg0) {
        const _JSON = JSON;
        closure_0 = tmp4 + 1;
        return JSON.stringify(closure_1[+closure_0]);
      } else {
        return arg0;
      }
    });
    let tmp12 = arguments[closure_0];
    let tmp14 = replaced;
    if (closure_0 < length2) {
      while (true) {
        let tmp15 = isNull;
        let tmp16 = tmp12;
        if (!isNull(tmp12)) {
          let tmp17 = isObject;
          if (isObject(tmp12)) {
            let tmp18 = inspect;
            let text = `${tmp10} ${closure_7(tmp12)}`;
          }
          let tmp20 = closure_0;
          let sum = closure_0 + 1;
          closure_0 = sum;
          tmp12 = arguments[sum];
          let tmp22 = closure_0;
          replaced = text;
          tmp14 = text;
          if (closure_0 >= length2) {
            break;
          }
        }
        text = `${tmp10} ${tmp12}`;
      }
    }
    return tmp14;
  } else {
    const items = [];
    closure_0 = 0;
    if (0 < arguments.length) {
      do {
        let tmp = closure_7;
        let tmp2 = closure_0;
        let arr = items.push(closure_7(arguments[closure_0]));
        let tmp4 = closure_0;
        sum1 = closure_0 + 1;
        closure_0 = sum1;
        length = arguments.length;
      } while (sum1 < length);
    }
    return items.join(" ");
  }
};
export const deprecate = (arg0, arg1) => {
  const exports = arg0;
  let closure_1 = arg1;
  if ("undefined" !== typeof process) {
    const _process = process;
    if (true === process.noDeprecation) {
      return arg0;
    }
  }
  if ("undefined" === typeof process) {
    return function() {
      return arg0.deprecate(arg0, arg1)(...arguments);
    };
  } else {
    let closure_2 = false;
    return function deprecated() {
      if (!closure_2) {
        const _process = process;
        if (process.throwDeprecation) {
          const _Error = Error;
          const error = new Error(arg1);
          throw error;
        } else {
          const _process2 = process;
          const _console = console;
          if (process.traceDeprecation) {
            _console.trace(arg1);
          } else {
            _console.error(arg1);
          }
          closure_2 = true;
        }
      }
      return arg0(...arguments);
    };
  }
};
export const debuglog = (str) => {
  const formatted = str.toUpperCase();
  const exports = formatted;
  if (!closure_3[formatted]) {
    if (regExp.test(formatted)) {
      const _process = process;
      closure_3[formatted] = () => {
        const format = formatted.format;
        console.error("%s %d: %s", formatted, pid, format(...arguments));
      };
    } else {
      closure_3[formatted] = () => {

      };
    }
  }
  return closure_3[formatted];
};
export { inspect };
export const types = require(dependencyMap[0]);
export { isArray };
export { isBoolean };
export { isNull };
export const isNullOrUndefined = function isNullOrUndefined(arg0) {
  return null == arg0;
};
export { isNumber };
export { isString };
export function isSymbol(arg0) {
  return "symbol" === typeof arg0;
}
export { isUndefined };
export { isRegExp };
export { isObject };
export { isDate };
export { isError };
export { isFunction };
export function isPrimitive(arg0) {
  let tmp = null === arg0;
  if (!tmp) {
    tmp = "boolean" === typeof arg0;
  }
  if (!tmp) {
    tmp = "number" === typeof arg0;
  }
  if (!tmp) {
    tmp = "string" === typeof arg0;
  }
  if (!tmp) {
    tmp = "symbol" === typeof arg0;
  }
  if (!tmp) {
    tmp = undefined === arg0;
  }
  return tmp;
}
export const isBuffer = require(dependencyMap[1]);
export const log = () => {
  const date = new Date();
  const items = [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())];
  const joined = items.join(":");
  const items1 = [date.getDate(), closure_5[date.getMonth(date)], joined];
  const format = exports.format;
  const joined1 = items1.join(" ");
  console.log("%s - %s", joined1, format(...arguments));
};
export const inherits = require(dependencyMap[2]);
export const _extend = (arg0, arg1) => {
  let tmp5;
  if (arg1) {
    if (isObject(arg1)) {
      const _Object = Object;
      const keys = Object.keys(arg1);
      let diff = tmp3 - 1;
      if (+keys.length) {
        do {
          arg0[keys[diff]] = arg1[keys[diff]];
          tmp5 = +diff;
          diff = tmp5 - 1;
        } while (tmp5);
      }
      return arg0;
    }
  }
  return arg0;
};
export const promisify = function promisify(arg0) {
  const exports = arg0;
  const fn = function n() {
    let length;
    new Promise((arg0, arg1) => {

    });
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        let tmp2 = items;
        let arr = items.push(arguments[num]);
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    items.push((arg0, arg1) => {
      if (arg0) {
        callback2(arg0);
      } else {
        callback(arg1);
      }
    });
    arg0.apply(this, items);
  };
  if ("function" !== typeof arg0) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("The \"original\" argument must be of type Function");
    throw typeError;
  } else {
    if (SymbolResult) {
      if (arg0[closure_6]) {
        if ("function" !== typeof arg0[closure_6]) {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("The \"util.promisify.custom\" argument must be of type Function");
          throw typeError1;
        } else {
          const _Object5 = Object;
          let obj = { -9223372036854775808: "BACKGROUND", 0: "sanitizeWhitespace", -9223372036854775808: "ContentRatingGOPClassificationSets", 0: "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS", value: tmp9 };
          Object.defineProperty(tmp9, SymbolResult, obj);
          return tmp9;
        }
      }
    }
    const _Object = Object;
    const _Object2 = Object;
    Object.setPrototypeOf(fn, Object.getPrototypeOf(arg0));
    if (SymbolResult) {
      const _Object3 = Object;
      obj = { -9223372036854775808: "BACKGROUND", 0: "sanitizeWhitespace", -9223372036854775808: "ContentRatingGOPClassificationSets", 0: "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS", value: fn };
      Object.defineProperty(fn, SymbolResult, obj);
    }
    const _Object4 = Object;
    return Object.defineProperties(fn, callback(arg0));
  }
};
export const callbackify = function callbackify(arg0) {
  const exports = arg0;
  function callbackified() {
    let length;
    const self = this;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        let arr = items.push(arguments[num]);
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    arr = items.pop();
    const arg0 = arr;
    if ("function" !== typeof arr) {
      const _TypeError = TypeError;
      const typeError = new TypeError("The last argument must be of type Function");
      throw typeError;
    } else {
      function cb() {
        return arr(...arguments);
      }
      arg0.apply(self, items).then((queue) => {
        process.nextTick(cb.bind(null, null, queue));
      }, (closure_101) => {
        process.nextTick(callback.bind(null, closure_101, cb));
      });
    }
  }
  if ("function" !== typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("The \"original\" argument must be of type Function");
    throw typeError;
  } else {
    const _Object = Object;
    const _Object2 = Object;
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(arg0));
    const _Object3 = Object;
    Object.defineProperties(callbackified, callback(arg0));
    return callbackified;
  }
};
