// Module ID: 3800
// Function ID: 31097
// Name: resetCache
// Dependencies: [1921, 3, 3801, 3803, 1282, 3817, 1212, 686, 3819, 3712, 2]
// Exports: accessibilityLabelCalendarFormat, calendarFormat, calendarFormatCompact, diffAsUnits, differenceInDays, formatDateForDatetimeLocal, getDaysRemainingInMonth, getMonthlyProgressPercentage, isSameDay, isSameHourMoment, isWithinInterval, unitsAsStrings

// Module 3800 (resetCache)
import importDefaultResult1 from "explicitContentFromProto";
import importDefaultResult from "_isNativeReflectConstruct";
import importDefaultResult2 from "dispatcher";
import importDefaultResult3 from "dispatcher";

const require = arg1;
function resetCache() {
  let closure_5 = Object.create(null);
}
function syncHourCycleToIntlConfig() {
  const TimestampHourCycle = require(3803) /* explicitContentFromProto */.TimestampHourCycle;
  const setting = TimestampHourCycle.getSetting();
  let result = setting !== require(1282) /* _callSuper */.TimestampHourCycle.AUTO;
  if (result) {
    result = require(3817) /* __DiscordCreateDateFormatter */.supportsSystemDateFormatter();
    const obj = require(3817) /* __DiscordCreateDateFormatter */;
  }
  const values = Object.values(require(1212) /* getSystemLocale */.intl.formatConfig.time);
  for (let num2 = 0; num2 < values.length; num2 = num2 + 1) {
    let tmp6 = values[num2];
    let tmp7 = null != tmp6 && "hour" in tmp6;
    if (tmp7) {
      if (result) {
        let tmp8 = require;
        let tmp9 = dependencyMap;
        if (setting === require(1282) /* _callSuper */.TimestampHourCycle.H12) {
          tmp6.hourCycle = "h12";
        }
      }
      if (result) {
        let tmp10 = require;
        let tmp11 = dependencyMap;
        if (setting === require(1282) /* _callSuper */.TimestampHourCycle.H23) {
          tmp6.hourCycle = "h23";
        }
      }
      delete tmp.hourCycle;
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
  return Math.floor(diff / c4) * c4;
}
function differenceInCalendarDays(arg0, arg1) {
  return Math.floor((startOfDay(arg0, false) - startOfDay(arg1, false)) / c4);
}
function dateFormat(date, LL, setting) {
  const obj = toMoment(date);
  if (null == setting) {
    const TimestampHourCycle = require(3803) /* explicitContentFromProto */.TimestampHourCycle;
    setting = TimestampHourCycle.getSetting();
  }
  const combined = "" + toMoment(date).locale() + ":" + LL + ":" + setting;
  let tmp6 = table[combined];
  if (null == tmp6) {
    const tmp10 = importDefault(3819)(LL);
    table[combined] = tmp10;
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
    return importDefault(3712)(arg0);
  }
}
function toMoment(timestamp) {
  let tmp = timestamp;
  if (!obj.isMoment(timestamp)) {
    tmp = importDefault(3712)(timestamp);
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
importDefaultResult1 = new importDefaultResult1("DateUtils");
let c4 = 86400000;
let closure_5 = Object.create(null);
require("_isNativeReflectConstruct").addChangeListener(resetCache);
require("onTimezoneChange")(resetCache);
const subscription = require("dispatcher").subscribe("USER_SETTINGS_PROTO_UPDATE", syncHourCycleToIntlConfig);
const subscription1 = require("dispatcher").subscribe("CONNECTION_OPEN", syncHourCycleToIntlConfig);
const items = [{ key: "days", millisecondsInUnit: 86400000 }, { key: "hours", millisecondsInUnit: 3600000 }, { key: "minutes", millisecondsInUnit: 60000 }, { key: "seconds", millisecondsInUnit: 1000 }];
let result = require("onTimezoneChange").fileFinishedImporting("utils/DateUtils.tsx");

export { differenceInCalendarDays };
export const differenceInDays = function differenceInDays(getTime, getTime2) {
  const time = getTime.getTime();
  return (time - getTime2.getTime()) / c4;
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
  let tmp = Math.abs(+getDate - +getDate2) <= c4;
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
  const obj = importDefault(3712);
  const obj3 = importDefault(3712)();
  const localeDataResult = importDefault(3712).localeData();
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
  const obj = importDefault(3712);
  const obj3 = importDefault(3712)();
  const localeDataResult = importDefault(3712).localeData();
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
  const obj = importDefault(3712);
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
    str5 = localeDataResult.calendar(str, importDefault(3712)(timestamp), importDefault(3712)(date));
    const tmp6 = importDefault(3712)(timestamp);
  }
  return dateFormat(timestamp, str5);
};
export const diffAsUnits = function diffAsUnits(date, closure_0) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj;
  let closure_1;
  obj = { days: 0, hours: 0, minutes: 0 };
  let num = 0;
  if (flag) {
    num = 1;
  }
  obj.seconds = num;
  if (date > closure_0) {
    return obj;
  } else {
    if (flag) {
      const _Number = Number;
      const _Number2 = Number;
      const sum = Number(date) + 1200;
      if (sum > Number(closure_0)) {
        return obj;
      }
    }
    const _Number3 = Number;
    const _Number4 = Number;
    closure_1 = Number(closure_0) - Number(date);
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
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    ({ days: obj3.days, hours: obj3.hours } = diffAsUnitsResult);
    let formatToPlainStringResult = intl3.formatToPlainString(days2.days, obj);
  } else if (diffAsUnitsResult.hours > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = {};
    ({ hours: obj2.hours, minutes: obj2.minutes } = diffAsUnitsResult);
    formatToPlainStringResult = intl2.formatToPlainString(days2.hours, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
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
