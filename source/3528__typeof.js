// Module ID: 3528
// Function ID: 27254
// Name: _typeof
// Dependencies: [3355, 3388, 3208]

// Module 3528 (_typeof)
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
    const obj = { consumed: true, ForcedColorsPreference: true, MOBILE_NITRO_HOME_SETTINGS_BADGE: true, NOTIFICATION_WARNING: true, value };
    Object.defineProperty(arg0, arg1, obj);
  } else {
    arg0[arg1] = value;
  }
  return arg0;
}
let closure_2 = [null, null, "k", "t", "T", "a", "B", "H", "k", "t", "T", "a"];
let closure_3 = ["H", "k", "t", "T", "a", "b", "h", "H", "K", "t", "T", "\u0434\u043E \u043D.\u0435."];

export const DateParser = (Parser) => {
  class DateParser {
    constructor() {
      if (this instanceof DateParser) {
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
        num2 = 90;
        tmp17 = closure_10(applyResult, "priority", 90);
        tmp18 = closure_8(applyResult);
        str3 = "subPriority";
        num3 = 1;
        tmp19 = closure_10(applyResult, "subPriority", 1);
        tmp20 = closure_8(applyResult);
        str4 = "incompatibleTokens";
        tmp21 = closure_10(applyResult, "incompatibleTokens", ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"]);
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
  const dependencyMap = DateParser;
  if ("function" !== typeof Parser) {
    class DateParser {
      constructor() {
        if (this instanceof DateParser) {
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
          num2 = 90;
          tmp17 = closure_10(applyResult, "priority", 90);
          tmp18 = closure_8(applyResult);
          str3 = "subPriority";
          num3 = 1;
          tmp19 = closure_10(applyResult, "subPriority", 1);
          tmp20 = closure_8(applyResult);
          str4 = "incompatibleTokens";
          tmp21 = closure_10(applyResult, "incompatibleTokens", ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"]);
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
  let obj = { value: DateParser };
  DateParser.prototype = Object.create(prototype, { constructor: obj });
  if (Parser) {
    class DateParser {
      constructor() {
        if (this instanceof DateParser) {
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
          num2 = 90;
          tmp17 = closure_10(applyResult, "priority", 90);
          tmp18 = closure_8(applyResult);
          str3 = "subPriority";
          num3 = 1;
          tmp19 = closure_10(applyResult, "subPriority", 1);
          tmp20 = closure_8(applyResult);
          str4 = "incompatibleTokens";
          tmp21 = closure_10(applyResult, "incompatibleTokens", ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"]);
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
    _setPrototypeOf(DateParser, Parser);
  }
  let closure_0 = _createSuper(DateParser);
  obj = {
    key: "parse",
    value: function parse(arg0, arg1, ordinalNumber) {
      if ("d" === arg1) {
        return callback(DateParser[0]).parseNumericPattern(callback(DateParser[1]).numericPatterns.date, arg0);
      } else if ("do" === arg1) {
        const obj = { unit: "date" };
        return ordinalNumber.ordinalNumber(arg0, obj);
      } else {
        return callback(DateParser[0]).parseNDigits(arg1.length, arg0);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "validate",
    value: function validate(getUTCFullYear) {
      const uTCFullYear = getUTCFullYear.getUTCFullYear();
      const uTCMonth = getUTCFullYear.getUTCMonth();
      let tmp4 = arg1 >= 1;
      if (isLeapYearIndexResult) {
        if (tmp4) {
          tmp4 = arg1 <= closure_3[uTCMonth];
        }
        let tmp5 = tmp4;
      } else {
        tmp5 = tmp4;
        if (tmp4) {
          tmp5 = arg1 <= closure_2[uTCMonth];
        }
      }
      return tmp5;
    }
  };
  items[1] = obj;
  items[2] = {
    key: "set",
    value: function set(setUTCDate) {
      setUTCDate.setUTCDate(arg2);
      setUTCDate.setUTCHours(0, 0, 0, 0);
      return setUTCDate;
    }
  };
  _defineProperties(DateParser.prototype, items);
  return DateParser;
}(require("requiredArgs").Parser);
