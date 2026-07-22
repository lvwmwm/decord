// Module ID: 3510
// Function ID: 26978
// Name: _typeof
// Dependencies: []

// Module 3510 (_typeof)
function _typeof(arg0) {
  if ("function" === typeof Symbol) {
    const _Symbol = Symbol;
    if ("symbol" === typeof Symbol.iterator) {
      function _typeof(arg0) {
        return typeof arg0;
      }
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if ("function" === typeof Symbol) {
        const _Symbol2 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol3 = Symbol;
          let str2 = "symbol";
        }
        return str2;
      }
    }
    str2 = typeof arg0;
  };
}
function _inherits(value) {
  if ("function" !== typeof arg1) {
    if (null !== arg1) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Super expression must either be null or a function");
      throw typeError;
    }
  }
  let prototype = arg1;
  if (arg1) {
    prototype = arg1.prototype;
  }
  const obj = { "": null, children: null, "": null, value };
  value.prototype = Object.create(prototype, { constructor: obj });
  if (arg1) {
    _setPrototypeOf(value, arg1);
  }
}
function _setPrototypeOf(arg0, arg1) {
  const tmp = Object.setPrototypeOf || function _setPrototypeOf(arg0, arg1) {
    arg0.__proto__ = arg1;
    return arg0;
  };
  const _setPrototypeOf = tmp;
  return tmp(arg0, arg1);
}
function _createSuper(arg0) {
  const _typeof = arg0;
  let closure_1 = function _isNativeReflectConstruct() {
    if ("undefined" !== typeof Reflect) {
      const _Reflect3 = Reflect;
      if (Reflect.construct) {
        const _Reflect = Reflect;
        if (Reflect.construct.sham) {
          return false;
        } else {
          const _Proxy = Proxy;
          if ("function" === typeof Proxy) {
            return true;
          } else {
            const _Boolean = Boolean;
            const _Reflect2 = Reflect;
            const _Boolean2 = Boolean;
            valueOf.call(Reflect.construct(Boolean, [], () => {

            }));
            return true;
          }
        }
      }
    }
    return false;
  }();
  return function _createSuperInternal() {
    const self = this;
    const obj = callback2(arg0);
    if (closure_1) {
      const _Reflect = Reflect;
      let constructResult = Reflect.construct(obj, arguments, callback2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    if (!constructResult) {
      callback(self);
      let tmp8 = self;
    } else {
      tmp8 = constructResult;
      if ("object" !== arg0(constructResult)) {
        tmp8 = constructResult;
      }
    }
    return tmp8;
  };
}
function _assertThisInitialized(arg0) {
  if (undefined === arg0) {
    const _ReferenceError = ReferenceError;
    const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
    throw referenceError;
  } else {
    return arg0;
  }
}
function _getPrototypeOf(arg0) {
  if (Object.setPrototypeOf) {
    const _Object = Object;
    let _getPrototypeOf = Object.getPrototypeOf;
  } else {
    _getPrototypeOf = function _getPrototypeOf(arg0) {
      let __proto__ = arg0.__proto__;
      if (!__proto__) {
        const _Object = Object;
        __proto__ = Object.getPrototypeOf(arg0);
      }
      return __proto__;
    };
  }
  return _getPrototypeOf(arg0);
}
function _classCallCheck(arg0, arg1) {
  if (!(arg0 instanceof arg1)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot call a class as a function");
    throw typeError;
  }
}
function _defineProperties(arg0, arg1) {
  for (let num = 0; num < arg1.length; num = num + 1) {
    let tmp = arg1[num];
    tmp.enumerable = tmp.enumerable || false;
    tmp.configurable = true;
    if ("value" in tmp) {
      tmp.writable = true;
    }
    let _Object = Object;
    let definePropertyResult = Object.defineProperty(arg0, tmp.key, tmp);
  }
}
function _createClass(arg0, arg1, arg2) {
  if (arg1) {
    _defineProperties(arg0.prototype, arg1);
  }
  return arg0;
}
function _defineProperty(arg0, arg1, value) {
  if (arg1 in arg0) {
    const _Object = Object;
    const obj = { value };
    Object.defineProperty(arg0, arg1, obj);
  } else {
    arg0[arg1] = value;
  }
  return arg0;
}
arg5.DateToSystemTimezoneSetter = undefined;
arg5.Setter = undefined;
arg5.ValueSetter = undefined;
const tmp2 = () => {
  class Setter {
    constructor() {
      tmp = closure_6(this, Setter);
      tmp2 = closure_9(this, "subPriority", 0);
      return;
    }
  }
  const _typeof = Setter;
  const items = [
    {
      key: "validate",
      value: function validate(arg0, arg1) {
        return true;
      }
    }
  ];
  _createClass(Setter, items);
  return Setter;
}();
arg5.Setter = tmp2;
arg5.ValueSetter = (arg0) => {
  class ValueSetter {
    constructor(arg0, arg1, arg2, arg3, arg4) {
      tmp = closure_6(this, ValueSetter);
      callResult = arg0.call(this);
      callResult.value = arg0;
      callResult.validateValue = arg1;
      callResult.setValue = arg2;
      callResult.priority = arg3;
      if (arg4) {
        callResult.subPriority = arg4;
      }
      return callResult;
    }
  }
  const _inherits = ValueSetter;
  _inherits(ValueSetter, arg0);
  let closure_0 = _createSuper(ValueSetter);
  let obj = {
    key: "validate",
    value: function validate(arg0, arg1) {
      return this.validateValue(arg0, this.value, arg1);
    }
  };
  const items = [obj, ];
  obj = {
    key: "set",
    value: function set(arg0, arg1, arg2) {
      return this.setValue(arg0, arg1, this.value, arg2);
    }
  };
  items[1] = obj;
  _createClass(ValueSetter, items);
  return ValueSetter;
}(tmp2);
arg5.DateToSystemTimezoneSetter = (arg0) => {
  class DateToSystemTimezoneSetter {
    constructor() {
      tmp = closure_6(this, DateToSystemTimezoneSetter);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      call = arg0.call;
      items = [];
      items[0] = this;
      applyResult = call.apply(arg0, items.concat(array));
      tmp4 = closure_4(applyResult);
      tmp5 = closure_9(applyResult, "priority", 10);
      tmp6 = closure_4(applyResult);
      tmp7 = closure_9(applyResult, "subPriority", -1);
      return applyResult;
    }
  }
  const _inherits = DateToSystemTimezoneSetter;
  _inherits(DateToSystemTimezoneSetter, arg0);
  let closure_0 = _createSuper(DateToSystemTimezoneSetter);
  const items = [
    {
      key: "set",
      value: function set(getUTCFullYear, timestampIsSet) {
        if (timestampIsSet.timestampIsSet) {
          return getUTCFullYear;
        } else {
          const _Date = Date;
          const date = new Date(0);
          const uTCFullYear = getUTCFullYear.getUTCFullYear();
          const uTCMonth = getUTCFullYear.getUTCMonth();
          date.setFullYear(uTCFullYear, uTCMonth, getUTCFullYear.getUTCDate());
          const uTCHours = getUTCFullYear.getUTCHours();
          const uTCMinutes = getUTCFullYear.getUTCMinutes();
          const uTCSeconds = getUTCFullYear.getUTCSeconds();
          date.setHours(uTCHours, uTCMinutes, uTCSeconds, getUTCFullYear.getUTCMilliseconds());
          return date;
        }
      }
    }
  ];
  _createClass(DateToSystemTimezoneSetter, items);
  return DateToSystemTimezoneSetter;
}(tmp2);
