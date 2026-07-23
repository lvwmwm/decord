// Module ID: 3511
// Function ID: 26958
// Name: _typeof
// Dependencies: [3455, 3442, 3209, 3459, 3454, 3372, 3213, 3210, 3214, 3512, 3456, 3513]
// Exports: default

// Module 3511 (_typeof)
import module_3455 from "module_3455";
import subMilliseconds from "subMilliseconds";
import _typeof from "_typeof";
import assign from "assign";
import dateLongFormatter from "dateLongFormatter";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";

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
function _createForOfIteratorHelper(arg0, arg1) {
  let closure_0 = arg0;
  if ("undefined" !== typeof Symbol) {
    const _Symbol = Symbol;
    if (null != arg0[Symbol.iterator]) {
      let c4 = true;
      let c5 = false;
      let obj = {
        s() {
              let closure_1 = lib[Symbol.iterator]();
            },
        n() {
              const iter = arr.next();
              const done = iter.done;
              return iter;
            },
        e(arg0) {
              let c5 = true;
              let closure_3 = arg0;
            },
        f() {
              let tmp = c4;
              if (!c4) {
                tmp = null == arr.return;
              }
              if (!tmp) {
                arr.return();
              }
              if (c5) {
                throw closure_3;
              }
            }
      };
      return obj;
    }
  }
  if (!Array.isArray(arg0)) {
    let arr;
    if (arg0) {
      if ("string" === typeof arg0) {
        arr = _arrayLikeToArray(arg0, undefined);
      } else {
        const _Object = Object;
        const substr = toString.call(arg0).slice(8, -1);
        let name = substr;
        if (tmp3) {
          name = arg0.constructor.name;
        }
        if ("Map" !== name) {
          if ("Set" !== name) {
            if ("Arguments" === name) {
              arr = _arrayLikeToArray(arg0, undefined);
            } else {
              const obj2 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            }
          }
        }
        class F {
          constructor() {
            return;
          }
        }
        arr = Array.from(arg0);
        const callResult = toString.call(arg0);
        tmp3 = "Object" === substr && arg0.constructor;
      }
    }
    if (!arr) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      throw typeError;
    }
  }
  if (arr) {
    closure_0 = arr;
  }
  let c2 = 0;
  class F {
    constructor() {
      return;
    }
  }
  obj = {
    s: F,
    n() {
      if (closure_2 >= lib.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_2 = tmp3 + 1;
        obj.value = lib[+closure_2];
      }
      return obj;
    },
    e(arg0) {
      throw arg0;
    },
    f: F
  };
  return obj;
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arg0[num];
  }
  return array;
}
const re10 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re11 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const re12 = /^'([^]*?)'?$/;
const re13 = /''/g;
const re14 = /\S/;
const re15 = /[a-zA-Z]/;

export default function parse(arg0, arg1, defaultResult1, locale) {
  const _require = arg0;
  const dependencyMap = locale;
  requiredArgs.default(3, arguments);
  const module_3455 = String(arg0);
  const StringResult = String(arg1);
  const subMilliseconds = StringResult;
  const defaultOptions = _require(3214).getDefaultOptions();
  locale = undefined;
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = module_3455.default;
  }
  if (locale.match) {
    let prop;
    if (null != locale) {
      prop = locale.firstWeekContainsDate;
    }
    if (null === prop) {
      let prop1;
      if (null != locale) {
        locale = locale.locale;
        if (null !== locale) {
          if (undefined !== locale) {
            const options = locale.options;
            if (null !== options) {
              if (undefined !== options) {
                prop1 = options.firstWeekContainsDate;
              }
            }
          }
        }
      }
      prop = prop1;
    }
    if (null === prop) {
      prop = defaultOptions.firstWeekContainsDate;
    }
    if (null === prop) {
      const locale2 = defaultOptions.locale;
      let prop2;
      if (null !== locale2) {
        if (undefined !== locale2) {
          const options2 = locale2.options;
          if (null !== options2) {
            if (undefined !== options2) {
              prop2 = options2.firstWeekContainsDate;
            }
          }
        }
      }
      prop = prop2;
    }
    let num2 = 1;
    if (null !== prop) {
      num2 = 1;
      if (undefined !== prop) {
        num2 = prop;
      }
    }
    defaultResult1 = toInteger.default(num2);
    if (defaultResult1 >= 1) {
      if (tmp15 <= 7) {
        let weekStartsOn;
        if (null != locale) {
          weekStartsOn = locale.weekStartsOn;
        }
        if (null === weekStartsOn) {
          let weekStartsOn1;
          if (null != locale) {
            const locale3 = locale.locale;
            if (null !== locale3) {
              if (undefined !== locale3) {
                const options3 = locale3.options;
                if (null !== options3) {
                  if (undefined !== options3) {
                    weekStartsOn1 = options3.weekStartsOn;
                  }
                }
              }
            }
          }
          weekStartsOn = weekStartsOn1;
        }
        if (null === weekStartsOn) {
          weekStartsOn = defaultOptions.weekStartsOn;
        }
        if (null === weekStartsOn) {
          const locale4 = defaultOptions.locale;
          let weekStartsOn2;
          if (null !== locale4) {
            if (undefined !== locale4) {
              const options4 = locale4.options;
              if (null !== options4) {
                if (undefined !== options4) {
                  weekStartsOn2 = options4.weekStartsOn;
                }
              }
            }
          }
          weekStartsOn = weekStartsOn2;
        }
        let num5 = 0;
        if (null !== weekStartsOn) {
          num5 = 0;
          if (undefined !== weekStartsOn) {
            num5 = weekStartsOn;
          }
        }
        const defaultResult2 = toInteger.default(num5);
        if (defaultResult2 >= 0) {
          if (tmp26 <= 6) {
            if ("" === str) {
              if ("" === module_3455) {
                let defaultResult3 = locale.default(defaultResult1);
              } else {
                const _Date4 = Date;
                const _NaN4 = NaN;
                defaultResult3 = new Date(NaN);
              }
              return defaultResult3;
            } else {
              let obj = { firstWeekContainsDate: defaultResult1, weekStartsOn: defaultResult2, locale };
              const DateToSystemTimezoneSetter = _require(3512).DateToSystemTimezoneSetter;
              const prototype8 = DateToSystemTimezoneSetter.prototype;
              const dateToSystemTimezoneSetter = new DateToSystemTimezoneSetter();
              const items = [dateToSystemTimezoneSetter];
              const match = str.match(closure_11);
              const mapped = match.map((arg0) => {
                const first = arg0[0];
                let tmp2 = arg0;
                if (first in obj.default) {
                  tmp2 = obj.default[first](arg0, locale.formatLong);
                }
                return tmp2;
              });
              toInteger = [];
              const obj8 = _createForOfIteratorHelper(mapped.join("").match(closure_10));
              function _loop() {
                let useAdditionalWeekYearTokens = null != incompatibleTokens;
                if (useAdditionalWeekYearTokens) {
                  useAdditionalWeekYearTokens = incompatibleTokens.useAdditionalWeekYearTokens;
                }
                if (!useAdditionalWeekYearTokens) {
                  useAdditionalWeekYearTokens = !callback(locale[10]).isProtectedWeekYearToken(str);
                }
                if (!useAdditionalWeekYearTokens) {
                  callback(locale[10]).throwProtectedError(str, closure_3, str2);
                }
                let useAdditionalDayOfYearTokens = null != incompatibleTokens;
                if (useAdditionalDayOfYearTokens) {
                  useAdditionalDayOfYearTokens = incompatibleTokens.useAdditionalDayOfYearTokens;
                }
                if (!useAdditionalDayOfYearTokens) {
                  useAdditionalDayOfYearTokens = !callback(locale[10]).isProtectedDayOfYearToken(str);
                }
                if (!useAdditionalDayOfYearTokens) {
                  callback(locale[10]).throwProtectedError(str, closure_3, str2);
                }
                str2 = str[0];
                let obj = callback(locale[11]).parsers[str2];
                if (obj) {
                  incompatibleTokens = obj.incompatibleTokens;
                  const _Array = Array;
                  if (Array.isArray(incompatibleTokens)) {
                    const found = arr2.find((token) => {
                      let hasItem = incompatibleTokens.includes(token.token);
                      if (!hasItem) {
                        hasItem = token.token === str2;
                      }
                      return hasItem;
                    });
                    if (found) {
                      const _RangeError3 = RangeError;
                      const concat2 = "The format string mustn't contain `".concat;
                      const combined = "The format string mustn't contain `".concat(found.fullToken, "` and `");
                      const rangeError = new RangeError(combined.concat(str, "` at the same time"));
                      throw rangeError;
                    }
                  } else if ("*" === obj.incompatibleTokens) {
                    if (arr2.length > 0) {
                      const _RangeError2 = RangeError;
                      const concat = "The format string mustn't contain `".concat;
                      const rangeError1 = new RangeError("The format string mustn't contain `".concat(str, "` and any other token at the same time"));
                      throw rangeError1;
                    }
                  }
                  obj = { token: str2, fullToken: str };
                  let arr = arr2.push(obj);
                  const runResult = obj.run(arr, str, locale.match, obj);
                  if (runResult) {
                    arr = items.push(runResult.setter);
                    arr = runResult.rest;
                  } else {
                    obj = {};
                    const _Date2 = Date;
                    const _NaN2 = NaN;
                    const date = new Date(NaN);
                    obj.v = date;
                    return obj;
                  }
                } else if (str2.match(outer1_15)) {
                  const _RangeError = RangeError;
                  const rangeError2 = new RangeError("Format string contains an unescaped latin alphabet character `" + str2 + "`");
                  throw rangeError2;
                } else {
                  let str5 = "'";
                  if ("''" !== str) {
                    str5 = str;
                    if ("'" === str2) {
                      str5 = str.match(outer1_12)[1].replace(outer1_13, "'");
                      const str6 = str.match(outer1_12)[1];
                    }
                  }
                  if (0 !== arr.indexOf(str5)) {
                    const obj1 = {};
                    const _Date = Date;
                    const _NaN = NaN;
                    const date1 = new Date(NaN);
                    obj1.v = date1;
                    return obj1;
                  } else {
                    arr = arr.slice(str5.length);
                  }
                }
              }
              obj8.s();
              const iter5 = obj8.n();
              let iter = iter5;
              if (!iter5.done) {
                const _loopResult = _loop();
                while ("object" !== _typeof(_loopResult)) {
                  let tmp37 = obj8;
                  iter = obj8.n();
                }
                obj8.f();
                return _loopResult.v;
              }
              while (true) {
                let tmp40 = obj8;
                let fResult1 = obj8.f();
                let tmp42 = module_3455;
                if (module_3455.length <= 0) {
                  break;
                } else {
                  let tmp43 = regex;
                  let tmp44 = module_3455;
                  if (!regex.test(module_3455)) {
                    break;
                  } else {
                    let _Date3 = Date;
                    let _NaN3 = NaN;
                    let tmp83 = new.target;
                    let tmp84 = new.target;
                    let date = new Date(NaN);
                    let tmp86 = date;
                    return date;
                  }
                }
                let tmp45 = items;
                let mapped1 = arr5.map((priority) => priority.priority);
                let sorted = mapped1.sort((arg0, arg1) => arg1 - arg0);
                let found = sorted.filter((arg0, arg1, arr) => arr.indexOf(arg0) === arg1);
                let mapped2 = found.map((arg0) => {
                  let closure_0 = arg0;
                  const found = items.filter((priority) => priority.priority === closure_0);
                  return found.sort((subPriority, subPriority2) => subPriority2.subPriority - subPriority.subPriority);
                });
                let tmp47 = locale;
                let tmp48 = defaultResult1;
                let mapped3 = mapped2.map((arg0) => arg0[0]);
                let defaultResult4 = locale.default(defaultResult1);
                let tmp49 = defaultResult4;
                let _isNaN = isNaN;
                if (isNaN(defaultResult4.getTime())) {
                  let _Date2 = Date;
                  let _NaN2 = NaN;
                  let tmp79 = new.target;
                  let tmp80 = new.target;
                  let date1 = new Date(NaN);
                  let tmp82 = date1;
                  return date1;
                } else {
                  let tmp50 = subMilliseconds;
                  let tmp51 = defaultResult4;
                  let tmp52 = items;
                  let defaultResult5 = subMilliseconds.default(tmp49, items.default(tmp49));
                  obj = {};
                  let tmp54 = _createForOfIteratorHelper;
                  let obj4 = _createForOfIteratorHelper(mapped3);
                  let tmp55 = obj4;
                  let sResult = obj4.s();
                  let iter2 = obj4.n();
                  let iter3 = iter2;
                  if (!iter2.done) {
                    let tmp57 = iter3;
                    let value = iter3.value;
                    let obj5 = value;
                    let tmp58 = defaultResult5;
                    let tmp59 = obj;
                    while (value.validate(defaultResult5, tmp92)) {
                      let tmp66 = value;
                      let tmp67 = defaultResult5;
                      let tmp68 = obj;
                      let tmp69 = obj;
                      let result = obj5.set(defaultResult5, obj, tmp92);
                      let tmp71 = result;
                      let _Array = Array;
                      let tmp72 = result;
                      if (Array.isArray(result)) {
                        defaultResult5 = tmp71[0];
                        let tmp73 = iter;
                        let tmp74 = obj;
                        let defaultResult6 = iter.default(obj, tmp71[1]);
                      } else {
                        defaultResult5 = tmp71;
                      }
                      let tmp76 = obj4;
                      let iter4 = obj4.n();
                      iter3 = iter4;
                    }
                    let _Date = Date;
                    let _NaN = NaN;
                    let tmp60 = new.target;
                    let tmp61 = new.target;
                    let date2 = new Date(NaN);
                    let tmp63 = date2;
                    let tmp64 = obj4;
                    let fResult2 = obj4.f();
                    return date2;
                  }
                  let tmp77 = obj4;
                  let fResult3 = obj4.f();
                }
              }
              arr5 = items;
              let str6 = mapped.join("");
            }
          }
        }
        let _RangeError3 = RangeError;
        let rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        throw rangeError;
      }
    }
    let _RangeError2 = RangeError;
    let rangeError1 = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    throw rangeError1;
  } else {
    let _RangeError = RangeError;
    let rangeError2 = new RangeError("locale must contain match property");
    throw rangeError2;
  }
};
export default exports.default;
