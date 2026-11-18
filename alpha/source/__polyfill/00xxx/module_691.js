// Module ID: 691
// Function ID: 692
// Dependencies: []
// Exports: isDOMError, isDOMException, isElement, isError, isErrorEvent, isEvent, isParameterizedString, isPlainObject, isPrimitive, isRegExp, isRequest, isString, isSyntheticEvent, isThenable, isVueViewModel

// Module 691
function isInstanceOf(originalException, Error) {
  try {
    return originalException instanceof Error;
  } catch (err) {
    return false;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function isDOMError(error) {
  const callResult = toString.call(error);
  return callResult === "[object " + "DOMError" + "]";
}
export function isDOMException(error) {
  const callResult = toString.call(error);
  return callResult === "[object " + "DOMException" + "]";
}
export function isElement(originalException) {
  let tmp = typeof globalThis.Element !== "undefined";
  if (typeof globalThis.Element !== "undefined") {
    tmp = isInstanceOf(originalException, globalThis.Element);
  }
  return tmp;
}
export function isError(originalException) {
  const callResult = toString.call(originalException);
  if ("[object Error]" !== callResult) {
    if ("[object Exception]" !== callResult) {
      if ("[object DOMException]" !== callResult) {
        if ("[object WebAssembly.Exception]" !== callResult) {
          const _Error = Error;
          return isInstanceOf(originalException, Error);
        }
      }
    }
  }
  return true;
}
export function isErrorEvent(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "ErrorEvent" + "]";
}
export function isEvent(error) {
  let tmp = typeof Event !== "undefined";
  if (typeof Event !== "undefined") {
    const _Event = Event;
    tmp = isInstanceOf(error, Event);
  }
  return tmp;
}
export { isInstanceOf };
export function isParameterizedString(combined1) {
  let tmp = typeof combined1 === "object";
  if (typeof combined1 === "object") {
    tmp = null !== combined1;
  }
  if (tmp) {
    tmp = "__sentry_template_string__" in combined1;
  }
  if (tmp) {
    tmp = "__sentry_template_values__" in combined1;
  }
  return tmp;
}
export function isPlainObject(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "Object" + "]";
}
export function isPrimitive(obj) {
  let tmp = null === obj;
  if (!tmp) {
    let tmp2 = typeof obj === "object";
    if (typeof obj === "object") {
      tmp2 = null !== obj;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_string__" in obj;
    }
    if (tmp2) {
      tmp2 = "__sentry_template_values__" in obj;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    let tmp3 = typeof obj !== "object";
    if (typeof obj !== "object") {
      tmp3 = typeof obj !== "function";
    }
    tmp = tmp3;
  }
  return tmp;
}
export function isRegExp(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "RegExp" + "]";
}
export function isRequest(headers) {
  let tmp = typeof Request !== "undefined";
  if (typeof Request !== "undefined") {
    const _Request = Request;
    tmp = isInstanceOf(headers, Request);
  }
  return tmp;
}
export function isString(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "String" + "]";
}
export function isSyntheticEvent(_events) {
  const callResult = toString.call(_events);
  const tmp2 = callResult === "[object " + "Object" + "]" && "nativeEvent" in _events && "preventDefault" in _events && "stopPropagation" in _events;
  return tmp2;
}
export function isThenable(promise) {
  let then;
  const _Boolean = Boolean;
  if (promise != null) {
    then = promise.then;
  }
  if (then) {
    then = typeof promise.then === "function";
  }
  return _Boolean(then);
}
export function isVueViewModel(__isVue) {
  let tmp = typeof __isVue !== "object" || null === __isVue;
  if (!tmp) {
    tmp = !(__isVue.__isVue || __isVue._isVue || __isVue.__v_isVNode);
  }
  return !tmp;
}
