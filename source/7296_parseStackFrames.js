// Module ID: 7296
// Function ID: 58901
// Name: parseStackFrames
// Dependencies: [57, 77, 7242, 7243, 7281, 7247]
// Exports: eventFromMessage, eventFromUnknownInput

// Module 7296 (parseStackFrames)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";

function parseStackFrames(arg0, stack) {
  return arg0(stack.stack || "", 1);
}
function exceptionFromError(arg0, message) {
  let obj = { type: tmp, value: message.message };
  const arr = parseStackFrames(arg0, message);
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
  const result = require(7242) /* addNonEnumerableProperty */.extractExceptionKeysForMessage(name);
  const obj = require(7242) /* addNonEnumerableProperty */;
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
          break;
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
      let normalizeDepth = getOptions;
      if (getOptions) {
        normalizeDepth = getOptions.getOptions().normalizeDepth;
      }
      const tmp13 = _defineProperty({}, "__serialized__", require(7281) /* normalize */.normalizeToSize(arg2, normalizeDepth));
      let tmp16;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let tmp26 = tmp18;
          let _Object = Object;
          if (!hasOwnProperty.call(arg2, tmp18)) {
            continue;
          } else {
            let tmp19 = arg2[tmp18];
            let _Error2 = Error;
            let tmp20 = tmp19;
            tmp16 = tmp19;
            if (tmp19 instanceof Error) {
              break;
            }
          }
          continue;
        }
      }
      if (tmp16) {
        const items1 = [tmp16, tmp13];
        return items1;
      } else {
        const tmp22 = getMessageForObject(arg2);
        let syntheticException2 = syntheticException;
        if (syntheticException) {
          syntheticException2 = syntheticException.syntheticException;
        }
        if (!syntheticException2) {
          const _Error3 = Error;
          syntheticException2 = new Error(tmp22);
        }
        syntheticException2.message = tmp22;
        const items2 = [syntheticException2, tmp13];
        return items2;
      }
      const obj3 = require(7281) /* normalize */;
    } else {
      if (syntheticException) {
        syntheticException = syntheticException.syntheticException;
      }
      if (!syntheticException) {
        const _Error = Error;
        syntheticException = new Error(arg2);
      }
      const _HermesInternal = HermesInternal;
      syntheticException.message = "" + arg2;
      const items3 = [syntheticException, undefined];
      return items3;
    }
    obj2 = require(7243) /* isBuiltin */;
  }
  obj = require(7243) /* isBuiltin */;
}

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
  let event_id = tmp;
  if (tmp) {
    event_id = tmp.event_id;
  }
  obj.event_id = event_id;
  obj.level = str;
  if (tmp2) {
    if (tmp) {
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
          const result = require(7247) /* getFirstException */.addExceptionMechanism(obj, obj2);
          const obj5 = require(7247) /* getFirstException */;
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
  obj7 = require(7243) /* isBuiltin */;
};
export const eventFromUnknownInput = function eventFromUnknownInput(arg0, arg1, arg2, data) {
  if (data) {
    data = data.data;
  }
  if (data) {
    data = data.data.mechanism;
  }
  if (!data) {
    data = { handled: true, type: "generic" };
  }
  const tmp = _slicedToArray(getException(arg0, data, arg2, data), 2);
  let obj = {};
  obj = {};
  const items = [exceptionFromError(arg1, tmp[0])];
  obj.values = items;
  obj.exception = obj;
  if (tmp[1]) {
    obj.extra = tmp2;
  }
  const result = require(7247) /* getFirstException */.addExceptionTypeValue(obj, undefined, undefined);
  const obj4 = require(7247) /* getFirstException */;
  const result1 = require(7247) /* getFirstException */.addExceptionMechanism(obj, data);
  const obj1 = {};
  let event_id = data;
  if (data) {
    event_id = data.event_id;
  }
  obj1.event_id = event_id;
  return Object.assign({}, obj, obj1);
};
export { exceptionFromError };
export { parseStackFrames };
