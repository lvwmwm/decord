// Module ID: 3798
// Function ID: 31092
// Name: resetCache
// Dependencies: []
// Exports: accessibilityLabelCalendarFormat, calendarFormat, calendarFormatCompact, diffAsUnits, differenceInDays, formatDateForDatetimeLocal, getDaysRemainingInMonth, getMonthlyProgressPercentage, isSameDay, isSameHourMoment, isWithinInterval, unitsAsStrings

// Module 3798 (resetCache)
function resetCache() {
  let closure_5 = Object.create(null);
}
function syncHourCycleToIntlConfig() {
  const TimestampHourCycle = arg1(dependencyMap[3]).TimestampHourCycle;
  const setting = TimestampHourCycle.getSetting();
  let result = setting !== arg1(dependencyMap[4]).TimestampHourCycle.AUTO;
  if (result) {
    result = arg1(dependencyMap[5]).supportsSystemDateFormatter();
    const obj = arg1(dependencyMap[5]);
  }
  const values = Object.values(arg1(dependencyMap[6]).intl.formatConfig.time);
  for (let num2 = 0; num2 < values.length; num2 = num2 + 1) {
    let tmp5 = values[num2];
    let tmp6 = null != tmp5 && "hour" in tmp5;
    if (tmp6) {
      if (result) {
        let tmp7 = arg1;
        let tmp8 = dependencyMap;
        if (setting === arg1(dependencyMap[4]).TimestampHourCycle.H12) {
          tmp5.hourCycle = "h12";
        }
      }
      if (result) {
        let tmp9 = arg1;
        let tmp10 = dependencyMap;
        if (setting === arg1(dependencyMap[4]).TimestampHourCycle.H23) {
          tmp5.hourCycle = "h23";
        }
      }
      delete r1.hourCycle;
    }
  }
}
function startOfDay(d) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let tmp2 = "string" === tmp;
  if (!tmp2) {
    tmp2 = "number" === tmp;
  }
  if (!tmp2) {
    const _Date = Date;
    tmp2 = d instanceof Date;
  }
  let date = d;
  if (!tmp2) {
    const obj = { d };
    importDefaultResult1.error("Invalid date given to startOfDay", obj);
    const _Date2 = Date;
    date = new Date();
  }
  const date1 = new Date(date);
  const time = date1.getTime();
  let diff = time;
  if (!flag) {
    diff = time - 60000 * date1.getTimezoneOffset();
  }
  return Math.floor(diff / closure_4) * closure_4;
}
function differenceInCalendarDays(arg0, arg1) {
  return Math.floor((startOfDay(arg0, false) - startOfDay(arg1, false)) / closure_4);
}
function dateFormat(date, LL, setting) {
  const obj = toMoment(date);
  if (null == setting) {
    const TimestampHourCycle = LL(dependencyMap[3]).TimestampHourCycle;
    setting = TimestampHourCycle.getSetting();
  }
  const combined = "" + toMoment(date).locale() + ":" + LL + ":" + setting;
  let tmp6 = closure_5[combined];
  if (null == tmp6) {
    const tmp10 = importDefault(dependencyMap[8])(LL);
    closure_5[combined] = tmp10;
    tmp6 = tmp10;
  }
  return tmp6(toDate(date));
}
function dateStringToMoment(arg0) {
  if (arg0.length >= 200) {
    const _Error = Error;
    const error = new Error("Date string exceeds maximum length");
    throw error;
  } else {
    return importDefault(dependencyMap[9])(arg0);
  }
}
function toMoment(timestamp) {
  let tmp = timestamp;
  if (!obj.isMoment(timestamp)) {
    tmp = importDefault(dependencyMap[9])(timestamp);
  }
  return tmp;
}
function toDate(toDate) {
  let toDateResult = toDate;
  if (obj.isMoment(toDate)) {
    toDateResult = toDate.toDate();
  }
  return toDateResult;
}
function getESTDate() {
  const date = new Date();
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
}
let importDefaultResult1 = importDefault(dependencyMap[1]);
importDefaultResult1 = new importDefaultResult1("DateUtils");
let closure_4 = 86400000;
let closure_5 = Object.create(null);
importDefault(dependencyMap[0]).addChangeListener(resetCache);
importDefault(dependencyMap[2])(resetCache);
const importDefaultResult = importDefault(dependencyMap[0]);
const subscription = importDefault(dependencyMap[7]).subscribe("USER_SETTINGS_PROTO_UPDATE", syncHourCycleToIntlConfig);
const importDefaultResult2 = importDefault(dependencyMap[7]);
const subscription1 = importDefault(dependencyMap[7]).subscribe("CONNECTION_OPEN", syncHourCycleToIntlConfig);
const items = [{}, {}, {}, {}];
const importDefaultResult3 = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("utils/DateUtils.tsx");

export { differenceInCalendarDays };
export const differenceInDays = function differenceInDays(getTime, getTime2) {
  const time = getTime.getTime();
  return (time - getTime2.getTime()) / closure_4;
};
export const isSameHourMoment = function isSameHourMoment(toDate, toDate2) {
  const toDateResult = toDate.toDate();
  const toDateResult1 = toDate2.toDate();
  let tmp = Math.abs(+toDateResult - +toDateResult1) <= 3600000;
  if (tmp) {
    const hours = toDateResult.getHours();
    tmp = hours === toDateResult1.getHours();
  }
  return tmp;
};
export const isSameDay = function isSameDay(getDate, getDate2) {
  let tmp = Math.abs(+getDate - +getDate2) <= closure_4;
  if (tmp) {
    tmp = getDate.getDate() === getDate2.getDate();
    const date = getDate.getDate();
  }
  return tmp;
};
export const isWithinInterval = function isWithinInterval(arg0, arg1, arg2) {
  return Math.abs(arg0.valueOf() - arg1.valueOf()) < arg2;
};
export { dateFormat };
export const calendarFormat = function calendarFormat(timestamp, arg1, setting) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = importDefault(dependencyMap[9]);
  const obj3 = importDefault(dependencyMap[9])();
  const localeDataResult = importDefault(dependencyMap[9]).localeData();
  const tmp2 = differenceInCalendarDays(toDate(timestamp), obj3.toDate());
  if (tmp2 < -1) {
    return dateFormat(timestamp, "L LT", setting);
  } else {
    let str = "lastDay";
    if (tmp2 >= 0) {
      if (tmp2 < 1) {
        str = "sameDay";
        if (flag) {
          return dateFormat(timestamp, "LT", setting);
        }
      } else {
        let str2 = "sameElse";
        if (tmp2 < 2) {
          str2 = "nextDay";
        }
        str = str2;
      }
    }
    return dateFormat(timestamp, localeDataResult.calendar(str, toMoment(timestamp), obj3), setting);
  }
  const tmp = toDate(timestamp);
};
export const calendarFormatCompact = function calendarFormatCompact(timestamp) {
  const obj = importDefault(dependencyMap[9]);
  const obj3 = importDefault(dependencyMap[9])();
  const localeDataResult = importDefault(dependencyMap[9]).localeData();
  const tmp2 = differenceInCalendarDays(toDate(timestamp), obj3.toDate());
  if (0 === tmp2) {
    return tmp3(timestamp, "LT", arg1);
  } else if (-1 === tmp2) {
    let str = localeDataResult.calendar("lastDay", toMoment(timestamp), obj3);
  } else {
    str = "L";
    if (tmp2 > -7) {
      str = "dddd";
    }
  }
};
export { dateStringToMoment };
export const accessibilityLabelCalendarFormat = function accessibilityLabelCalendarFormat(timestamp) {
  const obj = importDefault(dependencyMap[9]);
  const date = new Date();
  const tmp2 = differenceInCalendarDays(timestamp, date);
  let str = "sameElse";
  if (tmp2 >= -1) {
    let str2 = "lastDay";
    if (tmp2 >= 0) {
      let str3 = "sameDay";
      if (tmp2 >= 1) {
        let str4 = "sameElse";
        if (tmp2 < 2) {
          str4 = "nextDay";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  let str5 = "LLL";
  if ("sameElse" !== str) {
    str5 = localeDataResult.calendar(str, importDefault(dependencyMap[9])(timestamp), importDefault(dependencyMap[9])(date));
    const tmp6 = importDefault(dependencyMap[9])(timestamp);
  }
  return dateFormat(timestamp, str5);
};
export const diffAsUnits = function diffAsUnits(date, expiresAt) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  expiresAt = undefined;
  let closure_1;
  const obj = { 0: false, 9223372036854775807: false, isArray: false };
  let num = 0;
  if (flag) {
    num = 1;
  }
  obj.seconds = num;
  expiresAt = obj;
  if (date > expiresAt) {
    return obj;
  } else {
    if (flag) {
      const _Number = Number;
      const _Number2 = Number;
      const sum = Number(date) + 1200;
      if (sum > Number(expiresAt)) {
        return obj;
      }
    }
    const _Number3 = Number;
    const _Number4 = Number;
    closure_1 = Number(expiresAt) - Number(date);
    const item = items.forEach((arg0) => {
      let key;
      let millisecondsInUnit;
      ({ key, millisecondsInUnit } = arg0);
      obj[key] = Math.floor(closure_1 / millisecondsInUnit);
      closure_1 = closure_1 - obj[key] * millisecondsInUnit;
    });
    return obj;
  }
};
export const unitsAsStrings = function unitsAsStrings(diffAsUnitsResult, days2) {
  if (diffAsUnitsResult.days > 0) {
    const intl3 = days2(dependencyMap[6]).intl;
    let obj = {};
    ({ days: obj3.days, hours: obj3.hours } = diffAsUnitsResult);
    let formatToPlainStringResult = intl3.formatToPlainString(days2.days, obj);
  } else if (diffAsUnitsResult.hours > 0) {
    const intl2 = days2(dependencyMap[6]).intl;
    obj = {};
    ({ hours: obj2.hours, minutes: obj2.minutes } = diffAsUnitsResult);
    formatToPlainStringResult = intl2.formatToPlainString(days2.hours, obj);
  } else {
    const intl = days2(dependencyMap[6]).intl;
    obj = {};
    const _Math = Math;
    obj.minutes = Math.max(1, diffAsUnitsResult.minutes);
    formatToPlainStringResult = intl.formatToPlainString(days2.minutes, obj);
  }
  return formatToPlainStringResult;
};
export { getESTDate };
export const getMonthlyProgressPercentage = function getMonthlyProgressPercentage() {
  const obj = getESTDate();
  const fullYear = obj.getFullYear();
  const date = new Date(fullYear, obj.getMonth() + 1, 0);
  return obj.getDate() / new Date(fullYear, obj.getMonth() + 1, 0).getDate() * 100;
};
export const getDaysRemainingInMonth = function getDaysRemainingInMonth() {
  const obj = getESTDate();
  const fullYear = obj.getFullYear();
  const date = new Date(fullYear, obj.getMonth() + 1, 0);
  return new Date(fullYear, obj.getMonth() + 1, 0).getDate() - obj.getDate();
};
export const formatDateForDatetimeLocal = function formatDateForDatetimeLocal(arg0) {
  let str = "";
  if (null != arg0) {
    str = dateStringToMoment(arg0).format("YYYY-MM-DDTHH:mm");
    const obj = dateStringToMoment(arg0);
  }
  return str;
};
