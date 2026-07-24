// Module ID: 3536
// Function ID: 27365
// Name: _typeof
// Dependencies: [3537, 3517, 3515]

// Module 3536 (_typeof)
import setUTCISODay from "setUTCISODay";

function _typeof(arg0) {
  if ("function" === typeof Symbol) {
    let _Symbol = Symbol;
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
  const tmp = Object.setPrototypeOf || (function _setPrototypeOf(arg0, arg1) {
    arg0.__proto__ = arg1;
    return arg0;
  });
  const _setPrototypeOf = tmp;
  return tmp(arg0, arg1);
}
function _createSuper(arg0) {
  let closure_0 = arg0;
  let closure_1 = (function _isNativeReflectConstruct() {
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
  })();
  return function _createSuperInternal() {
    const self = this;
    const obj = outer1_8(closure_0);
    if (closure_1) {
      const _Reflect = Reflect;
      let constructResult = Reflect.construct(obj, arguments, outer1_8(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    if (!constructResult) {
      outer1_7(self);
      let tmp8 = self;
    } else {
      tmp8 = constructResult;
      if ("object" !== outer1_3(constructResult)) {
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
    let _Object = Object;
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
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, arg1, obj);
  } else {
    arg0[arg1] = value;
  }
  return arg0;
}
if (!setUTCISODay) {
  let obj = { default: setUTCISODay };
  let tmp3 = obj;
} else {
  tmp3 = setUTCISODay;
}
let closure_2 = tmp3;

export const ISODayParser = ((Parser) => {
  class ISODayParser {
    constructor() {
      if (this instanceof ISODayParser) {
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
        tmp11 = outer1_9;
        tmp12 = outer1_7;
        tmp13 = TypeError;
        call = TypeError.call;
        tmp14 = TypeError;
        items = [];
        items[0] = tmp;
        applyResult = call.apply(TypeError, items.concat(array));
        tmp16 = outer1_7(applyResult);
        str2 = "priority";
        num2 = 90;
        tmp17 = outer1_9(applyResult, "priority", 90);
        tmp18 = outer1_7(applyResult);
        str3 = "incompatibleTokens";
        tmp19 = outer1_9(applyResult, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
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
  if ("function" !== typeof Parser) {
    class ISODayParser {
      constructor() {
        if (this instanceof ISODayParser) {
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
          tmp11 = outer1_9;
          tmp12 = outer1_7;
          tmp13 = TypeError;
          call = TypeError.call;
          tmp14 = TypeError;
          items = [];
          items[0] = tmp;
          applyResult = call.apply(TypeError, items.concat(array));
          tmp16 = outer1_7(applyResult);
          str2 = "priority";
          num2 = 90;
          tmp17 = outer1_9(applyResult, "priority", 90);
          tmp18 = outer1_7(applyResult);
          str3 = "incompatibleTokens";
          tmp19 = outer1_9(applyResult, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
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
  let obj = { value: ISODayParser, writable: true, configurable: true };
  ISODayParser.prototype = Object.create(prototype, { constructor: obj });
  if (Parser) {
    class ISODayParser {
      constructor() {
        if (this instanceof ISODayParser) {
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
          tmp11 = outer1_9;
          tmp12 = outer1_7;
          tmp13 = TypeError;
          call = TypeError.call;
          tmp14 = TypeError;
          items = [];
          items[0] = tmp;
          applyResult = call.apply(TypeError, items.concat(array));
          tmp16 = outer1_7(applyResult);
          str2 = "priority";
          num2 = 90;
          tmp17 = outer1_9(applyResult, "priority", 90);
          tmp18 = outer1_7(applyResult);
          str3 = "incompatibleTokens";
          tmp19 = outer1_9(applyResult, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
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
    _setPrototypeOf(ISODayParser, Parser);
  }
  let closure_0 = _createSuper(ISODayParser);
  obj = {
    key: "parse",
    value: function parse(arg0, arg1, ordinalNumber) {
      function valueCallback(arg0) {
        let num = 7;
        if (0 !== arg0) {
          num = arg0;
        }
        return num;
      }
      if ("i" !== arg1) {
        if ("ii" !== arg1) {
          if ("io" === arg1) {
            const obj = { unit: "day" };
            return ordinalNumber.ordinalNumber(arg0, obj);
          } else if ("iii" === arg1) {
            return callback(ISODayParser[1]).mapValue(ordinalNumber.day(arg0, { width: "abbreviated", context: "formatting" }) || ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" }), valueCallback);
          } else if ("iiiii" === arg1) {
            return callback(ISODayParser[1]).mapValue(ordinalNumber.day(arg0, { width: "narrow", context: "formatting" }), valueCallback);
          } else if ("iiiiii" === arg1) {
            return callback(ISODayParser[1]).mapValue(ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" }), valueCallback);
          } else {
            return callback(ISODayParser[1]).mapValue(ordinalNumber.day(arg0, { width: "wide", context: "formatting" }) || ordinalNumber.day(arg0, { width: "abbreviated", context: "formatting" }) || ordinalNumber.day(arg0, { width: "short", context: "formatting" }) || ordinalNumber.day(arg0, { width: "narrow", context: "formatting" }), valueCallback);
          }
        }
      }
      return callback(ISODayParser[1]).parseNDigits(arg1.length, arg0);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "validate",
    value: function validate(arg0, arg1) {
      let tmp = arg1 >= 1;
      if (tmp) {
        tmp = arg1 <= 7;
      }
      return tmp;
    }
  };
  items[1] = obj;
  items[2] = {
    key: "set",
    value: function set(defaultResult1, arg1, defaultResult2) {
      const defaultResult = outer1_2.default(defaultResult1, defaultResult2);
      defaultResult.setUTCHours(0, 0, 0, 0);
      return defaultResult;
    }
  };
  _defineProperties(ISODayParser.prototype, items);
  return ISODayParser;
})(require("_defineProperties").Parser);
