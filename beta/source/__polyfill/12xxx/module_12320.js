// Module ID: 12320
// Function ID: 12321
// Dependencies: []
// Exports: isDOMError, isDOMException, isElement, isError, isErrorEvent, isEvent, isParameterizedString, isPlainObject, isPrimitive, isRegExp, isString, isSyntheticEvent, isThenable, isVueViewModel

// Module 12320
function isInstanceOf(arg0, arg1) {
  try {
    return arg0 instanceof arg1;
  } catch (err) {
    return false;
  }
}

export const isDOMError = function isDOMError(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "DOMError" + "]";
};
export const isDOMException = function isDOMException(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "DOMException" + "]";
};
export const isElement = function isElement(arg0) {
  let tmp = typeof globalThis.Element !== "undefined";
  if (typeof globalThis.Element !== "undefined") {
    tmp = isInstanceOf(arg0, globalThis.Element);
  }
  return tmp;
};
export const isError = function isError(arg0) {
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
};
export const isErrorEvent = function isErrorEvent(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "ErrorEvent" + "]";
};
export const isEvent = function isEvent(arg0) {
  let tmp = typeof Event !== "undefined";
  if (typeof Event !== "undefined") {
    const _Event = Event;
    tmp = isInstanceOf(arg0, Event);
  }
  return tmp;
};
export { isInstanceOf };
export const isParameterizedString = function isParameterizedString(obj) {
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
};
export const isPlainObject = function isPlainObject(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "Object" + "]";
};
export const isPrimitive = function isPrimitive(obj) {
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
};
export const isRegExp = function isRegExp(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "RegExp" + "]";
};
export const isString = function isString(arg0) {
  const callResult = toString.call(arg0);
  return callResult === "[object " + "String" + "]";
};
export const isSyntheticEvent = function isSyntheticEvent(arg0) {
  const callResult = toString.call(arg0);
  const tmp2 = callResult === "[object " + "Object" + "]" && "nativeEvent" in arg0 && "preventDefault" in arg0 && "stopPropagation" in arg0;
  return tmp2;
};
export const isThenable = function isThenable(arg0) {
  let then = arg0;
  const _Boolean = Boolean;
  if (arg0) {
    then = arg0.then;
  }
  if (then) {
    then = typeof arg0.then === "function";
  }
  return _Boolean(then);
};
export const isVueViewModel = function isVueViewModel(__isVue) {
  let tmp = typeof __isVue !== "object" || null === __isVue;
  if (!tmp) {
    tmp = !__isVue.__isVue && !__isVue._isVue;
  }
  return !tmp;
};
