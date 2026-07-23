// Module ID: 183
// Function ID: 2626
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 184, 187, 71]

// Module 183 (_isNativeReflectConstruct)
import ExceptionsManager from "ExceptionsManager";
import parseErrorStack from "parseErrorStack";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function reportException(jsEngine, isFatal) {
  let stack;
  if (null != jsEngine) {
    stack = jsEngine.stack;
  }
  const sum = c12 + 1;
  c12 = sum;
  let str = jsEngine.message;
  if (!str) {
    str = "";
  }
  let sum1 = str;
  if (null != jsEngine.componentStack) {
    const _HermesInternal = HermesInternal;
    sum1 = str + "\n\nThis error is located at:" + jsEngine.componentStack;
  }
  let str3 = "";
  if (null != jsEngine.name) {
    str3 = "";
    if ("" !== jsEngine.name) {
      const _HermesInternal2 = HermesInternal;
      str3 = "" + jsEngine.name + ": ";
    }
  }
  let sum2 = sum1;
  if (!sum1.startsWith(str3)) {
    sum2 = str3 + sum1;
  }
  let obj = { jsEngine: jsEngine.jsEngine, rawStack: jsEngine.stack };
  const merged = Object.assign({}, jsEngine[RN$ErrorExtraDataKey], obj);
  let tmp8 = null != jsEngine.cause;
  if (tmp8) {
    tmp8 = "object" === typeof jsEngine.cause;
  }
  if (tmp8) {
    merged.stackSymbols = jsEngine.cause.stackSymbols;
    merged.stackReturnAddresses = jsEngine.cause.stackReturnAddresses;
    merged.stackElements = jsEngine.cause.stackElements;
  }
  obj = { message: sum2 };
  let tmp9 = null;
  if (sum2 !== str) {
    tmp9 = str;
  }
  obj.originalMessage = tmp9;
  let name = null;
  if (null != jsEngine.name) {
    name = null;
    if ("" !== jsEngine.name) {
      name = jsEngine.name;
    }
  }
  obj.name = name;
  let componentStack = null;
  if ("string" === typeof jsEngine.componentStack) {
    componentStack = jsEngine.componentStack;
  }
  obj.componentStack = componentStack;
  obj.stack = require(184) /* parseErrorStack */.default(stack);
  obj.id = sum;
  obj.isFatal = isFatal;
  obj.extraData = merged;
  if (callback3) {
    if (!c10) {
      c10 = true;
      c10 = false;
      if (arg2) {
        const _console = console;
        console.error(jsEngine);
      }
      if (isFatal) {
        const _default = require(187) /* ExceptionsManager */.default;
        if (_default) {
          if (isFatal) {
            if (null != global.RN$notifyOfFatalException) {
              const result = global.RN$notifyOfFatalException();
            }
          }
          _default.reportException(tmp16);
        }
      }
    }
  }
  c10 = false;
  throw __exception;
}
function reactConsoleErrorHandler() {
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  _errorOriginal.apply(console, arr);
  if (console.reportErrorsAsExceptions) {
    if (!c13) {
      if (null == _global.RN$inExceptionHandler) {
        let error = arr[0];
        if (null == error) {
          _global = require(71) /* createStringifySafeWithLimits */.default;
          const mapped = arr.map((arg0) => {
            let tmp = arg0;
            if ("string" !== typeof arg0) {
              tmp = callback(arg0);
            }
            return tmp;
          });
          const prototype = tmp2.prototype;
          const tmp11 = new tmp2(mapped.join(" "));
          tmp11.name = "console.error";
          error = tmp11;
        }
        if (!_global.RN$handleException) {
          const message = error.message;
          if (!message.startsWith("Warning: ")) {
            reportException(error, false, false);
          }
        }
      }
    }
  }
}
const tmp2 = ((arg0) => {
  class SyntheticError {
    constructor() {
      self = this;
      tmp = outer1_4(this, SyntheticError);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_6(SyntheticError);
      tmp3 = outer1_5;
      if (outer1_14()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, combined, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result.name = "";
      return tmp3Result;
    }
  }
  callback2(SyntheticError, arg0);
  return callback(SyntheticError);
})(require("_wrapNativeSuper")(Error));
let closure_9 = tmp2;
let c10 = false;
const RN$ErrorExtraDataKey = "RN$ErrorExtraDataKey";
let c12 = 0;
let c13 = false;

export default {
  decoratedExtraDataKey: "RN$ErrorExtraDataKey",
  handleException(arg0, arg1) {
    if (!global.RN$handleException) {
      const _Error = Error;
      let tmp4 = arg0;
      if (!(arg0 instanceof Error)) {
        const prototype = tmp2.prototype;
        tmp4 = new tmp2(arg0);
      }
      let c13 = true;
      reportException(tmp4, arg1, true);
      c13 = false;
    }
  },
  installConsoleErrorReporter() {
    if (!console._errorOriginal) {
      const _console = console;
      const _console2 = console;
      const _console3 = console;
      console._errorOriginal = error.bind(console);
      const _console4 = console;
      console.error = reactConsoleErrorHandler;
      const _console5 = console;
      if (undefined === console.reportErrorsAsExceptions) {
        const _console6 = console;
        console.reportErrorsAsExceptions = true;
      }
    }
  },
  SyntheticError: tmp2,
  unstable_setExceptionDecorator(arg0) {
    let closure_8 = arg0;
  }
};
export const SyntheticError = tmp2;
