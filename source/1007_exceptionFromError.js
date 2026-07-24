// Module ID: 1007
// Function ID: 10998
// Name: exceptionFromError
// Dependencies: [794]

// Module 1007 (exceptionFromError)
const require = arg1;
const dependencyMap = arg6;
function exceptionFromError(arg0, name) {
  const arr = parseStackFrames(arg0, name);
  let obj = { type: extractType(name), value: extractMessage(name) };
  if (arr.length) {
    obj = { frames: arr };
    obj.stacktrace = obj;
  }
  let tmp = undefined === obj.type;
  if (tmp) {
    tmp = "" === obj.value;
  }
  if (tmp) {
    obj.value = "Unrecoverable error caught";
  }
  return obj;
}
function eventFromPlainObject(arg0, error, arg2, isUnhandledRejection) {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const client = obj.getClient();
  let normalizeDepth;
  if (null != client) {
    normalizeDepth = client.getOptions().normalizeDepth;
  }
  let tmp3;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp13 = tmp5;
      let _Object = Object;
      if (!hasOwnProperty.call(error, tmp5)) {
        continue;
      } else {
        let tmp6 = error[tmp5];
        let _Error = Error;
        let tmp7 = tmp6;
        tmp3 = tmp6;
        if (tmp6 instanceof Error) {
          break;
        }
      }
      continue;
    }
  }
  obj = {};
  let obj3 = require(794) /* registerSpanErrorInstrumentation */;
  obj.__serialized__ = obj3.normalizeToSize(error, normalizeDepth);
  obj = {};
  const obj1 = {};
  if (tmp3) {
    const items = [exceptionFromError(arg0, tmp3)];
    obj1.values = items;
    obj.exception = obj1;
    obj.extra = obj;
    return obj;
  } else {
    const obj2 = {};
    if (obj8.isEvent(error)) {
      let str = error.constructor.name;
    } else {
      str = "Error";
      if (isUnhandledRejection) {
        str = "UnhandledRejection";
      }
    }
    obj2.type = str;
    obj3 = { isUnhandledRejection };
    obj2.value = getNonErrorObjectExceptionValue(error, obj3);
    const items1 = [obj2];
    obj1.values = items1;
    obj.exception = obj1;
    obj.extra = obj;
    if (arg2) {
      const arr2 = parseStackFrames(arg0, arg2);
      if (arr2.length) {
        const obj4 = { frames: arr2 };
        obj.exception.values[0].stacktrace = obj4;
      }
    }
    return obj;
  }
}
function eventFromError(arg0, error) {
  let obj = {};
  obj = {};
  const items = [exceptionFromError(arg0, error)];
  obj.values = items;
  obj.exception = obj;
  return obj;
}
function parseStackFrames(arg0, stacktrace) {
  let num = 0;
  if (stacktrace) {
    num = 0;
    if (regex.test(stacktrace.message)) {
      num = 1;
    }
  }
  let num2 = 0;
  if ("number" === typeof stacktrace.framesToPop) {
    num2 = stacktrace.framesToPop;
  }
  return arg0(stacktrace.stacktrace || stacktrace.stack || "", num, num2);
}
function isWebAssemblyException(message) {
  let tmp = "undefined" !== typeof globalThis.WebAssembly;
  if (tmp) {
    tmp = undefined !== globalThis.WebAssembly.Exception;
  }
  if (tmp) {
    tmp = message instanceof globalThis.WebAssembly.Exception;
  }
  return tmp;
}
function extractType(name) {
  name = undefined;
  if (null != name) {
    name = name.name;
  }
  let tmp2 = name;
  if (!name) {
    tmp2 = name;
    if (isWebAssemblyException(name)) {
      let str2 = "WebAssembly.Exception";
      if (name.message) {
        const _Array = Array;
        str2 = "WebAssembly.Exception";
        if (Array.isArray(name.message)) {
          str2 = "WebAssembly.Exception";
          if (2 == name.message.length) {
            str2 = name.message[0];
          }
        }
      }
      tmp2 = str2;
    }
  }
  return tmp2;
}
function extractMessage(message) {
  if (null != message) {
    let error = message.message;
  }
  if (isWebAssemblyException(message)) {
    const _Array = Array;
    let str4 = "wasm exception";
    if (Array.isArray(message.message)) {
      str4 = "wasm exception";
      if (2 == message.message.length) {
        str4 = message.message[1];
      }
    }
    let str = str4;
  } else {
    str = "No error message";
    if (error) {
      if (!error.error) {
        let result = require(794) /* registerSpanErrorInstrumentation */._INTERNAL_enhanceErrorWithSentryInfo(message);
        const obj = require(794) /* registerSpanErrorInstrumentation */;
      }
      error = error.error;
      result = require(794) /* registerSpanErrorInstrumentation */._INTERNAL_enhanceErrorWithSentryInfo(error);
      const obj2 = require(794) /* registerSpanErrorInstrumentation */;
    }
  }
  return str;
}
function eventFromUnknownInput(arg0, error, arg2, arg3, isUnhandledRejection) {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  if (obj.isErrorEvent(error)) {
    if (error.error) {
      return eventFromError(arg0, error.error);
    }
  }
  let obj1 = require(794) /* registerSpanErrorInstrumentation */;
  if (!obj1.isDOMError(error)) {
    if (!obj3.isDOMException(error)) {
      if (obj4.isError(error)) {
        let tmp14 = eventFromError(arg0, error);
      } else {
        if (!obj5.isPlainObject(error)) {
          if (!obj6.isEvent(error)) {
            tmp14 = eventFromString(arg0, error, arg2, arg3);
            const _HermesInternal = HermesInternal;
            const result = require(794) /* registerSpanErrorInstrumentation */.addExceptionTypeValue(tmp14, "" + error, undefined);
            const obj7 = require(794) /* registerSpanErrorInstrumentation */;
            obj = { synthetic: true };
            const result1 = require(794) /* registerSpanErrorInstrumentation */.addExceptionMechanism(tmp14, obj);
            const obj8 = require(794) /* registerSpanErrorInstrumentation */;
          }
          obj6 = require(794) /* registerSpanErrorInstrumentation */;
        }
        const tmp25 = eventFromPlainObject(arg0, error, arg2, isUnhandledRejection);
        obj5 = require(794) /* registerSpanErrorInstrumentation */;
        obj = { synthetic: true };
        const result2 = require(794) /* registerSpanErrorInstrumentation */.addExceptionMechanism(tmp25, obj);
        tmp14 = tmp25;
        const obj10 = require(794) /* registerSpanErrorInstrumentation */;
      }
      return tmp14;
    }
    obj3 = require(794) /* registerSpanErrorInstrumentation */;
  }
  if ("stack" in error) {
    let tmp39 = eventFromError(arg0, error);
  } else {
    let name = error.name;
    if (!name) {
      let str2 = "DOMException";
      if (obj12.isDOMError(error)) {
        str2 = "DOMError";
      }
      name = str2;
      obj12 = require(794) /* registerSpanErrorInstrumentation */;
    }
    let combined = name;
    if (error.message) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + name + ": " + error.message;
    }
    tmp39 = eventFromString(arg0, combined, arg2, arg3);
    const result3 = require(794) /* registerSpanErrorInstrumentation */.addExceptionTypeValue(tmp39, combined);
    const obj13 = require(794) /* registerSpanErrorInstrumentation */;
  }
  if ("code" in error) {
    const _Object = Object;
    obj1 = {};
    const _HermesInternal3 = HermesInternal;
    obj1["DOMException.code"] = "" + error.code;
    tmp39.tags = Object.assign({}, tmp39.tags, obj1);
  }
  return tmp39;
}
function eventFromString(arg0, combined, arg2, arg3) {
  let obj = {};
  if (arg3) {
    if (arg2) {
      const arr = parseStackFrames(arg0, arg2);
      if (arr.length) {
        obj = {};
        obj = { value: combined };
        const obj1 = { frames: arr };
        obj.stacktrace = obj1;
        const items = [obj];
        obj.values = items;
        obj.exception = obj;
      }
      const obj2 = { synthetic: true };
      const result = require(794) /* registerSpanErrorInstrumentation */.addExceptionMechanism(obj, obj2);
      const obj5 = require(794) /* registerSpanErrorInstrumentation */;
    }
  }
  if (obj7.isParameterizedString(combined)) {
    ({ __sentry_template_string__: obj8.message, __sentry_template_values__: obj8.params } = combined);
    obj.logentry = {};
    return obj;
  } else {
    obj.message = combined;
    return obj;
  }
  obj7 = require(794) /* registerSpanErrorInstrumentation */;
}
function getNonErrorObjectExceptionValue(message, isUnhandledRejection) {
  let str = "exception";
  const result = require(794) /* registerSpanErrorInstrumentation */.extractExceptionKeysForMessage(message);
  if (isUnhandledRejection.isUnhandledRejection) {
    str = "promise rejection";
  }
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  if (obj2.isErrorEvent(message)) {
    const _HermesInternal3 = HermesInternal;
    let combined = "Event `ErrorEvent` captured as " + str + " with message `" + message.message + "`";
  } else {
    if (obj3.isEvent(message)) {
      const _Object = Object;
      const prototypeOf = Object.getPrototypeOf(message);
      let name;
      if (prototypeOf) {
        name = prototypeOf.constructor.name;
      }
      const _HermesInternal2 = HermesInternal;
      const combined1 = "Event `" + name + "` (type=" + message.type + ") captured as " + str;
      while (true) {
        let tmp11 = __exception;
        continue;
      }
    } else {
      const _HermesInternal = HermesInternal;
      combined = "Object captured as " + str + " with keys: " + result;
    }
    obj3 = require(794) /* registerSpanErrorInstrumentation */;
  }
  return combined;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const re2 = /Minified React error #\d+;/i;
arg5.eventFromException = function eventFromException(arg0, arg1, syntheticException) {
  syntheticException = undefined;
  if (null != syntheticException) {
    syntheticException = syntheticException.syntheticException;
  }
  const tmpResult = eventFromUnknownInput(arg0, arg1, syntheticException, arg3);
  const result = require(794) /* registerSpanErrorInstrumentation */.addExceptionMechanism(tmpResult);
  tmpResult.level = "error";
  if (tmp5) {
    tmpResult.event_id = syntheticException.event_id;
  }
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  const tmp = eventFromUnknownInput;
  tmp5 = null != syntheticException && syntheticException.event_id;
  return require(794) /* registerSpanErrorInstrumentation */.resolvedSyncPromise(tmpResult);
};
arg5.eventFromMessage = function eventFromMessage(arg0, arg1) {
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
  let syntheticException;
  if (null != tmp) {
    syntheticException = tmp.syntheticException;
  }
  const tmp3Result = eventFromString(arg0, arg1, syntheticException, tmp2);
  tmp3Result.level = str;
  if (tmp6) {
    tmp3Result.event_id = tmp.event_id;
  }
  return require(794) /* registerSpanErrorInstrumentation */.resolvedSyncPromise(tmp3Result);
};
arg5.eventFromUnknownInput = eventFromUnknownInput;
arg5.exceptionFromError = exceptionFromError;
arg5.extractMessage = extractMessage;
arg5.extractType = extractType;
