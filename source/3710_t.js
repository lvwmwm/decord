// Module ID: 3710
// Function ID: 28115
// Name: t
// Dependencies: []

// Module 3710 (t)
const fn = function t() {
  class hooks {
    constructor() {
      return createLocal(...arguments);
    }
    static parseTwoDigitYear(arg0) {
      tmp = toInt(arg0);
      num = 2000;
      if (toInt(arg0) > 68) {
        num = 1900;
      }
      return tmp + num;
    }
    static ISO_8601() {
      return;
    }
    static RFC_2822() {
      return;
    }
    static updateOffset() {
      return;
    }
    static min() {
      slice = [].slice;
      return pickBy("isBefore", slice.call(arguments, 0));
    }
    static max() {
      slice = [].slice;
      return pickBy("isAfter", slice.call(arguments, 0));
    }
    static now() {
      _Date = Date;
      if (Date.now) {
        nowResult = _Date.now();
      } else {
        prototype = _Date.prototype;
        tmp = new.target;
        tmp2 = new.target;
        _Date = new _Date();
        tmp4 = _Date;
        nowResult = +_Date;
      }
      return nowResult;
    }
    static unix(arg0) {
      return createLocal(1000 * arg0);
    }
    static months(arg0, arg1) {
      return listMonthsImpl(arg0, arg1, "months");
    }
    static weekdays(arg0, arg1, arg2) {
      return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
    }
    static parseZone() {
      applyResult = createLocal(...arguments);
      return applyResult.parseZone();
    }
    static monthsShort(arg0, arg1) {
      return listMonthsImpl(arg0, arg1, "monthsShort");
    }
    static weekdaysMin(arg0, arg1, arg2) {
      return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
    }
    static updateLocale(arg0, arg1) {
      if (null != arg1) {
        _config = closure_36;
        tmp4 = loadLocale;
        tmp5 = loadLocale(arg0);
        if (null != tmp5) {
          _config = tmp5._config;
        }
        tmp6 = Locale;
        tmp7 = mergeConfigs;
        prototype = Locale.prototype;
        tmp8 = new.target;
        tmp9 = new.target;
        tmp10 = new Locale(mergeConfigs(_config, arg1));
        tmp11 = tmp10;
        tmp12 = closure_37;
        tmp10.parentLocale = closure_37[arg0];
        tmp13 = closure_37;
        closure_37[arg0] = tmp10;
        tmp14 = getSetGlobalLocale;
        tmp15 = getSetGlobalLocale(arg0);
      } else {
        tmp = closure_37;
        if (null != closure_37[arg0]) {
          tmp16 = closure_37;
          if (null != closure_37[arg0].parentLocale) {
            tmp3 = closure_37;
            closure_37[arg0] = closure_37[arg0].parentLocale;
          } else {
            tmp2 = closure_37;
            if (null != closure_37[arg0]) {
              tmp17 = closure_37;
              delete r2[r1];
            }
          }
        }
      }
      return closure_37[arg0];
    }
    static locales() {
      return keys(closure_37);
    }
    static weekdaysShort(arg0, arg1, arg2) {
      return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
    }
    static relativeTimeRounding(arg0) {
      if (undefined === arg0) {
        flag = round;
      } else {
        str = "function";
        flag = "function" === typeof arg0;
        if (flag) {
          round = arg0;
          flag = true;
        }
      }
      return flag;
    }
    static relativeTimeThreshold(arg0, arg1) {
      tmp = undefined !== round[arg0];
      if (!tmp) {
        return tmp;
      } else {
        if (undefined === arg1) {
          tmp4 = round;
          flag = round[arg0];
        } else {
          tmp2 = round;
          round[arg0] = arg1;
          str = "s";
          flag = true;
          if ("s" === arg0) {
            tmp3 = round;
            num = 1;
            round.ss = arg1 - 1;
            flag = true;
          }
        }
        tmp5 = flag;
      }
      return;
    }
    static calendarFormat(arg0, arg1) {
      diffResult = arg0.diff(arg1, "days", true);
      str = "sameElse";
      str2 = "sameElse";
      if (diffResult >= -6) {
        num = -1;
        str3 = "lastWeek";
        if (diffResult >= -1) {
          num2 = 0;
          str4 = "lastDay";
          if (diffResult >= 0) {
            num3 = 1;
            str5 = "sameDay";
            if (diffResult >= 1) {
              num4 = 2;
              str6 = "nextDay";
              if (diffResult >= 2) {
                num5 = 7;
                if (diffResult < 7) {
                  str = "nextWeek";
                }
                str6 = str;
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    }
  }
  function isArray(arg0) {
    let tmp = arg0 instanceof Array;
    if (!tmp) {
      const _Object = Object;
      tmp = "[object Array]" === toString.call(arg0);
    }
    return tmp;
  }
  function isObject(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      const _Object = Object;
      tmp = "[object Object]" === toString.call(arg0);
    }
    return tmp;
  }
  function isUndefined(arg0) {
    return undefined === arg0;
  }
  function isNumber(arg0) {
    let tmp = "number" === typeof arg0;
    if (!tmp) {
      const _Object = Object;
      tmp = "[object Number]" === toString.call(arg0);
    }
    return tmp;
  }
  function isDate(arg0) {
    let tmp = arg0 instanceof Date;
    if (!tmp) {
      const _Object = Object;
      tmp = "[object Date]" === toString.call(arg0);
    }
    return tmp;
  }
  function map(arg0, arg1) {
    let length;
    const items = [];
    let num = 0;
    if (0 < arg0.length) {
      do {
        let arr = items.push(arg1(arg0[num], num));
        num = num + 1;
        length = arg0.length;
      } while (num < length);
    }
    return items;
  }
  function hasOwnProp(closure_15, _locale) {
    return hasOwnProperty.call(closure_15, _locale);
  }
  function extend(arg0, closure_15) {
    for (const key10005 in arg1) {
      let tmp = key10005;
      let tmp2 = closure_62;
      if (!closure_62(arg1, key10005)) {
        continue;
      } else {
        arg0[key10005] = arg1[key10005];
        // continue
      }
      continue;
    }
    if (hasOwnProp(closure_15, "toString")) {
      arg0.toString = closure_15.toString;
    }
    if (hasOwnProp(closure_15, "valueOf")) {
      arg0.valueOf = closure_15.valueOf;
    }
    return arg0;
  }
  function createUTC(_a, _f) {
    return createLocalOrUTC(_a, _f, arg2, arg3, true).utc();
  }
  function getParsingFlags(_pf) {
    if (null == _pf._pf) {
      const obj = { unusedTokens: [], unusedInput: [], parsedDateParts: [] };
      _pf._pf = obj;
    }
    return _pf._pf;
  }
  function isValid(_isValid) {
    if (null == _isValid._isValid) {
      const tmp7 = getParsingFlags(_isValid);
      const _isNaN = isNaN;
      const _d = _isValid._d;
      let tmp = !isNaN(_d.getTime());
      if (tmp) {
        tmp = tmp7.overflow < 0;
      }
      if (tmp) {
        tmp = !tmp7.empty;
      }
      if (tmp) {
        tmp = !tmp7.invalidMonth;
      }
      if (tmp) {
        tmp = !tmp7.invalidWeekday;
      }
      if (tmp) {
        tmp = !tmp7.weekdayMismatch;
      }
      if (tmp) {
        tmp = !tmp7.nullInput;
      }
      if (tmp) {
        tmp = !tmp7.invalidFormat;
      }
      if (tmp) {
        tmp = !tmp7.userInvalidated;
      }
      if (tmp) {
        let tmp2 = !tmp7.meridiem;
        if (!tmp2) {
          tmp2 = tmp7.meridiem && callResult;
          const tmp3 = tmp7.meridiem && callResult;
        }
        tmp = tmp2;
      }
      let tmp4 = tmp;
      if (_isValid._strict) {
        let tmp5 = tmp;
        if (tmp) {
          tmp5 = 0 === tmp7.charsLeftOver;
        }
        if (tmp5) {
          tmp5 = 0 === tmp7.unusedTokens.length;
        }
        if (tmp5) {
          tmp5 = undefined === tmp7.bigHour;
        }
        tmp4 = tmp5;
      }
      const _Object = Object;
      if (null != Object.isFrozen) {
        const _Object2 = Object;
        if (Object.isFrozen(_isValid)) {
          return tmp4;
        }
      }
      _isValid._isValid = tmp4;
      const callResult = some.call(tmp7.parsedDateParts, (arg0) => null != arg0);
    }
    return _isValid._isValid;
  }
  function createInvalid(arg0) {
    const tmp = createUTC(NaN);
    if (null != arg0) {
      extend(getParsingFlags(tmp), arg0);
    } else {
      getParsingFlags(tmp).userInvalidated = true;
    }
    return tmp;
  }
  function copyConfig(arg0, self) {
    if (!isUndefined(self._isAMomentObject)) {
      arg0._isAMomentObject = self._isAMomentObject;
    }
    if (!isUndefined(self._i)) {
      arg0._i = self._i;
    }
    if (!isUndefined(self._f)) {
      arg0._f = self._f;
    }
    if (!isUndefined(self._l)) {
      arg0._l = self._l;
    }
    if (!isUndefined(self._strict)) {
      arg0._strict = self._strict;
    }
    if (!isUndefined(self._tzm)) {
      arg0._tzm = self._tzm;
    }
    if (!isUndefined(self._isUTC)) {
      arg0._isUTC = self._isUTC;
    }
    if (!isUndefined(self._offset)) {
      arg0._offset = self._offset;
    }
    if (!isUndefined(self._pf)) {
      arg0._pf = getParsingFlags(self);
    }
    if (!isUndefined(self._locale)) {
      arg0._locale = self._locale;
    }
    if (items.length > 0) {
      let num = 0;
      if (0 < items.length) {
        do {
          let tmp3 = closure_58;
          let tmp4 = closure_2;
          let tmp5 = closure_2[num];
          let tmp6 = self[tmp5];
          if (!closure_58(tmp6)) {
            arg0[tmp5] = tmp6;
          }
          num = num + 1;
          let tmp7 = closure_2;
        } while (num < closure_2.length);
      }
    }
    return arg0;
  }
  class Moment {
    constructor(arg0) {
      self = this;
      tmp = copyConfig(this, arg0);
      if (null != arg0._d) {
        _d = arg0._d;
        _NaN = _d.getTime();
      } else {
        _NaN = NaN;
      }
      date = new Date(_NaN);
      self._d = date;
      if (!self.isValid()) {
        _Date = Date;
        _NaN2 = NaN;
        prototype = Date.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        date1 = new Date(NaN);
        tmp6 = date1;
        self._d = date1;
      }
      if (false === closure_3) {
        flag = true;
        closure_3 = true;
        tmp7 = hooks;
        updateOffsetResult = hooks.updateOffset(self);
        closure_3 = false;
      }
      return;
    }
  }
  function isMoment(_d) {
    let tmp = _d instanceof Moment;
    if (!tmp) {
      tmp = null != _d && null != _d._isAMomentObject;
      const tmp3 = null != _d && null != _d._isAMomentObject;
    }
    return tmp;
  }
  function absFloor(result1) {
    if (result1 < 0) {
      const _Math2 = Math;
      let rounded = Math.ceil(result1) || 0;
      const tmp4 = Math.ceil(result1) || 0;
    } else {
      const _Math = Math;
      rounded = Math.floor(result1);
    }
    return rounded;
  }
  function toInt(arg0) {
    let isFiniteResult = 0 !== tmp;
    if (isFiniteResult) {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(tmp);
    }
    let num = 0;
    if (isFiniteResult) {
      num = absFloor(tmp);
    }
    return num;
  }
  function compareArrays(arg0, arg1, arg2) {
    const bound = Math.min(arg0.length, arg1.length);
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    const absolute = Math.abs(arg0.length - arg1.length);
    if (0 < bound) {
      do {
        let tmp3 = arg2;
        if (arg2) {
          tmp3 = arg0[num2] !== arg1[num2];
        }
        if (!tmp3) {
          let tmp4 = !arg2;
          if (tmp4) {
            let tmp5 = closure_72;
            let tmp6 = closure_72(arg0[num2]);
            tmp4 = tmp6 !== closure_72(arg1[num2]);
          }
          tmp3 = tmp4;
        }
        let sum = num3;
        if (tmp3) {
          sum = num3 + 1;
        }
        num2 = num2 + 1;
        num3 = sum;
        num = sum;
      } while (num2 < bound);
    }
    return num + absolute;
  }
  function warn(arg0) {
    let warn = false === hooks.suppressDeprecationWarnings;
    if (warn) {
      const _console = console;
      warn = "undefined" !== typeof console;
    }
    if (warn) {
      const _console2 = console;
      warn = console.warn;
    }
    if (warn) {
      const _console3 = console;
      console.warn(`Deprecation warning: ${arg0}`);
    }
  }
  function deprecate(arg0, addRegexTokenResult29) {
    const createLocal = arg0;
    const some = addRegexTokenResult29;
    let closure_2 = true;
    const fn = function() {
      if (null != closure_55.deprecationHandler) {
        closure_55.deprecationHandler(null, arg0);
      }
      if (closure_2) {
        const items = [];
        for (let num3 = 0; num3 < arguments.length; num3 = num3 + 1) {
          if ("object" === typeof arguments[num3]) {
            let text = `${"\n[" + num3}] `;
            let text1 = text;
            let arr2 = text;
            let keys = Object.keys();
            if (keys !== undefined) {
              arr2 = text1;
              let tmp9 = keys[tmp];
              while (tmp9 !== undefined) {
                let tmp21 = tmp9;
                text1 = `${tmp7}${tmp9}: ${arguments[0][tmp9]}, `;
                // continue
              }
            }
            let substr = arr2.slice(0, -2);
          } else {
            substr = arguments[num3];
          }
          let arr = items.push(substr);
        }
        const _Array = Array;
        const text2 = `${closure_0}
      Arguments: `;
        slice.call(items);
        const _Error = Error;
        const text3 = `${closure_0}
      Arguments: ${obj.join("")}`;
        const error = new Error();
        callback(`${`${closure_0}
      Arguments: ${obj.join("")}`}
      ${tmp18.stack}`);
        closure_2 = false;
      }
      return arg1(...arguments);
    };
    extend(fn, addRegexTokenResult29);
    return fn;
  }
  function deprecateSimple(defineLocaleOverride, arg1) {
    if (null != hooks.deprecationHandler) {
      hooks.deprecationHandler(defineLocaleOverride, arg1);
    }
    if (!closure_5[defineLocaleOverride]) {
      warn(arg1);
      closure_5[defineLocaleOverride] = true;
    }
  }
  function isFunction(arg0) {
    let tmp = arg0 instanceof Function;
    if (!tmp) {
      const _Object = Object;
      tmp = "[object Function]" === toString.call(arg0);
    }
    return tmp;
  }
  function mergeConfigs(_config, parentLocale) {
    let obj = {};
    extend(obj, _config);
    for (const key10009 in arg1) {
      let tmp12 = key10009;
      let tmp13 = closure_62;
      if (!closure_62(arg1, key10009)) {
        continue;
      } else {
        let tmp2 = closure_57;
        if (closure_57(arg0[key10009])) {
          let tmp3 = closure_57;
          if (closure_57(arg1[key10009])) {
            obj[key10009] = {};
            let tmp4 = closure_63;
            let tmp5 = closure_63(obj[key10009], arg0[key10009]);
            let tmp6 = closure_63(obj[key10009], arg1[key10009]);
            // continue
          }
        }
        if (null != arg1[key10009]) {
          obj[key10009] = arg1[key10009];
          // continue
        } else {
          delete r0[r11];
          // continue
        }
        continue;
      }
      continue;
    }
    for (const key10028 in arg0) {
      let tmp14 = key10028;
      let tmp15 = closure_62;
      let tmp8 = closure_62(arg0, key10028);
      if (tmp8) {
        let tmp7 = closure_62;
        tmp8 = !closure_62(arg1, key10028);
      }
      if (tmp8) {
        let tmp9 = closure_57;
        tmp8 = closure_57(arg0[key10028]);
      }
      if (!tmp8) {
        continue;
      } else {
        let tmp10 = closure_63;
        obj = {};
        let tmp11 = closure_63(obj, obj[key10028]);
        obj[key10028] = obj;
        // continue
      }
      continue;
    }
    return obj;
  }
  class Locale {
    constructor(arg0) {
      self = this;
      if (null != arg0) {
        result = self.set(arg0);
      }
      return;
    }
  }
  function addUnitAlias(date, D) {
    const formatted = date.toLowerCase();
    closure_6[D] = date;
    closure_6[formatted + "s"] = date;
    closure_6[formatted] = date;
  }
  function normalizeUnits(tmp3Result) {
    let tmp;
    if ("string" === typeof tmp3Result) {
      let tmp3 = closure_6[tmp3Result];
      if (!tmp3) {
        tmp3 = closure_6[tmp3Result.toLowerCase(tmp3Result)];
      }
      tmp = tmp3;
    }
    return tmp;
  }
  function normalizeObjectUnits(tmp3Result) {
    const obj = {};
    for (const key10006 in arg0) {
      let tmp5 = key10006;
      let tmp6 = closure_62;
      let tmp3 = closure_62(arg0, key10006);
      if (tmp3) {
        let tmp2 = closure_79;
        tmp3 = closure_79(key10006);
        let tmp = tmp3;
      }
      let tmp4 = tmp;
      if (!tmp3) {
        continue;
      } else {
        obj[tmp4] = arg0[key10006];
        tmp = tmp4;
        // continue
      }
      continue;
    }
    return obj;
  }
  function addUnitPriority(date, arg1) {
    closure_7[date] = arg1;
  }
  function zeroFill(arg0, arg1) {
    const text = `${Math.abs(arg0)}`;
    let str = "-";
    const diff = arg1 - `${Math.abs(arg0)}`.length;
    if (arg0 >= 0) {
      let str2 = "";
      if (arg2) {
        str2 = "+";
      }
      str = str2;
    }
    const str3 = Math.pow(10, Math.max(0, diff));
    return str + Math.pow(10, Math.max(0, diff)).toString().substr(1) + text;
  }
  function addFormatToken(D, items, DDDo, year) {
    let tmp = year;
    const createLocal = D;
    const some = items;
    items = year;
    let closure_3 = year;
    if ("string" === typeof year) {
      function func() {
        return this[closure_2]();
      }
      closure_3 = func;
      tmp = func;
    }
    if (D) {
      closure_11[D] = tmp;
    }
    if (items) {
      closure_11[items[0]] = function() {
        return callback(func(...arguments), arg1[1], arg1[2]);
      };
    }
    if (DDDo) {
      closure_11[DDDo] = function() {
        return this.localeData().ordinal(func(...arguments), arg0);
      };
    }
  }
  function formatMoment(self, Z) {
    if (self.isValid()) {
      const tmp4 = expandFormat(Z, self.localeData());
      let tmp6 = closure_10[tmp4];
      if (!tmp6) {
        tmp6 = function makeFormatFunction(str) {
          const match = str.match(closure_8);
          const length = match.length;
          let num = 0;
          if (0 < length) {
            do {
              let tmp2 = closure_11;
              if (closure_11[match[num]]) {
                let tmp4 = closure_11;
                match[num] = closure_11[match[num]];
                str = tmp;
              } else {
                str = match[num];
                let replace = str.replace;
                if (str.match(/\[[\s\S]/)) {
                  let replaced = replace(/^\[|\]$/g, "");
                } else {
                  replaced = replace(/\\/g, "");
                }
                match[num] = replaced;
              }
              num = num + 1;
              let tmp = str;
            } while (num < length);
          }
          return (arg0) => {
            let num = 0;
            let str = "";
            let str2 = "";
            if (0 < length) {
              do {
                let tmp = closure_76;
                let tmp2 = closure_2;
                let tmp3 = closure_2;
                let obj = closure_2[num];
                if (closure_76(closure_2[num])) {
                  let tmp5 = closure_0;
                  let callResult = obj.call(arg0, closure_0);
                } else {
                  callResult = obj;
                }
                str = str + callResult;
                num = num + 1;
                let tmp6 = closure_1;
                str2 = str;
              } while (num < closure_1);
            }
            return str2;
          };
        }(tmp4);
      }
      closure_10[tmp4] = tmp6;
      let invalidDateResult = closure_10[tmp4](self);
      const tmp5 = closure_10;
    } else {
      invalidDateResult = self.localeData().invalidDate();
      const localeDataResult = self.localeData();
    }
    return invalidDateResult;
  }
  function expandFormat(arg0, arg1) {
    const createLocal = arg1;
    regex.lastIndex = 0;
    function replaceLongDateFormatTokens(arg0) {
      return arg1.longDateFormat(arg0) || arg0;
    }
    let num = 5;
    let str = arg0;
    let tmp = arg0;
    if (regex.test(arg0)) {
      const replaced = str.replace(regex, replaceLongDateFormatTokens);
      regex.lastIndex = 0;
      num = num - 1;
      tmp = replaced;
      while (num >= 0) {
        let tmp5 = regex;
        str = replaced;
        tmp = replaced;
        if (!regex.test(replaced)) {
          break;
        }
      }
    }
    return tmp;
  }
  function addRegexToken(A, matchMeridiem, addRegexTokenResult29) {
    let fn = matchMeridiem;
    const createLocal = matchMeridiem;
    const some = addRegexTokenResult29;
    if (!isFunction(matchMeridiem)) {
      fn = (arg0, arg1) => {
        if (arg0) {
          if (arg2) {
            let tmp2 = arg2;
          }
          return tmp2;
        }
        tmp2 = arg1;
      };
    }
    closure_15[A] = fn;
  }
  function getParseRegexForToken(_locale, _strict) {
    if (hasOwnProp(closure_15, _locale)) {
      let regExp = closure_15[_locale](_strict._strict, _strict._locale);
    } else {
      const _RegExp = RegExp;
      regExp = new RegExp(function unescapeFormat(_locale) {
        return callback(_locale.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (arg0, arg1, arg2, arg3, arg4) => {
          let tmp = arg1;
          if (!arg1) {
            tmp = arg2;
          }
          if (!tmp) {
            tmp = arg3;
          }
          if (!tmp) {
            tmp = arg4;
          }
          return tmp;
        }));
      }(_locale));
    }
    return regExp;
  }
  function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function addParseToken(Do, arg1) {
    let length;
    let func = arg1;
    const createLocal = arg1;
    let arr = Do;
    if ("string" === typeof Do) {
      const items = [Do];
      arr = items;
    }
    if (isNumber(func)) {
      func = function func(arg0, arg1) {
        arg1[arg1] = callback(arg0);
      };
    }
    let num = 0;
    if (0 < arr.length) {
      do {
        let tmp = closure_16;
        closure_16[arr[num]] = func;
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  }
  function addWeekParseToken(Do, arg1) {
    const createLocal = arg1;
    addParseToken(Do, (arg0, arg1, _w) => {
      _w._w = _w._w || {};
      arg1(arg0, _w._w, _w, arg3);
    });
  }
  function addTimeToArrayFromToken(_locale, first, _a) {
    let tmp = null != first;
    if (tmp) {
      tmp = hasOwnProp(closure_16, _locale);
    }
    if (tmp) {
      closure_16[_locale](first, _a._a, _a, _locale);
    }
  }
  function daysInYear(diff2) {
    let num = 365;
    if (isLeapYear(diff2)) {
      num = 366;
    }
    return num;
  }
  function isLeapYear(arg0) {
    let tmp = arg0 % 4 === 0;
    if (tmp) {
      tmp = arg0 % 100 !== 0;
    }
    if (!tmp) {
      tmp = arg0 % 400 === 0;
    }
    return tmp;
  }
  function makeGetSet(Date, arg1) {
    const createLocal = Date;
    const some = arg1;
    return function(arg0) {
      const self = this;
      if (null != arg0) {
        callback2(self, arg0, arg0);
        closure_55.updateOffset(self, arg1);
        let tmp3 = self;
      } else {
        tmp3 = callback(self, arg0);
      }
      return tmp3;
    };
  }
  function get(isValid) {
    if (isValid.isValid()) {
      const _d = isValid._d;
      let str = "";
      if (isValid._isUTC) {
        str = "UTC";
      }
      let _NaN = _d["get" + str + arg1]();
    } else {
      _NaN = NaN;
    }
    return _NaN;
  }
  function set$1(isValid, Date, yearResult) {
    let isValidResult = isValid.isValid();
    if (isValidResult) {
      const _isNaN = isNaN;
      isValidResult = !isNaN(yearResult);
    }
    if (isValidResult) {
      if ("FullYear" === Date) {
        if (isLeapYear(isValid.year())) {
          if (1 === isValid.month()) {
            if (29 === isValid.date()) {
              const _d2 = isValid._d;
              let str4 = "";
              if (isValid._isUTC) {
                str4 = "UTC";
              }
              _d2["set" + str4 + Date](yearResult, isValid.month(), daysInMonth(yearResult, isValid.month()));
              const monthResult = isValid.month();
            }
          }
        }
      }
      const _d = isValid._d;
      let str2 = "";
      if (isValid._isUTC) {
        str2 = "UTC";
      }
      _d["set" + str2 + Date](yearResult);
    }
  }
  function daysInMonth(yearResult, arg1) {
    if (!isNaN(yearResult)) {
      const _isNaN = isNaN;
      if (!isNaN(arg1)) {
        const result = (arg1 % 12 + 12) % 12;
        if (1 === result) {
          let num6 = 28;
          if (isLeapYear(tmp2)) {
            num6 = 29;
          }
          let diff = num6;
        } else {
          diff = 31 - result % 7 % 2;
        }
        return diff;
      }
    }
    return NaN;
  }
  function handleStrictParse(toLocaleLowerCase) {
    let tmp = this;
    const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
    if (!this._monthsParse) {
      tmp._monthsParse = [];
      tmp._longMonthsParse = [];
      tmp._shortMonthsParse = [];
      let num2 = 0;
      do {
        let tmp3 = closure_64;
        let items = ["x", num2];
        let tmp4 = closure_64(items);
        let monthsShortResult = tmp.monthsShort(tmp4, "");
        tmp._shortMonthsParse[num2] = monthsShortResult.toLocaleLowerCase();
        let monthsResult = tmp.months(tmp4, "");
        tmp._longMonthsParse[num2] = monthsResult.toLocaleLowerCase();
        num2 = num2 + 1;
      } while (num2 < 12);
    }
    if (arg2) {
      if ("MMM" === arg1) {
        const callResult = indexOf.call(tmp._shortMonthsParse, toLocaleLowerCaseResult);
        tmp = null;
        if (-1 !== callResult) {
          tmp = callResult;
        }
        let tmp15 = tmp;
      } else {
        const callResult1 = indexOf.call(tmp._longMonthsParse, toLocaleLowerCaseResult);
        tmp15 = null;
        if (-1 !== callResult1) {
          tmp15 = callResult1;
        }
      }
    } else {
      if ("MMM" === arg1) {
        let callResult2 = indexOf.call(tmp._shortMonthsParse, toLocaleLowerCaseResult);
        if (-1 !== callResult2) {
          let tmp12 = callResult2;
        } else {
          callResult2 = indexOf.call(tmp._longMonthsParse, toLocaleLowerCaseResult);
          tmp12 = null;
        }
        let tmp8 = tmp12;
      } else {
        let callResult3 = indexOf.call(tmp._longMonthsParse, toLocaleLowerCaseResult);
        if (-1 !== callResult3) {
          tmp8 = callResult3;
        } else {
          callResult3 = indexOf.call(tmp._shortMonthsParse, toLocaleLowerCaseResult);
          tmp8 = null;
        }
      }
      return tmp8;
    }
  }
  function setMonth(isValid) {
    if (isValid.isValid()) {
      let tmp = arg1;
      if ("string" === typeof arg1) {
        if (obj.test(arg1)) {
          tmp = toInt(arg1);
        } else {
          const monthsParseResult = isValid.localeData().monthsParse(arg1);
          tmp = monthsParseResult;
          if (!isNumber(monthsParseResult)) {
            return isValid;
          }
          const localeDataResult = isValid.localeData();
        }
        const obj = /^\d+$/;
      }
      const _Math = Math;
      const _d = isValid._d;
      let str2 = "";
      const bound = Math.min(isValid.date(), daysInMonth(isValid.year(), tmp));
      if (isValid._isUTC) {
        str2 = "UTC";
      }
      _d["set" + str2 + "Month"](tmp, bound);
      return isValid;
    } else {
      return isValid;
    }
  }
  function getSetMonth(arg0) {
    const self = this;
    if (null != arg0) {
      setMonth(self, arg0);
      hooks.updateOffset(self, true);
      let tmp2 = self;
    } else {
      tmp2 = get(self, "Month");
    }
    return tmp2;
  }
  function computeMonthsParse() {
    let num3;
    const self = this;
    function cmpLenRev(arg0, arg1) {
      return arg1.length - arg0.length;
    }
    const items = [];
    const items1 = [];
    const items2 = [];
    let num = 0;
    do {
      let tmp = closure_64;
      let items3 = ["x", num];
      let tmp2 = closure_64(items3);
      let arr = items.push(self.monthsShort(tmp2, ""));
      arr = items1.push(self.months(tmp2, ""));
      let arr1 = items2.push(self.months(tmp2, ""));
      let arr2 = items2.push(self.monthsShort(tmp2, ""));
      num = num + 1;
    } while (num < 12);
    const sorted = items.sort(cmpLenRev);
    const sorted1 = items1.sort(cmpLenRev);
    const sorted2 = items2.sort(cmpLenRev);
    let num2 = 0;
    do {
      let tmp10 = closure_86;
      items[num2] = closure_86(items[num2]);
      items1[num2] = closure_86(items1[num2]);
      num2 = num2 + 1;
      num3 = 0;
    } while (num2 < 12);
    do {
      let tmp11 = closure_86;
      items2[num3] = closure_86(items2[num3]);
      num3 = num3 + 1;
    } while (num3 < 24);
    const regExp = new RegExp("^(" + items2.join("|") + ")", "i");
    self._monthsRegex = regExp;
    self._monthsShortRegex = self._monthsRegex;
    const regExp1 = new RegExp("^(" + items1.join("|") + ")", "i");
    self._monthsStrictRegex = regExp1;
    const regExp2 = new RegExp("^(" + items.join("|") + ")", "i");
    self._monthsShortStrictRegex = regExp2;
  }
  function createDate(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    const date = new Date(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    let isFiniteResult = arg0 < 100;
    if (isFiniteResult) {
      isFiniteResult = arg0 >= 0;
    }
    if (isFiniteResult) {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(date.getFullYear());
    }
    if (isFiniteResult) {
      date.setFullYear(arg0);
    }
    return date;
  }
  function createUTCDate(year, arg1, _dayOfYear) {
    const date = new Date(UTC(...arguments));
    let isFiniteResult = year < 100;
    if (isFiniteResult) {
      isFiniteResult = year >= 0;
    }
    if (isFiniteResult) {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(date.getUTCFullYear());
    }
    if (isFiniteResult) {
      date.setUTCFullYear(year);
    }
    return date;
  }
  function firstWeekOffset(diff, dow, doy) {
    diff = 7 + dow - doy;
    return -7 + createUTCDate(diff, 0, diff).getUTCDay() - dow % 7 + diff - 1;
  }
  function dayOfYearFromWeeks(diff, arg1, arg2, dow, doy) {
    diff = arg1 - 1;
    const diff1 = 7 + arg2 - dow;
    const sum = 1 + 7 * diff + diff1 % 7 + firstWeekOffset(diff, dow, doy);
    if (sum <= 0) {
      const diff2 = diff - 1;
      let sum1 = daysInYear(diff2) + sum;
      let sum2 = diff2;
    } else {
      sum2 = diff;
      sum1 = sum;
      if (sum > daysInYear(diff)) {
        sum2 = diff + 1;
        sum1 = sum - daysInYear(diff);
      }
    }
    const obj = { year: sum2, dayOfYear: sum1 };
    return obj;
  }
  function weekOfYear(local, dow, doy) {
    const sum = Math.floor((local.dayOfYear() - firstWeekOffset(local.year(), dow, doy) - 1) / 7) + 1;
    if (sum < 1) {
      const diff = local.year() - 1;
      let sum1 = sum + weeksInYear(diff, dow, doy);
      let sum2 = diff;
    } else if (sum > weeksInYear(local.year(), dow, doy)) {
      sum1 = sum - weeksInYear(local.year(), dow, doy);
      sum2 = local.year() + 1;
    } else {
      sum2 = local.year();
      sum1 = sum;
    }
    const obj = { week: sum1, year: sum2 };
    return obj;
  }
  function weeksInYear(diff, dow, doy) {
    const tmp = firstWeekOffset(diff, dow, doy);
    return (daysInYear(diff) - tmp + firstWeekOffset(diff + 1, dow, doy)) / 7;
  }
  function handleStrictParse$1(toLocaleLowerCase) {
    let tmp = this;
    const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      tmp._weekdaysParse = [];
      tmp._shortWeekdaysParse = [];
      tmp._minWeekdaysParse = [];
      let num2 = 0;
      do {
        let tmp3 = closure_64;
        let obj = closure_64([]);
        let dayResult = obj.day(num2);
        let weekdaysMinResult = tmp.weekdaysMin(dayResult, "");
        tmp._minWeekdaysParse[num2] = weekdaysMinResult.toLocaleLowerCase();
        let weekdaysShortResult = tmp.weekdaysShort(dayResult, "");
        tmp._shortWeekdaysParse[num2] = weekdaysShortResult.toLocaleLowerCase();
        let weekdaysResult = tmp.weekdays(dayResult, "");
        tmp._weekdaysParse[num2] = weekdaysResult.toLocaleLowerCase();
        num2 = num2 + 1;
      } while (num2 < 7);
    }
    if (arg2) {
      if ("dddd" === arg1) {
        const callResult = indexOf.call(tmp._weekdaysParse, toLocaleLowerCaseResult);
        tmp = null;
        if (-1 !== callResult) {
          tmp = callResult;
        }
        let tmp22 = tmp;
      } else if ("ddd" === arg1) {
        const callResult1 = indexOf.call(tmp._shortWeekdaysParse, toLocaleLowerCaseResult);
        let tmp25 = null;
        if (-1 !== callResult1) {
          tmp25 = callResult1;
        }
        tmp22 = tmp25;
      } else {
        const callResult2 = indexOf.call(tmp._minWeekdaysParse, toLocaleLowerCaseResult);
        tmp22 = null;
        if (-1 !== callResult2) {
          tmp22 = callResult2;
        }
      }
    } else {
      if ("dddd" === arg1) {
        let callResult3 = indexOf.call(tmp._weekdaysParse, toLocaleLowerCaseResult);
        if (-1 === callResult3) {
          callResult3 = indexOf.call(tmp._shortWeekdaysParse, toLocaleLowerCaseResult);
          if (-1 === callResult3) {
            callResult3 = indexOf.call(tmp._minWeekdaysParse, toLocaleLowerCaseResult);
            let tmp19 = null;
          }
          let tmp9 = tmp19;
        }
        tmp19 = callResult3;
      } else if ("ddd" === arg1) {
        let callResult4 = indexOf.call(tmp._shortWeekdaysParse, toLocaleLowerCaseResult);
        if (-1 === callResult4) {
          callResult4 = indexOf.call(tmp._weekdaysParse, toLocaleLowerCaseResult);
          if (-1 === callResult4) {
            callResult4 = indexOf.call(tmp._minWeekdaysParse, toLocaleLowerCaseResult);
            let tmp14 = null;
          }
          tmp9 = tmp14;
        }
        tmp14 = callResult4;
      } else {
        let callResult5 = indexOf.call(tmp._minWeekdaysParse, toLocaleLowerCaseResult);
        if (-1 === callResult5) {
          callResult5 = indexOf.call(tmp._weekdaysParse, toLocaleLowerCaseResult);
          if (-1 === callResult5) {
            callResult5 = indexOf.call(tmp._shortWeekdaysParse, toLocaleLowerCaseResult);
            tmp9 = null;
          }
        }
        tmp9 = callResult5;
      }
      return tmp9;
    }
  }
  function computeWeekdaysParse() {
    const self = this;
    function cmpLenRev(arg0, arg1) {
      return arg1.length - arg0.length;
    }
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    let num = 0;
    do {
      let tmp = closure_64;
      let obj = closure_64([]);
      let dayResult = obj.day(num);
      let weekdaysMinResult = self.weekdaysMin(dayResult, "");
      let weekdaysShortResult = self.weekdaysShort(dayResult, "");
      let weekdaysResult = self.weekdays(dayResult, "");
      let arr = items.push(weekdaysMinResult);
      arr = items1.push(weekdaysShortResult);
      let arr1 = items2.push(weekdaysResult);
      let arr2 = items3.push(weekdaysMinResult);
      let arr3 = items3.push(weekdaysShortResult);
      let arr4 = items3.push(weekdaysResult);
      num = num + 1;
    } while (num < 7);
    const sorted = items.sort(cmpLenRev);
    const sorted1 = items1.sort(cmpLenRev);
    const sorted2 = items2.sort(cmpLenRev);
    const sorted3 = items3.sort(cmpLenRev);
    let num2 = 0;
    do {
      let tmp12 = closure_86;
      items1[num2] = closure_86(items1[num2]);
      items2[num2] = closure_86(items2[num2]);
      items3[num2] = closure_86(items3[num2]);
      num2 = num2 + 1;
    } while (num2 < 7);
    const regExp = new RegExp("^(" + items3.join("|") + ")", "i");
    self._weekdaysRegex = regExp;
    ({ _weekdaysRegex: self._weekdaysShortRegex, _weekdaysRegex: self._weekdaysMinRegex } = self);
    const regExp1 = new RegExp("^(" + items2.join("|") + ")", "i");
    self._weekdaysStrictRegex = regExp1;
    const regExp2 = new RegExp("^(" + items1.join("|") + ")", "i");
    self._weekdaysShortStrictRegex = regExp2;
    const regExp3 = new RegExp("^(" + items.join("|") + ")", "i");
    self._weekdaysMinStrictRegex = regExp3;
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function meridiem(A, arg1) {
    const createLocal = arg1;
    addFormatToken(A, 0, 0, function() {
      const localeDataResult = this.localeData();
      return localeDataResult.meridiem(this.hours(), this.minutes(), arg1);
    });
  }
  function matchMeridiem(arg0, _meridiemParse) {
    return _meridiemParse._meridiemParse;
  }
  function normalizeLocale(str) {
    let replaced = str;
    if (str) {
      replaced = str.toLowerCase().replace("_", "-");
      str = str.toLowerCase();
    }
    return replaced;
  }
  function loadLocale(_abbr2) {
    if (!closure_37[_abbr2]) {
      if (undefined !== some) {
        if (some) {
          if (some.exports) {
            const _Error = Error;
            const error = new Error("Dynamic require defined at line 1838; not supported by Metro");
            throw error;
          }
        }
      }
    }
  }
  function getSetGlobalLocale(en, parentLocale) {
    if (en) {
      if (isUndefined(parentLocale)) {
        let tmp3 = getLocale(en);
      } else {
        tmp3 = defineLocale(en, parentLocale);
      }
      if (!tmp3) {
        const _console = console;
        let warn = "undefined" !== typeof console;
        if (warn) {
          const _console2 = console;
          warn = console.warn;
        }
        if (warn) {
          const _console3 = console;
          console.warn(`Locale ${en} not found. Did you forget to load it?`);
        }
      }
    }
    return tmp3._abbr;
  }
  function defineLocale(bg, parentLocale) {
    if (null !== parentLocale) {
      let _config = obj;
      parentLocale.abbr = bg;
      if (null != closure_37[bg]) {
        deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
        _config = closure_37[bg]._config;
      } else if (null != parentLocale.parentLocale) {
        if (null != closure_37[parentLocale.parentLocale]) {
          _config = closure_37[parentLocale.parentLocale]._config;
        } else {
          const tmp4 = loadLocale(parentLocale.parentLocale);
          if (null == tmp4) {
            if (!closure_38[parentLocale.parentLocale]) {
              closure_38[parentLocale.parentLocale] = [];
            }
            let arr = closure_38[parentLocale.parentLocale];
            const obj = { name: bg, config: parentLocale };
            arr = arr.push(obj);
            return null;
          } else {
            _config = tmp4._config;
          }
        }
      }
      const prototype = Locale.prototype;
      const tmp18 = new Locale(mergeConfigs(_config, parentLocale));
      closure_37[bg] = tmp18;
      if (closure_38[bg]) {
        const item = closure_38[bg].forEach((name) => {
          callback(name.name, name.config);
        });
        const arr2 = closure_38[bg];
      }
      getSetGlobalLocale(bg);
      return closure_37[bg];
    } else {
      delete r0[r1];
      return null;
    }
  }
  function getLocale(_locale) {
    let _abbr = _locale;
    if (_locale) {
      _abbr = _locale._locale;
    }
    if (_abbr) {
      _abbr = _locale._locale._abbr;
    }
    let _abbr2 = _locale;
    if (_abbr) {
      _abbr2 = _locale._locale._abbr;
    }
    if (_abbr2) {
      let arr = _abbr2;
      if (!isArray(_abbr2)) {
        const tmp4 = loadLocale(_abbr2);
        if (tmp4) {
          return tmp4;
        } else {
          const items = [_abbr2];
          arr = items;
        }
      }
      let num3 = 0;
      if (0 < arr.length) {
        while (true) {
          let tmp5 = normalizeLocale;
          let str2 = normalizeLocale(arr[num3]);
          let parts = str2.split("-");
          let length = parts.length;
          let str3 = normalizeLocale(arr[num3 + 1]);
          let parts1 = null;
          if (str3) {
            parts1 = str3.split("-");
          }
          if (length <= 0) {
            num3 = num3 + 1;
            break;
          } else {
            let tmp7 = loadLocale;
            let substr = parts.slice(0, length);
            let tmp8 = loadLocale(substr.join("-"));
            let tmp9 = length;
            let tmp10 = tmp8;
            while (!tmp8) {
              if (parts1) {
                if (parts1.length >= length) {
                  let tmp11 = compareArrays;
                  let tmp12 = tmp8;
                }
              }
              length = length - 1;
              let tmp13 = tmp8;
            }
          }
          return tmp10;
        }
      }
      tmp10 = closure_35;
    } else {
      return closure_35;
    }
  }
  function checkOverflow(_a) {
    _a = _a._a;
    let tmp = _a;
    if (_a) {
      tmp = -2 === getParsingFlags(_a).overflow;
    }
    if (tmp) {
      if (_a[closure_18] >= 0) {
        if (_a[closure_18] <= 11) {
          if (_a[closure_19] >= 1) {
            if (_a[closure_19] <= daysInMonth(_a[closure_17], _a[closure_18])) {
              if (_a[closure_20] >= 0) {
                if (_a[closure_20] <= 24) {
                  if (24 !== _a[closure_20]) {
                    if (_a[closure_21] >= 0) {
                      if (_a[closure_21] <= 59) {
                        if (_a[closure_22] >= 0) {
                          if (_a[closure_22] <= 59) {
                            if (_a[closure_23] < 0) {
                              let num5 = closure_23;
                            } else {
                              num5 = -1;
                            }
                          }
                        }
                        num5 = closure_22;
                      }
                    }
                    num5 = closure_21;
                  }
                }
              }
              num5 = closure_20;
            }
          }
          num5 = closure_19;
        }
        let _overflowDayOfYear = getParsingFlags(_a)._overflowDayOfYear;
        if (_overflowDayOfYear) {
          let tmp14 = num5 < closure_17;
          if (!tmp14) {
            tmp14 = num5 > closure_19;
          }
          _overflowDayOfYear = tmp14;
        }
        if (_overflowDayOfYear) {
          num5 = closure_19;
        }
        let _overflowWeeks = getParsingFlags(_a)._overflowWeeks;
        if (_overflowWeeks) {
          _overflowWeeks = -1 === num5;
        }
        if (_overflowWeeks) {
          num5 = closure_24;
        }
        let _overflowWeekday = getParsingFlags(_a)._overflowWeekday;
        if (_overflowWeekday) {
          _overflowWeekday = -1 === num5;
        }
        if (_overflowWeekday) {
          num5 = closure_25;
        }
        getParsingFlags(_a).overflow = num5;
      }
      num5 = closure_18;
    }
    return _a;
  }
  function defaults(E, closure_28, year) {
    let tmp = E;
    let tmp2 = year;
    if (null == E) {
      if (null != closure_28) {
        tmp2 = closure_28;
      }
      tmp = tmp2;
    }
    return tmp;
  }
  function configFromArray(_d) {
    let _d2;
    let _d3;
    const items = [];
    if (!_d._d) {
      const _Date = Date;
      const date = new Date(hooks.now());
      if (_d._useUTC) {
        const items1 = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
        let items2 = items1;
      } else {
        items2 = [date.getFullYear(), date.getMonth(), date.getDate()];
      }
      let _w = _d._w;
      if (_w) {
        _w = null == _d._a[closure_19];
      }
      if (_w) {
        _w = null == _d._a[closure_18];
      }
      if (_w) {
        const _w2 = _d._w;
        if (null == _w2.GG) {
          if (null == _w2.W) {
            if (null == _w2.E) {
              const dow = _d._locale._week.dow;
              const doy = _d._locale._week.doy;
              const tmp57 = weekOfYear(createLocal(), dow, doy);
              const tmp60 = defaults(_w2.gg, _d._a[closure_17], tmp57.year);
              const tmp61 = defaults(_w2.w, tmp57.week);
              if (null != _w2.d) {
                const d = _w2.d;
                let tmp16 = d < 0;
                if (!tmp16) {
                  tmp16 = d > 6;
                }
                let tmp11 = tmp60;
                let tmp12 = tmp61;
                let tmp13 = d;
                let num = dow;
                let num2 = doy;
                if (tmp16) {
                  let flag = true;
                  tmp11 = tmp60;
                  tmp12 = tmp61;
                  tmp13 = d;
                  num = dow;
                  num2 = doy;
                }
              } else {
                tmp11 = tmp60;
                tmp12 = tmp61;
                tmp13 = dow;
                num = dow;
                num2 = doy;
                if (null != _w2.e) {
                  const sum = _w2.e + dow;
                  let tmp15 = _w2.e < 0;
                  if (!tmp15) {
                    tmp15 = _w2.e > 6;
                  }
                  tmp11 = tmp60;
                  tmp12 = tmp61;
                  tmp13 = sum;
                  num = dow;
                  num2 = doy;
                  if (tmp15) {
                    flag = true;
                    tmp11 = tmp60;
                    tmp12 = tmp61;
                    tmp13 = sum;
                    num = dow;
                    num2 = doy;
                  }
                }
              }
            }
            if (tmp12 >= 1) {
              if (tmp12 <= weeksInYear(tmp11, num, num2)) {
                if (null != flag) {
                  getParsingFlags(_d)._overflowWeekday = true;
                } else {
                  ({ year: _d._a[closure_17], dayOfYear: _d._dayOfYear } = dayOfYearFromWeeks(tmp11, tmp12, tmp13, num, num2));
                  const tmp32 = dayOfYearFromWeeks(tmp11, tmp12, tmp13, num, num2);
                }
              }
            }
            getParsingFlags(_d)._overflowWeeks = true;
          }
        }
        const tmp21 = defaults(_w2.GG, _d._a[closure_17], weekOfYear(createLocal(), 1, 4).year);
        const tmp22 = defaults(_w2.W, 1);
        const tmp23 = defaults(_w2.E, 1);
        let tmp24 = tmp23 < 1;
        if (!tmp24) {
          tmp24 = tmp23 > 7;
        }
        tmp11 = tmp21;
        tmp12 = tmp22;
        tmp13 = tmp23;
        num = 1;
        num2 = 4;
        if (tmp24) {
          flag = true;
          tmp11 = tmp21;
          tmp12 = tmp22;
          tmp13 = tmp23;
          num = 1;
          num2 = 4;
        }
      }
      if (null != _d._dayOfYear) {
        const tmp65 = defaults(_d._a[closure_17], items2[closure_17]);
        let tmp37 = _d._dayOfYear > daysInYear(tmp65);
        if (!tmp37) {
          tmp37 = 0 === _d._dayOfYear;
        }
        if (tmp37) {
          getParsingFlags(_d)._overflowDayOfYear = true;
        }
        const obj2 = createUTCDate(tmp65, 0, _d._dayOfYear);
        _d._a[closure_18] = obj2.getUTCMonth();
        _d._a[closure_19] = obj2.getUTCDate();
      }
      let num15 = 0;
      let num16 = 0;
      if (null == _d._a[0]) {
        items[num15] = items2[num15];
        _d._a[num15] = items2[num15];
        const sum1 = num15 + 1;
        num16 = sum1;
        while (sum1 < 3) {
          num15 = sum1;
          num16 = sum1;
          if (null != _d._a[sum1]) {
            break;
          }
        }
      }
      if (num16 < 7) {
        do {
          if (null == _d._a[num16]) {
            let num20 = 0;
            if (2 === num16) {
              num20 = 1;
            }
            let tmp44 = num20;
          } else {
            tmp44 = _d._a[num16];
          }
          items[num16] = tmp44;
          _d._a[num16] = tmp44;
          num16 = num16 + 1;
        } while (num16 < 7);
      }
      let tmp46 = 24 === _d._a[closure_20];
      if (tmp46) {
        tmp46 = 0 === _d._a[closure_21];
      }
      if (tmp46) {
        tmp46 = 0 === _d._a[closure_22];
      }
      if (tmp46) {
        tmp46 = 0 === _d._a[closure_23];
      }
      if (tmp46) {
        _d._nextDay = true;
        _d._a[closure_20] = 0;
      }
      _d._d = _d._useUTC ? createUTCDate : createDate.apply(null, items);
      _d = _d._d;
      if (_d._useUTC) {
        let uTCDay = _d.getUTCDay();
      } else {
        uTCDay = _d.getDay();
      }
      if (null != _d._tzm) {
        ({ _d: _d2, _d: _d3 } = _d);
        _d2.setUTCMinutes(_d3.getUTCMinutes() - _d._tzm);
      }
      if (_d._nextDay) {
        _d._a[closure_20] = 24;
      }
      let _w3 = _d._w;
      if (_w3) {
        _w3 = undefined !== _d._w.d;
      }
      if (_w3) {
        _w3 = _d._w.d !== uTCDay;
      }
      if (_w3) {
        getParsingFlags(_d).weekdayMismatch = true;
      }
      const obj3 = _d._useUTC ? createUTCDate : createDate;
    }
  }
  function configFromISO(_i) {
    _i = _i._i;
    let match = regex3.exec(_i);
    if (!match) {
      match = regex4.exec(_i);
    }
    if (match) {
      getParsingFlags(_i).iso = true;
      let num3 = 0;
      let first;
      if (0 < items3.length) {
        while (!obj.exec(match[1])) {
          num3 = num3 + 1;
        }
        first = items3[num3][0];
        const obj = items3[num3][1];
        const tmp5 = false !== items3[num3][2];
      }
      if (null == first) {
        _i._isValid = false;
      } else {
        let str;
        if (match[3]) {
          let num5 = 0;
          let sum;
          if (0 < items15.length) {
            while (!obj2.exec(match[3])) {
              num5 = num5 + 1;
            }
            sum = (match[2] || " ") + items15[num5][0];
            const obj2 = items15[num5][1];
            const tmp16 = match[2] || " ";
          }
          str = sum;
          if (null == sum) {
            _i._isValid = false;
          }
        }
        if (!tmp5) {
          if (null != str) {
            _i._isValid = false;
          }
        }
        let str2;
        if (match[4]) {
          str2 = "Z";
          if (!regex5.exec(match[4])) {
            _i._isValid = false;
          }
        }
        if (!str) {
          str = "";
        }
        const sum1 = first + str;
        if (!str2) {
          str2 = "";
        }
        _i._f = sum1 + str2;
        configFromStringAndFormat(_i);
      }
    } else {
      _i._isValid = false;
    }
  }
  function untruncateYear(replaced) {
    const parsed = parseInt(replaced, 10);
    if (parsed <= 49) {
      let sum = 2000 + parsed;
    } else {
      sum = parsed;
      if (parsed <= 999) {
        sum = 1900 + parsed;
      }
    }
    return sum;
  }
  function configFromRFC2822(_i) {
    let _d;
    let _d2;
    const str = _i._i;
    const str2 = _i._i.replace(/\([^)]*\)|[\n\t]/g, " ");
    const str3 = _i._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ");
    const match = regex6.exec(_i._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
    if (match) {
      const items = [untruncateYear(match[4]), parts1.indexOf(match[3]), , , ];
      const _parseInt = parseInt;
      items[2] = parseInt(match[2], 10);
      const _parseInt2 = parseInt;
      items[3] = parseInt(match[5], 10);
      const _parseInt3 = parseInt;
      items[4] = parseInt(match[6], 10);
      if (match[7]) {
        const _parseInt4 = parseInt;
        items.push(parseInt(tmp2, 10));
      }
      let flag2 = !tmp8;
      if (!flag2) {
        const _Date = Date;
        const index = parts3.indexOf(tmp8);
        const date = new Date(items[0], items[1], items[2]);
        flag2 = index === date.getDay();
      }
      if (!flag2) {
        getParsingFlags(_i).weekdayMismatch = true;
        _i._isValid = false;
        flag2 = false;
      }
      if (flag2) {
        _i._a = items;
        _d = match[8];
        if (_d) {
          let num12 = closure_46[_d];
        } else {
          num12 = 0;
          if (!tmp15) {
            const _parseInt5 = parseInt;
            const parsed = parseInt(tmp16, 10);
            const result = parsed % 100;
            num12 = (parsed - result) / 100 * 60 + result;
          }
        }
        _i._tzm = num12;
        _i._d = createUTCDate.apply(null, _i._a);
        ({ _d, _d: _d2 } = _i);
        _d.setUTCMinutes(_d2.getUTCMinutes() - _i._tzm);
        const tmp4 = getParsingFlags(_i);
        tmp4.rfc2822 = true;
      } else {
        return tmp4;
      }
    } else {
      _i._isValid = false;
    }
  }
  function configFromStringAndFormat(_f) {
    let _locale;
    let first;
    let tmp10;
    if (_f._f !== hooks.ISO_8601) {
      if (_f._f !== hooks.RFC_2822) {
        _f._a = [];
        getParsingFlags(_f).empty = true;
        const text = `${_f._i}`;
        let arr = expandFormat(_f._f, _f._locale).match(closure_8) || [];
        let num2 = 0;
        let str2 = text;
        let num3 = 0;
        let arr1 = text;
        let num4 = 0;
        if (0 < arr.length) {
          while (true) {
            tmp10 = arr[num2];
            let tmp11 = getParseRegexForToken;
            let match = str2.match(getParseRegexForToken(tmp10, _f));
            let tmp12 = str2;
            if (!match) {
              match = [];
            }
            first = match[0];
            let substr1 = str2;
            let sum = num3;
            if (first) {
              let substr = str2.substr(0, str2.indexOf(first));
              if (substr.length > 0) {
                let tmp15 = getParsingFlags;
                let unusedInput = getParsingFlags(_f).unusedInput;
                arr = unusedInput.push(substr);
              }
              substr1 = str2.slice(str2.indexOf(first) + first.length);
              sum = num3 + first.length;
              let tmp17 = substr;
            }
            let tmp18 = closure_11;
            if (closure_11[tmp10]) {
              break;
            } else {
              let tmp19 = _f._strict && !first;
              if (tmp19) {
                let tmp20 = getParsingFlags;
                let unusedTokens = getParsingFlags(_f).unusedTokens;
                arr = unusedTokens.push(tmp10);
              }
              num2 = num2 + 1;
              str2 = substr1;
              num3 = sum;
              arr1 = substr1;
              num4 = sum;
            }
          }
          let tmp23 = getParsingFlags(_f);
          if (first) {
            tmp23.empty = false;
          } else {
            const unusedTokens1 = tmp23.unusedTokens;
            arr1 = unusedTokens1.push(tmp10);
          }
          tmp23 = addTimeToArrayFromToken(tmp10, first, _f);
        }
        getParsingFlags(_f).charsLeftOver = `${_f._i}`.length - num4;
        if (arr1.length > 0) {
          const unusedInput1 = getParsingFlags(_f).unusedInput;
          unusedInput1.push(arr1);
        }
        let tmp30 = _f._a[closure_20] <= 12;
        if (tmp30) {
          tmp30 = true === getParsingFlags(_f).bigHour;
        }
        if (tmp30) {
          tmp30 = _f._a[closure_20] > 0;
        }
        if (tmp30) {
          getParsingFlags(_f).bigHour = undefined;
        }
        const _a = _f._a;
        const str = expandFormat(_f._f, _f._locale);
        getParsingFlags(_f).parsedDateParts = _a.slice(0);
        ({ _meridiem: closure_65(undefined, _f).meridiem, _locale } = _f);
        const _meridiem = _f._meridiem;
        if (null == _meridiem) {
          _f._a[closure_20] = tmp37;
          configFromArray(_f);
          checkOverflow(_f);
        } else if (null != _locale.meridiemHour) {
          let meridiemHourResult = _locale.meridiemHour(tmp37, _meridiem);
        } else {
          meridiemHourResult = tmp37;
          if (null != _locale.isPM) {
            let isPMResult = _locale.isPM(_meridiem);
            let tmp42 = isPMResult;
            if (isPMResult) {
              tmp42 = tmp37 < 12;
            }
            let num6 = tmp37;
            if (tmp42) {
              num6 = tmp37 + 12;
            }
            if (!isPMResult) {
              isPMResult = 12 !== num6;
            }
            if (!isPMResult) {
              num6 = 0;
            }
            meridiemHourResult = num6;
          }
        }
        const tmp35 = getParsingFlags(_f);
      } else {
        configFromRFC2822(_f);
      }
    } else {
      configFromISO(_f);
    }
  }
  function prepareConfig(_l) {
    let _f;
    let _i;
    let _locale;
    let tmp22;
    ({ _i, _f, _locale } = _l);
    if (!_locale) {
      _locale = getLocale(_l._l);
    }
    _l._locale = _locale;
    if (null !== _i) {
      if (undefined === _f) {
        return tmp33;
      }
      let tmp2 = _i;
      if ("string" === typeof _i) {
        const _locale2 = _l._locale;
        const preparseResult = _locale2.preparse(_i);
        _l._i = preparseResult;
        tmp2 = preparseResult;
      }
      if (isMoment(tmp2)) {
        checkOverflow(tmp2);
        const prototype2 = Moment.prototype;
        let tmp33 = new Moment(tmp2);
      } else {
        if (isDate(tmp2)) {
          _l._d = tmp2;
        } else if (isArray(_f)) {
          if (0 === _l._f.length) {
            getParsingFlags(_l).invalidFormat = true;
            const _Date = Date;
            const _NaN = NaN;
            const date = new Date(NaN);
            _l._d = date;
          } else {
            let num2 = 0;
            let tmp23;
            if (0 < _l._f.length) {
              do {
                let tmp10 = closure_68;
                let obj = {};
                let tmp11 = closure_68(obj, _l);
                if (null != _l._useUTC) {
                  obj._useUTC = _l._useUTC;
                }
                obj._f = _l._f[num2];
                let tmp12 = closure_117;
                let tmp13 = closure_117(obj);
                let tmp14 = closure_66;
                let tmp15 = tmp20;
                let tmp16 = tmp21;
                if (closure_66(obj)) {
                  let tmp17 = closure_65;
                  let sum = closure_65(obj).charsLeftOver + 10 * closure_65(obj).unusedTokens.length;
                  closure_65(obj).score = sum;
                  let tmp19 = null == tmp21 || sum < tmp21;
                  if (tmp19) {
                    let tmp20 = obj;
                    let tmp21 = sum;
                  }
                  tmp15 = tmp20;
                  tmp16 = tmp21;
                }
                num2 = num2 + 1;
                tmp20 = tmp15;
                tmp21 = tmp16;
                tmp22 = obj;
                tmp23 = tmp15;
              } while (num2 < _l._f.length);
            }
            if (!tmp23) {
              tmp23 = tmp22;
            }
            extend(_l, tmp23);
            const tmp24 = extend;
          }
        } else if (_f) {
          configFromStringAndFormat(_l);
        } else {
          function configFromInput(_i) {
            _i = _i._i;
            if (callback3(_i)) {
              const _Date4 = Date;
              const date = new Date(closure_55.now());
              _i._d = date;
            } else if (callback5(_i)) {
              const _Date3 = Date;
              const date1 = new Date(_i.valueOf());
              _i._d = date1;
            } else if ("string" === typeof _i) {
              const match = regex.exec(_i._i);
              if (null === match) {
                callback8(_i);
                if (false === _i._isValid) {
                  delete r2._isValid;
                  callback9(_i);
                  if (false === _i._isValid) {
                    delete r2._isValid;
                    const fromInputFallback = closure_55.createFromInputFallback(_i);
                  }
                }
              } else {
                const _Date2 = Date;
                const date2 = new Date(+match[1]);
                _i._d = date2;
              }
            } else if (callback(_i)) {
              _i._a = callback6(_i.slice(0), (replaced) => parseInt(replaced, 10));
              callback7(_i);
            } else if (callback2(_i)) {
              function configFromObject(_d) {
                let day;
                if (!_d._d) {
                  const tmp2 = callback(_d._i);
                  const items = [, , , , , , ];
                  ({ year: arr[0], month: arr[1], day } = tmp2);
                  if (!day) {
                    day = tmp2.date;
                  }
                  items[2] = day;
                  ({ hour: arr[3], minute: arr[4], second: arr[5], millisecond: arr[6] } = tmp2);
                  _d._a = closure_61(items, (replaced) => {
                    let parsed = replaced;
                    if (replaced) {
                      const _parseInt = parseInt;
                      parsed = parseInt(replaced, 10);
                    }
                    return parsed;
                  });
                  callback2(_d);
                  const tmp3 = closure_61;
                }
              }(_i);
            } else if (callback4(_i)) {
              const _Date = Date;
              const date3 = new Date(_i);
              _i._d = date3;
            } else {
              const fromInputFallback1 = closure_55.createFromInputFallback(_i);
            }
          }(_l);
        }
        tmp33 = _l;
        if (!isValid(_l)) {
          _l._d = null;
          tmp33 = _l;
        }
      }
    }
    tmp33 = createInvalid({ nullInput: true });
  }
  function createLocalOrUTC(_a, _f, arg2, arg3, _isUTC) {
    let tmp2 = arg3;
    const obj = {};
    let tmp3 = true !== arg2;
    if (tmp3) {
      tmp3 = false !== arg2;
    }
    if (!tmp3) {
      tmp2 = arg2;
    }
    let tmp5 = isObject(arr);
    if (tmp5) {
      const _Object = Object;
      if (Object.getOwnPropertyNames) {
        const _Object2 = Object;
        let flag2 = 0 === Object.getOwnPropertyNames(arr).length;
      } else {
        flag2 = true;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag2 = true;
          while (keys[tmp] !== undefined) {
            let tmp15 = tmp9;
            flag2 = false;
            if (arr.hasOwnProperty(tmp9)) {
              break;
            } else {
              // continue
            }
          }
        }
      }
      tmp5 = flag2;
    }
    if (!tmp5) {
      let tmp11 = isArray(arr);
      if (tmp11) {
        tmp11 = 0 === arr.length;
      }
      tmp5 = tmp11;
    }
    obj._isAMomentObject = true;
    obj._isUTC = _isUTC;
    obj._useUTC = _isUTC;
    obj._l = arg2;
    obj._i = _a;
    obj._f = _f;
    obj._strict = tmp2;
    const tmp12 = prepareConfig(obj);
    checkOverflow(tmp12);
    const obj2 = new Moment(tmp12);
    if (obj2._nextDay) {
      obj2.add(1, "d");
      obj2._nextDay = undefined;
    }
    return obj2;
  }
  function createLocal(_d, _f) {
    return createLocalOrUTC(_d, _f, arg2, arg3, false);
  }
  function pickBy(arg0, arg1) {
    let num = 1;
    let tmp = 1 === arg1.length;
    if (tmp) {
      tmp = isArray(arg1[0]);
    }
    let first = arg1;
    if (tmp) {
      first = arg1[0];
    }
    if (first.length) {
      let first1 = first[0];
      let tmp5 = first1;
      while (num < first.length) {
        let obj = first[num];
        let isValidResult = obj.isValid();
        if (isValidResult) {
          let tmp7 = first[num];
          isValidResult = !tmp7[arg0](first1);
        }
        let tmp8 = first1;
        if (!isValidResult) {
          tmp8 = first[num];
        }
        num = num + 1;
        first1 = tmp8;
        tmp5 = tmp8;
      }
      return tmp5;
    } else {
      return createLocal();
    }
  }
  class Duration {
    constructor(arg0) {
      self = this;
      tmp = normalizeObjectUnits(arg0);
      tmp2 = tmp.year || 0;
      tmp3 = tmp.quarter || 0;
      tmp4 = tmp.month || 0;
      tmp5 = tmp.week || 0;
      tmp6 = tmp.day || 0;
      tmp7 = tmp.hour || 0;
      tmp8 = tmp.minute || 0;
      tmp9 = tmp.second || 0;
      tmp10 = tmp.millisecond || 0;
      for (const key10019 in tmp) {
        tmp19 = key10019;
        tmp20 = closure_26;
        tmp21 = closure_47;
        flag = false;
        if (-1 === closure_26.call(closure_47, key10019)) {
        } else if (null == tmp[key10019]) {
          continue;
        } else {
          _isNaN = isNaN;
          flag = false;
          if (isNaN(tmp[key10019])) {
          } else {
            // continue
          }
        }
        self._isValid = flag;
        num2 = 1000;
        num3 = 60000;
        num4 = 60;
        self._milliseconds = +tmp10 + 1000 * tmp9 + 60000 * tmp8 + 1000 * tmp7 * 60 * 60;
        num5 = 7;
        self._days = +tmp6 + 7 * tmp5;
        num6 = 3;
        num7 = 12;
        self._months = +tmp4 + 3 * tmp3 + 12 * tmp2;
        self._data = {};
        tmp17 = closure_110;
        self._locale = closure_110();
        _bubbleResult = self._bubble();
        return;
      }
      num = 0;
      flag2 = false;
      flag = true;
      if (0 < f28293.length) {
        while (true) {
          tmp11 = f28293;
          flag3 = flag2;
          if (!tmp[closure_47[num]]) {
            num = num + 1;
            tmp16 = f28293;
            flag2 = flag3;
            flag = true;
            if (num >= f28293.length) {
              break;
            }
          } else {
            flag = false;
            if (flag2) {
              break;
            } else {
              _parseFloat = parseFloat;
              tmp12 = f28293;
              tmp14 = toInt;
              tmp15 = f28293;
              parsed = parseFloat(tmp[closure_47[num]]);
              flag3 = flag2;
              if (parsed !== toInt(tmp[closure_47[num]])) {
                flag3 = true;
              }
            }
          }
          break;
        }
      }
      return;
    }
  }
  function isDuration(self) {
    return self instanceof Duration;
  }
  function absRound(_days) {
    if (_days < 0) {
      const _Math2 = Math;
      let result = -1 * Math.round(-1 * _days);
    } else {
      const _Math = Math;
      result = Math.round(_days);
    }
    return result;
  }
  function offset(start, arg1) {
    const createLocal = arg1;
    addFormatToken(start, 0, 0, function() {
      const utcOffsetResult = this.utcOffset();
      let str = "+";
      let tmp2 = utcOffsetResult;
      if (utcOffsetResult < 0) {
        tmp2 = -utcOffsetResult;
        str = "-";
      }
      const sum = str + callback(~~tmp2 / 60, 2) + arg1;
      return sum + callback(~~tmp2 % 60, 2);
    });
  }
  function offsetFromString(closure_13, _i) {
    let str = _i;
    if (!_i) {
      str = "";
    }
    const match = str.match(closure_13);
    if (null === match) {
      return null;
    } else {
      const tmp = match[match.length - 1] || [];
      const text = `${tmp}`;
      const tmp4 = `${tmp}`.match(closure_48) || [true, true, true];
      const result = 60 * tmp4[1];
      const sum = result + toInt(tmp4[2]);
      let num4 = 0;
      if (0 !== sum) {
        let tmp8 = sum;
        if ("+" !== tmp4[0]) {
          tmp8 = -sum;
        }
        num4 = tmp8;
      }
      return num4;
    }
  }
  function cloneWithOffset(_d, self) {
    let _d2;
    if (self._isUTC) {
      const cloneResult = self.clone();
      if (!isMoment(_d)) {
        if (!isDate(_d)) {
          let valueOfResult = createLocal(_d).valueOf();
          const obj3 = createLocal(_d);
        }
        ({ _d, _d: _d2 } = cloneResult);
        const diff = valueOfResult - cloneResult.valueOf();
        _d.setTime(_d2.valueOf() + diff);
        hooks.updateOffset(cloneResult, false);
      }
      valueOfResult = _d.valueOf();
    } else {
      return createLocal(_d).local();
    }
  }
  function getDateOffset(self) {
    const _d = self._d;
    return 15 * -Math.round(_d.getTimezoneOffset() / 15);
  }
  function isUtc() {
    const self = this;
    const tmp = !this.isValid();
    let _isUTC = !tmp;
    if (!tmp) {
      _isUTC = self._isUTC;
    }
    if (_isUTC) {
      _isUTC = 0 === self._offset;
    }
    return _isUTC;
  }
  function createDuration(self, m) {
    if (isDuration(self)) {
      let obj = {};
      ({ _milliseconds: obj9.ms, _days: obj9.d, _months: obj9.M } = self);
    } else if (isNumber(self)) {
      obj = {};
      if (m) {
        obj[m] = self;
      } else {
        obj.milliseconds = self;
      }
    } else {
      const match = regex7.exec(self);
      if (match) {
        let num10 = 1;
        if ("-" === match[1]) {
          num10 = -1;
        }
        let obj1 = { y: 0, d: toInt(match[closure_19]) * num10, h: toInt(match[closure_20]) * num10, m: toInt(match[closure_21]) * num10, s: toInt(match[closure_22]) * num10, ms: toInt(absRound(1000 * match[closure_23])) * num10 };
        obj = obj1;
      } else {
        const match1 = regex8.exec(self);
        if (match1) {
          let num2 = -1;
          if ("-" !== match1[1]) {
            num2 = 1;
          }
          let obj2 = { y: parseIso(match1[2], num2), M: parseIso(match1[3], num2), w: parseIso(match1[4], num2), d: parseIso(match1[5], num2), h: parseIso(match1[6], num2), m: parseIso(match1[7], num2), s: parseIso(match1[8], num2) };
          obj = obj2;
        } else if (null == self) {
          obj = {};
        } else {
          let tmp8 = "object" === typeof self;
          if (tmp8) {
            let tmp7 = "from" in self;
            if (!tmp7) {
              tmp7 = "to" in self;
            }
            tmp8 = tmp7;
          }
          obj = self;
          if (tmp8) {
            obj1 = createLocal(self.from);
            obj2 = createLocal(self.to);
            if (obj1.isValid()) {
              if (obj2.isValid()) {
                const tmp11 = cloneWithOffset(obj2, obj1);
                if (obj1.isBefore(tmp11)) {
                  let tmp12Result = tmp12(obj1, tmp11);
                } else {
                  tmp12Result = tmp12(tmp11, obj1);
                  tmp12Result.milliseconds = -tmp12Result.milliseconds;
                  tmp12Result.months = -tmp12Result.months;
                }
              }
            }
            ({ milliseconds: obj5.ms, months: obj5.M } = { 1365358575: -536870861, 2051081631: -299892737 });
            obj = {};
            const obj3 = { 1365358575: -536870861, 2051081631: -299892737 };
            const obj4 = {};
          }
        }
      }
    }
    const tmp24 = new Duration(obj);
    let tmp25 = isDuration(self);
    if (tmp25) {
      tmp25 = hasOwnProp(self, "_locale");
    }
    if (tmp25) {
      tmp24._locale = self._locale;
    }
    return tmp24;
  }
  function parseIso(str, arg1) {
    let parsed = str;
    if (str) {
      const _parseFloat = parseFloat;
      parsed = parseFloat(str.replace(",", "."));
    }
    let num = 0;
    if (!isNaN(parsed)) {
      num = parsed;
    }
    return num * arg1;
  }
  function positiveMomentsDifference(month, month2) {
    const obj = { 1365358575: -536870861, 2051081631: -299892737 };
    const diff = month2.month() - month.month();
    const monthResult = month2.month();
    obj.months = diff + 12 * (month2.year() - month.year());
    const yearResult = month2.year();
    const cloneResult = month.clone();
    if (addResult.isAfter(month2)) {
      obj.months = obj.months - 1;
    }
    const addResult = month.clone().add(obj.months, "M");
    const tmp4 = +month2;
    obj.milliseconds = tmp4 - +month.clone().add(obj.months, "M");
    return obj;
  }
  function createAdder(arg0, add) {
    const createLocal = arg0;
    const some = add;
    return function(arg0, arg1) {
      const self = this;
      let isNaNResult = null === arg1;
      if (!isNaNResult) {
        const _isNaN = isNaN;
        isNaNResult = isNaN(+arg1);
      }
      let tmp3 = arg0;
      let tmp4 = arg1;
      if (!isNaNResult) {
        callback(arg1, `moment().${closure_1}(period, number) is deprecated. Please use moment().${closure_1}(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.`);
        tmp3 = arg1;
        tmp4 = arg0;
      }
      let tmp10 = tmp3;
      if ("string" === typeof tmp3) {
        tmp10 = +tmp3;
      }
      closure_131(self, closure_128(tmp10, tmp4), arg0);
      return self;
    };
  }
  function addSubtract(self, duration, arg2, arg3) {
    let _d;
    let _d2;
    const _milliseconds = duration._milliseconds;
    let tmp = absRound(duration._days);
    const tmp2 = absRound(duration._months);
    if (self.isValid()) {
      if (tmp2) {
        setMonth(self, get(self, "Month") + tmp2 * arg2);
      }
      if (tmp) {
        set$1(self, "Date", get(self, "Date") + tmp * arg2);
      }
      if (_milliseconds) {
        ({ _d, _d: _d2 } = self);
        _d.setTime(_d2.valueOf() + _milliseconds * arg2);
      }
      if (tmp4) {
        if (!tmp) {
          tmp = tmp2;
        }
        hooks.updateOffset(self, tmp);
      }
      const tmp4 = null == arg3 || arg3;
    }
  }
  function monthDiff(self, year2) {
    const result = 12 * (year2.year() - self.year());
    const yearResult = year2.year();
    const sum = result + (year2.month() - self.month());
    const monthResult = year2.month();
    const addResult = self.clone().add(sum, "months");
    if (year2 - addResult < 0) {
      const diff = year2 - addResult;
      let result1 = diff / (addResult - self.clone().add(sum - 1, "months"));
      const cloneResult1 = self.clone();
    } else {
      const diff1 = year2 - addResult;
      result1 = diff1 / (self.clone().add(sum + 1, "months") - addResult);
      const cloneResult2 = self.clone();
    }
    return -sum + result1 || 0;
  }
  function locale(self) {
    self = this;
    if (undefined === self) {
      let _abbr = self._locale._abbr;
    } else {
      const tmp2 = getLocale(self);
      _abbr = self;
      if (null != tmp2) {
        self._locale = tmp2;
        _abbr = self;
      }
    }
    return _abbr;
  }
  function localeData() {
    return this._locale;
  }
  function addWeekYearFormatToken(GGGG, isoWeekYear) {
    const items = [GGGG, GGGG.length];
    addFormatToken(0, items, 0, isoWeekYear);
  }
  function getSetWeekYearHelper(diff, arg1, arg2, dow, doy) {
    let tmp = arg1;
    const self = this;
    if (null == diff) {
      let year = weekOfYear(self, dow, doy).year;
    } else {
      const tmp3 = weeksInYear(diff, dow, doy);
      if (tmp > tmp3) {
        tmp = tmp3;
      }
      year = setWeekAll.call(self, diff, tmp, arg2, dow, doy);
    }
    return year;
  }
  function setWeekAll(diff, arg1, arg2, dow, doy) {
    const tmp = dayOfYearFromWeeks(diff, arg1, arg2, dow, doy);
    const obj = createUTCDate(tmp.year, 0, tmp.dayOfYear);
    this.year(obj.getUTCFullYear());
    this.month(obj.getUTCMonth());
    this.date(obj.getUTCDate());
    return this;
  }
  function preParsePostFormat(arg0) {
    return arg0;
  }
  function get$1(arg0, arg1, weekdays, day) {
    const tmp = getLocale();
    return tmp[weekdays](createUTC().set(day, arg1), arg0);
  }
  function listMonthsImpl(arg0, arg1, months) {
    let tmp = arg1;
    let str = arg0;
    if (isNumber(arg0)) {
      tmp = arg0;
    }
    if (!str) {
      str = "";
    }
    if (null != tmp) {
      return get$1(str, tmp, months, "month");
    } else {
      const items = [];
      let num2 = 0;
      do {
        let tmp2 = closure_135;
        let tmp3 = str;
        let tmp4 = num2;
        let tmp5 = months;
        let str3 = "month";
        items[num2] = closure_135(str, num2, months, "month");
        num2 = num2 + 1;
      } while (num2 < 12);
      return items;
    }
  }
  function listWeekdaysImpl(arg0, arg1, arg2, weekdays) {
    let tmp = arg2;
    if ("boolean" === typeof arg0) {
      let str2 = arg1;
      if (isNumber(arg1)) {
        tmp = arg1;
      }
      if (!str2) {
        str2 = "";
      }
      let str = str2;
      let flag = arg0;
      let tmp3 = tmp;
    } else {
      str = arg0;
      if (!str) {
        str = "";
      }
      flag = false;
      tmp3 = arg0;
    }
    let num = 0;
    if (flag) {
      num = getLocale()._week.dow;
    }
    if (null != tmp3) {
      return get$1(str, (tmp3 + num) % 7, weekdays, "day");
    } else {
      const items = [];
      let num3 = 0;
      do {
        let tmp5 = closure_135;
        let tmp6 = str;
        let tmp7 = weekdays;
        let str4 = "day";
        items[num3] = closure_135(str, (num3 + num) % 7, weekdays, "day");
        num3 = num3 + 1;
      } while (num3 < 7);
      return items;
    }
  }
  function addSubtract$1(_milliseconds, self, m, arg3) {
    const tmp = createDuration(self, m);
    _milliseconds._milliseconds = _milliseconds._milliseconds + arg3 * tmp._milliseconds;
    _milliseconds._days = _milliseconds._days + arg3 * tmp._days;
    _milliseconds._months = _milliseconds._months + arg3 * tmp._months;
    return _milliseconds._bubble();
  }
  function absCeil(endImportTime) {
    if (endImportTime < 0) {
      const _Math2 = Math;
      let rounded = Math.floor(endImportTime);
    } else {
      const _Math = Math;
      rounded = Math.ceil(endImportTime);
    }
    return rounded;
  }
  function daysToMonths(sum1) {
    return 4800 * sum1 / 146097;
  }
  function monthsToDays(_months) {
    return 146097 * _months / 4800;
  }
  function makeAs(M) {
    const createLocal = M;
    return function() {
      return this.as(arg0);
    };
  }
  function makeGetter(days) {
    const createLocal = days;
    return function() {
      if (this.isValid()) {
        let _NaN = this._data[closure_0];
      } else {
        _NaN = NaN;
      }
      return _NaN;
    };
  }
  function substituteTimeAgo(arg0, arg1, arg2, arg3, relativeTime) {
    let num = arg1;
    if (!arg1) {
      num = 1;
    }
    return relativeTime.relativeTime(num, arg2, arg0, arg3);
  }
  function sign(arg0) {
    return (arg0 > 0) - (arg0 < 0) || +arg0;
  }
  function toISOString$1() {
    const self = this;
    if (this.isValid()) {
      const result = abs(self._milliseconds) / 1000;
      const tmp4 = abs(self._days);
      const tmp6 = abs(self._months);
      const tmp8 = absFloor(result / 60);
      const tmp9 = absFloor(tmp8 / 60);
      const result1 = result % 60;
      const result2 = tmp8 % 60;
      const tmp11 = absFloor(tmp6 / 12);
      const result3 = tmp6 % 12;
      let str = "";
      let str2 = "";
      if (result1) {
        str2 = result1.toFixed(3).replace(/\.?0+$/, ``);
        const str3 = result1.toFixed(3);
      }
      const asSecondsResult = self.asSeconds();
      if (asSecondsResult) {
        let str5 = str;
        if (asSecondsResult < 0) {
          str5 = "-";
        }
        let str6 = str;
        if (tmp15 !== sign(asSecondsResult)) {
          str6 = "-";
        }
        const tmp15 = sign(self._months);
        let str7 = str;
        if (tmp17 !== sign(asSecondsResult)) {
          str7 = "-";
        }
        const tmp17 = sign(self._days);
        let str8 = str;
        if (tmp19 !== sign(asSecondsResult)) {
          str8 = "-";
        }
        let text = str;
        if (tmp11) {
          text = `${str6 + tmp11}Y`;
        }
        let text1 = str;
        if (result3) {
          text1 = `${str6 + tmp12}M`;
        }
        let text2 = str;
        if (tmp4) {
          text2 = `${str7 + tmp4}D`;
        }
        if (!tmp9) {
          if (!result2) {
            let str12 = str;
          }
          let text3 = str;
          if (tmp9) {
            text3 = `${str8 + tmp9}H`;
          }
          let text4 = str;
          if (result2) {
            text4 = `${str8 + tmp10}M`;
          }
          if (str2) {
            str = `${str8 + str2}S`;
          }
          return str5 + "P" + text + text1 + text2 + str12 + text3 + text4 + str;
        }
        str12 = "T";
        const tmp19 = sign(self._milliseconds);
      } else {
        return "P0D";
      }
    } else {
      return self.localeData().invalidDate();
    }
  }
  if (Array.prototype.some) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(1000 * arg0);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (null != arg1) {
          _config = closure_36;
          tmp4 = loadLocale;
          tmp5 = loadLocale(arg0);
          if (null != tmp5) {
            _config = tmp5._config;
          }
          tmp6 = Locale;
          tmp7 = mergeConfigs;
          prototype = Locale.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new Locale(mergeConfigs(_config, arg1));
          tmp11 = tmp10;
          tmp12 = closure_37;
          tmp10.parentLocale = closure_37[arg0];
          tmp13 = closure_37;
          closure_37[arg0] = tmp10;
          tmp14 = getSetGlobalLocale;
          tmp15 = getSetGlobalLocale(arg0);
        } else {
          tmp = closure_37;
          if (null != closure_37[arg0]) {
            tmp16 = closure_37;
            if (null != closure_37[arg0].parentLocale) {
              tmp3 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
            } else {
              tmp2 = closure_37;
              if (null != closure_37[arg0]) {
                tmp17 = closure_37;
                delete r2[r1];
              }
            }
          }
        }
        return closure_37[arg0];
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (undefined === arg0) {
          flag = round;
        } else {
          str = "function";
          flag = "function" === typeof arg0;
          if (flag) {
            round = arg0;
            flag = true;
          }
        }
        return flag;
      }
      static relativeTimeThreshold(arg0, arg1) {
        tmp = undefined !== round[arg0];
        if (!tmp) {
          return tmp;
        } else {
          if (undefined === arg1) {
            tmp4 = round;
            flag = round[arg0];
          } else {
            tmp2 = round;
            round[arg0] = arg1;
            str = "s";
            flag = true;
            if ("s" === arg0) {
              tmp3 = round;
              num = 1;
              round.ss = arg1 - 1;
              flag = true;
            }
          }
          tmp5 = flag;
        }
        return;
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  } else {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(1000 * arg0);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (null != arg1) {
          _config = closure_36;
          tmp4 = loadLocale;
          tmp5 = loadLocale(arg0);
          if (null != tmp5) {
            _config = tmp5._config;
          }
          tmp6 = Locale;
          tmp7 = mergeConfigs;
          prototype = Locale.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new Locale(mergeConfigs(_config, arg1));
          tmp11 = tmp10;
          tmp12 = closure_37;
          tmp10.parentLocale = closure_37[arg0];
          tmp13 = closure_37;
          closure_37[arg0] = tmp10;
          tmp14 = getSetGlobalLocale;
          tmp15 = getSetGlobalLocale(arg0);
        } else {
          tmp = closure_37;
          if (null != closure_37[arg0]) {
            tmp16 = closure_37;
            if (null != closure_37[arg0].parentLocale) {
              tmp3 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
            } else {
              tmp2 = closure_37;
              if (null != closure_37[arg0]) {
                tmp17 = closure_37;
                delete r2[r1];
              }
            }
          }
        }
        return closure_37[arg0];
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (undefined === arg0) {
          flag = round;
        } else {
          str = "function";
          flag = "function" === typeof arg0;
          if (flag) {
            round = arg0;
            flag = true;
          }
        }
        return flag;
      }
      static relativeTimeThreshold(arg0, arg1) {
        tmp = undefined !== round[arg0];
        if (!tmp) {
          return tmp;
        } else {
          if (undefined === arg1) {
            tmp4 = round;
            flag = round[arg0];
          } else {
            tmp2 = round;
            round[arg0] = arg1;
            str = "s";
            flag = true;
            if ("s" === arg0) {
              tmp3 = round;
              num = 1;
              round.ss = arg1 - 1;
              flag = true;
            }
          }
          tmp5 = flag;
        }
        return;
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  const module = some;
  const items = [];
  hooks.momentProperties = items;
  let closure_3 = false;
  let closure_5 = {};
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  if (Object.keys) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(1000 * arg0);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (null != arg1) {
          _config = closure_36;
          tmp4 = loadLocale;
          tmp5 = loadLocale(arg0);
          if (null != tmp5) {
            _config = tmp5._config;
          }
          tmp6 = Locale;
          tmp7 = mergeConfigs;
          prototype = Locale.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new Locale(mergeConfigs(_config, arg1));
          tmp11 = tmp10;
          tmp12 = closure_37;
          tmp10.parentLocale = closure_37[arg0];
          tmp13 = closure_37;
          closure_37[arg0] = tmp10;
          tmp14 = getSetGlobalLocale;
          tmp15 = getSetGlobalLocale(arg0);
        } else {
          tmp = closure_37;
          if (null != closure_37[arg0]) {
            tmp16 = closure_37;
            if (null != closure_37[arg0].parentLocale) {
              tmp3 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
            } else {
              tmp2 = closure_37;
              if (null != closure_37[arg0]) {
                tmp17 = closure_37;
                delete r2[r1];
              }
            }
          }
        }
        return closure_37[arg0];
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (undefined === arg0) {
          flag = round;
        } else {
          str = "function";
          flag = "function" === typeof arg0;
          if (flag) {
            round = arg0;
            flag = true;
          }
        }
        return flag;
      }
      static relativeTimeThreshold(arg0, arg1) {
        tmp = undefined !== round[arg0];
        if (!tmp) {
          return tmp;
        } else {
          if (undefined === arg1) {
            tmp4 = round;
            flag = round[arg0];
          } else {
            tmp2 = round;
            round[arg0] = arg1;
            str = "s";
            flag = true;
            if ("s" === arg0) {
              tmp3 = round;
              num = 1;
              round.ss = arg1 - 1;
              flag = true;
            }
          }
          tmp5 = flag;
        }
        return;
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  } else {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(1000 * arg0);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (null != arg1) {
          _config = closure_36;
          tmp4 = loadLocale;
          tmp5 = loadLocale(arg0);
          if (null != tmp5) {
            _config = tmp5._config;
          }
          tmp6 = Locale;
          tmp7 = mergeConfigs;
          prototype = Locale.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new Locale(mergeConfigs(_config, arg1));
          tmp11 = tmp10;
          tmp12 = closure_37;
          tmp10.parentLocale = closure_37[arg0];
          tmp13 = closure_37;
          closure_37[arg0] = tmp10;
          tmp14 = getSetGlobalLocale;
          tmp15 = getSetGlobalLocale(arg0);
        } else {
          tmp = closure_37;
          if (null != closure_37[arg0]) {
            tmp16 = closure_37;
            if (null != closure_37[arg0].parentLocale) {
              tmp3 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
            } else {
              tmp2 = closure_37;
              if (null != closure_37[arg0]) {
                tmp17 = closure_37;
                delete r2[r1];
              }
            }
          }
        }
        return closure_37[arg0];
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (undefined === arg0) {
          flag = round;
        } else {
          str = "function";
          flag = "function" === typeof arg0;
          if (flag) {
            round = arg0;
            flag = true;
          }
        }
        return flag;
      }
      static relativeTimeThreshold(arg0, arg1) {
        tmp = undefined !== round[arg0];
        if (!tmp) {
          return tmp;
        } else {
          if (undefined === arg1) {
            tmp4 = round;
            flag = round[arg0];
          } else {
            tmp2 = round;
            round[arg0] = arg1;
            str = "s";
            flag = true;
            if ("s" === arg0) {
              tmp3 = round;
              num = 1;
              round.ss = arg1 - 1;
              flag = true;
            }
          }
          tmp5 = flag;
        }
        return;
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  let closure_6 = {};
  let closure_7 = {};
  let closure_8 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  let closure_9 = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  let closure_10 = {};
  let closure_11 = {};
  let addRegexTokenResult29 = /\d/;
  const tmp2 = /\d\d/;
  const tmp3 = /\d{3}/;
  const tmp4 = /\d{4}/;
  const tmp5 = /[+-]?\d{6}/;
  const tmp6 = /\d\d?/;
  const tmp7 = /\d\d\d\d?/;
  const tmp8 = /\d\d\d\d\d\d?/;
  const tmp9 = /\d{1,3}/;
  const tmp10 = /\d{1,4}/;
  const tmp11 = /[+-]?\d{1,6}/;
  const tmp12 = /[+-]?\d+/;
  let closure_13 = /Z|[+-]\d\d:?\d\d/gi;
  const tmp13 = /Z|[+-]\d\d(?::?\d\d)?/gi;
  const tmp14 = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  let closure_15 = {};
  let closure_16 = {};
  let closure_17 = 0;
  let closure_18 = 1;
  let closure_19 = 2;
  let closure_20 = 3;
  let closure_21 = 4;
  let closure_22 = 5;
  let closure_23 = 6;
  let closure_24 = 7;
  let closure_25 = 8;
  addFormatToken("Y", 0, 0, () => {
    if (yearResult <= 9999) {
      let text = `${tmp}`;
    } else {
      text = `+${tmp}`;
    }
    return text;
  });
  addFormatToken(0, ["HH:mm", "HHmmss.SSSS"], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, [], 0, "year");
  addFormatToken(0, ["op", "isArray"], 0, "year");
  const items1 = [1090519489, 80992, true];
  addFormatToken(0, items1, 0, "year");
  addUnitAlias("year", "y");
  addUnitPriority("year", 1);
  addRegexToken("Y", tmp12);
  addRegexToken("YY", tmp6, tmp2);
  addRegexToken("YYYY", tmp10, tmp4);
  addRegexToken("YYYYY", tmp11, tmp5);
  addRegexToken("YYYYYY", tmp11, tmp5);
  addParseToken([], 0);
  addParseToken("YYYY", (arg0, arg1) => {
    if (2 === arg0.length) {
      let parseTwoDigitYearResult = hooks.parseTwoDigitYear(arg0);
    } else {
      parseTwoDigitYearResult = toInt(arg0);
    }
    arg1[closure_17] = parseTwoDigitYearResult;
  });
  addParseToken("YY", (arg0, arg1) => {
    arg1[closure_17] = hooks.parseTwoDigitYear(arg0);
  });
  addParseToken("Y", (replaced) => {
    arg1[closure_17] = parseInt(replaced, 10);
  });
  const getSet = makeGetSet("FullYear", true);
  if (Array.prototype.indexOf) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(1000 * arg0);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (null != arg1) {
          _config = closure_36;
          tmp4 = loadLocale;
          tmp5 = loadLocale(arg0);
          if (null != tmp5) {
            _config = tmp5._config;
          }
          tmp6 = Locale;
          tmp7 = mergeConfigs;
          prototype = Locale.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new Locale(mergeConfigs(_config, arg1));
          tmp11 = tmp10;
          tmp12 = closure_37;
          tmp10.parentLocale = closure_37[arg0];
          tmp13 = closure_37;
          closure_37[arg0] = tmp10;
          tmp14 = getSetGlobalLocale;
          tmp15 = getSetGlobalLocale(arg0);
        } else {
          tmp = closure_37;
          if (null != closure_37[arg0]) {
            tmp16 = closure_37;
            if (null != closure_37[arg0].parentLocale) {
              tmp3 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
            } else {
              tmp2 = closure_37;
              if (null != closure_37[arg0]) {
                tmp17 = closure_37;
                delete r2[r1];
              }
            }
          }
        }
        return closure_37[arg0];
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (undefined === arg0) {
          flag = round;
        } else {
          str = "function";
          flag = "function" === typeof arg0;
          if (flag) {
            round = arg0;
            flag = true;
          }
        }
        return flag;
      }
      static relativeTimeThreshold(arg0, arg1) {
        tmp = undefined !== round[arg0];
        if (!tmp) {
          return tmp;
        } else {
          if (undefined === arg1) {
            tmp4 = round;
            flag = round[arg0];
          } else {
            tmp2 = round;
            round[arg0] = arg1;
            str = "s";
            flag = true;
            if ("s" === arg0) {
              tmp3 = round;
              num = 1;
              round.ss = arg1 - 1;
              flag = true;
            }
          }
          tmp5 = flag;
        }
        return;
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  } else {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(1000 * arg0);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (null != arg1) {
          _config = closure_36;
          tmp4 = loadLocale;
          tmp5 = loadLocale(arg0);
          if (null != tmp5) {
            _config = tmp5._config;
          }
          tmp6 = Locale;
          tmp7 = mergeConfigs;
          prototype = Locale.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new Locale(mergeConfigs(_config, arg1));
          tmp11 = tmp10;
          tmp12 = closure_37;
          tmp10.parentLocale = closure_37[arg0];
          tmp13 = closure_37;
          closure_37[arg0] = tmp10;
          tmp14 = getSetGlobalLocale;
          tmp15 = getSetGlobalLocale(arg0);
        } else {
          tmp = closure_37;
          if (null != closure_37[arg0]) {
            tmp16 = closure_37;
            if (null != closure_37[arg0].parentLocale) {
              tmp3 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
            } else {
              tmp2 = closure_37;
              if (null != closure_37[arg0]) {
                tmp17 = closure_37;
                delete r2[r1];
              }
            }
          }
        }
        return closure_37[arg0];
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (undefined === arg0) {
          flag = round;
        } else {
          str = "function";
          flag = "function" === typeof arg0;
          if (flag) {
            round = arg0;
            flag = true;
          }
        }
        return flag;
      }
      static relativeTimeThreshold(arg0, arg1) {
        tmp = undefined !== round[arg0];
        if (!tmp) {
          return tmp;
        } else {
          if (undefined === arg1) {
            tmp4 = round;
            flag = round[arg0];
          } else {
            tmp2 = round;
            round[arg0] = arg1;
            str = "s";
            flag = true;
            if ("s" === arg0) {
              tmp3 = round;
              num = 1;
              round.ss = arg1 - 1;
              flag = true;
            }
          }
          tmp5 = flag;
        }
        return;
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  addFormatToken("M", [], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(arg0) {
    return this.localeData().monthsShort(this, arg0);
  });
  addFormatToken("MMMM", 0, 0, function(arg0) {
    return this.localeData().months(this, arg0);
  });
  addUnitAlias("month", "M");
  addUnitPriority("month", 8);
  addRegexToken("M", tmp6);
  addRegexToken("MM", tmp6, tmp2);
  addRegexToken("MMM", (arg0, monthsShortRegex) => monthsShortRegex.monthsShortRegex(arg0));
  addRegexToken("MMMM", (arg0, monthsRegex) => monthsRegex.monthsRegex(arg0));
  addParseToken([true, true], (arg0, arg1) => {
    arg1[closure_18] = toInt(arg0) - 1;
  });
  addParseToken([2, "DDD"], (invalidMonth, arg1, _locale) => {
    _locale = _locale._locale;
    const monthsParseResult = _locale.monthsParse(invalidMonth, arg3, _locale._strict);
    if (null != monthsParseResult) {
      arg1[closure_18] = monthsParseResult;
    } else {
      getParsingFlags(_locale).invalidMonth = invalidMonth;
    }
  });
  let closure_27 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  const parts = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  const parts1 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
  addFormatToken("w", [], "wo", "week");
  addFormatToken("W", [], "Wo", "isoWeek");
  addUnitAlias("week", "w");
  addUnitAlias("isoWeek", "W");
  addUnitPriority("week", 5);
  addUnitPriority("isoWeek", 5);
  addRegexToken("w", tmp6);
  addRegexToken("ww", tmp6, tmp2);
  addRegexToken("W", tmp6);
  addRegexToken("WW", tmp6, tmp2);
  addWeekParseToken([], (arg0, arg1, arg2, str) => {
    const substr = str.substr(0, 1);
    arg1[substr] = toInt(arg0);
  });
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(arg0) {
    return this.localeData().weekdaysMin(this, arg0);
  });
  addFormatToken("ddd", 0, 0, function(arg0) {
    return this.localeData().weekdaysShort(this, arg0);
  });
  addFormatToken("dddd", 0, 0, function(arg0) {
    return this.localeData().weekdays(this, arg0);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addUnitAlias("day", "d");
  addUnitAlias("weekday", "e");
  addUnitAlias("isoWeekday", "E");
  addUnitPriority("day", 11);
  addUnitPriority("weekday", 11);
  addUnitPriority("isoWeekday", 11);
  addRegexToken("d", tmp6);
  addRegexToken("e", tmp6);
  addRegexToken("E", tmp6);
  addRegexToken("dd", (arg0, weekdaysMinRegex) => weekdaysMinRegex.weekdaysMinRegex(arg0));
  addRegexToken("ddd", (arg0, weekdaysShortRegex) => weekdaysShortRegex.weekdaysShortRegex(arg0));
  addRegexToken("dddd", (arg0, weekdaysRegex) => weekdaysRegex.weekdaysRegex(arg0));
  addWeekParseToken([], (invalidWeekday, arg1, _locale) => {
    _locale = _locale._locale;
    const weekdaysParseResult = _locale.weekdaysParse(invalidWeekday, arg3, _locale._strict);
    if (null != weekdaysParseResult) {
      arg1.d = weekdaysParseResult;
    } else {
      getParsingFlags(_locale).invalidWeekday = invalidWeekday;
    }
  });
  addWeekParseToken([null, null, null], (arg0, arg1, arg2, arg3) => {
    arg1[arg3] = toInt(arg0);
  });
  const parts2 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  const parts3 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  const parts4 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  addFormatToken("H", [true, true], 0, "hour");
  addFormatToken("h", [true, true], 0, hFormat);
  addFormatToken("k", [], 0, function kFormat() {
    return this.hours() || 24;
  });
  addFormatToken("hmm", 0, 0, function() {
    const text = `${closure_105.apply(this)}`;
    return `${closure_105.apply(this)}` + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    const text = `${closure_105.apply(this)}`;
    const text1 = `${closure_105.apply(this)}${closure_81(this.minutes(), 2)}`;
    return `${closure_105.apply(this)}${closure_81(this.minutes(), 2)}` + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    const text = `${this.hours()}`;
    return `${this.hours()}` + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    const text = `${this.hours()}`;
    const text1 = `${this.hours()}${closure_81(this.minutes(), 2)}`;
    return `${this.hours()}${closure_81(this.minutes(), 2)}` + zeroFill(this.seconds(), 2);
  });
  meridiem("a", true);
  meridiem("A", false);
  addUnitAlias("hour", "h");
  addUnitPriority("hour", 13);
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", tmp6);
  addRegexToken("h", tmp6);
  addRegexToken("k", tmp6);
  addRegexToken("HH", tmp6, tmp2);
  addRegexToken("hh", tmp6, tmp2);
  addRegexToken("kk", tmp6, tmp2);
  addRegexToken("hmm", tmp7);
  addRegexToken("hmmss", tmp8);
  addRegexTokenResult29 = addRegexToken("Hmm", tmp7);
  addRegexTokenResult29 = addRegexToken("Hmmss", tmp8);
  addRegexTokenResult29 = addParseToken([true, true], 3);
  addRegexTokenResult29 = addParseToken([], (arg0, arg1, arg2) => {
    const tmp = toInt(arg0);
    let num = 0;
    if (24 !== tmp) {
      num = tmp;
    }
    arg1[closure_20] = num;
  });
  addRegexTokenResult29 = addParseToken([], (_meridiem, arg1, _locale) => {
    _locale = _locale._locale;
    _locale._isPm = _locale.isPM(_meridiem);
    _locale._meridiem = _meridiem;
  });
  addRegexTokenResult29 = addParseToken([true, true], (arg0, arg1, _pf) => {
    arg1[closure_20] = toInt(arg0);
    getParsingFlags(_pf).bigHour = true;
  });
  addRegexTokenResult29 = addParseToken("hmm", (str, arg1, _pf) => {
    const diff = str.length - 2;
    arg1[closure_20] = toInt(str.substr(0, diff));
    arg1[closure_21] = toInt(str.substr(diff));
    getParsingFlags(_pf).bigHour = true;
  });
  addRegexTokenResult29 = addParseToken("hmmss", (str, arg1, _pf) => {
    const diff = str.length - 4;
    const diff1 = str.length - 2;
    arg1[closure_20] = toInt(str.substr(0, diff));
    arg1[closure_21] = toInt(str.substr(diff, 2));
    arg1[closure_22] = toInt(str.substr(diff1));
    getParsingFlags(_pf).bigHour = true;
  });
  addRegexTokenResult29 = addParseToken("Hmm", (str) => {
    const diff = str.length - 2;
    arg1[closure_20] = toInt(str.substr(0, diff));
    arg1[closure_21] = toInt(str.substr(diff));
  });
  addRegexTokenResult29 = addParseToken("Hmmss", (str) => {
    const diff = str.length - 4;
    const diff1 = str.length - 2;
    arg1[closure_20] = toInt(str.substr(0, diff));
    arg1[closure_21] = toInt(str.substr(diff, 2));
    arg1[closure_22] = toInt(str.substr(diff1));
  });
  addRegexTokenResult29 = makeGetSet("Hours", true);
  let obj = { calendar: { intl: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009919227068201119, flex: 859756496762131800000000000000000000000000000000000000000000000000000000000000000000000000000, getChannel: 146589387140.0136, PX_8: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000094246457044, textAlign: 0.00000000000000000000000000000000000000000000000000000000000000002763230690774519, unicodeVersion: 59711461306563985000000000000000000 }, longDateFormat: { "Bool(false)": 4, "Bool(false)": "staff", "Bool(false)": "message", "Bool(false)": "filter", height: null, status: null }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: {}, months: parts, monthsShort: parts1, week: {}, weekdays: parts2, weekdaysMin: parts4, weekdaysShort: parts3, meridiemParse: /[ap]\.?m?\.?/i };
  let closure_37 = {};
  let closure_38 = {};
  let closure_39 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  let closure_40 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  let closure_41 = /Z|[+-]\d\d(?::?\d\d)?/;
  const items2 = [null, /[+-]\d{6}-\d\d-\d\d/];
  const items3 = [items2, , , , , , , , , , ];
  const items4 = [, /\d{4}-\d\d-\d\d/];
  items3[1] = items4;
  const items5 = [, /\d{4}-W\d\d-\d/];
  items3[2] = items5;
  const items6 = ["r", /\d{4}-W\d\d/, false];
  items3[3] = items6;
  const items7 = [, /\d{4}-\d{3}/];
  items3[4] = items7;
  const items8 = ["r", /\d{4}-\d\d/, false];
  items3[5] = items8;
  const items9 = [, /[+-]\d{10}/];
  items3[6] = items9;
  const items10 = [, /\d{8}/];
  items3[7] = items10;
  const items11 = ["construct", /\d{4}W\d{3}/];
  items3[8] = items11;
  const items12 = [, /\d{4}W\d{2}/, false];
  items3[9] = items12;
  const items13 = [null, /\d{7}/];
  items3[10] = items13;
  const items14 = [, /\d\d:\d\d:\d\d\.\d+/];
  const items15 = [items14, , , , , , , , ];
  const items16 = [null, /\d\d:\d\d:\d\d,\d+/];
  items15[1] = items16;
  const items17 = [, /\d\d:\d\d:\d\d/];
  items15[2] = items17;
  const items18 = [, /\d\d:\d\d/];
  items15[3] = items18;
  const items19 = [0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004863915726868305, /\d\d\d\d\d\d\.\d+/];
  items15[4] = items19;
  const items20 = [, /\d\d\d\d\d\d,\d+/];
  items15[5] = items20;
  const items21 = [, /\d\d\d\d\d\d/];
  items15[6] = items21;
  const items22 = ["+", /\d\d\d\d/];
  items15[7] = items22;
  const items23 = [true, /\d\d/];
  items15[8] = items23;
  let closure_44 = /^\/?Date\((\-?\d+)/i;
  let closure_45 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  let closure_46 = {};
  hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (_useUTC) => {
    let str = "";
    if (_useUTC._useUTC) {
      str = " UTC";
    }
    _useUTC._d = new Date(_useUTC._i + str);
  });
  addRegexTokenResult29 = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    let self = this;
    const applyResult = createLocal(...arguments);
    if (this.isValid()) {
      if (applyResult.isValid()) {
        if (applyResult >= self) {
          self = applyResult;
        }
        let tmp = self;
      }
      return tmp;
    }
    tmp = createInvalid();
  });
  let closure_47 = [true, true, true, true, true, true, true, true, true];
  addRegexTokenResult29 = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    let self = this;
    const applyResult = createLocal(...arguments);
    if (this.isValid()) {
      if (applyResult.isValid()) {
        if (applyResult <= self) {
          self = applyResult;
        }
        let tmp = self;
      }
      return tmp;
    }
    tmp = createInvalid();
  });
  addRegexTokenResult29 = offset("Z", ":");
  addRegexTokenResult29 = offset("ZZ", "");
  addRegexTokenResult29 = addRegexToken("Z", tmp13);
  addRegexTokenResult29 = addRegexToken("ZZ", tmp13);
  addRegexTokenResult29 = addParseToken(["-", 0], (_i) => {
    arg2._useUTC = true;
    arg2._tzm = offsetFromString(tmp13, _i);
  });
  let closure_48 = /([\+\-]|\d\d)/gi;
  let closure_49 = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
  let closure_50 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  createDuration.fn = Duration.prototype;
  createDuration.invalid = function createInvalid$1() {
    return createDuration(NaN);
  };
  addRegexTokenResult29 = createAdder(1, "add");
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  addRegexTokenResult29 = createAdder(-1, "subtract");
  addRegexTokenResult29 = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(self) {
    self = this;
    if (undefined === self) {
      let localeDataResult = self.localeData();
    } else {
      localeDataResult = self.locale(self);
    }
    return localeDataResult;
  });
  addRegexTokenResult29 = addFormatToken(0, [], 0, function() {
    return this.weekYear() % 100;
  });
  addRegexTokenResult29 = addFormatToken(0, [1070050836, 1149957713], 0, function() {
    return this.isoWeekYear() % 100;
  });
  addRegexTokenResult29 = addWeekYearFormatToken("gggg", "weekYear");
  addRegexTokenResult29 = addWeekYearFormatToken("ggggg", "weekYear");
  addRegexTokenResult29 = addWeekYearFormatToken("GGGG", "isoWeekYear");
  addRegexTokenResult29 = addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addRegexTokenResult29 = addUnitAlias("weekYear", "gg");
  addRegexTokenResult29 = addUnitAlias("isoWeekYear", "GG");
  addRegexTokenResult29 = addUnitPriority("weekYear", 1);
  addRegexTokenResult29 = addUnitPriority("isoWeekYear", 1);
  addRegexTokenResult29 = addRegexToken("G", tmp12);
  addRegexTokenResult29 = addRegexToken("g", tmp12);
  addRegexTokenResult29 = addRegexToken("GG", tmp6, tmp2);
  addRegexTokenResult29 = addRegexToken("gg", tmp6, tmp2);
  addRegexTokenResult29 = addRegexToken("GGGG", tmp10, tmp4);
  addRegexTokenResult29 = addRegexToken("gggg", tmp10, tmp4);
  addRegexTokenResult29 = addRegexToken("GGGGG", tmp11, tmp5);
  addRegexTokenResult29 = addRegexToken("ggggg", tmp11, tmp5);
  addRegexTokenResult29 = addWeekParseToken(["Buchstabe", "eingekreist", "Gro\u00DFbuchstabe", "Kreis"], (arg0, arg1, arg2, str) => {
    const substr = str.substr(0, 2);
    arg1[substr] = toInt(arg0);
  });
  addRegexTokenResult29 = addWeekParseToken(["M", "\u4E38"], (arg0, arg1, arg2, arg3) => {
    arg1[arg3] = hooks.parseTwoDigitYear(arg0);
  });
  addRegexTokenResult29 = addFormatToken("Q", 0, "Qo", "quarter");
  addRegexTokenResult29 = addUnitAlias("quarter", "Q");
  addRegexTokenResult29 = addUnitPriority("quarter", 7);
  addRegexTokenResult29 = addRegexToken("Q", addRegexTokenResult29);
  addRegexTokenResult29 = addParseToken("Q", (arg0, arg1) => {
    arg1[closure_18] = 3 * (toInt(arg0) - 1);
  });
  addRegexTokenResult29 = addFormatToken("D", ["isArray", "PX_16"], "Do", "date");
  addRegexTokenResult29 = addUnitAlias("date", "D");
  addRegexTokenResult29 = addUnitPriority("date", 9);
  addRegexTokenResult29 = addRegexToken("D", tmp6);
  addRegexTokenResult29 = addRegexToken("DD", tmp6, tmp2);
  addRegexTokenResult29 = addRegexToken("Do", (arg0, _dayOfMonthOrdinalParse) => {
    if (arg0) {
      let _dayOfMonthOrdinalParseLenient = _dayOfMonthOrdinalParse._dayOfMonthOrdinalParse || _dayOfMonthOrdinalParse._ordinalParse;
      const tmp = _dayOfMonthOrdinalParse._dayOfMonthOrdinalParse || _dayOfMonthOrdinalParse._ordinalParse;
    } else {
      _dayOfMonthOrdinalParseLenient = _dayOfMonthOrdinalParse._dayOfMonthOrdinalParseLenient;
    }
    return _dayOfMonthOrdinalParseLenient;
  });
  addRegexTokenResult29 = addParseToken([null, null], 2);
  addRegexTokenResult29 = addParseToken("Do", (arg0, arg1) => {
    arg1[closure_19] = toInt(arg0.match(tmp6)[0]);
  });
  addRegexTokenResult29 = makeGetSet("Date", true);
  addRegexTokenResult29 = addFormatToken("DDD", [-53946150300215520000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000007090599685785658], "DDDo", "dayOfYear");
  addRegexTokenResult29 = addUnitAlias("dayOfYear", "DDD");
  addRegexTokenResult29 = addUnitPriority("dayOfYear", 4);
  addRegexTokenResult29 = addRegexToken("DDD", tmp9);
  addRegexTokenResult29 = addRegexToken("DDDD", tmp3);
  addRegexTokenResult29 = addParseToken([false, false], (arg0, arg1, arg2) => {
    arg2._dayOfYear = toInt(arg0);
  });
  addRegexTokenResult29 = addFormatToken("m", ["<string:2763915265>", "<string:1413611522>"], 0, "minute");
  addRegexTokenResult29 = addUnitAlias("minute", "m");
  addRegexTokenResult29 = addUnitPriority("minute", 14);
  addRegexTokenResult29 = addRegexToken("m", tmp6);
  addRegexTokenResult29 = addRegexToken("mm", tmp6, tmp2);
  addRegexTokenResult29 = addParseToken(["ein Tag", "einem Tag"], 4);
  addRegexTokenResult29 = makeGetSet("Minutes", false);
  addRegexTokenResult29 = addFormatToken("s", [], 0, "second");
  addRegexTokenResult29 = addUnitAlias("second", "s");
  addRegexTokenResult29 = addUnitPriority("second", 15);
  addRegexTokenResult29 = addRegexToken("s", tmp6);
  addRegexTokenResult29 = addRegexToken("ss", tmp6, tmp2);
  addRegexTokenResult29 = addParseToken([1107296710, 147494], 5);
  addRegexTokenResult29 = makeGetSet("Seconds", false);
  addRegexTokenResult29 = addFormatToken("S", 0, 0, function() {
    return ~~this.millisecond() / 100;
  });
  addRegexTokenResult29 = addFormatToken(0, ["nolla", "yhden"], 0, function() {
    return ~~this.millisecond() / 10;
  });
  addRegexTokenResult29 = addFormatToken(0, [], 0, "millisecond");
  addRegexTokenResult29 = addFormatToken(0, ["getAppGradientColors", "shouldBeUseWeb"], 0, function() {
    return 10 * this.millisecond();
  });
  addRegexTokenResult29 = addFormatToken(0, ["y", "isArray"], 0, function() {
    return 100 * this.millisecond();
  });
  addRegexTokenResult29 = addFormatToken(0, [], 0, function() {
    return 1000 * this.millisecond();
  });
  addRegexTokenResult29 = addFormatToken(0, ["<string:1224737436>", "<string:1375731995>"], 0, function() {
    return 10000 * this.millisecond();
  });
  addRegexTokenResult29 = addFormatToken(0, [], 0, function() {
    return 100000 * this.millisecond();
  });
  addRegexTokenResult29 = addFormatToken(0, ["r", "MI"], 0, function() {
    return 1000000 * this.millisecond();
  });
  addRegexTokenResult29 = addUnitAlias("millisecond", "ms");
  addRegexTokenResult29 = addUnitPriority("millisecond", 16);
  addRegexTokenResult29 = addRegexToken("S", tmp9, addRegexTokenResult29);
  addRegexTokenResult29 = addRegexToken("SS", tmp9, tmp2);
  addRegexTokenResult29 = addRegexToken("SSS", tmp9, tmp3);
  if ("SSSS".length <= 9) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(1000 * arg0);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (null != arg1) {
          _config = closure_36;
          tmp4 = loadLocale;
          tmp5 = loadLocale(arg0);
          if (null != tmp5) {
            _config = tmp5._config;
          }
          tmp6 = Locale;
          tmp7 = mergeConfigs;
          prototype = Locale.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new Locale(mergeConfigs(_config, arg1));
          tmp11 = tmp10;
          tmp12 = closure_37;
          tmp10.parentLocale = closure_37[arg0];
          tmp13 = closure_37;
          closure_37[arg0] = tmp10;
          tmp14 = getSetGlobalLocale;
          tmp15 = getSetGlobalLocale(arg0);
        } else {
          tmp = closure_37;
          if (null != closure_37[arg0]) {
            tmp16 = closure_37;
            if (null != closure_37[arg0].parentLocale) {
              tmp3 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
            } else {
              tmp2 = closure_37;
              if (null != closure_37[arg0]) {
                tmp17 = closure_37;
                delete r2[r1];
              }
            }
          }
        }
        return closure_37[arg0];
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (undefined === arg0) {
          flag = round;
        } else {
          str = "function";
          flag = "function" === typeof arg0;
          if (flag) {
            round = arg0;
            flag = true;
          }
        }
        return flag;
      }
      static relativeTimeThreshold(arg0, arg1) {
        tmp = undefined !== round[arg0];
        if (!tmp) {
          return tmp;
        } else {
          if (undefined === arg1) {
            tmp4 = round;
            flag = round[arg0];
          } else {
            tmp2 = round;
            round[arg0] = arg1;
            str = "s";
            flag = true;
            if ("s" === arg0) {
              tmp3 = round;
              num = 1;
              round.ss = arg1 - 1;
              flag = true;
            }
          }
          tmp5 = flag;
        }
        return;
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  if ("S".length <= 9) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(1000 * arg0);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (null != arg1) {
          _config = closure_36;
          tmp4 = loadLocale;
          tmp5 = loadLocale(arg0);
          if (null != tmp5) {
            _config = tmp5._config;
          }
          tmp6 = Locale;
          tmp7 = mergeConfigs;
          prototype = Locale.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          tmp10 = new Locale(mergeConfigs(_config, arg1));
          tmp11 = tmp10;
          tmp12 = closure_37;
          tmp10.parentLocale = closure_37[arg0];
          tmp13 = closure_37;
          closure_37[arg0] = tmp10;
          tmp14 = getSetGlobalLocale;
          tmp15 = getSetGlobalLocale(arg0);
        } else {
          tmp = closure_37;
          if (null != closure_37[arg0]) {
            tmp16 = closure_37;
            if (null != closure_37[arg0].parentLocale) {
              tmp3 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
            } else {
              tmp2 = closure_37;
              if (null != closure_37[arg0]) {
                tmp17 = closure_37;
                delete r2[r1];
              }
            }
          }
        }
        return closure_37[arg0];
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (undefined === arg0) {
          flag = round;
        } else {
          str = "function";
          flag = "function" === typeof arg0;
          if (flag) {
            round = arg0;
            flag = true;
          }
        }
        return flag;
      }
      static relativeTimeThreshold(arg0, arg1) {
        tmp = undefined !== round[arg0];
        if (!tmp) {
          return tmp;
        } else {
          if (undefined === arg1) {
            tmp4 = round;
            flag = round[arg0];
          } else {
            tmp2 = round;
            round[arg0] = arg1;
            str = "s";
            flag = true;
            if ("s" === arg0) {
              tmp3 = round;
              num = 1;
              round.ss = arg1 - 1;
              flag = true;
            }
          }
          tmp5 = flag;
        }
        return;
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  addRegexTokenResult29 = makeGetSet("Milliseconds", false);
  addRegexTokenResult29 = addFormatToken("z", 0, 0, "zoneAbbr");
  addRegexTokenResult29 = addFormatToken("zz", 0, 0, "zoneName");
  const prototype = Moment.prototype;
  prototype.add = addRegexTokenResult29;
  prototype.calendar = function calendar$1(_d) {
    let tmp = _d;
    const self = this;
    if (!_d) {
      tmp = createLocal();
    }
    let str = hooks.calendarFormat(self, cloneWithOffset(tmp, self).startOf("day"));
    if (!str) {
      str = "sameElse";
    }
    let calendarResult = arg1;
    if (!arg1) {
      if (!calendarResult) {
        calendarResult = self.localeData().calendar(str, self, createLocal(tmp));
        const localeDataResult = self.localeData();
      }
      return self.format(calendarResult);
    } else if (isFunction(arg1[str])) {
      let callResult = obj2.call(self, tmp);
    } else {
      callResult = obj2;
    }
  };
  prototype.clone = function clone() {
    return new Moment(this);
  };
  prototype.diff = function diff(_d, tmp3Result) {
    const self = this;
    if (this.isValid()) {
      const obj = cloneWithOffset(_d, self);
      if (obj.isValid()) {
        const result = 60000 * (obj.utcOffset() - self.utcOffset());
        const tmp9 = normalizeUnits(tmp3Result);
        if ("year" === tmp9) {
          let result1 = monthDiff(self, obj) / 12;
        } else if ("month" === tmp9) {
          result1 = monthDiff(self, obj);
        } else if ("quarter" === tmp9) {
          result1 = monthDiff(self, obj) / 3;
        } else if ("second" === tmp9) {
          result1 = (self - obj) / 1000;
        } else if ("minute" === tmp9) {
          result1 = (self - obj) / 60000;
        } else if ("hour" === tmp9) {
          result1 = (self - obj) / 3600000;
        } else if ("day" === tmp9) {
          result1 = (self - obj - result) / 86400000;
        } else if ("week" === tmp9) {
          result1 = (self - obj - result) / 604800000;
        } else {
          result1 = self - obj;
        }
        let tmp15 = result1;
        if (!arg2) {
          tmp15 = absFloor(result1);
        }
        return tmp15;
      } else {
        const _NaN2 = NaN;
        return NaN;
      }
    } else {
      const _NaN = NaN;
      return NaN;
    }
  };
  prototype.endOf = function endOf(tmp3Result) {
    const self = this;
    const tmp = normalizeUnits(tmp3Result);
    let self2 = this;
    if (undefined !== tmp) {
      self2 = self;
      if ("millisecond" !== tmp) {
        let str3 = tmp;
        if ("date" === tmp) {
          str3 = "day";
        }
        let str4 = "week";
        if ("isoWeek" !== str3) {
          str4 = str3;
        }
        const startOfResult = self.startOf(str3);
        self2 = self.startOf(str3).add(1, str4).subtract(1, "ms");
        const addResult = self.startOf(str3).add(1, str4);
      }
    }
    return self2;
  };
  prototype.format = function format(Z) {
    const self = this;
    if (Z) {
      const tmp4 = formatMoment(self, Z);
      return self.localeData().postformat(tmp4);
    } else {
      self.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
  };
  prototype.from = function from(isValid) {
    const self = this;
    if (this.isValid()) {
      if (!isMoment(isValid)) {
        let obj = createLocal(isValid);
        return humanizeResult;
      }
      obj = { to: self, from: isValid };
      const obj4 = createDuration(obj);
      let humanizeResult = createDuration(obj).locale(self.locale()).humanize(!arg1);
      const localeResult = createDuration(obj).locale(self.locale());
    }
    humanizeResult = self.localeData().invalidDate();
  };
  prototype.fromNow = function fromNow(arg0) {
    return this.from(createLocal(), arg0);
  };
  prototype.to = function to(local, arg1) {
    const self = this;
    if (this.isValid()) {
      if (!isMoment(local)) {
        let obj = createLocal(local);
        return humanizeResult;
      }
      obj = { from: self, to: local };
      const obj4 = createDuration(obj);
      let humanizeResult = createDuration(obj).locale(self.locale()).humanize(!arg1);
      const localeResult = createDuration(obj).locale(self.locale());
    }
    humanizeResult = self.localeData().invalidDate();
  };
  prototype.toNow = function toNow(arg0) {
    return this.to(createLocal(), arg0);
  };
  prototype.get = function stringGet(tmp3Result) {
    const self = this;
    const tmp = normalizeUnits(tmp3Result);
    let self2 = this;
    if (isFunction(this[tmp])) {
      self2 = self[tmp]();
    }
    return self2;
  };
  prototype.invalidAt = function invalidAt() {
    return getParsingFlags(this).overflow;
  };
  prototype.isAfter = function isAfter(_d) {
    let self = this;
    let obj = _d;
    if (!isMoment(_d)) {
      obj = createLocal(_d);
    }
    const tmp2 = !self.isValid() || !obj.isValid();
    if (tmp2) {
      return !tmp2;
    } else {
      let str2 = "millisecond";
      if (!isUndefined(arg1)) {
        str2 = arg1;
      }
      const tmp3Result = normalizeUnits(str2);
      if ("millisecond" === tmp3Result) {
        self = self.valueOf();
        let tmp7 = self > obj.valueOf();
      } else {
        const valueOfResult = obj.valueOf();
        const cloneResult = self.clone();
        tmp7 = valueOfResult < self.clone().startOf(tmp3Result).valueOf();
        const startOfResult = self.clone().startOf(tmp3Result);
      }
      const tmp3 = normalizeUnits;
    }
  };
  prototype.isBefore = function isBefore(_d) {
    let self = this;
    let obj = _d;
    if (!isMoment(_d)) {
      obj = createLocal(_d);
    }
    const tmp2 = !self.isValid() || !obj.isValid();
    if (tmp2) {
      return !tmp2;
    } else {
      let str2 = "millisecond";
      if (!isUndefined(arg1)) {
        str2 = arg1;
      }
      const tmp3Result = normalizeUnits(str2);
      if ("millisecond" === tmp3Result) {
        self = self.valueOf();
        let tmp7 = self < obj.valueOf();
      } else {
        const cloneResult = self.clone();
        const endOfResult = self.clone().endOf(tmp3Result);
        tmp7 = self.clone().endOf(tmp3Result).valueOf() < obj.valueOf();
        const valueOfResult = self.clone().endOf(tmp3Result).valueOf();
      }
      const tmp3 = normalizeUnits;
    }
  };
  prototype.isBetween = function isBetween(start, end) {
    let str = arg3;
    const self = this;
    if (!arg3) {
      str = "()";
    }
    if ("(" === str[0]) {
      let isAfterResult = self.isAfter(start, arg2);
    } else {
      isAfterResult = !self.isBefore(start, arg2);
    }
    if (!isAfterResult) {
      return isAfterResult;
    } else if (")" === str[1]) {
      let isBeforeResult = self.isBefore(end, arg2);
    } else {
      isBeforeResult = !self.isAfter(end, arg2);
    }
  };
  prototype.isSame = function isSame(endDate2, day) {
    let str = day;
    let self = this;
    let obj = endDate2;
    if (!isMoment(endDate2)) {
      obj = createLocal(endDate2);
    }
    const tmp2 = !self.isValid() || !obj.isValid();
    if (tmp2) {
      return !tmp2;
    } else {
      if (!str) {
        str = "millisecond";
      }
      const tmp3Result = normalizeUnits(str);
      if ("millisecond" === tmp3Result) {
        self = self.valueOf();
        let tmp6 = self === obj.valueOf();
      } else {
        const valueOfResult = obj.valueOf();
        const cloneResult = self.clone();
        tmp6 = self.clone().startOf(tmp3Result).valueOf() <= valueOfResult;
        if (tmp6) {
          const cloneResult1 = self.clone();
          tmp6 = valueOfResult <= self.clone().endOf(tmp3Result).valueOf();
          const endOfResult = self.clone().endOf(tmp3Result);
        }
        const startOfResult = self.clone().startOf(tmp3Result);
      }
      const tmp3 = normalizeUnits;
    }
  };
  prototype.isSameOrAfter = function isSameOrAfter(endDate2, day) {
    const self = this;
    return this.isSame(endDate2, day) || self.isAfter(endDate2, day);
  };
  prototype.isSameOrBefore = function isSameOrBefore(endDate2, minute) {
    const self = this;
    return this.isSame(endDate2, minute) || self.isBefore(endDate2, minute);
  };
  prototype.isValid = function isValid$2() {
    return isValid(this);
  };
  prototype.lang = addRegexTokenResult29;
  prototype.locale = locale;
  prototype.localeData = localeData;
  prototype.max = addRegexTokenResult29;
  prototype.min = addRegexTokenResult29;
  prototype.parsingFlags = function parsingFlags() {
    const obj = {};
    extend(obj, getParsingFlags(this));
    return obj;
  };
  prototype.set = function stringSet(tmp3Result) {
    let length;
    const self = this;
    if ("object" === typeof tmp3Result) {
      const tmp6 = normalizeObjectUnits(tmp3Result);
      const arr = function getPrioritizedUnits(obj) {
        const items = [];
        for (const key10003 in arg0) {
          let tmp2 = key10003;
          obj = { unit: key10003 };
          let tmp3 = closure_7;
          obj.priority = closure_7[key10003];
          let arr = items.push(obj);
        }
        const sorted = items.sort((priority, priority2) => priority.priority - priority2.priority);
        return items;
      }(tmp6);
      let num = 0;
      if (0 < arr.length) {
        do {
          let tmp7 = self[arr[num].unit](tmp6[arr[num].unit]);
          num = num + 1;
          length = arr.length;
        } while (num < length);
      }
    } else {
      const tmp3 = normalizeUnits(tmp3Result);
      if (isFunction(self[tmp3])) {
        return self[tmp3](arg1);
      }
    }
    return self;
  };
  prototype.startOf = function startOf(day) {
    const self = this;
    const tmp = normalizeUnits(day);
    if ("year" === tmp) {
      self.month(0);
    } else if ("quarter" !== tmp) {
      if ("month" !== tmp) {
        if ("week" !== tmp) {
          if ("isoWeek" !== tmp) {
            if ("day" !== tmp) {
              if ("date" !== tmp) {
                if ("hour" !== tmp) {
                  if ("minute" !== tmp) {
                    if ("week" === tmp) {
                      self.weekday(0);
                    }
                    if ("isoWeek" === tmp) {
                      self.isoWeekday(1);
                    }
                    if ("quarter" === tmp) {
                      const _Math = Math;
                      self.month(3 * Math.floor(self.month() / 3));
                    }
                    return self;
                  }
                  self.milliseconds(0);
                }
                self.seconds(0);
              }
              self.minutes(0);
            }
          }
        }
      }
      self.hours(0);
    }
    self.date(1);
  };
  prototype.subtract = addRegexTokenResult29;
  prototype.toArray = function toArray() {
    const items = [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    return items;
  };
  prototype.toObject = function toObject() {
    return { years: this.year(), months: this.month(), date: this.date(), hours: this.hours(), minutes: this.minutes(), seconds: this.seconds(), milliseconds: this.milliseconds() };
  };
  prototype.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  prototype.toISOString = function toISOString(arg0) {
    let self = this;
    if (this.isValid()) {
      let utcResult = self;
      if (true !== arg0) {
        utcResult = self.clone().utc();
        const cloneResult = self.clone();
      }
      if (utcResult.year() >= 0) {
        if (utcResult.year() <= 9999) {
          const _Date2 = Date;
          if (isFunction(Date.prototype.toISOString)) {
            if (tmp3) {
              self = self.toDate();
              let toISOStringResult = self.toISOString();
            } else {
              const _Date = Date;
              const date = new Date(self.valueOf() + 60 * self.utcOffset() * 1000);
              const valueOfResult = self.valueOf();
              toISOStringResult = date.toISOString().replace("Z", formatMoment(utcResult, "Z"));
              const str2 = date.toISOString();
            }
          } else {
            let str = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";
            if (tmp3) {
              str = "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]";
            }
            let tmp14Result = formatMoment(utcResult, str);
            const tmp5 = formatMoment;
          }
        }
        return tmp14Result;
      }
      let str4 = "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ";
      if (true !== arg0) {
        str4 = "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]";
      }
      tmp14Result = formatMoment(utcResult, str4);
      const tmp14 = formatMoment;
    } else {
      return null;
    }
  };
  prototype.inspect = function inspect() {
    const self = this;
    if (this.isValid()) {
      let str3 = "moment";
      let str4 = "";
      if (!self.isLocal()) {
        let str5 = "moment.parseZone";
        if (0 === self.utcOffset()) {
          str5 = "moment.utc";
        }
        str4 = "Z";
        str3 = str5;
      }
      let str7 = "YYYYYY";
      if (0 <= self.year()) {
        str7 = "YYYYYY";
        if (self.year() <= 9999) {
          str7 = "YYYY";
        }
      }
      return self.format("[" + str3 + "(\"]" + str7 + "-MM-DD[T]HH:mm:ss.SSS" + (str4 + "[\")]"));
    } else {
      return "moment.invalid(/* " + self._i + " */)";
    }
  };
  prototype.toJSON = function toJSON() {
    const self = this;
    let toISOStringResult = null;
    if (this.isValid()) {
      toISOStringResult = self.toISOString();
    }
    return toISOStringResult;
  };
  prototype.toString = function toString() {
    const cloneResult = this.clone();
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  };
  prototype.unix = function unix(parsed) {
    return Math.floor(this.valueOf() / 1000);
  };
  prototype.valueOf = function valueOf() {
    let _d;
    let _offset;
    ({ _d, _offset } = this);
    if (!_offset) {
      _offset = 0;
    }
    return _d.valueOf() - 60000 * _offset;
  };
  prototype.creationData = function creationData() {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  };
  prototype.year = getSet;
  prototype.isLeapYear = function getIsLeapYear() {
    return isLeapYear(this.year());
  };
  prototype.weekYear = function getSetWeekYear(arg0) {
    const weekResult = this.week();
    return getSetWeekYearHelper.call(this, arg0, weekResult, this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  };
  prototype.isoWeekYear = function getSetISOWeekYear(arg0) {
    return getSetWeekYearHelper.call(this, arg0, this.isoWeek(), this.isoWeekday(), 1, 4);
  };
  function getSetQuarter(arg0) {
    const self = this;
    if (null == arg0) {
      const _Math = Math;
      let rounded = Math.ceil((self.month() + 1) / 3);
    } else {
      const diff = arg0 - 1;
      rounded = self.month(3 * diff + self.month() % 3);
    }
    return rounded;
  }
  prototype.quarters = getSetQuarter;
  prototype.quarter = getSetQuarter;
  prototype.month = getSetMonth;
  prototype.daysInMonth = function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  };
  function getSetWeek(arg0) {
    const self = this;
    const weekResult = this.localeData().week(this);
    let addResult = weekResult;
    if (null != arg0) {
      addResult = self.add(7 * (arg0 - weekResult), "d");
    }
    return addResult;
  }
  prototype.weeks = getSetWeek;
  prototype.week = getSetWeek;
  function getSetISOWeek(arg0) {
    const self = this;
    const week = weekOfYear(this, 1, 4).week;
    let addResult = week;
    if (null != arg0) {
      addResult = self.add(7 * (arg0 - week), "d");
    }
    return addResult;
  }
  prototype.isoWeeks = getSetISOWeek;
  prototype.isoWeek = getSetISOWeek;
  prototype.weeksInYear = function getWeeksInYear() {
    const _week = this.localeData()._week;
    return weeksInYear(this.year(), _week.dow, _week.doy);
  };
  prototype.isoWeeksInYear = function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  };
  prototype.date = addRegexTokenResult29;
  function getSetDayOfWeek(replaced) {
    let str = replaced;
    const self = this;
    if (this.isValid()) {
      const _d = self._d;
      if (self._isUTC) {
        let uTCDay = _d.getUTCDay();
      } else {
        uTCDay = _d.getDay();
      }
      let addResult = uTCDay;
      if (null != str) {
        let localeDataResult = self.localeData();
        if ("string" !== typeof str) {
          addResult = self.add(str - uTCDay, "d");
        } else {
          const _isNaN = isNaN;
          if (isNaN(str)) {
            const weekdaysParseResult = localeDataResult.weekdaysParse(str);
            str = "number";
            localeDataResult = typeof weekdaysParseResult;
            let tmp10 = null;
            if ("number" === localeDataResult) {
              tmp10 = weekdaysParseResult;
            }
            let parsed = tmp10;
          } else {
            const _parseInt = parseInt;
            parsed = parseInt(str, 10);
          }
        }
      }
      return addResult;
    } else {
      let _NaN = self;
      if (null == str) {
        _NaN = NaN;
      }
      return _NaN;
    }
  }
  prototype.days = getSetDayOfWeek;
  prototype.day = getSetDayOfWeek;
  prototype.weekday = function getSetLocaleDayOfWeek(arg0) {
    const self = this;
    if (this.isValid()) {
      const sum = self.day() + 7;
      const result = (sum - self.localeData()._week.dow) % 7;
      let addResult = result;
      if (null != arg0) {
        addResult = self.add(arg0 - result, "d");
      }
      return addResult;
    } else {
      let _NaN = self;
      if (null == arg0) {
        _NaN = NaN;
      }
      return _NaN;
    }
  };
  prototype.isoWeekday = function getSetISODayOfWeek(arg0) {
    const self = this;
    if (this.isValid()) {
      if (null != arg0) {
        if ("string" === typeof arg0) {
          let tmp4 = localeDataResult.weekdaysParse(arg0) % 7 || 7;
          const tmp5 = localeDataResult.weekdaysParse(arg0) % 7 || 7;
        } else {
          const _isNaN = isNaN;
          tmp4 = null;
          if (!isNaN(arg0)) {
            tmp4 = arg0;
          }
        }
        let diff = tmp4;
        if (!(self.day() % 7)) {
          diff = tmp4 - 7;
        }
        return self.day(diff);
      } else {
        return self.day() || 7;
      }
    } else {
      let _NaN = self;
      if (null == arg0) {
        _NaN = NaN;
      }
      return _NaN;
    }
  };
  prototype.dayOfYear = function getSetDayOfYear(arg0) {
    const self = this;
    const cloneResult = this.clone();
    const startOfResult = this.clone().startOf("day");
    const sum = Math.round((startOfResult - this.clone().startOf("year")) / 86400000) + 1;
    let addResult = sum;
    if (null != arg0) {
      addResult = self.add(arg0 - sum, "d");
    }
    return addResult;
  };
  prototype.hours = addRegexTokenResult29;
  prototype.hour = addRegexTokenResult29;
  prototype.minutes = addRegexTokenResult29;
  prototype.minute = addRegexTokenResult29;
  prototype.seconds = addRegexTokenResult29;
  prototype.second = addRegexTokenResult29;
  prototype.milliseconds = addRegexTokenResult29;
  prototype.millisecond = addRegexTokenResult29;
  prototype.utcOffset = function getSetOffset(_i) {
    const self = this;
    const tmp = this._offset || 0;
    if (self.isValid()) {
      if (null != _i) {
        if ("string" === typeof _i) {
          let result = offsetFromString(tmp13, _i);
          if (null === result) {
            return self;
          }
        } else {
          const _Math = Math;
          let tmp6 = Math.abs(_i) < 16;
          if (tmp6) {
            tmp6 = !arg2;
          }
          result = _i;
          if (tmp6) {
            result = _i * 60;
          }
        }
        let tmp12;
        if (tmp11) {
          tmp12 = getDateOffset(self);
        }
        self._offset = result;
        self._isUTC = true;
        if (null != tmp12) {
          self.add(tmp12, "m");
        }
        if (tmp !== result) {
          if (arg1) {
            if (!self._changeInProgress) {
              if (!self._changeInProgress) {
                self._changeInProgress = true;
                hooks.updateOffset(self, true);
                self._changeInProgress = null;
              }
            }
          }
          addSubtract(self, createDuration(result - tmp, "m"), 1, false);
        }
        return self;
      } else {
        let tmp3 = tmp;
        if (!self._isUTC) {
          tmp3 = getDateOffset(self);
        }
        return tmp3;
      }
    } else {
      let _NaN = self;
      if (null == _i) {
        _NaN = NaN;
      }
      return _NaN;
    }
  };
  prototype.utc = function setOffsetToUTC(arg0) {
    return this.utcOffset(0, arg0);
  };
  prototype.local = function setOffsetToLocal(arg0) {
    const self = this;
    if (this._isUTC) {
      self.utcOffset(0, arg0);
      self._isUTC = false;
      if (arg0) {
        self.subtract(getDateOffset(self), "m");
      }
    }
    return self;
  };
  prototype.parseZone = function setOffsetToParsedOffset() {
    const self = this;
    if (null != this._tzm) {
      self.utcOffset(self._tzm, false, true);
    } else if ("string" === typeof self._i) {
      const tmp3 = offsetFromString(closure_13, self._i);
      if (null != tmp3) {
        self.utcOffset(tmp3);
      } else {
        self.utcOffset(0, true);
      }
    }
    return self;
  };
  prototype.hasAlignedHourOffset = function hasAlignedHourOffset(_d) {
    const self = this;
    const tmp = !this.isValid();
    let tmp2 = !tmp;
    if (!tmp) {
      let num2 = 0;
      if (_d) {
        num2 = createLocal(_d).utcOffset();
        const obj = createLocal(_d);
      }
      tmp2 = (self.utcOffset() - num2) % 60 === 0;
    }
    return tmp2;
  };
  prototype.isDST = function isDaylightSavingTime() {
    const self = this;
    const utcOffsetResult = this.utcOffset();
    const cloneResult = this.clone();
    let tmp2 = utcOffsetResult > this.clone().month(0).utcOffset();
    if (!tmp2) {
      const utcOffsetResult1 = self.utcOffset();
      const cloneResult1 = self.clone();
      tmp2 = utcOffsetResult1 > self.clone().month(5).utcOffset();
      const monthResult1 = self.clone().month(5);
    }
    return tmp2;
  };
  prototype.isLocal = function isLocal() {
    const tmp = !this.isValid();
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = !this._isUTC;
    }
    return tmp2;
  };
  prototype.isUtcOffset = function isUtcOffset() {
    const tmp = !this.isValid();
    let _isUTC = !tmp;
    if (!tmp) {
      _isUTC = this._isUTC;
    }
    return _isUTC;
  };
  prototype.isUtc = isUtc;
  prototype.isUTC = isUtc;
  prototype.zoneAbbr = function getZoneAbbr() {
    let str = "";
    if (this._isUTC) {
      str = "UTC";
    }
    return str;
  };
  prototype.zoneName = function getZoneName() {
    let str = "";
    if (this._isUTC) {
      str = "Coordinated Universal Time";
    }
    return str;
  };
  prototype.dates = deprecate("dates accessor is deprecated. Use date instead.", addRegexTokenResult29);
  prototype.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
  prototype.years = deprecate("years accessor is deprecated. Use year instead", getSet);
  prototype.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function getSetZone(arg0, arg1) {
    const self = this;
    if (null != arg0) {
      let tmp2 = arg0;
      if ("string" !== typeof arg0) {
        tmp2 = -arg0;
      }
      self.utcOffset(tmp2, arg1);
      let tmp = self;
    } else {
      tmp = -self.utcOffset();
    }
    return tmp;
  });
  prototype.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function isDaylightSavingTimeShifted() {
    const self = this;
    if (isUndefined(this._isDSTShifted)) {
      const obj = {};
      copyConfig(obj, self);
      const tmp4 = prepareConfig(obj);
      if (tmp4._a) {
        if (tmp4._isUTC) {
          let obj2 = createUTC(tmp4._a);
        } else {
          obj2 = createLocal(tmp4._a);
        }
        let isValidResult = self.isValid();
        if (isValidResult) {
          isValidResult = compareArrays(tmp4._a, obj2.toArray()) > 0;
        }
        self._isDSTShifted = isValidResult;
      } else {
        self._isDSTShifted = false;
      }
      return self._isDSTShifted;
    } else {
      return self._isDSTShifted;
    }
  });
  const prototype2 = Locale.prototype;
  prototype2.calendar = function calendar(arg0, arg1, arg2) {
    const obj = this._calendar[arg0] || this._calendar.sameElse;
    let callResult = obj;
    if (isFunction(obj)) {
      callResult = obj.call(arg1, arg2);
    }
    return callResult;
  };
  prototype2.longDateFormat = function longDateFormat(arg0) {
    const self = this;
    const tmp = this._longDateFormat[arg0];
    const str = this._longDateFormat[arg0.toUpperCase(arg0)];
    let tmp2 = tmp;
    if (!tmp) {
      tmp2 = tmp;
      if (str) {
        self._longDateFormat[arg0] = str.replace(/MMMM|MM|DD|dddd/g, (arr) => arr.slice(1));
        tmp2 = self._longDateFormat[arg0];
      }
    }
    return tmp2;
  };
  prototype2.invalidDate = function invalidDate() {
    return this._invalidDate;
  };
  prototype2.ordinal = function ordinal(arg0) {
    return this._ordinal.replace("%d", arg0);
  };
  prototype2.preparse = preParsePostFormat;
  prototype2.postformat = preParsePostFormat;
  prototype2.relativeTime = function relativeTime(arg0, arg1, arg2, arg3) {
    const str = this._relativeTime[arg2];
    if (isFunction(str)) {
      let strResult = str(arg0, arg1, arg2, arg3);
    } else {
      strResult = str.replace(/%d/i, arg0);
    }
    return strResult;
  };
  prototype2.pastFuture = function pastFuture(arg0, applyResult) {
    let str = "past";
    if (arg0 > 0) {
      str = "future";
    }
    const str2 = this._relativeTime[str];
    if (isFunction(str2)) {
      let str2Result = str2(applyResult);
    } else {
      str2Result = str2.replace(/%s/i, applyResult);
    }
    return str2Result;
  };
  prototype2.set = function set(obj) {
    const self = this;
    for (const key10006 in arg0) {
      let tmp3 = key10006;
      let tmp4 = closure_76;
      let tmp5 = arg0[key10006];
      if (closure_76(tmp5)) {
        self[key10006] = tmp5;
        // continue
      } else {
        self["_" + key10006] = tmp5;
        // continue
      }
      continue;
    }
    self._config = obj;
    const regExp = new RegExp((self._dayOfMonthOrdinalParse.source || self._ordinalParse.source) + "|" + /\d{1,2}/.source);
    self._dayOfMonthOrdinalParseLenient = regExp;
  };
  prototype2.months = function localeMonths(arg0, arg1) {
    const tmp = isArray(this._months);
    const _months = this._months;
    if (arg0) {
      if (tmp) {
        let tmp3 = _months[arg0.month(arg0)];
      } else {
        let str = "standalone";
        if (obj.test(arg1)) {
          str = "format";
        }
        tmp3 = _months[str][arg0.month(arg0)];
        const obj = this._months.isFormat || closure_27;
      }
    } else {
      return tmp ? _months : _months.standalone;
    }
  };
  prototype2.monthsShort = function localeMonthsShort(arg0, arg1) {
    const tmp = isArray(this._monthsShort);
    const _monthsShort = this._monthsShort;
    if (arg0) {
      if (tmp) {
        let tmp4 = _monthsShort[arg0.month(arg0)];
      } else {
        let str = "standalone";
        if (regex2.test(arg1)) {
          str = "format";
        }
        tmp4 = _monthsShort[str][arg0.month(arg0)];
      }
    } else {
      return tmp ? _monthsShort : _monthsShort.standalone;
    }
  };
  prototype2.monthsParse = function localeMonthsParse(arg0, arg1, arg2) {
    const self = this;
    if (this._monthsParseExact) {
      return handleStrictParse.call(self, arg0, arg1, arg2);
    } else {
      let num = 0;
      if (!self._monthsParse) {
        self._monthsParse = [];
        self._longMonthsParse = [];
        self._shortMonthsParse = [];
        num = 0;
      }
      while (true) {
        let tmp = createUTC;
        let items = ["x", num];
        let tmp2 = createUTC(items);
        let tmp3 = num;
        let tmp4 = arg2;
        if (arg2) {
          tmp4 = !self._longMonthsParse[num];
        }
        if (tmp4) {
          let tmp5 = globalThis;
          let _RegExp = RegExp;
          let str = "";
          let str2 = self.months(tmp2, "");
          let str3 = ".";
          let str4 = "^";
          let tmp6 = new.target;
          let str5 = "$";
          let str6 = "i";
          let tmp7 = new.target;
          let str7 = "i";
          let regExp = new RegExp("^" + str2.replace(".", "") + "$", "i");
          let tmp9 = regExp;
          self._longMonthsParse[num] = regExp;
          let _RegExp2 = RegExp;
          let str8 = self.monthsShort(tmp2, "");
          let tmp10 = new.target;
          let tmp11 = new.target;
          let str9 = "i";
          let regExp1 = new RegExp("^" + str8.replace(".", "") + "$", "i");
          let tmp13 = regExp1;
          self._shortMonthsParse[num] = regExp1;
        }
        let tmp14 = arg2;
        if (!arg2) {
          tmp14 = self._monthsParse[num];
        }
        if (!tmp14) {
          let str10 = "";
          let str11 = "^";
          let text = `^${self.months(tmp2, "")}`;
          let str12 = "|^";
          let str13 = `${`^${self.months(tmp2, "")}`}|^${self.monthsShort(tmp2, "")}`;
          let tmp16 = globalThis;
          let _RegExp3 = RegExp;
          let str14 = ".";
          let tmp17 = new.target;
          let str15 = "i";
          let tmp18 = new.target;
          let regExp2 = new RegExp(str13.replace(".", ""), "i");
          let tmp20 = regExp2;
          self._monthsParse[num] = regExp2;
        }
        if (arg2) {
          let str16 = "MMMM";
          if ("MMMM" === arg1) {
            let obj = self._longMonthsParse[num];
            if (obj.test(arg0)) {
              break;
            }
          }
        }
        if (arg2) {
          let str17 = "MMM";
          if ("MMM" === arg1) {
            let obj2 = self._shortMonthsParse[num];
            if (obj2.test(arg0)) {
              return num;
            }
          }
        }
        if (!arg2) {
          let obj3 = self._monthsParse[num];
          if (obj3.test(arg0)) {
            return num;
          }
        }
        num = num + 1;
        let num2 = 12;
      }
      return num;
    }
  };
  prototype2.monthsRegex = function monthsRegex(arg0) {
    const self = this;
    const tmp = hasOwnProp(this, "_monthsRegex");
    if (this._monthsParseExact) {
      if (!tmp) {
        computeMonthsParse.call(self);
      }
    } else {
      if (!tmp) {
        self._monthsRegex = tmp14;
      }
      if (self._monthsStrictRegex) {
        if (arg0) {
          let _monthsRegex = self._monthsStrictRegex;
        }
        return _monthsRegex;
      }
      _monthsRegex = self._monthsRegex;
    }
  };
  prototype2.monthsShortRegex = function monthsShortRegex(arg0) {
    const self = this;
    if (this._monthsParseExact) {
      if (!tmp(self, "_monthsRegex")) {
        computeMonthsParse.call(self);
      }
    } else {
      if (!tmp(self, "_monthsShortRegex")) {
        self._monthsShortRegex = tmp14;
      }
      if (self._monthsShortStrictRegex) {
        if (arg0) {
          let _monthsShortRegex = self._monthsShortStrictRegex;
        }
        return _monthsShortRegex;
      }
      _monthsShortRegex = self._monthsShortRegex;
    }
  };
  prototype2.week = function localeWeek(local) {
    return weekOfYear(local, this._week.dow, this._week.doy).week;
  };
  prototype2.firstDayOfYear = function localeFirstDayOfYear() {
    return this._week.doy;
  };
  prototype2.firstDayOfWeek = function localeFirstDayOfWeek() {
    return this._week.dow;
  };
  prototype2.weekdays = function localeWeekdays(arg0, arg1) {
    const tmp = isArray(this._weekdays);
    const _weekdays = this._weekdays;
    if (arg0) {
      if (tmp) {
        let tmp3 = _weekdays[arg0.day(arg0)];
      } else {
        const isFormat = this._weekdays.isFormat;
        let str = "standalone";
        if (isFormat.test(arg1)) {
          str = "format";
        }
        tmp3 = _weekdays[str][arg0.day(arg0)];
      }
    } else {
      return tmp ? _weekdays : _weekdays.standalone;
    }
  };
  prototype2.weekdaysMin = function localeWeekdaysMin(arg0) {
    const _weekdaysMin = this._weekdaysMin;
    if (arg0) {
      let tmp = _weekdaysMin[arg0.day(arg0)];
    } else {
      tmp = _weekdaysMin;
    }
    return tmp;
  };
  prototype2.weekdaysShort = function localeWeekdaysShort(arg0) {
    const _weekdaysShort = this._weekdaysShort;
    if (arg0) {
      let tmp = _weekdaysShort[arg0.day(arg0)];
    } else {
      tmp = _weekdaysShort;
    }
    return tmp;
  };
  prototype2.weekdaysParse = function localeWeekdaysParse(arg0, arg1, arg2) {
    const self = this;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(self, arg0, arg1, arg2);
    } else {
      let num = 0;
      if (!self._weekdaysParse) {
        self._weekdaysParse = [];
        self._minWeekdaysParse = [];
        self._shortWeekdaysParse = [];
        self._fullWeekdaysParse = [];
        num = 0;
      }
      while (true) {
        let tmp = createUTC;
        let obj = createUTC([]);
        let dayResult = obj.day(num);
        let tmp3 = num;
        let tmp4 = arg2;
        if (arg2) {
          tmp4 = !self._fullWeekdaysParse[num];
        }
        if (tmp4) {
          let tmp5 = globalThis;
          let _RegExp = RegExp;
          let str = "";
          let str2 = self.weekdays(dayResult, "");
          let str3 = ".";
          let str4 = "\\.?";
          let str5 = "^";
          let tmp6 = new.target;
          let str6 = "$";
          let str7 = "i";
          let tmp7 = new.target;
          let str8 = "i";
          let regExp = new RegExp("^" + str2.replace(".", "\\.?") + "$", "i");
          let tmp9 = regExp;
          self._fullWeekdaysParse[num] = regExp;
          let _RegExp2 = RegExp;
          let str9 = self.weekdaysShort(dayResult, "");
          let tmp10 = new.target;
          let tmp11 = new.target;
          let str10 = "i";
          let regExp1 = new RegExp("^" + str9.replace(".", "\\.?") + "$", "i");
          let tmp13 = regExp1;
          self._shortWeekdaysParse[num] = regExp1;
          let _RegExp3 = RegExp;
          let str11 = self.weekdaysMin(dayResult, "");
          let tmp14 = new.target;
          let tmp15 = new.target;
          let str12 = "i";
          let regExp2 = new RegExp("^" + str11.replace(".", "\\.?") + "$", "i");
          let tmp17 = regExp2;
          self._minWeekdaysParse[num] = regExp2;
        }
        if (!self._weekdaysParse[num]) {
          let str13 = "";
          let str14 = "^";
          let text = `^${self.weekdays(tmp2, "")}`;
          let str15 = "|^";
          let text1 = `${`^${self.weekdays(tmp2, "")}`}|^${self.weekdaysShort(tmp2, "")}`;
          let str16 = `${tmp19}|^${self.weekdaysMin(tmp2, "")}`;
          let tmp20 = globalThis;
          let _RegExp4 = RegExp;
          let str17 = ".";
          let tmp21 = new.target;
          let str18 = "i";
          let tmp22 = new.target;
          let regExp3 = new RegExp(str16.replace(".", ""), "i");
          let tmp24 = regExp3;
          self._weekdaysParse[num] = regExp3;
        }
        if (arg2) {
          let str19 = "dddd";
          if ("dddd" === arg1) {
            let obj2 = self._fullWeekdaysParse[num];
            if (obj2.test(arg0)) {
              break;
            }
          }
        }
        if (arg2) {
          let str20 = "ddd";
          if ("ddd" === arg1) {
            let obj3 = self._shortWeekdaysParse[num];
            if (obj3.test(arg0)) {
              return num;
            }
          }
        }
        if (arg2) {
          let str21 = "dd";
          if ("dd" === arg1) {
            let obj4 = self._minWeekdaysParse[num];
            if (obj4.test(arg0)) {
              return num;
            }
          }
        }
        if (!arg2) {
          let obj5 = self._weekdaysParse[num];
          if (obj5.test(arg0)) {
            return num;
          }
        }
        num = num + 1;
        let num2 = 7;
      }
      return num;
    }
  };
  prototype2.weekdaysRegex = function weekdaysRegex(arg0) {
    const self = this;
    const tmp = hasOwnProp(this, "_weekdaysRegex");
    if (this._weekdaysParseExact) {
      if (!tmp) {
        computeWeekdaysParse.call(self);
      }
    } else {
      if (!tmp) {
        self._weekdaysRegex = tmp14;
      }
      if (self._weekdaysStrictRegex) {
        if (arg0) {
          let _weekdaysRegex = self._weekdaysStrictRegex;
        }
        return _weekdaysRegex;
      }
      _weekdaysRegex = self._weekdaysRegex;
    }
  };
  prototype2.weekdaysShortRegex = function weekdaysShortRegex(arg0) {
    const self = this;
    if (this._weekdaysParseExact) {
      if (!tmp(self, "_weekdaysRegex")) {
        computeWeekdaysParse.call(self);
      }
    } else {
      if (!tmp(self, "_weekdaysShortRegex")) {
        self._weekdaysShortRegex = tmp14;
      }
      if (self._weekdaysShortStrictRegex) {
        if (arg0) {
          let _weekdaysShortRegex = self._weekdaysShortStrictRegex;
        }
        return _weekdaysShortRegex;
      }
      _weekdaysShortRegex = self._weekdaysShortRegex;
    }
  };
  prototype2.weekdaysMinRegex = function weekdaysMinRegex(arg0) {
    const self = this;
    if (this._weekdaysParseExact) {
      if (!tmp(self, "_weekdaysRegex")) {
        computeWeekdaysParse.call(self);
      }
    } else {
      if (!tmp(self, "_weekdaysMinRegex")) {
        self._weekdaysMinRegex = tmp14;
      }
      if (self._weekdaysMinStrictRegex) {
        if (arg0) {
          let _weekdaysMinRegex = self._weekdaysMinStrictRegex;
        }
        return _weekdaysMinRegex;
      }
      _weekdaysMinRegex = self._weekdaysMinRegex;
    }
  };
  prototype2.isPM = function localeIsPM(arg0) {
    return "p" === `${arg0}`.toLowerCase().charAt(0);
  };
  prototype2.meridiem = function localeMeridiem(arg0, arg1, arg2) {
    if (arg0 > 11) {
      let str2 = "PM";
      if (arg2) {
        str2 = "pm";
      }
      let str = str2;
    } else {
      str = "AM";
      if (arg2) {
        str = "am";
      }
    }
    return str;
  };
  obj = {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal(arg0) {
      const result = arg0 % 10;
      let str = "th";
      let str2 = "th";
      if (1 !== toInt(arg0 % 100 / 10)) {
        let str3 = "st";
        if (1 !== result) {
          let str4 = "nd";
          if (2 !== result) {
            if (3 === result) {
              str = "rd";
            }
            str4 = str;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return arg0 + str2;
    }
  };
  addRegexTokenResult29 = getSetGlobalLocale("en", obj);
  hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
  hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
  addRegexTokenResult29 = makeAs("ms");
  addRegexTokenResult29 = makeAs("s");
  addRegexTokenResult29 = makeAs("m");
  addRegexTokenResult29 = makeAs("h");
  addRegexTokenResult29 = makeAs("d");
  addRegexTokenResult29 = makeAs("w");
  addRegexTokenResult29 = makeAs("M");
  addRegexTokenResult29 = makeAs("y");
  addRegexTokenResult29 = makeGetter("milliseconds");
  addRegexTokenResult29 = makeGetter("seconds");
  addRegexTokenResult29 = makeGetter("minutes");
  addRegexTokenResult29 = makeGetter("hours");
  addRegexTokenResult29 = makeGetter("days");
  addRegexTokenResult29 = makeGetter("months");
  let closure_53 = {};
  abs = Math.abs;
  const prototype3 = Duration.prototype;
  prototype3.isValid = function isValid$1() {
    return this._isValid;
  };
  prototype3.abs = function abs() {
    const _data = this._data;
    this._milliseconds = abs(this._milliseconds);
    this._days = abs(this._days);
    this._months = abs(this._months);
    _data.milliseconds = abs(_data.milliseconds);
    _data.seconds = abs(_data.seconds);
    _data.minutes = abs(_data.minutes);
    _data.hours = abs(_data.hours);
    _data.months = abs(_data.months);
    _data.years = abs(_data.years);
    return this;
  };
  prototype3.add = function add$1(self, m) {
    return addSubtract$1(this, self, m, 1);
  };
  prototype3.subtract = function subtract$1(self, m) {
    return addSubtract$1(this, self, m, -1);
  };
  prototype3.as = function as(tmp3Result) {
    const self = this;
    if (this.isValid()) {
      const _milliseconds = self._milliseconds;
      const tmp4 = normalizeUnits(tmp3Result);
      if ("month" !== tmp4) {
        if ("year" !== tmp4) {
          const _Math2 = Math;
          const sum = self._days + Math.round(monthsToDays(self._months));
          if ("week" === tmp4) {
            return sum / 7 + _milliseconds / 604800000;
          } else if ("day" === tmp4) {
            return sum + _milliseconds / 86400000;
          } else if ("hour" === tmp4) {
            return 24 * sum + _milliseconds / 3600000;
          } else if ("minute" === tmp4) {
            return 1440 * sum + _milliseconds / 60000;
          } else if ("second" === tmp4) {
            return 86400 * sum + _milliseconds / 1000;
          } else if ("millisecond" === tmp4) {
            const _Math = Math;
            return Math.floor(86400000 * sum) + _milliseconds;
          } else {
            const _Error = Error;
            const error = new Error("Unknown unit " + tmp4);
            throw error;
          }
        }
      }
      const sum1 = self._months + daysToMonths(self._days + _milliseconds / 86400000);
      let result = sum1;
      if ("month" !== tmp4) {
        result = sum1 / 12;
      }
      return result;
    } else {
      const _NaN = NaN;
      return NaN;
    }
  };
  prototype3.asMilliseconds = addRegexTokenResult29;
  prototype3.asSeconds = addRegexTokenResult29;
  prototype3.asMinutes = addRegexTokenResult29;
  prototype3.asHours = addRegexTokenResult29;
  prototype3.asDays = addRegexTokenResult29;
  prototype3.asWeeks = addRegexTokenResult29;
  prototype3.asMonths = addRegexTokenResult29;
  prototype3.asYears = addRegexTokenResult29;
  prototype3.valueOf = function valueOf$1() {
    const self = this;
    if (this.isValid()) {
      const sum = self._milliseconds + 86400000 * self._days;
      const result = self._months % 12;
      let _NaN = sum + result * 2592000000 + 31536000000 * toInt(self._months / 12);
    } else {
      _NaN = NaN;
    }
    return _NaN;
  };
  prototype3._bubble = function bubble() {
    let _data;
    let _days;
    let _milliseconds;
    let _months;
    ({ _milliseconds, _days, _months, _data } = this);
    let tmp = _milliseconds >= 0;
    if (tmp) {
      tmp = _days >= 0;
    }
    if (tmp) {
      tmp = _months >= 0;
    }
    if (!tmp) {
      tmp = _milliseconds <= 0 && _days <= 0 && _months <= 0;
      const tmp2 = _milliseconds <= 0 && _days <= 0 && _months <= 0;
    }
    let sum = _milliseconds;
    let num = _days;
    let num2 = _months;
    if (!tmp) {
      sum = _milliseconds + 86400000 * absCeil(monthsToDays(_months) + _days);
      num = 0;
      num2 = 0;
    }
    _data.milliseconds = sum % 1000;
    const tmp6 = absFloor(sum / 1000);
    _data.seconds = tmp6 % 60;
    const tmp7 = absFloor(tmp6 / 60);
    _data.minutes = tmp7 % 60;
    const tmp8 = absFloor(tmp7 / 60);
    _data.hours = tmp8 % 24;
    const sum1 = num + absFloor(tmp8 / 24);
    const tmp10 = absFloor(daysToMonths(sum1));
    const sum2 = num2 + tmp10;
    const diff = sum1 - absCeil(monthsToDays(tmp10));
    _data.days = diff;
    _data.months = sum2 % 12;
    _data.years = absFloor(sum2 / 12);
    return this;
  };
  prototype3.clone = function clone$1() {
    return createDuration(this);
  };
  prototype3.get = function get$2(tmp3Result) {
    const self = this;
    if (this.isValid()) {
      let _NaN = self[tmp + "s"]();
    } else {
      _NaN = NaN;
    }
    return _NaN;
  };
  prototype3.milliseconds = addRegexTokenResult29;
  prototype3.seconds = addRegexTokenResult29;
  prototype3.minutes = addRegexTokenResult29;
  prototype3.hours = addRegexTokenResult29;
  prototype3.days = addRegexTokenResult29;
  prototype3.weeks = function weeks() {
    return absFloor(this.days() / 7);
  };
  prototype3.months = addRegexTokenResult29;
  prototype3.years = makeGetter("years");
  prototype3.humanize = function humanize(arg0) {
    const self = this;
    const localeDataResult = this.localeData();
    if (isValidResult) {
      const absResult = createDuration(self).abs();
      const tmp5 = round(absResult.as("s"));
      const tmp7 = round(absResult.as("m"));
      const tmp9 = round(absResult.as("h"));
      const tmp11 = round(absResult.as("d"));
      const tmp13 = round(absResult.as("M"));
      const tmp15 = round(absResult.as("y"));
      let tmp17 = tmp5 <= closure_53.ss;
      if (tmp17) {
        const items = [1107296710, tmp5];
        tmp17 = items;
      }
      if (!tmp17) {
        let tmp19 = tmp5 < closure_53.s;
        if (tmp19) {
          const items1 = [null, tmp5];
          tmp19 = items1;
        }
        tmp17 = tmp19;
      }
      if (!tmp17) {
        tmp17 = tmp7 <= 1 && [];
        const tmp20 = tmp7 <= 1 && [];
      }
      if (!tmp17) {
        let tmp22 = tmp7 < closure_53.m;
        if (tmp22) {
          const items2 = ["<string:2763915265>", tmp7];
          tmp22 = items2;
        }
        tmp17 = tmp22;
      }
      if (!tmp17) {
        tmp17 = tmp9 <= 1 && [];
        const tmp23 = tmp9 <= 1 && [];
      }
      if (!tmp17) {
        let tmp25 = tmp9 < closure_53.h;
        if (tmp25) {
          const items3 = [true, tmp9];
          tmp25 = items3;
        }
        tmp17 = tmp25;
      }
      if (!tmp17) {
        tmp17 = tmp11 <= 1 && [-1016070142];
        const tmp26 = tmp11 <= 1 && [-1016070142];
      }
      if (!tmp17) {
        let tmp28 = tmp11 < closure_53.d;
        if (tmp28) {
          const items4 = [null, tmp11];
          tmp28 = items4;
        }
        tmp17 = tmp28;
      }
      if (!tmp17) {
        tmp17 = tmp13 <= 1 && [];
        const tmp29 = tmp13 <= 1 && [];
      }
      if (!tmp17) {
        let tmp31 = tmp13 < closure_53.M;
        if (tmp31) {
          const items5 = [, tmp13];
          tmp31 = items5;
        }
        tmp17 = tmp31;
      }
      if (!tmp17) {
        tmp17 = tmp15 <= 1 && [];
        const tmp32 = tmp15 <= 1 && [];
      }
      if (!tmp17) {
        const items6 = [, tmp15];
        tmp17 = items6;
      }
      tmp17[2] = !arg0;
      tmp17[3] = +self > 0;
      tmp17[4] = localeDataResult;
      const applyResult = substituteTimeAgo.apply(null, tmp17);
      let pastFutureResult = applyResult;
      if (arg0) {
        pastFutureResult = localeDataResult.pastFuture(+self, applyResult);
      }
      return localeDataResult.postformat(pastFutureResult);
    } else {
      return localeDataResult.invalidDate();
    }
    const isValidResult = this.isValid();
  };
  prototype3.toISOString = toISOString$1;
  prototype3.toString = toISOString$1;
  prototype3.toJSON = toISOString$1;
  prototype3.locale = locale;
  prototype3.localeData = localeData;
  prototype3.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
  prototype3.lang = addRegexTokenResult29;
  addRegexTokenResult29 = addFormatToken("X", 0, 0, "unix");
  addRegexTokenResult29 = addFormatToken("x", 0, 0, "valueOf");
  addRegexTokenResult29 = addRegexToken("x", tmp12);
  addRegexTokenResult29 = addRegexToken("X", /[+-]?\d+(\.\d{1,3})?/);
  addRegexTokenResult29 = addParseToken("X", (arg0, arg1, arg2) => {
    arg2._d = new Date(1000 * parseFloat(arg0, 10));
  });
  addRegexTokenResult29 = addParseToken("x", (arg0, arg1, arg2) => {
    arg2._d = new Date(toInt(arg0));
  });
  hooks.version = "2.22.2";
  const require = createLocal;
  hooks.fn = prototype;
  hooks.utc = createUTC;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.defineLocale = defineLocale;
  hooks.normalizeUnits = normalizeUnits;
  hooks.prototype = prototype;
  hooks.HTML5_FMT = {};
  return hooks;
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(fn);
  }
}
this.moment = fn();
