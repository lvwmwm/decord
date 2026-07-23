// Module ID: 3443
// Function ID: 26718
// Name: formatTimezoneShort
// Dependencies: [3444, 3445, 3448, 3449, 3451, 3452, 3453]

// Module 3443 (formatTimezoneShort)
import getUTCDayOfYear from "getUTCDayOfYear";
import getUTCISOWeek from "getUTCISOWeek";
import getUTCISOWeekYear from "getUTCISOWeekYear";
import getUTCWeek from "getUTCWeek";
import getUTCWeekYear from "getUTCWeekYear";
import addLeadingZeros from "addLeadingZeros";
import closure_6 from "M";

function formatTimezoneShort(timezoneOffset, arg1) {
  let str = "+";
  if (timezoneOffset > 0) {
    str = "-";
  }
  const absolute = Math.abs(timezoneOffset);
  const rounded = Math.floor(absolute / 60);
  const result = absolute % 60;
  if (0 === result) {
    const _String2 = String;
    return str + String(rounded);
  } else {
    const _String = String;
    const sum = str + String(rounded);
    return sum + ":" + addLeadingZeros.default(result, 2);
  }
}
function formatTimezoneWithOptionalMinutes(timezoneOffset) {
  if (timezoneOffset % 60 === 0) {
    let str = "+";
    if (timezoneOffset > 0) {
      str = "-";
    }
    const _Math = Math;
    let sum = str + addLeadingZeros.default(Math.abs(timezoneOffset) / 60, 2);
  } else {
    sum = formatTimezone(timezoneOffset, undefined);
  }
  return sum;
}
function formatTimezone(timezoneOffset, arg1) {
  let str = arg1;
  if (!arg1) {
    str = "";
  }
  let str2 = "+";
  if (timezoneOffset > 0) {
    str2 = "-";
  }
  const absolute = Math.abs(timezoneOffset);
  const sum = str2 + addLeadingZeros.default(Math.floor(absolute / 60), 2) + str;
  return sum + addLeadingZeros.default(absolute % 60, 2);
}

export default {
  G(getUTCFullYear, arg1, era) {
    let num = 0;
    if (getUTCFullYear.getUTCFullYear() > 0) {
      num = 1;
    }
    if ("G" !== arg1) {
      if ("GG" !== arg1) {
        if ("GGG" !== arg1) {
          if ("GGGGG" === arg1) {
            let obj = { width: "narrow" };
            return era.era(num, obj);
          } else {
            obj = { width: "wide" };
            return era.era(num, obj);
          }
        }
      }
    }
    return era.era(num, { width: "abbreviated" });
  },
  y(getUTCFullYear, arg1, ordinalNumber) {
    if ("yo" === arg1) {
      const uTCFullYear = getUTCFullYear.getUTCFullYear();
      let diff = uTCFullYear;
      if (uTCFullYear <= 0) {
        diff = 1 - uTCFullYear;
      }
      const obj = { unit: "year" };
      return ordinalNumber.ordinalNumber(diff, obj);
    } else {
      return mod.default.y(getUTCFullYear, arg1);
    }
  },
  Y(defaultResult1, arg1, ordinalNumber, defaultResult2) {
    const defaultResult = getUTCWeekYear.default(defaultResult1, defaultResult2);
    let diff = defaultResult;
    if (defaultResult <= 0) {
      diff = 1 - defaultResult;
    }
    if ("YY" === arg1) {
      return addLeadingZeros.default(diff % 100, 2);
    } else {
      if ("Yo" === arg1) {
        const obj = { unit: "year" };
        let ordinalNumberResult = ordinalNumber.ordinalNumber(diff, obj);
      } else {
        ordinalNumberResult = addLeadingZeros.default(diff, arg1.length);
      }
      return ordinalNumberResult;
    }
  },
  R(defaultResult1) {
    return addLeadingZeros.default(getUTCISOWeekYear.default(defaultResult1), arg1.length);
  },
  u(getUTCFullYear) {
    return addLeadingZeros.default(getUTCFullYear.getUTCFullYear(), arg1.length);
  },
  Q(getUTCMonth, arg1, ordinalNumber) {
    const rounded = Math.ceil((getUTCMonth.getUTCMonth() + 1) / 3);
    if ("Q" === arg1) {
      const _String = String;
      return String(rounded);
    } else if ("QQ" === arg1) {
      return addLeadingZeros.default(rounded, 2);
    } else if ("Qo" === arg1) {
      const obj = { unit: "quarter" };
      return ordinalNumber.ordinalNumber(rounded, obj);
    } else if ("QQQ" === arg1) {
      return ordinalNumber.quarter(rounded, { width: "abbreviated", context: "formatting" });
    } else if ("QQQQQ" === arg1) {
      return ordinalNumber.quarter(rounded, { width: "narrow", context: "formatting" });
    } else {
      return ordinalNumber.quarter(rounded, { width: "wide", context: "formatting" });
    }
  },
  q(getUTCMonth, arg1, ordinalNumber) {
    const rounded = Math.ceil((getUTCMonth.getUTCMonth() + 1) / 3);
    if ("q" === arg1) {
      const _String = String;
      return String(rounded);
    } else if ("qq" === arg1) {
      return addLeadingZeros.default(rounded, 2);
    } else if ("qo" === arg1) {
      const obj = { unit: "quarter" };
      return ordinalNumber.ordinalNumber(rounded, obj);
    } else if ("qqq" === arg1) {
      return ordinalNumber.quarter(rounded, { width: "abbreviated", context: "standalone" });
    } else if ("qqqqq" === arg1) {
      return ordinalNumber.quarter(rounded, { width: "narrow", context: "standalone" });
    } else {
      return ordinalNumber.quarter(rounded, { width: "wide", context: "standalone" });
    }
  },
  M(getUTCMonth, arg1, ordinalNumber) {
    const uTCMonth = getUTCMonth.getUTCMonth();
    if ("M" !== arg1) {
      if ("MM" !== arg1) {
        if ("Mo" === arg1) {
          const obj = { unit: "month" };
          return ordinalNumber.ordinalNumber(uTCMonth + 1, obj);
        } else if ("MMM" === arg1) {
          return ordinalNumber.month(uTCMonth, { width: "abbreviated", context: "formatting" });
        } else if ("MMMMM" === arg1) {
          return ordinalNumber.month(uTCMonth, { width: "narrow", context: "formatting" });
        } else {
          return ordinalNumber.month(uTCMonth, { width: "wide", context: "formatting" });
        }
      }
    }
    return mod.default.M(getUTCMonth, arg1);
  },
  L(getUTCMonth, arg1, ordinalNumber) {
    const uTCMonth = getUTCMonth.getUTCMonth();
    if ("L" === arg1) {
      const _String = String;
      return String(uTCMonth + 1);
    } else if ("LL" === arg1) {
      return addLeadingZeros.default(uTCMonth + 1, 2);
    } else if ("Lo" === arg1) {
      const obj = { unit: "month" };
      return ordinalNumber.ordinalNumber(uTCMonth + 1, obj);
    } else if ("LLL" === arg1) {
      return ordinalNumber.month(uTCMonth, { width: "abbreviated", context: "standalone" });
    } else if ("LLLLL" === arg1) {
      return ordinalNumber.month(uTCMonth, { width: "narrow", context: "standalone" });
    } else {
      return ordinalNumber.month(uTCMonth, { width: "wide", context: "standalone" });
    }
  },
  w(defaultResult1, arg1, ordinalNumber, defaultResult2) {
    const defaultResult = getUTCWeek.default(defaultResult1, defaultResult2);
    if ("wo" === arg1) {
      const obj = { unit: "week" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(defaultResult, obj);
    } else {
      ordinalNumberResult = addLeadingZeros.default(defaultResult, arg1.length);
    }
    return ordinalNumberResult;
  },
  I(defaultResult1, arg1, ordinalNumber) {
    const defaultResult = getUTCISOWeek.default(defaultResult1);
    if ("Io" === arg1) {
      const obj = { unit: "week" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(defaultResult, obj);
    } else {
      ordinalNumberResult = addLeadingZeros.default(defaultResult, arg1.length);
    }
    return ordinalNumberResult;
  },
  d(getUTCDate, arg1, ordinalNumber) {
    if ("do" === arg1) {
      const obj = { unit: "date" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(getUTCDate.getUTCDate(), obj);
    } else {
      ordinalNumberResult = mod.default.d(getUTCDate, arg1);
      const _default = mod.default;
    }
    return ordinalNumberResult;
  },
  D(defaultResult1, arg1, ordinalNumber) {
    const defaultResult = getUTCDayOfYear.default(defaultResult1);
    if ("Do" === arg1) {
      const obj = { unit: "dayOfYear" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(defaultResult, obj);
    } else {
      ordinalNumberResult = addLeadingZeros.default(defaultResult, arg1.length);
    }
    return ordinalNumberResult;
  },
  E(getUTCDay, arg1, day) {
    const uTCDay = getUTCDay.getUTCDay();
    if ("E" !== arg1) {
      if ("EE" !== arg1) {
        if ("EEE" !== arg1) {
          if ("EEEEE" === arg1) {
            return day.day(uTCDay, { width: "narrow", context: "formatting" });
          } else if ("EEEEEE" === arg1) {
            return day.day(uTCDay, { width: "short", context: "formatting" });
          } else {
            return day.day(uTCDay, { width: "wide", context: "formatting" });
          }
        }
      }
    }
    return day.day(uTCDay, { width: "abbreviated", context: "formatting" });
  },
  e(getUTCDay, arg1, ordinalNumber, weekStartsOn) {
    const uTCDay = getUTCDay.getUTCDay();
    const tmp2 = (uTCDay - weekStartsOn.weekStartsOn + 8) % 7 || 7;
    if ("e" === arg1) {
      const _String = String;
      return String(tmp2);
    } else if ("ee" === arg1) {
      return addLeadingZeros.default(tmp2, 2);
    } else if ("eo" === arg1) {
      const obj = { unit: "day" };
      return ordinalNumber.ordinalNumber(tmp2, obj);
    } else if ("eee" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "abbreviated", context: "formatting" });
    } else if ("eeeee" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "narrow", context: "formatting" });
    } else if ("eeeeee" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "short", context: "formatting" });
    } else {
      return ordinalNumber.day(uTCDay, { width: "wide", context: "formatting" });
    }
  },
  c(getUTCDay, arg1, ordinalNumber, weekStartsOn) {
    const uTCDay = getUTCDay.getUTCDay();
    const tmp2 = (uTCDay - weekStartsOn.weekStartsOn + 8) % 7 || 7;
    if ("c" === arg1) {
      const _String = String;
      return String(tmp2);
    } else if ("cc" === arg1) {
      return addLeadingZeros.default(tmp2, arg1.length);
    } else if ("co" === arg1) {
      const obj = { unit: "day" };
      return ordinalNumber.ordinalNumber(tmp2, obj);
    } else if ("ccc" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "abbreviated", context: "standalone" });
    } else if ("ccccc" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "narrow", context: "standalone" });
    } else if ("cccccc" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "short", context: "standalone" });
    } else {
      return ordinalNumber.day(uTCDay, { width: "wide", context: "standalone" });
    }
  },
  i(getUTCDay, arg1, ordinalNumber) {
    const uTCDay = getUTCDay.getUTCDay();
    let num = 7;
    if (0 !== uTCDay) {
      num = uTCDay;
    }
    if ("i" === arg1) {
      const _String = String;
      return String(num);
    } else if ("ii" === arg1) {
      return addLeadingZeros.default(num, arg1.length);
    } else if ("io" === arg1) {
      const obj = { unit: "day" };
      return ordinalNumber.ordinalNumber(num, obj);
    } else if ("iii" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "abbreviated", context: "formatting" });
    } else if ("iiiii" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "narrow", context: "formatting" });
    } else if ("iiiiii" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "short", context: "formatting" });
    } else {
      return ordinalNumber.day(uTCDay, { width: "wide", context: "formatting" });
    }
  },
  a(getUTCHours, arg1, dayPeriod) {
    let str = "am";
    if (getUTCHours.getUTCHours() / 12 >= 1) {
      str = "pm";
    }
    if ("a" !== arg1) {
      if ("aa" !== arg1) {
        if ("aaa" === arg1) {
          return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" }).toLowerCase();
        } else if ("aaaaa" === arg1) {
          return dayPeriod.dayPeriod(str, { width: "narrow", context: "formatting" });
        } else {
          return dayPeriod.dayPeriod(str, { width: "wide", context: "formatting" });
        }
      }
    }
    return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" });
  },
  b(getUTCHours, arg1, dayPeriod) {
    const uTCHours = getUTCHours.getUTCHours();
    let str = "noon";
    if (12 !== uTCHours) {
      let str2 = "midnight";
      if (0 !== uTCHours) {
        let str3 = "am";
        if (uTCHours / 12 >= 1) {
          str3 = "pm";
        }
        str2 = str3;
      }
      str = str2;
    }
    if ("b" !== arg1) {
      if ("bb" !== arg1) {
        if ("bbb" === arg1) {
          return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" }).toLowerCase();
        } else if ("bbbbb" === arg1) {
          return dayPeriod.dayPeriod(str, { width: "narrow", context: "formatting" });
        } else {
          return dayPeriod.dayPeriod(str, { width: "wide", context: "formatting" });
        }
      }
    }
    return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" });
  },
  B(getUTCHours, arg1, dayPeriod) {
    const uTCHours = getUTCHours.getUTCHours();
    let str = "evening";
    if (uTCHours < 17) {
      let str2 = "afternoon";
      if (uTCHours < 12) {
        let str3 = "night";
        if (uTCHours >= 4) {
          str3 = "morning";
        }
        str2 = str3;
      }
      str = str2;
    }
    if ("B" !== arg1) {
      if ("BB" !== arg1) {
        if ("BBB" !== arg1) {
          if ("BBBBB" === arg1) {
            return dayPeriod.dayPeriod(str, { width: "narrow", context: "formatting" });
          } else {
            return dayPeriod.dayPeriod(str, { width: "wide", context: "formatting" });
          }
        }
      }
    }
    return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" });
  },
  h(getUTCHours, arg1, ordinalNumber) {
    if ("ho" === arg1) {
      let num2 = getUTCHours.getUTCHours() % 12;
      if (0 === num2) {
        num2 = 12;
      }
      const obj = { unit: "hour" };
      return ordinalNumber.ordinalNumber(num2, obj);
    } else {
      return mod.default.h(getUTCHours, arg1);
    }
  },
  H(getUTCHours, arg1, ordinalNumber) {
    if ("Ho" === arg1) {
      const obj = { unit: "hour" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(getUTCHours.getUTCHours(), obj);
    } else {
      ordinalNumberResult = mod.default.H(getUTCHours, arg1);
      const _default = mod.default;
    }
    return ordinalNumberResult;
  },
  K(getUTCHours, arg1, ordinalNumber) {
    const result = getUTCHours.getUTCHours() % 12;
    if ("Ko" === arg1) {
      const obj = { unit: "hour" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(result, obj);
    } else {
      ordinalNumberResult = addLeadingZeros.default(result, arg1.length);
    }
    return ordinalNumberResult;
  },
  k(getUTCHours, arg1, ordinalNumber) {
    let num = getUTCHours.getUTCHours();
    if (0 === num) {
      num = 24;
    }
    if ("ko" === arg1) {
      const obj = { unit: "hour" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(num, obj);
    } else {
      ordinalNumberResult = addLeadingZeros.default(num, arg1.length);
    }
    return ordinalNumberResult;
  },
  m(getUTCMinutes, arg1, ordinalNumber) {
    if ("mo" === arg1) {
      const obj = { unit: "minute" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(getUTCMinutes.getUTCMinutes(), obj);
    } else {
      ordinalNumberResult = mod.default.m(getUTCMinutes, arg1);
      const _default = mod.default;
    }
    return ordinalNumberResult;
  },
  s(getUTCSeconds, arg1, ordinalNumber) {
    if ("so" === arg1) {
      const obj = { unit: "second" };
      let ordinalNumberResult = ordinalNumber.ordinalNumber(getUTCSeconds.getUTCSeconds(), obj);
    } else {
      ordinalNumberResult = mod.default.s(getUTCSeconds, arg1);
      const _default = mod.default;
    }
    return ordinalNumberResult;
  },
  S(arg0, arg1) {
    return mod.default.S(arg0, arg1);
  },
  X(arg0, arg1, arg2, _originalDate) {
    const timezoneOffset = _originalDate._originalDate || arg0.getTimezoneOffset();
    if (0 === timezoneOffset) {
      return "Z";
    } else if ("X" === arg1) {
      return formatTimezoneWithOptionalMinutes(timezoneOffset);
    } else {
      if ("XXXX" !== arg1) {
        if ("XX" !== arg1) {
          return formatTimezone(timezoneOffset, ":");
        }
      }
      return formatTimezone(timezoneOffset);
    }
    const obj = _originalDate._originalDate || arg0;
  },
  x(arg0, arg1, arg2, _originalDate) {
    const timezoneOffset = _originalDate._originalDate || arg0.getTimezoneOffset();
    if ("x" === arg1) {
      return formatTimezoneWithOptionalMinutes(timezoneOffset);
    } else {
      if ("xxxx" !== arg1) {
        if ("xx" !== arg1) {
          return formatTimezone(timezoneOffset, ":");
        }
      }
      return formatTimezone(timezoneOffset);
    }
    const obj = _originalDate._originalDate || arg0;
  },
  O(arg0, arg1, arg2, _originalDate) {
    const timezoneOffset = _originalDate._originalDate || arg0.getTimezoneOffset();
    if ("O" !== arg1) {
      if ("OO" !== arg1) {
        if ("OOO" !== arg1) {
          return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      }
    }
    return "GMT" + formatTimezoneShort(timezoneOffset, ":");
  },
  z(arg0, arg1, arg2, _originalDate) {
    const timezoneOffset = _originalDate._originalDate || arg0.getTimezoneOffset();
    if ("z" !== arg1) {
      if ("zz" !== arg1) {
        if ("zzz" !== arg1) {
          return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      }
    }
    return "GMT" + formatTimezoneShort(timezoneOffset, ":");
  },
  t(arg0, arg1, arg2, _originalDate) {
    return addLeadingZeros.default(Math.floor(_originalDate._originalDate || arg0.getTime() / 1000), arg1.length);
  },
  T(arg0, arg1, arg2, _originalDate) {
    return addLeadingZeros.default(_originalDate._originalDate || arg0.getTime(), arg1.length);
  }
};
export default exports.default;
