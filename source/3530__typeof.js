// Module ID: 3530
// Function ID: 27289
// Name: _typeof
// Dependencies: []

// Module 3530 (_typeof)
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
function _setPrototypeOf(arg0, arg1) {
  const tmp = Object.setPrototypeOf || function _setPrototypeOf(arg0, arg1) {
    arg0.__proto__ = arg1;
    return arg0;
  };
  const _setPrototypeOf = tmp;
  return tmp(arg0, arg1);
}
function _createSuper(arg0) {
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
    const obj = callback3(arg0);
    if (callback) {
      const _Reflect = Reflect;
      let constructResult = Reflect.construct(obj, arguments, callback3(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    if (!constructResult) {
      callback2(self);
      let tmp8 = self;
    } else {
      tmp8 = constructResult;
      if ("object" !== callback(constructResult)) {
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
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export const DayParser = (Parser) => {
  class DayParser {
    constructor() {
      if (this instanceof DayParser) {
        length = arguments.length;
        _Array = Array;
        prototype2 = Array.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        tmp8 = length;
        array = new Array(length);
        tmp10 = array;
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        tmp11 = closure_7;
        tmp12 = closure_5;
        tmp13 = TypeError;
        call = TypeError.call;
        tmp14 = TypeError;
        items = [];
        items[0] = tmp;
        applyResult = call.apply(TypeError, items.concat(array));
        tmp16 = closure_5(applyResult);
        str2 = "priority";
        num2 = 90;
        tmp17 = closure_7(applyResult, "priority", 90);
        tmp18 = closure_5(applyResult);
        str3 = "incompatibleTokens";
        tmp19 = closure_7(applyResult, "incompatibleTokens", []);
        return applyResult;
      } else {
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp2 = new.target;
        str = "Cannot call a class as a function";
        tmp3 = new.target;
        typeError = new TypeError("Cannot call a class as a function");
        tmp5 = typeError;
        throw typeError;
      }
    }
  }
  const _typeof = DayParser;
  if ("function" !== typeof Parser) {
    class DayParser {
      constructor() {
        if (this instanceof DayParser) {
          length = arguments.length;
          _Array = Array;
          prototype2 = Array.prototype;
          tmp6 = new.target;
          tmp7 = new.target;
          tmp8 = length;
          array = new Array(length);
          tmp10 = array;
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          tmp11 = closure_7;
          tmp12 = closure_5;
          tmp13 = TypeError;
          call = TypeError.call;
          tmp14 = TypeError;
          items = [];
          items[0] = tmp;
          applyResult = call.apply(TypeError, items.concat(array));
          tmp16 = closure_5(applyResult);
          str2 = "priority";
          num2 = 90;
          tmp17 = closure_7(applyResult, "priority", 90);
          tmp18 = closure_5(applyResult);
          str3 = "incompatibleTokens";
          tmp19 = closure_7(applyResult, "incompatibleTokens", []);
          return applyResult;
        } else {
          _TypeError = TypeError;
          prototype = TypeError.prototype;
          tmp2 = new.target;
          str = "Cannot call a class as a function";
          tmp3 = new.target;
          typeError = new TypeError("Cannot call a class as a function");
          tmp5 = typeError;
          throw typeError;
        }
      }
    }
  }
  let prototype = Parser;
  if (Parser) {
    prototype = Parser.prototype;
  }
  let obj = { EntryPointCommandButtonActions: null, NATIVE_SECTION: null, 1476351743: null, value: DayParser };
  DayParser.prototype = Object.create(prototype, { constructor: obj });
  if (Parser) {
    class DayParser {
      constructor() {
        if (this instanceof DayParser) {
          length = arguments.length;
          _Array = Array;
          prototype2 = Array.prototype;
          tmp6 = new.target;
          tmp7 = new.target;
          tmp8 = length;
          array = new Array(length);
          tmp10 = array;
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          tmp11 = closure_7;
          tmp12 = closure_5;
          tmp13 = TypeError;
          call = TypeError.call;
          tmp14 = TypeError;
          items = [];
          items[0] = tmp;
          applyResult = call.apply(TypeError, items.concat(array));
          tmp16 = closure_5(applyResult);
          str2 = "priority";
          num2 = 90;
          tmp17 = closure_7(applyResult, "priority", 90);
          tmp18 = closure_5(applyResult);
          str3 = "incompatibleTokens";
          tmp19 = closure_7(applyResult, "incompatibleTokens", []);
          return applyResult;
        } else {
          _TypeError = TypeError;
          prototype = TypeError.prototype;
          tmp2 = new.target;
          str = "Cannot call a class as a function";
          tmp3 = new.target;
          typeError = new TypeError("Cannot call a class as a function");
          tmp5 = typeError;
          throw typeError;
        }
      }
    }
    _setPrototypeOf(DayParser, Parser);
  }
  let closure_0 = _createSuper(DayParser);
  obj = {
    key: "parse",
    value: function parse(arg0, arg1, day) {
      if ("E" !== arg1) {
        if ("EE" !== arg1) {
          if ("EEE" !== arg1) {
            if ("EEEEE" === arg1) {
              return day.day(arg0, { y: null, CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: null });
            } else if ("EEEEEE" === arg1) {
              return day.day(arg0, { y: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010397949414864384, CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: 36923798521907134000 }) || day.day(arg0, { y: null, CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: null });
            } else {
              return day.day(arg0, { y: 351158784, CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: 596246531 }) || day.day(arg0, {}) || day.day(arg0, { y: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010397949414864384, CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: 36923798521907134000 }) || day.day(arg0, { y: null, CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: null });
            }
          }
        }
      }
      return day.day(arg0, {}) || day.day(arg0, { y: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010397949414864384, CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: 36923798521907134000 }) || day.day(arg0, { y: null, CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: null });
    }
  };
  const items = [obj, , ];
  obj = {
    key: "validate",
    value: function validate(arg0, arg1) {
      let tmp = arg1 >= 0;
      if (tmp) {
        tmp = arg1 <= 6;
      }
      return tmp;
    }
  };
  items[1] = obj;
  items[2] = {
    key: "set",
    value: function set(defaultResult1, arg1, defaultResult2, date) {
      const defaultResult = closure_0.default(defaultResult1, defaultResult2, date);
      defaultResult.setUTCHours(0, 0, 0, 0);
      return defaultResult;
    }
  };
  _defineProperties(DayParser.prototype, items);
  return DayParser;
}(require(dependencyMap[1]).Parser);
