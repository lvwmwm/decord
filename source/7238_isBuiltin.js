// Module ID: 7238
// Function ID: 58279
// Name: isBuiltin
// Dependencies: []

// Module 7238 (isBuiltin)
function isBuiltin(arg0, arg1) {
  return toString.call(arg0) === "[object " + arg1 + "]";
}
function isParameterizedString(arg0) {
  let tmp = "object" === typeof arg0;
  if (tmp) {
    tmp = null !== arg0;
  }
  if (tmp) {
    tmp = "__sentry_template_string__" in arg0;
  }
  if (tmp) {
    tmp = "__sentry_template_values__" in arg0;
  }
  return tmp;
}
function isPlainObject(arg0) {
  return isBuiltin(arg0, "Object");
}
function isInstanceOf(arg0, arg1) {
  return arg0 instanceof arg1;
}
arg5.isDOMError = function isDOMError(arg0) {
  return isBuiltin(arg0, "DOMError");
};
arg5.isDOMException = function isDOMException(arg0) {
  return isBuiltin(arg0, "DOMException");
};
arg5.isElement = function isElement(arg0) {
  let tmp = "undefined" !== typeof globalThis.Element;
  if (tmp) {
    tmp = isInstanceOf(arg0, globalThis.Element);
  }
  return tmp;
};
arg5.isError = function isError(arg0) {
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
arg5.isErrorEvent = function isErrorEvent(arg0) {
  return isBuiltin(arg0, "ErrorEvent");
};
arg5.isEvent = function isEvent(arg0) {
  let tmp = "undefined" !== typeof Event;
  if (tmp) {
    const _Event = Event;
    tmp = isInstanceOf(arg0, Event);
  }
  return tmp;
};
arg5.isInstanceOf = isInstanceOf;
arg5.isParameterizedString = isParameterizedString;
arg5.isPlainObject = isPlainObject;
arg5.isPrimitive = function isPrimitive(arg0) {
  let tmp = null === arg0;
  if (!tmp) {
    tmp = isParameterizedString(arg0);
  }
  if (!tmp) {
    let tmp4 = "object" !== tmp3;
    if (tmp4) {
      tmp4 = "function" !== tmp3;
    }
    tmp = tmp4;
  }
  return tmp;
};
arg5.isRegExp = function isRegExp(arg0) {
  return isBuiltin(arg0, "RegExp");
};
arg5.isString = function isString(arg0) {
  return isBuiltin(arg0, "String");
};
arg5.isSyntheticEvent = function isSyntheticEvent(arg0) {
  let tmp = isPlainObject(arg0);
  if (tmp) {
    tmp = "nativeEvent" in arg0;
  }
  if (tmp) {
    tmp = "preventDefault" in arg0;
  }
  if (tmp) {
    tmp = "stopPropagation" in arg0;
  }
  return tmp;
};
arg5.isThenable = function isThenable(arg0) {
  let then = arg0;
  if (arg0) {
    then = arg0.then;
  }
  if (then) {
    then = "function" === typeof arg0.then;
  }
  return Boolean(then);
};
arg5.isVueViewModel = function isVueViewModel(__isVue) {
  let tmp = "object" !== typeof __isVue;
  if (!tmp) {
    tmp = null === __isVue;
  }
  if (!tmp) {
    tmp = !__isVue.__isVue && !__isVue._isVue;
    const tmp3 = !__isVue.__isVue && !__isVue._isVue;
  }
  return !tmp;
};
