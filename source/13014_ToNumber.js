// Module ID: 13014
// Function ID: 99019
// Name: ToNumber
// Dependencies: []

// Module 13014 (ToNumber)
class ToNumber {
  constructor(arg0) {
    tmp = arg0;
    if ("number" === typeof arg0) {
      tmp36 = arg1;
      tmp37 = arg6;
      num4 = 0;
      Decimal4 = arg1(arg6[0]).Decimal;
      tmp38 = arg0;
      prototype4 = Decimal4.prototype;
      tmp39 = new.target;
      tmp40 = new.target;
      decimal4 = new Decimal4(tmp);
      tmp42 = decimal4;
      return decimal4;
    } else {
      tmp43 = arg1;
      tmp44 = arg6;
      num5 = 1;
      tmp45 = arg0;
      str5 = "bigint";
      tmp3 = "bigint" !== typeof tmp;
      if (tmp3) {
        tmp2 = arg0;
        str = "symbol";
        tmp3 = "symbol" !== typeof tmp;
      }
      tmp4 = globalThis;
      _TypeError = TypeError;
      str2 = "BigInt and Symbol are not supported";
      invariantResult = arg1(arg6[1]).invariant(tmp3, "BigInt and Symbol are not supported", TypeError);
      tmp6 = arg0;
      if (undefined === tmp) {
        tmp30 = arg1;
        tmp31 = arg6;
        num3 = 0;
        Decimal3 = arg1(arg6[0]).Decimal;
        _NaN = NaN;
        prototype3 = Decimal3.prototype;
        tmp32 = new.target;
        tmp33 = new.target;
        decimal3 = new Decimal3(NaN);
        tmp35 = decimal3;
        return decimal3;
      } else {
        tmp46 = arg0;
        tmp47 = null;
        if (null !== tmp) {
          tmp48 = arg0;
          num6 = 0;
          if (0 !== tmp) {
            tmp49 = arg0;
            flag = true;
            if (true === tmp) {
              tmp22 = arg1;
              tmp23 = arg6;
              Decimal2 = arg1(arg6[0]).Decimal;
              prototype2 = Decimal2.prototype;
              tmp24 = new.target;
              tmp25 = new.target;
              num = 1;
              decimal2 = new Decimal2(1);
              tmp27 = decimal2;
              return decimal2;
            } else {
              tmp50 = arg0;
              str6 = "string";
              if ("string" === typeof tmp) {
                tmp15 = arg1;
                tmp16 = arg6;
                Decimal = arg1(arg6[0]).Decimal;
                tmp17 = arg0;
                prototype = Decimal.prototype;
                tmp18 = new.target;
                tmp19 = new.target;
                decimal = new Decimal(tmp);
                tmp21 = decimal;
                return decimal;
              } else {
                tmp7 = arg1;
                tmp8 = arg6;
                tmp9 = arg0;
                _TypeError2 = TypeError;
                str3 = "object";
                str4 = "object expected";
                invariantResult1 = arg1(arg6[1]).invariant("object" === typeof tmp, "object expected", TypeError);
                tmp11 = ToPrimitive;
                tmp12 = ToPrimitive(tmp, "number");
                _TypeError3 = TypeError;
                invariantResult2 = arg1(arg6[1]).invariant("object" !== typeof tmp12, "object expected", TypeError);
                tmp14 = ToNumber;
                return ToNumber(tmp12);
              }
            }
          }
        }
        tmp28 = arg1;
        tmp29 = arg6;
        num2 = 2;
        return arg1(arg6[2]).ZERO;
      }
    }
  }
}
function mod(arg0, arg1) {
  return arg0 - Math.floor(arg0 / arg1) * arg1;
}
class Day {
  constructor(arg0) {
    return Math.floor(arg0 / closure_2);
  }
}
class DayFromYear {
  constructor(arg0) {
    if (arg0 < 100) {
      tmp3 = globalThis;
      _Date2 = Date;
      prototype = Date.prototype;
      tmp4 = new.target;
      num2 = 0;
      tmp5 = new.target;
      num3 = 0;
      date = new Date(0);
      tmp6 = date;
      num4 = 1;
      setUTCFullYearResult = date.setUTCFullYear(arg0, 0, 1);
      tmp8 = date;
      num5 = 0;
      num6 = 0;
      num7 = 0;
      num8 = 0;
      setUTCHoursResult = require("module_0");
      tmp10 = closure_2;
      return date.getTime() / closure_2;
    } else {
      tmp = globalThis;
      _Date = Date;
      num = 0;
      tmp2 = closure_2;
      return Date.UTC(arg0, 0) / closure_2;
    }
  }
}
class YearFromTime {
  constructor(arg0) {
    date = new Date(arg0);
    return date.getUTCFullYear();
  }
}
class DaysInYear {
  constructor(arg0) {
    num = 365;
    if (arg0 % 4 === 0) {
      num2 = 100;
      num3 = 366;
      num4 = 366;
      if (arg0 % 100 === 0) {
        num5 = 400;
        if (arg0 % 400 !== 0) {
          num3 = 365;
        }
        num4 = num3;
      }
      num = num4;
    }
    return num;
  }
}
class DayWithinYear {
  constructor(arg0) {
    tmp = Day(arg0);
    return tmp - DayFromYear(YearFromTime(arg0));
  }
}
class InLeapYear {
  constructor(arg0) {
    num = 1;
    if (365 === DaysInYear(YearFromTime(arg0))) {
      num = 0;
    }
    return num;
  }
}
class MonthFromTime {
  constructor(arg0) {
    tmp = DayWithinYear(arg0);
    tmp2 = InLeapYear(arg0);
    if (tmp >= 0) {
      num = 31;
      if (tmp < 31) {
        return 0;
      }
    }
    if (tmp < 59 + tmp2) {
      num16 = 1;
      return 1;
    } else {
      num17 = 90;
      if (tmp < 90 + tmp2) {
        num15 = 2;
        return 2;
      } else {
        num18 = 120;
        if (tmp < 120 + tmp2) {
          num14 = 3;
          return 3;
        } else {
          num19 = 151;
          if (tmp < 151 + tmp2) {
            num13 = 4;
            return 4;
          } else {
            num20 = 181;
            if (tmp < 181 + tmp2) {
              num12 = 5;
              return 5;
            } else {
              num21 = 212;
              if (tmp < 212 + tmp2) {
                num11 = 6;
                return 6;
              } else {
                num22 = 243;
                if (tmp < 243 + tmp2) {
                  num10 = 7;
                  return 7;
                } else {
                  num2 = 273;
                  if (tmp < 273 + tmp2) {
                    num9 = 8;
                    return 8;
                  } else {
                    num3 = 304;
                    if (tmp < 304 + tmp2) {
                      num8 = 9;
                      return 9;
                    } else {
                      num4 = 334;
                      if (tmp < 334 + tmp2) {
                        num7 = 10;
                        return 10;
                      } else {
                        num5 = 365;
                        if (tmp < 365 + tmp2) {
                          num6 = 11;
                          return 11;
                        } else {
                          tmp3 = globalThis;
                          _Error = Error;
                          prototype = Error.prototype;
                          tmp4 = new.target;
                          str = "Invalid time";
                          tmp5 = new.target;
                          error = new Error("Invalid time");
                          tmp7 = error;
                          throw error;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function IsCallable(arg0) {
  return "function" === typeof arg0;
}
class ToPrimitive {
  constructor(arg0, arg1) {
    if ("object" === typeof arg0) {
      tmp = null;
      if (null != arg0) {
        tmp2 = globalThis;
        _Symbol = Symbol;
        tmp3 = undefined;
        if (Symbol.toPrimitive in arg0) {
          _Symbol2 = Symbol;
          tmp3 = arg0[Symbol.toPrimitive];
        }
        if (undefined !== tmp3) {
          str4 = "default";
          if (undefined !== arg1) {
            str4 = "string";
            if ("string" !== arg1) {
              tmp11 = arg1;
              tmp12 = arg6;
              num2 = 1;
              str5 = "number";
              str6 = "preferredType must be \"string\" or \"number\"";
              invariantResult = arg1(arg6[1]).invariant("number" === arg1, "preferredType must be \"string\" or \"number\"");
              str4 = "number";
            }
          }
          callResult = tmp3.call(arg0, str4);
          if ("object" !== typeof callResult) {
            return callResult;
          } else {
            _TypeError2 = TypeError;
            prototype2 = TypeError.prototype;
            tmp15 = new.target;
            str7 = "Cannot convert exotic object to primitive.";
            tmp16 = new.target;
            typeError = new TypeError("Cannot convert exotic object to primitive.");
            tmp18 = typeError;
            throw typeError;
          }
        } else {
          str = arg1;
          if (undefined === arg1) {
            str = "number";
          }
          str2 = "string";
          arr = "string" === str ? [true, true] : [];
          num = 0;
          if (0 < arr.length) {
            while (true) {
              obj = arg0[arr[num]];
              tmp4 = IsCallable;
              if (IsCallable(obj)) {
                callResult1 = obj.call(arg0);
                tmp6 = callResult1;
                if ("object" !== typeof callResult1) {
                  break;
                }
              }
              num = num + 1;
            }
            return callResult1;
          }
          _TypeError = TypeError;
          prototype = TypeError.prototype;
          tmp7 = new.target;
          str3 = "Cannot convert object to primitive value";
          tmp8 = new.target;
          typeError1 = new TypeError("Cannot convert object to primitive value");
          tmp10 = typeError1;
          throw typeError1;
        }
      }
    }
    return arg0;
  }
}
arg5.ToString = function ToString(arg0) {
  if ("symbol" === typeof arg0) {
    const _TypeError = TypeError;
    throw TypeError("Cannot convert a Symbol value to a string");
  } else {
    const _String = String;
    return String(arg0);
  }
};
arg5.ToNumber = ToNumber;
arg5.TimeClip = function TimeClip(isFinite) {
  if (isFinite.isFinite()) {
    if (absResult.greaterThan(8640000000000001)) {
      const Decimal2 = arg1(arg6[0]).Decimal;
      const _NaN2 = NaN;
      const prototype2 = Decimal2.prototype;
      const decimal2 = new Decimal2(NaN);
      return decimal2;
    } else {
      const obj2 = ToNumber(isFinite);
      if (!obj2.isNaN()) {
        if (!obj2.isZero()) {
          let ZERO = obj2;
          if (!obj2.isFinite()) {
            const floorResult = obj2.abs().floor();
            let negatedResult = floorResult;
            if (obj2.isNegative()) {
              negatedResult = floorResult.negated();
            }
            ZERO = negatedResult;
            const absResult1 = obj2.abs();
          }
        }
        return ZERO;
      }
      ZERO = arg1(arg6[2]).ZERO;
    }
    const absResult = isFinite.abs();
  } else {
    const Decimal = arg1(arg6[0]).Decimal;
    const _NaN = NaN;
    const prototype = Decimal.prototype;
    const decimal = new Decimal(NaN);
    return decimal;
  }
};
arg5.ToObject = function ToObject(arg0) {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("undefined/null cannot be converted to object");
    throw typeError;
  } else {
    const _Object = Object;
    return Object(arg0);
  }
};
arg5.SameValue = function SameValue(arg0, arg1) {
  if (Object.is) {
    const _Object = Object;
    return Object.is(arg0, arg1);
  } else if (arg0 === arg1) {
    let tmp2 = 0 !== arg0;
    if (!tmp2) {
      tmp2 = 1 / arg0 === 1 / arg1;
    }
    return tmp2;
  } else {
    return arg0 != arg0 && arg1 != arg1;
  }
};
arg5.ArrayCreate = function ArrayCreate(arg0) {
  const array = new Array(arg0);
  return array;
};
arg5.HasOwnProperty = function HasOwnProperty(defaultResult, initializedLocale) {
  return hasOwnProperty.call(defaultResult, initializedLocale);
};
arg5.Type = function Type(arg0) {
  if (null === arg0) {
    return "Null";
  } else if (undefined === arg0) {
    return "Undefined";
  } else {
    if ("function" !== typeof arg0) {
      if ("object" !== tmp) {
        if ("number" === tmp) {
          return "Number";
        } else if ("boolean" === tmp) {
          return "Boolean";
        } else if ("string" === tmp) {
          return "String";
        } else if ("symbol" === tmp) {
          return "Symbol";
        } else if ("bigint" === tmp) {
          return "BigInt";
        }
      }
    }
    return "Object";
  }
};
arg5.Day = Day;
arg5.WeekDay = function WeekDay(arg0) {
  return mod(Day(arg0) + 4, 7);
};
arg5.DayFromYear = DayFromYear;
arg5.TimeFromYear = function TimeFromYear(arg0) {
  return Date.UTC(arg0, 0);
};
arg5.YearFromTime = YearFromTime;
arg5.DaysInYear = DaysInYear;
arg5.DayWithinYear = DayWithinYear;
arg5.InLeapYear = InLeapYear;
arg5.MonthFromTime = MonthFromTime;
arg5.DateFromTime = function DateFromTime(arg0) {
  const tmp = DayWithinYear(arg0);
  const tmp2 = MonthFromTime(arg0);
  const tmp3 = InLeapYear(arg0);
  if (0 === tmp2) {
    return tmp + 1;
  } else if (1 === tmp2) {
    return tmp - 30;
  } else if (2 === tmp2) {
    return tmp - 58 - tmp3;
  } else if (3 === tmp2) {
    return tmp - 89 - tmp3;
  } else if (4 === tmp2) {
    return tmp - 119 - tmp3;
  } else if (5 === tmp2) {
    return tmp - 150 - tmp3;
  } else if (6 === tmp2) {
    return tmp - 180 - tmp3;
  } else if (7 === tmp2) {
    return tmp - 211 - tmp3;
  } else if (8 === tmp2) {
    return tmp - 242 - tmp3;
  } else if (9 === tmp2) {
    return tmp - 272 - tmp3;
  } else if (10 === tmp2) {
    return tmp - 303 - tmp3;
  } else if (11 === tmp2) {
    return tmp - 333 - tmp3;
  } else {
    const _Error = Error;
    const error = new Error("Invalid time");
    throw error;
  }
};
arg5.HourFromTime = function HourFromTime(arg0) {
  return mod(Math.floor(arg0 / closure_8), closure_3);
};
arg5.MinFromTime = function MinFromTime(arg0) {
  return mod(Math.floor(arg0 / closure_7), closure_4);
};
arg5.SecFromTime = function SecFromTime(arg0) {
  return mod(Math.floor(arg0 / closure_6), closure_5);
};
arg5.OrdinaryHasInstance = function OrdinaryHasInstance(arg0, arg1, boundTargetFunction) {
  if (IsCallable(arg0)) {
    boundTargetFunction = undefined;
    if (null != boundTargetFunction) {
      boundTargetFunction = boundTargetFunction.boundTargetFunction;
    }
    if (boundTargetFunction) {
      let boundTargetFunction1;
      if (null != boundTargetFunction) {
        boundTargetFunction1 = boundTargetFunction.boundTargetFunction;
      }
      return arg1 instanceof boundTargetFunction1;
    } else if ("object" !== typeof arg1) {
      return false;
    } else {
      const prototype = arg0.prototype;
      if ("object" !== typeof prototype) {
        const _TypeError = TypeError;
        const typeError = new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        throw typeError;
      } else {
        const _Object = Object;
        return isPrototypeOf.call(prototype, arg1);
      }
    }
  } else {
    return false;
  }
};
arg5.msFromTime = function msFromTime(arg0) {
  return mod(arg0, closure_6);
};
arg5.ToPrimitive = ToPrimitive;
let closure_2 = 86400000;
let closure_3 = 24;
let closure_4 = 60;
let closure_5 = 60;
let closure_6 = 1000;
let closure_7 = 60000;
let closure_8 = 3600000;
