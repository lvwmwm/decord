// Module ID: 32
// Function ID: 1202
// Name: ReactElement
// Dependencies: []

// Module 32 (ReactElement)
class Component {
  constructor(arg0, arg1, arg2) {
    tmp = arg2;
    this.props = arg0;
    this.context = arg1;
    this.refs = Object;
    if (!arg2) {
      tmp = iterator;
    }
    this.updater = tmp;
    return;
  }
  setState(arg0, arg1) {
    self = this;
    tmp = typeof arg0;
    if ("object" !== tmp) {
      str = "function";
      if ("function" !== tmp) {
        tmp2 = null;
        if (null != arg0) {
          tmp4 = globalThis;
          _Error = Error;
          str2 = "takes an object of state variables to update or a function which returns an object of state variables.";
          throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }
    }
    updater = self.updater;
    enqueueSetStateResult = updater.enqueueSetState(self, arg0, arg1, "setState");
    return;
  }
  forceUpdate(arg0) {
    updater = this.updater;
    enqueueForceUpdateResult = updater.enqueueForceUpdate(this, arg0, "forceUpdate");
    return;
  }
}
class ComponentDummy {
  constructor() {
    return;
  }
}
class PureComponent {
  constructor(arg0, arg1, arg2) {
    tmp = arg2;
    this.props = arg0;
    this.context = arg1;
    this.refs = Object;
    if (!arg2) {
      tmp = iterator;
    }
    this.updater = tmp;
    return;
  }
}
function ReactElement(type, key, arg2, arg3, arg4, props) {
  const obj = { $$typeof: closure_0, type, key };
  let tmp = null;
  if (undefined !== props.ref) {
    tmp = ref;
  }
  obj.ref = tmp;
  obj.props = props;
  return obj;
}
function isValidElement(icon) {
  let tmp = "object" === typeof icon;
  if (tmp) {
    tmp = null !== icon;
  }
  if (tmp) {
    tmp = icon.$$typeof === closure_0;
  }
  return tmp;
}
function getElementKey(value, arg1) {
  if ("object" === typeof value) {
    if (null !== value) {
      if (null != value.key) {
        let str = function escape(str) {
          let closure_0 = {};
          return "$" + str.replace(/[=:]/g, (arg0) => closure_0[arg0]);
        }("" + value.key);
      }
      return str;
    }
  }
  str = arg1.toString(36);
}
function noop$1() {

}
function mapIntoArray(element, items, arg2, arg3, arg4) {
  let length;
  let tmp = element;
  let tmp3 = "undefined" !== tmp2;
  if (tmp3) {
    tmp3 = "boolean" !== tmp2;
  }
  if (!tmp3) {
    tmp = null;
  }
  let flag = true;
  if (null !== tmp) {
    if ("bigint" !== tmp2) {
      if ("string" !== tmp2) {
        if ("number" !== tmp2) {
          flag = false;
          if ("object" === tmp2) {
            const $$typeof = tmp.$$typeof;
            flag = true;
            if (closure_0 !== $$typeof) {
              flag = true;
              if (closure_1 !== $$typeof) {
                flag = false;
                if (closure_6 === $$typeof) {
                  return mapIntoArray(tmp._init(tmp._payload), items, arg2, arg3, arg4);
                }
              }
            }
          }
        }
      }
    }
    flag = true;
  }
  if (flag) {
    element = arg4(tmp);
    let str17 = arg3;
    if ("" === arg3) {
      str17 = `.${closure_18(tmp, 0)}`;
    }
    if (isArray(element)) {
      let str22 = "";
      if (null != str17) {
        str22 = `${str17.replace(closure_14, "$&/")}/`;
      }
      mapIntoArray(element, items, str22, "", (arg0) => arg0);
    } else if (null != element) {
      let tmp43 = element;
      if (isValidElement(element)) {
        let str19 = "";
        if (null != element.key) {
          if (!tmp) {
            const text = `${element.key}`;
            str19 = `${`${element.key}`.replace(closure_14, "$&/")}/`;
          } else {
            str19 = "";
          }
        }
        tmp43 = ReactElement(element.type, arg2 + str19 + str17, undefined, undefined, undefined, element.props);
      }
      items.push(tmp43);
    }
    return 1;
  } else {
    let str6 = ".";
    if ("" !== arg3) {
      str6 = `${arg3}:`;
    }
    if (isArray(tmp)) {
      let num5 = 0;
      let num6 = 0;
      let num3 = 0;
      if (0 < tmp.length) {
        do {
          let tmp31 = closure_20;
          let tmp32 = tmp[num6];
          let tmp33 = closure_18;
          let tmp34 = tmp32;
          let tmp35 = items;
          let tmp36 = arg2;
          let tmp37 = arg4;
          num5 = num5 + closure_20(tmp32, items, arg2, str6 + closure_18(tmp32, num6), arg4);
          num6 = num6 + 1;
          num3 = num5;
          length = tmp.length;
        } while (num6 < length);
      }
    } else {
      let tmp14 = null;
      if (!tmp4) {
        tmp14 = null;
        if ("object" === typeof tmp) {
          @@iterator = iterator;
          if (iterator) {
            @@iterator = tmp[closure_7];
          }
          if (!Symbol_iterator) {
            @@iterator = tmp[Symbol.iterator];
          }
          let tmp16 = null;
          if ("function" === typeof Symbol_iterator) {
            tmp16 = Symbol_iterator;
          }
          tmp14 = tmp16;
        }
      }
      if ("function" === typeof tmp14) {
        const iter = tmp14.call(tmp);
        const iter2 = iter.next();
        let num = 0;
        let iter3 = iter2;
        let num2 = 0;
        num3 = 0;
        if (!iter2.done) {
          const value = iter3.value;
          num2 = tmp26 + 1;
          num = num + mapIntoArray(value, items, arg2, str6 + getElementKey(value, tmp26), arg4);
          const iter4 = iter.next();
          iter3 = iter4;
          num3 = num;
        }
      } else {
        num3 = 0;
        if ("object" === tmp2) {
          if ("function" === typeof tmp.then) {
            return mapIntoArray(function resolveThenable(status) {
              status = status.status;
              if ("fulfilled" === status) {
                return status.value;
              } else if ("rejected" === status) {
                throw status.reason;
              } else {
                if ("string" === typeof status.status) {
                  status.then(closure_19, closure_19);
                } else {
                  status.status = "pending";
                  status.then((value) => {
                    if ("pending" === value.status) {
                      value.status = "fulfilled";
                      value.value = value;
                    }
                  }, (reason) => {
                    if ("pending" === reason.status) {
                      reason.status = "rejected";
                      reason.reason = reason;
                    }
                  });
                }
                const status2 = status.status;
                if ("fulfilled" === status2) {
                  return status.value;
                } else if ("rejected" === status2) {
                  throw status.reason;
                } else {
                  throw status;
                }
              }
            }(tmp), items, arg2, arg3, arg4);
          } else {
            const _String = String;
            let StringResult = String(tmp);
            if ("[object Object]" === StringResult) {
              const _Object = Object;
              const keys = Object.keys(tmp);
              StringResult = `${"object with keys {" + obj.join(", ")}}`;
            }
            throw Error("Objects are not valid as a React child (found: " + StringResult + "). If you meant to render a collection of children, use an array instead.");
          }
        }
      }
    }
    return num3;
  }
}
function mapChildren(element, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (null == element) {
    return element;
  } else {
    const items = [];
    let closure_2 = 0;
    mapIntoArray(element, items, "", "", (arg0) => {
      let closure_2 = tmp + 1;
      return arg1.call(arg2, arg0, +closure_2);
    });
    return items;
  }
}
function lazyInitializer(_status) {
  let closure_0 = _status;
  if (-1 === _status._status) {
    const _resultResult = _status._result();
    _resultResult.then((_result) => {
      let tmp = 0 !== _result._status;
      if (tmp) {
        tmp = -1 !== _result._status;
      }
      if (!tmp) {
        _result._status = 1;
        _result._result = _result;
      }
    }, (_result) => {
      let tmp = 0 !== _result._status;
      if (tmp) {
        tmp = -1 !== _result._status;
      }
      if (!tmp) {
        _result._status = 2;
        _result._result = _result;
      }
    });
    if (-1 === _status._status) {
      _status._status = 0;
      _status._result = _resultResult;
    }
  }
  if (1 === _status._status) {
    return _status._result.default;
  } else {
    throw _status._result;
  }
}
function noop() {

}
let closure_0 = Symbol.for("react.transitional.element");
let closure_1 = Symbol.for("react.portal");
const forResult = Symbol.for("react.fragment");
const forResult1 = Symbol.for("react.strict_mode");
let closure_2 = Symbol.for("react.consumer");
let closure_3 = Symbol.for("react.context");
let closure_4 = Symbol.for("react.forward_ref");
const forResult2 = Symbol.for("react.profiler");
let closure_5 = Symbol.for("react.memo");
let closure_6 = Symbol.for("react.lazy");
let closure_8 = {
  isMounted() {
    return false;
  },
  enqueueForceUpdate() {

  },
  enqueueReplaceState() {

  },
  enqueueSetState() {

  }
};
let closure_10 = {};
Component.prototype.isReactComponent = {};
ComponentDummy.prototype = Component.prototype;
const componentDummy = new ComponentDummy();
PureComponent.prototype = componentDummy;
componentDummy.constructor = PureComponent;
let obj = assign(componentDummy, Component.prototype);
componentDummy.isPureReactComponent = true;
obj = {};
let closure_14 = /\/+/g;
let closure_15 = "function" === typeof reportError ? reportError : (message) => {
  if ("object" === typeof window) {
    const _window = window;
    if ("function" === typeof window.ErrorEvent) {
      const _window2 = window;
      const obj = { "Null": null, "Null": null };
      if ("object" === typeof message) {
        if (null !== message) {
          if ("string" === typeof message.message) {
            const _String2 = String;
            let StringResult = String(message.message);
          }
          obj.message = StringResult;
          obj.error = message;
          const prototype = ErrorEvent.prototype;
          const errorEvent = new ErrorEvent("error", obj);
          const _window3 = window;
        }
      }
      const _String = String;
      StringResult = String(message);
    }
    const _console = console;
    console.error(message);
  }
  if ("object" === typeof process) {
    const _process = process;
    if ("function" === typeof process.emit) {
      const _process2 = process;
      process.emit("uncaughtException", message);
    }
  }
};
arg5.Children = {
  map: mapChildren,
  forEach(element) {
    let closure_0 = arg1;
    mapChildren(element, function() {
      arg1(...arguments);
    }, arg2);
  },
  count(element) {
    let closure_0 = 0;
    mapChildren(element, () => {
      closure_0 = closure_0 + 1;
    });
    return closure_0;
  },
  toArray(element) {
    return mapChildren(element, (arg0) => arg0) || [];
  },
  only(children, optional, forbidden, ignore) {
    if (isValidElement(children)) {
      return children;
    } else {
      const _Error = Error;
      throw Error("React.Children.only expected to receive a single React element child.");
    }
  }
};
arg5.Component = Component;
arg5.Fragment = forResult;
arg5.Profiler = forResult2;
arg5.PureComponent = PureComponent;
arg5.StrictMode = forResult1;
arg5.Suspense = Symbol.for("react.suspense");
arg5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = obj;
obj = Object.create(null);
obj.c = function c(arg0) {
  const H = obj.H;
  return H.useMemoCache(arg0);
};
arg5.__COMPILER_RUNTIME = obj;
arg5.cache = (arg0) => {
  let closure_0 = arg0;
  return () => arg0(...arguments);
};
arg5.cloneElement = (props, ref, children) => {
  if (null == props) {
    const _Error = Error;
    throw Error("The argument must be a React element, but you passed " + props + ".");
  } else {
    const tmp17 = assign({}, props.props);
    let key = props.key;
    let tmp3 = key;
    if (null != ref) {
      if (undefined !== ref.key) {
        key = `${ref.key}`;
      }
      tmp3 = key;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = key;
        while (keys[tmp] !== undefined) {
          let tmp18 = tmp5;
          let tmp19 = hasOwnProperty;
          let tmp6 = !hasOwnProperty.call(ref, tmp5) || "key" === tmp5 || "__self" === tmp5 || "__source" === tmp5;
          if (!tmp6) {
            let tmp7 = "ref" === tmp5 && undefined === ref.ref;
            tmp6 = tmp7;
          }
          if (tmp6) {
            continue;
          } else {
            tmp17[tmp5] = ref[tmp5];
            // continue
          }
          continue;
        }
      }
    }
    const diff = arguments.length - 2;
    if (1 === diff) {
      tmp17.children = children;
    } else if (1 < diff) {
      const _Array = Array;
      const ArrayResult = Array(diff);
      let num3 = 0;
      if (0 < diff) {
        do {
          ArrayResult[num3] = arguments[num3 + 2];
          num3 = num3 + 1;
        } while (num3 < diff);
      }
      tmp17.children = ArrayResult;
    }
    return ReactElement(props.type, tmp3, undefined, undefined, undefined, tmp17);
  }
};
arg5.createContext = (_currentValue) => {
  let obj = { $$typeof: closure_3, _currentValue, _currentValue2: _currentValue, Provider: obj };
  obj = { $$typeof: closure_2, _context: obj };
  obj.Consumer = obj;
  return obj;
};
arg5.createElement = (defaultProps, key, children) => {
  const obj = {};
  let tmp2 = null;
  if (null != key) {
    let text = null;
    if (undefined !== key.key) {
      text = `${key.key}`;
    }
    tmp2 = text;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = text;
      while (keys[tmp] !== undefined) {
        let tmp15 = tmp6;
        let tmp16 = hasOwnProperty;
        let tmp7 = hasOwnProperty.call(key, tmp6) && "key" !== tmp6 && "__self" !== tmp6 && "__source" !== tmp6;
        if (!tmp7) {
          continue;
        } else {
          obj[tmp6] = key[tmp6];
          // continue
        }
        continue;
      }
    }
  }
  const diff = arguments.length - 2;
  if (1 === diff) {
    obj.children = children;
  } else if (1 < diff) {
    const _Array = Array;
    const ArrayResult = Array(diff);
    let num = 0;
    if (0 < diff) {
      do {
        ArrayResult[num] = arguments[num + 2];
        num = num + 1;
      } while (num < diff);
    }
    obj.children = ArrayResult;
  }
  if (defaultProps) {
    if (defaultProps.defaultProps) {
      defaultProps = defaultProps.defaultProps;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        while (keys1[2] !== undefined) {
          let tmp17 = tmp14;
          if (undefined !== obj[tmp14]) {
            continue;
          } else {
            obj[tmp14] = defaultProps[tmp14];
            // continue
          }
          continue;
        }
      }
    }
  }
  return ReactElement(defaultProps, tmp2, undefined, undefined, undefined, obj);
};
arg5.createRef = () => ({ current: null });
arg5.forwardRef = (render) => ({ $$typeof: closure_4, render });
arg5.isValidElement = isValidElement;
arg5.lazy = (_result) => {
  let obj = { $$typeof: closure_6, _payload: obj, _init: lazyInitializer };
  obj = { _status: -1, _result };
  return obj;
};
arg5.memo = (type) => {
  const obj = { $$typeof: closure_5, type };
  let tmp = null;
  if (undefined !== arg1) {
    tmp = arg1;
  }
  obj.compare = tmp;
  return obj;
};
arg5.startTransition = (arg0) => {
  const obj = {};
  obj.T = obj;
  const promise = arg0();
  const S = obj.S;
  if (null !== S) {
    tmp(obj, promise);
  }
  let tmp7 = tmp6;
  if ("object" === typeof promise) {
    tmp7 = null !== promise;
  }
  let tmp9 = tmp7;
  if (tmp7) {
    tmp9 = "function" === typeof promise.then;
  }
  if (tmp9) {
    promise.then(noop, closure_15);
  }
  obj.T = obj.T;
};
arg5.unstable_useCacheRefresh = () => {
  const H = obj.H;
  return H.useCacheRefresh();
};
arg5.use = (arg0) => {
  const H = obj.H;
  return H.use(arg0);
};
arg5.useActionState = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useActionState(arg0, arg1, arg2);
};
arg5.useCallback = (arg0, arg1) => {
  const H = obj.H;
  return H.useCallback(arg0, arg1);
};
arg5.useContext = (context) => {
  const H = obj.H;
  return H.useContext(context);
};
arg5.useDebugValue = () => {

};
arg5.useDeferredValue = (arg0, arg1) => {
  const H = obj.H;
  return H.useDeferredValue(arg0, arg1);
};
arg5.useEffect = (arg0, arg1, arg2) => {
  const H = obj.H;
  if ("function" === typeof arg2) {
    const _Error = Error;
    throw Error("useEffect CRUD overload is not enabled in this build of React.");
  } else {
    return H.useEffect(arg0, arg1);
  }
};
arg5.useId = () => {
  const H = obj.H;
  return H.useId();
};
arg5.useImperativeHandle = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useImperativeHandle(arg0, arg1, arg2);
};
arg5.useInsertionEffect = (arg0, arg1) => {
  const H = obj.H;
  return H.useInsertionEffect(arg0, arg1);
};
arg5.useLayoutEffect = (arg0, arg1) => {
  const H = obj.H;
  return H.useLayoutEffect(arg0, arg1);
};
arg5.useMemo = (arg0, arg1) => {
  const H = obj.H;
  return H.useMemo(arg0, arg1);
};
arg5.useOptimistic = (arg0, arg1) => {
  const H = obj.H;
  return H.useOptimistic(arg0, arg1);
};
arg5.useReducer = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useReducer(arg0, arg1, arg2);
};
arg5.useRef = (arg0) => {
  const H = obj.H;
  return H.useRef(arg0);
};
arg5.useState = (arg0) => {
  const H = obj.H;
  return H.useState(arg0);
};
arg5.useSyncExternalStore = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useSyncExternalStore(arg0, arg1, arg2);
};
arg5.useTransition = () => {
  const H = obj.H;
  return H.useTransition();
};
arg5.version = "19.1.0";
