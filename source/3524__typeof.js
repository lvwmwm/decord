// Module ID: 3524
// Function ID: 27201
// Name: _typeof
// Dependencies: [0, 0, 0, 0, 0]

// Module 3524 (_typeof)
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
  const require = arg0;
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
    if (closure_1) {
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
    const obj = { FRIEND_REQUESTS: true, ForYouLoadMore: true, QUEST_BADGE: true, GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED: true, value };
    Object.defineProperty(arg0, arg1, obj);
  } else {
    arg0[arg1] = value;
  }
  return arg0;
}
_interopRequireDefault(require("__exportStarResult1"));
_interopRequireDefault(require("__exportStarResult1"));

export const LocalWeekParser = (Parser) => {
  class LocalWeekParser {
    constructor() {
      if (this instanceof LocalWeekParser) {
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
        tmp11 = closure_10;
        tmp12 = closure_8;
        tmp13 = TypeError;
        call = TypeError.call;
        tmp14 = TypeError;
        items = [];
        items[0] = tmp;
        applyResult = call.apply(TypeError, items.concat(array));
        tmp16 = closure_8(applyResult);
        str2 = "priority";
        num2 = 100;
        tmp17 = closure_10(applyResult, "priority", 100);
        tmp18 = closure_8(applyResult);
        str3 = "incompatibleTokens";
        tmp19 = closure_10(applyResult, "incompatibleTokens", [null, "i", "e", "t", "T", "y", "Y", "u", "q", "Q", "M", "L", "w"]);
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
  const dependencyMap = LocalWeekParser;
  if ("function" !== typeof Parser) {
    class LocalWeekParser {
      constructor() {
        if (this instanceof LocalWeekParser) {
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
          tmp11 = closure_10;
          tmp12 = closure_8;
          tmp13 = TypeError;
          call = TypeError.call;
          tmp14 = TypeError;
          items = [];
          items[0] = tmp;
          applyResult = call.apply(TypeError, items.concat(array));
          tmp16 = closure_8(applyResult);
          str2 = "priority";
          num2 = 100;
          tmp17 = closure_10(applyResult, "priority", 100);
          tmp18 = closure_8(applyResult);
          str3 = "incompatibleTokens";
          tmp19 = closure_10(applyResult, "incompatibleTokens", [null, "i", "e", "t", "T", "y", "Y", "u", "q", "Q", "M", "L", "w"]);
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
  let obj = { value: LocalWeekParser };
  LocalWeekParser.prototype = Object.create(prototype, { constructor: obj });
  if (Parser) {
    class LocalWeekParser {
      constructor() {
        if (this instanceof LocalWeekParser) {
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
          tmp11 = closure_10;
          tmp12 = closure_8;
          tmp13 = TypeError;
          call = TypeError.call;
          tmp14 = TypeError;
          items = [];
          items[0] = tmp;
          applyResult = call.apply(TypeError, items.concat(array));
          tmp16 = closure_8(applyResult);
          str2 = "priority";
          num2 = 100;
          tmp17 = closure_10(applyResult, "priority", 100);
          tmp18 = closure_8(applyResult);
          str3 = "incompatibleTokens";
          tmp19 = closure_10(applyResult, "incompatibleTokens", [null, "i", "e", "t", "T", "y", "Y", "u", "q", "Q", "M", "L", "w"]);
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
    _setPrototypeOf(LocalWeekParser, Parser);
  }
  let closure_0 = _createSuper(LocalWeekParser);
  obj = {
    key: "parse",
    value: function parse(arg0, arg1, ordinalNumber) {
      if ("w" === arg1) {
        return callback(LocalWeekParser[2]).parseNumericPattern(callback(LocalWeekParser[3]).numericPatterns.week, arg0);
      } else if ("wo" === arg1) {
        const obj = { unit: "week" };
        return ordinalNumber.ordinalNumber(arg0, obj);
      } else {
        return callback(LocalWeekParser[2]).parseNDigits(arg1.length, arg0);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "validate",
    value: function validate(arg0, arg1) {
      let tmp = arg1 >= 1;
      if (tmp) {
        tmp = arg1 <= 53;
      }
      return tmp;
    }
  };
  items[1] = obj;
  items[2] = {
    key: "set",
    value: function set(defaultResult1, arg1, defaultResult2, defaultResult2) {
      return closure_3.default(closure_2.default(defaultResult1, defaultResult2, defaultResult2), defaultResult2);
    }
  };
  _defineProperties(LocalWeekParser.prototype, items);
  return LocalWeekParser;
}(require("__exportStarResult1").Parser);
