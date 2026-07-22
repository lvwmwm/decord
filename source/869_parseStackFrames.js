// Module ID: 869
// Function ID: 9678
// Name: parseStackFrames
// Dependencies: []
// Exports: eventFromMessage, eventFromUnknownInput

// Module 869 (parseStackFrames)
function parseStackFrames(arg0, stack) {
  return arg0(stack.stack || "", 1);
}
function _enhanceErrorWithSentryInfo(__sentry_fetch_url_host__) {
  let isErrorResult = require(dependencyMap[2]).isError(__sentry_fetch_url_host__);
  if (isErrorResult) {
    isErrorResult = "__sentry_fetch_url_host__" in __sentry_fetch_url_host__;
  }
  if (isErrorResult) {
    isErrorResult = "string" === typeof __sentry_fetch_url_host__.__sentry_fetch_url_host__;
  }
  const message = __sentry_fetch_url_host__.message;
  if (isErrorResult) {
    const _HermesInternal = HermesInternal;
    let combined = "" + message + " (" + __sentry_fetch_url_host__.__sentry_fetch_url_host__ + ")";
  } else {
    combined = message;
  }
  return combined;
}
function exceptionFromError(arg0, name) {
  let obj = { type: tmp, value: _enhanceErrorWithSentryInfo(name) };
  const arr = parseStackFrames(arg0, name);
  if (arr.length) {
    obj = { frames: arr };
    obj.stacktrace = obj;
  }
  return obj;
}
function getMessageForObject(name) {
  if ("name" in name) {
    if ("string" === typeof name.name) {
      const _HermesInternal4 = HermesInternal;
      const combined = "'" + name.name + "' captured as exception";
      let sum = combined;
      if (tmp11) {
        const _HermesInternal5 = HermesInternal;
        sum = combined + " with message '" + name.message + "'";
      }
      return sum;
    }
  }
  if ("message" in name) {
    if ("string" === typeof name.message) {
      return name.message;
    }
  }
  const result = require(dependencyMap[3]).extractExceptionKeysForMessage(name);
  const obj = require(dependencyMap[3]);
  if (obj2.isErrorEvent(name)) {
    const _HermesInternal3 = HermesInternal;
    return "Event `ErrorEvent` captured as exception with message `" + name.message + "`";
  } else {
    const _Object = Object;
    const prototypeOf = Object.getPrototypeOf(name);
    if (prototypeOf) {
      name = prototypeOf.constructor.name;
    }
    while (true) {
      let str3 = "Object";
      let str4 = "Object";
      if (!name) {
        break;
      } else {
        str4 = "Object";
        if ("Object" === name) {
          break;
        } else {
          let tmp6 = globalThis;
          let _HermesInternal = HermesInternal;
          let str5 = "'";
          str4 = "'" + name + "'";
          // break
        }
      }
      let tmp7 = globalThis;
      let _HermesInternal2 = HermesInternal;
      let str6 = "";
      let str7 = " captured as exception with keys: ";
      return "" + str4 + " captured as exception with keys: " + result;
    }
  }
}
function getException(getOptions, arg1, arg2, syntheticException) {
  if (obj.isError(arg2)) {
    const items = [arg2, undefined];
    return items;
  } else {
    arg1.synthetic = true;
    if (obj2.isPlainObject(arg2)) {
      let normalizeDepth;
      if (null != getOptions) {
        normalizeDepth = getOptions.getOptions().normalizeDepth;
      }
      const tmp16 = callback2({}, "__serialized__", require(dependencyMap[4]).normalizeToSize(arg2, normalizeDepth));
      let tmp19;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let tmp30 = tmp21;
          let _Object = Object;
          if (!hasOwnProperty.call(arg2, tmp21)) {
            continue;
          } else {
            let tmp22 = arg2[tmp21];
            let _Error2 = Error;
            let tmp23 = tmp22;
            tmp19 = tmp22;
            if (tmp22 instanceof Error) {
              break;
            }
          }
          continue;
        }
      }
      if (tmp19) {
        const items1 = [tmp19, tmp16];
        return items1;
      } else {
        const tmp25 = getMessageForObject(arg2);
        syntheticException = undefined;
        if (null != syntheticException) {
          syntheticException = syntheticException.syntheticException;
        }
        if (!syntheticException) {
          const _Error3 = Error;
          syntheticException = new Error(tmp25);
        }
        syntheticException.message = tmp25;
        const items2 = [syntheticException, tmp16];
        return items2;
      }
      const obj3 = require(dependencyMap[4]);
    } else {
      let syntheticException1;
      if (null != syntheticException) {
        syntheticException1 = syntheticException.syntheticException;
      }
      if (!syntheticException1) {
        const _Error = Error;
        syntheticException1 = new Error(arg2);
      }
      const _HermesInternal = HermesInternal;
      syntheticException1.message = "" + arg2;
      const items3 = [syntheticException1, undefined];
      return items3;
    }
    const obj2 = require(dependencyMap[2]);
  }
  const obj = require(dependencyMap[2]);
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _enhanceErrorWithSentryInfo };
export const eventFromMessage = function eventFromMessage(arg0, value) {
  let str = "info";
  if (arguments.length > 2) {
    str = "info";
    if (undefined !== arguments[2]) {
      str = arguments[2];
    }
  }
  let tmp;
  if (arguments.length > 3) {
    tmp = arguments[3];
  }
  let tmp2;
  if (arguments.length > 4) {
    tmp2 = arguments[4];
  }
  let obj = {};
  let event_id;
  if (null != tmp) {
    event_id = tmp.event_id;
  }
  obj.event_id = event_id;
  obj.level = str;
  if (tmp2) {
    if (null != tmp) {
      if (tmp.syntheticException) {
        const arr = parseStackFrames(arg0, tmp.syntheticException);
        if (arr.length) {
          obj = {};
          obj = { value };
          const obj1 = { frames: arr };
          obj.stacktrace = obj1;
          const items = [obj];
          obj.values = items;
          obj.exception = obj;
          const obj2 = { synthetic: true };
          const result = require(dependencyMap[5]).addExceptionMechanism(obj, obj2);
          const obj5 = require(dependencyMap[5]);
        }
      }
    }
  }
  if (obj7.isParameterizedString(value)) {
    ({ __sentry_template_string__: obj8.message, __sentry_template_values__: obj8.params } = value);
    obj.logentry = {};
    return obj;
  } else {
    obj.message = value;
    return obj;
  }
  const obj7 = require(dependencyMap[2]);
};
export const eventFromUnknownInput = function eventFromUnknownInput(arg0, arg1, arg2, data) {
  data = undefined;
  if (null != data) {
    data = data.data;
  }
  if (data) {
    data = data.data.mechanism;
  }
  if (!data) {
    data = { priority: "IE", "Bool(false)": "MSIE" };
  }
  const tmp = callback(getException(arg0, data, arg2, data), 2);
  let obj = {};
  obj = {};
  const items = [exceptionFromError(arg1, tmp[0])];
  obj.values = items;
  obj.exception = obj;
  if (tmp[1]) {
    obj.extra = tmp2;
  }
  const result = require(dependencyMap[5]).addExceptionTypeValue(obj, undefined, undefined);
  const obj4 = require(dependencyMap[5]);
  const result1 = require(dependencyMap[5]).addExceptionMechanism(obj, data);
  const obj1 = {};
  let event_id;
  if (null != data) {
    event_id = data.event_id;
  }
  obj1.event_id = event_id;
  return Object.assign({}, obj, obj1);
};
export { exceptionFromError };
export { parseStackFrames };
