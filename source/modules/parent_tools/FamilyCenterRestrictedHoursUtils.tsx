// Module ID: 10252
// Function ID: 79155
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1867, 1212, 2198, 2]
// Exports: computeOverlappingInfo, formatDuration, formatRestrictedScheduleInAppSubtitle, getShortDayLabels, sortRulesByStartTime, toTimeProto

// Module 10252 (_createForOfIteratorHelperLoose)
import set from "messagesProxy";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function formatTime(hours) {
  const dateTimeFormat = new Intl.DateTimeFormat(require(1212) /* getSystemLocale */.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  return dateTimeFormat.format(new Date(2025, 0, 1, hours.hours, hours.minutes));
}
function setsEqual(set, set2) {
  if (set.size !== set2.size) {
    return false;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(set);
    let iter = tmp2();
    if (!iter.done) {
      while (set2.has(iter.value)) {
        let iter2 = tmp2();
        iter = iter2;
      }
      return false;
    }
    return true;
  }
}
function formatDays(days) {
  const set = new Set(days);
  if (setsEqual(set, set2)) {
    const intl3 = set(1212).intl;
    return intl3.string(dateTimeFormat(2198).bPjqd1);
  } else if (setsEqual(set, set)) {
    const intl2 = set(1212).intl;
    return intl2.string(dateTimeFormat(2198)["4dr9L9"]);
  } else if (setsEqual(set, set1)) {
    const intl = set(1212).intl;
    return intl.string(dateTimeFormat(2198)["6lTTJ+"]);
  } else {
    const _Intl = Intl;
    const obj = { weekday: "short" };
    let prototype = DateTimeFormat.prototype;
    dateTimeFormat = new DateTimeFormat(set(1212).intl.currentLocale, obj);
    const mapped = items.map((arg0, arg1) => {
      let formatResult = null;
      if (set.has(arg0)) {
        const _Date = Date;
        const date = new Date(2025, 0, 5 + arg1);
        formatResult = dateTimeFormat.format(date);
      }
      return formatResult;
    });
    const found = mapped.filter((arg0) => null !== arg0);
    return found.join(", ");
  }
}
function timeToMinutes(endTime) {
  return 60 * endTime.hours + endTime.minutes;
}
function getScheduleRuleDateRange(rule) {
  let str = "";
  if (null != rule.startTime) {
    str = "";
    if (null != rule.endTime) {
      const _HermesInternal = HermesInternal;
      str = "" + formatTime(rule.startTime) + " \u2013 " + formatTime(rule.endTime);
      const tmp2 = formatTime(rule.startTime);
    }
  }
  return str;
}
const items = [require("_callSuper").DayOfWeek.SUNDAY, require("_callSuper").DayOfWeek.MONDAY, require("_callSuper").DayOfWeek.TUESDAY, require("_callSuper").DayOfWeek.WEDNESDAY, require("_callSuper").DayOfWeek.THURSDAY, require("_callSuper").DayOfWeek.FRIDAY, require("_callSuper").DayOfWeek.SATURDAY];
let set = new Set(require("getSystemLocale"));
const items1 = [items[0], items[6]];
const set1 = new Set(items1);
const set2 = new Set(items);
let result = set.fileFinishedImporting("modules/parent_tools/FamilyCenterRestrictedHoursUtils.tsx");

export const DAYS_ORDERED = items;
export const getShortDayLabels = function getShortDayLabels(narrow) {
  dateTimeFormat = new Intl.DateTimeFormat(dateTimeFormat(1212).intl.currentLocale, { weekday: narrow });
  return items.map((arg0, arg1) => dateTimeFormat.format(new Date(2025, 0, 5 + arg1)));
};
export { formatTime };
export { formatDays };
export { timeToMinutes };
export const formatDuration = function formatDuration(arg0) {
  const result = arg0 / 60;
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToPlainString = intl.formatToPlainString;
  const tmp3 = importDefault(2198);
  if (isIntegerResult) {
    let obj = { hours: result };
    let formatToPlainStringResult = formatToPlainString(tmp3.hFDcmZ, obj);
  } else {
    obj = {};
    const _Math = Math;
    obj.hours = Math.floor(result);
    formatToPlainStringResult = formatToPlainString(tmp3.wcrXLM, obj);
  }
  return formatToPlainStringResult;
};
export { getScheduleRuleDateRange };
export const formatRestrictedScheduleInAppSubtitle = function formatRestrictedScheduleInAppSubtitle(startTime) {
  if (null != startTime.startTime) {
    if (null != startTime.endTime) {
      const tmp8 = formatDays(startTime.days);
      const tmp10 = formatTime(startTime.startTime);
      const tmp11 = formatTime(startTime.endTime);
      if (tmp13 > timeToMinutes(startTime.endTime)) {
        ERTn_E = importDefault(2198).OxveI8;
      } else {
        ERTn_E = importDefault(2198)["ERTn+E"];
      }
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj = { days: tmp8, startTime: tmp10, endTime: tmp11 };
      return intl.formatToPlainString(ERTn_E, obj);
    }
  }
  return null;
};
export const sortRulesByStartTime = function sortRulesByStartTime(rules) {
  const substr = rules.slice();
  return substr.sort((startTime, startTime2) => {
    startTime = startTime.startTime;
    let hours;
    if (null != startTime) {
      hours = startTime.hours;
    }
    let num = 0;
    if (null != hours) {
      num = hours;
    }
    startTime2 = startTime.startTime;
    let minutes;
    const result = 60 * num;
    if (null != startTime2) {
      minutes = startTime2.minutes;
    }
    let num2 = 0;
    if (null != minutes) {
      num2 = minutes;
    }
    const startTime3 = startTime2.startTime;
    let hours1;
    const sum = result + num2;
    if (null != startTime3) {
      hours1 = startTime3.hours;
    }
    let num3 = 0;
    if (null != hours1) {
      num3 = hours1;
    }
    const startTime4 = startTime2.startTime;
    let minutes1;
    const result1 = 60 * num3;
    if (null != startTime4) {
      minutes1 = startTime4.minutes;
    }
    let num4 = 0;
    if (null != minutes1) {
      num4 = minutes1;
    }
    return sum - (result1 + num4);
  });
};
export const toTimeProto = function toTimeProto(hours) {
  return { hours: hours.hours, minutes: hours.minutes, seconds: 0, nanos: 0 };
};
export const computeOverlappingInfo = function computeOverlappingInfo(first3, memo1, memo) {
  let closure_0 = first3;
  let closure_1 = memo1;
  let closure_2 = memo;
  const conflictingEntries = [];
  const item = conflictingEntries.forEach((arg0, arg1) => {
    if (arg0.has(arg0)) {
      const found = memo1.find((days) => {
        days = days.days;
        return days.includes(closure_0);
      });
      if (null != found) {
        const obj = { dayLabel: memo[arg1], timeRange: outer1_13(found) };
        conflictingEntries.push(obj);
      }
    }
  });
  return { conflictingEntries };
};
