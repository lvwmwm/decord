// Module ID: 703
// Function ID: 704
// Dependencies: []
// Exports: isDOMError, isDOMException, isElement, isError, isErrorEvent, isEvent, isParameterizedString, isPlainObject, isPrimitive, isRegExp, isRequest, isString, isSyntheticEvent, isThenable, isVueViewModel

// Module 703
function isInstanceOf(arg0, arg1) {
  try {
    return arg0 instanceof arg1;
  } catch (err) {
    return false;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function isDOMError(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "DOMError" + "]";
}
export function isDOMException(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "DOMException" + "]";
}
export function isElement(arg0) {
  let tmp = typeof globalThis.Element !== "undefined";
  if (typeof globalThis.Element !== "undefined") {
    tmp = isInstanceOf(arg0, globalThis.Element);
  }
  return tmp;
}
export function isError(arg0) {
  const callResult = toString.call(arg0);
  if ("[object Error]" !== callResult) {
    if ("[object Exception]" !== callResult) {
      if ("[object DOMException]" !== callResult) {
        if ("[object WebAssembly.Exception]" !== callResult) {
          const _Error = Error;
          return isInstanceOf(arg0, Error);
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
export function isEvent(arg0) {
  let tmp = typeof Event !== "undefined";
  if (typeof Event !== "undefined") {
    const _Event = Event;
    tmp = isInstanceOf(arg0, Event);
  }
  return tmp;
}
export { isInstanceOf };
export function isParameterizedString(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    tmp = "__sentry_template_string__" in obj;
  }
  if (tmp) {
    tmp = "__sentry_template_values__" in obj;
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
export function isSyntheticEvent(arg0) {
  const callResult = toString.call(arg0);
  const tmp2 = callResult === "[object " + "Object" + "]" && "nativeEvent" in arg0 && "preventDefault" in arg0 && "stopPropagation" in arg0;
  return tmp2;
}
export function isThenable(arg0) {
  let then;
  const _Boolean = Boolean;
  if (arg0 != null) {
    then = arg0.then;
  }
  if (then) {
    then = typeof arg0.then === "function";
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
