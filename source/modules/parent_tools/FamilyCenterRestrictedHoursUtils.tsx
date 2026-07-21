// Module ID: 10209
// Function ID: 78879
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: computeOverlappingInfo, formatDuration, formatRestrictedScheduleInAppSubtitle, getShortDayLabels, sortRulesByStartTime, toTimeProto

// Module 10209 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      require = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const dateTimeFormat = new Intl.DateTimeFormat(require(dependencyMap[1]).intl.currentLocale, { state: false, sk: false });
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
  const require = set;
  if (setsEqual(set, set2)) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(importDefault(dependencyMap[2]).bPjqd1);
  } else if (setsEqual(set, set)) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(importDefault(dependencyMap[2]).4dr9L9);
  } else if (setsEqual(set, set1)) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(importDefault(dependencyMap[2]).6lTTJ+);
  } else {
    const _Intl = Intl;
    const obj = { weekday: "short" };
    const prototype = DateTimeFormat.prototype;
    const dateTimeFormat = new DateTimeFormat(require(dependencyMap[1]).intl.currentLocale, obj);
    const importDefault = dateTimeFormat;
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
const items = [require(dependencyMap[0]).DayOfWeek.SUNDAY, require(dependencyMap[0]).DayOfWeek.MONDAY, require(dependencyMap[0]).DayOfWeek.TUESDAY, require(dependencyMap[0]).DayOfWeek.WEDNESDAY, require(dependencyMap[0]).DayOfWeek.THURSDAY, require(dependencyMap[0]).DayOfWeek.FRIDAY, require(dependencyMap[0]).DayOfWeek.SATURDAY];
const set = new Set(require("module_1"));
const items1 = [items[0], items[6]];
const set1 = new Set(items1);
const set2 = new Set(items);
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/parent_tools/FamilyCenterRestrictedHoursUtils.tsx");

export const DAYS_ORDERED = items;
export const getShortDayLabels = function getShortDayLabels(narrow) {
  const dateTimeFormat = new Intl.DateTimeFormat(require(dependencyMap[1]).intl.currentLocale, { weekday: narrow });
  const require = dateTimeFormat;
  return items.map((arg0, arg1) => dateTimeFormat.format(new Date(2025, 0, 5 + arg1)));
};
export { formatTime };
export { formatDays };
export { timeToMinutes };
export const formatDuration = function formatDuration(arg0) {
  const result = arg0 / 60;
  const intl = require(dependencyMap[1]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const tmp3 = importDefault(dependencyMap[2]);
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
        ERTn+E = importDefault(dependencyMap[2]).OxveI8;
      } else {
        ERTn+E = importDefault(dependencyMap[2]).ERTn+E;
      }
      const intl = require(dependencyMap[1]).intl;
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
  const require = first3;
  const importDefault = memo1;
  const dependencyMap = memo;
  const conflictingEntries = [];
  const items = conflictingEntries;
  const item = items.forEach((arg0, arg1) => {
    if (arg0.has(arg0)) {
      const found = arg1.find((days) => {
        days = days.days;
        return days.includes(days);
      });
      if (null != found) {
        const obj = { dayLabel: arg2[arg1], timeRange: callback(found) };
        conflictingEntries.push(obj);
      }
    }
  });
  return { conflictingEntries };
};
