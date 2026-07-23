// Module ID: 8346
// Function ID: 66188
// Name: getNextBucketedTime
// Dependencies: [1849, 8347, 1354, 8348, 1212, 3712, 3800, 21, 664, 22, 2]
// Exports: areSchedulesIdentical, generateNextRecurrences, getBaseScheduleForRecurrence, getEventTimeData, getInitialEventEndDate, getInitialEventStartDate, getNextRecurrenceIdInEvent, getRecurrenceOptions, getRecurrenceStatus, getScheduleForRecurrenceWithException, getScheduleFromEventData, hasScheduleChanges, hasValidSchedule, isValidRecurrence, recurrenceOptionToRecurrenceRule, recurrenceRuleToOption

// Module 8346 (getNextBucketedTime)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RecurrenceOptions } from "RecurrenceOptions";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import set from "GUILD_EVENT_MAX_NAME_LENGTH";

let closure_5;
let closure_6;
const require = arg1;
function getNextBucketedTime(minutes) {
  const diff = arg1 - minutes.minutes() % arg1;
  const obj = importDefault(3712)(minutes);
  return importDefault(3712)(minutes).add(diff, "minutes").seconds(0);
}
function formatDatePreferShorter(get, get2) {
  const value = get.get("years");
  let str = "ddd MMM Do, YYYY \u00B7 LT";
  if (value === get2.get("years")) {
    str = "ddd MMM Do \u00B7 LT";
  }
  return require(3800) /* resetCache */.dateFormat(get, str);
}
function formatDatePrefersRelativeTime(toDate, toDate2) {
  const obj = require(3800) /* resetCache */;
  const result = obj.differenceInCalendarDays(toDate.toDate(), toDate2.toDate());
  if (result <= 1) {
    if (result >= 0) {
      const obj2 = require(3800) /* resetCache */;
      let str = "nextDay";
      if (result < 1) {
        str = "sameDay";
      }
      let dateFormatResult = obj2.dateFormat(toDate, toDate.localeData().calendar(str, toDate, toDate2));
      const localeDataResult = toDate.localeData();
    }
    return dateFormatResult;
  }
  dateFormatResult = formatDatePreferShorter(toDate, toDate2);
}
function convertJSDayToRRuleDay(uTCDay) {
  const weekday = new require(8348) /* w */.Weekday(items6[uTCDay]);
  return weekday;
}
function _getSchedule(scheduledStartTime, scheduledEndTime) {
  let tmp;
  if (null != scheduledStartTime) {
    const obj = { startDate: importDefault(3712)(scheduledStartTime), endDate: undefined };
    tmp = obj;
    if (null != scheduledEndTime) {
      obj.endDate = importDefault(3712)(scheduledEndTime);
      tmp = obj;
    }
  }
  return tmp;
}
function getScheduleFromEvent(scheduled_start_time) {
  return _getSchedule(scheduled_start_time.scheduled_start_time, scheduled_start_time.scheduled_end_time);
}
function areDatesIdentical(endDate, endDate2) {
  if (null != endDate) {
    if (null != endDate2) {
      let isSameResult = endDate.isSame(endDate2);
    }
    return isSameResult;
  }
  isSameResult = null == endDate && null == endDate2;
}
function getRRule(closure_2) {
  let tmp = null;
  if (null != closure_2.byWeekday) {
    const items = [];
    HermesBuiltin.arraySpread(closure_2.byWeekday, 0);
    tmp = items;
  }
  const byNWeekday = closure_2.byNWeekday;
  let mapped;
  if (null != byNWeekday) {
    mapped = byNWeekday.map((day) => {
      const weekday = new outer1_0(outer1_2[3]).Weekday(day.day, day.n);
      return weekday;
    });
  }
  const date = new Date(closure_2.start);
  date.setMilliseconds(0);
  const obj = { dtstart: date };
  let date1 = null;
  if (null != closure_2.end) {
    const _Date = Date;
    date1 = new Date(closure_2.end);
  }
  obj.until = date1;
  ({ frequency: obj2.freq, interval: obj2.interval } = closure_2);
  if (null != tmp) {
    mapped = tmp;
  }
  obj.byweekday = mapped;
  let tmp9 = null;
  if (null != closure_2.byMonth) {
    const items1 = [];
    HermesBuiltin.arraySpread(closure_2.byMonth, 0);
    tmp9 = items1;
  }
  obj.bymonth = tmp9;
  let tmp12 = null;
  if (null != closure_2.byMonthDay) {
    const items2 = [];
    HermesBuiltin.arraySpread(closure_2.byMonthDay, 0);
    tmp12 = items2;
  }
  obj.bymonthday = tmp12;
  let tmp15 = null;
  if (null != closure_2.byYearDay) {
    const items3 = [];
    HermesBuiltin.arraySpread(closure_2.byYearDay, 0);
    tmp15 = items3;
  }
  obj.byyearday = tmp15;
  obj.count = closure_2.count;
  const rRule = new require(8348) /* w */.RRule(obj);
  return rRule;
}
function getNextRecurrenceInEvent(recurrence_rule) {
  let date = null;
  if (null != recurrence_rule.recurrence_rule) {
    const _Date = Date;
    date = new Date(recurrence_rule.scheduled_start_time);
  }
  return date;
}
function getValidWeekdays(toDate) {
  const tmp = convertJSDayToRRuleDay(toDate.toDate().getDay());
  const toDateResult = toDate.toDate();
  const tmp2 = convertJSDayToRRuleDay(toDate.toDate().getUTCDay());
  if (tmp2.weekday - tmp.weekday > 0) {
    let tmp3 = items2;
  } else {
    tmp3 = tmp2.weekday - tmp.weekday < 0 ? items1 : items;
  }
  return tmp3;
}
function getValidWeekends(toDate) {
  const tmp = convertJSDayToRRuleDay(toDate.toDate().getDay());
  const toDateResult = toDate.toDate();
  const tmp2 = convertJSDayToRRuleDay(toDate.toDate().getUTCDay());
  if (tmp2.weekday - tmp.weekday > 0) {
    let tmp3 = items5;
  } else {
    tmp3 = tmp2.weekday - tmp.weekday < 0 ? items4 : items3;
  }
  return tmp3;
}
({ GuildScheduledEventEntityTypes: closure_5, GuildScheduledEventStatus: closure_6 } = GUILD_EVENT_MAX_NAME_LENGTH);
let items = [require("w").RRule.MO.weekday, require("w").RRule.TU.weekday, require("w").RRule.WE.weekday, require("w").RRule.TH.weekday, require("w").RRule.FR.weekday];
let items1 = [require("w").RRule.SU.weekday, require("w").RRule.MO.weekday, require("w").RRule.TU.weekday, require("w").RRule.WE.weekday, require("w").RRule.TH.weekday];
let items2 = [require("w").RRule.TU.weekday, require("w").RRule.WE.weekday, require("w").RRule.TH.weekday, require("w").RRule.FR.weekday, require("w").RRule.SA.weekday];
let items3 = [require("w").RRule.SA.weekday, require("w").RRule.SU.weekday];
const items4 = [require("w").RRule.FR.weekday, require("w").RRule.SA.weekday];
const items5 = [require("w").RRule.SU.weekday, require("w").RRule.MO.weekday];
const items6 = [require("w").RRule.SU.weekday, require("w").RRule.MO.weekday, require("w").RRule.TU.weekday, require("w").RRule.WE.weekday, require("w").RRule.TH.weekday, require("w").RRule.FR.weekday, require("w").RRule.SA.weekday];
let set = new Set([0, 6]);
let result = set.fileFinishedImporting("modules/guild_scheduled_events/utils/ScheduleUtils.tsx");

export const MAX_DAYS_AHEAD_AN_EVENT_CAN_START = 365;
export const MAX_DAYS_AHEAD_AN_EVENT_CAN_END = 366;
export const MAX_YEARS_AHEAD_RECURRING_EVENT = 4;
export const getRecurrenceOptions = function getRecurrenceOptions(startDate) {
  const toDateResult = startDate.toDate();
  const rounded = Math.ceil(toDateResult.getDate() / 7);
  const formatResult = startDate.format("dddd");
  let obj = { id: "none", value: RecurrenceOptions.NONE };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["0bK0B1"]);
  const items = [obj, , , , , ];
  obj = { id: "weekly", value: RecurrenceOptions.WEEKLY };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["B8/yfp"], { weekday: formatResult });
  items[1] = obj;
  const obj1 = { id: "biweekly", value: RecurrenceOptions.BIWEEKLY };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["z+aIuX"], { weekday: formatResult });
  items[2] = obj1;
  const obj2 = { id: "monthly", value: RecurrenceOptions.MONTHLY };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.mjOEBk, { nth: rounded, weekday: formatResult });
  items[3] = obj2;
  const obj3 = { id: "yearly", value: RecurrenceOptions.YEARLY };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  const obj4 = { date: toDateResult.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, { month: "short", day: "2-digit" }) };
  obj3.label = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t["5DFcVl"], obj4);
  items[4] = obj3;
  const obj5 = { id: "daily", value: RecurrenceOptions.DAILY };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj5.label = intl6.string(require(1212) /* getSystemLocale */.t.JX8E1E);
  items[5] = obj5;
  if (set.has(toDateResult.getDay())) {
    currentUser = currentUser.getCurrentUser();
    if (tmp9) {
      const obj6 = { id: "weekendOnly", value: RecurrenceOptions.WEEKEND_ONLY };
      const intl8 = require(1212) /* getSystemLocale */.intl;
      obj6.label = intl8.string(require(1212) /* getSystemLocale */.t.hRpynV);
      items.push(obj6);
    }
    tmp9 = null != currentUser && currentUser.isStaff();
  } else {
    const obj7 = { id: "weekdayOnly", value: RecurrenceOptions.WEEKDAY_ONLY };
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj7.label = intl7.string(require(1212) /* getSystemLocale */.t["jYR/MY"]);
    items.push(obj7);
  }
  return items;
};
export const getInitialEventStartDate = function getInitialEventStartDate() {
  const addResult = importDefault(3712)().add(1, "hour");
  const hourResult = addResult.hour();
  let sum = hourResult;
  if (addResult.minutes() >= 30) {
    sum = hourResult + 1;
  }
  const obj = importDefault(3712)();
  const hourResult1 = addResult.hour(sum);
  return addResult.hour(sum).minutes(0).seconds(0);
};
export const getInitialEventEndDate = function getInitialEventEndDate(arg0) {
  if (null != arg0) {
    let obj = importDefault(3712)(arg0);
  } else {
    obj = importDefault(3712)();
  }
  return getNextBucketedTime(obj.add(1, "hour"), 60);
};
export { getNextBucketedTime };
export const getEventTimeData = function getEventTimeData(scheduled_start_time, c2, get2) {
  let tmp = get2;
  if (null == get2) {
    tmp = importDefault(3712)();
  }
  let obj = importDefault(3712)(scheduled_start_time);
  let tmp4;
  if (null != c2) {
    if ("" !== c2) {
      tmp4 = importDefault(3712)(c2);
    }
  }
  let isSameResult = null != c2;
  if (isSameResult) {
    isSameResult = obj.isSame(tmp4, "day");
  }
  obj = {};
  obj.startDateTimeString = formatDatePrefersRelativeTime(obj, tmp);
  if (null == tmp4) {
    obj.endDateTimeString = undefined;
    obj.currentOrPastEvent = obj <= tmp;
    obj.upcomingEvent = obj <= importDefault(3712)().add(1, "hour");
    const obj3 = importDefault(3712)();
    obj.withinStartWindow = obj <= importDefault(3712)().add(15, "minute");
    obj.diffMinutes = obj.diff(tmp, "minutes");
    return obj;
  } else if (isSameResult) {
    let formatResult = tmp4.format("LT");
  } else {
    formatResult = formatDatePreferShorter(tmp4, tmp);
  }
};
export { convertJSDayToRRuleDay };
export const getBaseScheduleForRecurrence = function getBaseScheduleForRecurrence(recurrenceId, guildEvent) {
  const tmp = getScheduleFromEvent(guildEvent);
  let obj = importDefault(21);
  const tmp2Result = importDefault(3712)(obj.extractTimestamp(recurrenceId));
  let endDate;
  if (null != tmp) {
    endDate = tmp.endDate;
  }
  let addResult;
  if (null != endDate) {
    endDate = tmp.endDate;
    addResult = tmp2Result.clone().add(endDate.diff(tmp.startDate));
    const cloneResult = tmp2Result.clone();
  }
  obj = { startDate: tmp2Result, endDate: addResult };
  return obj;
};
export const getScheduleForRecurrenceWithException = function getScheduleForRecurrenceWithException(baseScheduleForRecurrence, scheduled_end_time) {
  if (null == scheduled_end_time) {
    return baseScheduleForRecurrence;
  } else {
    let endDate = scheduled_end_time.scheduled_end_time;
    if (null == endDate) {
      endDate = baseScheduleForRecurrence.endDate;
    }
    const obj = {};
    if (null != scheduled_end_time.scheduled_start_time) {
      let startDate = importDefault(3712)(scheduled_end_time.scheduled_start_time);
    } else {
      startDate = baseScheduleForRecurrence.startDate;
    }
    obj.startDate = startDate;
    let tmp3;
    if (null != endDate) {
      tmp3 = importDefault(3712)(endDate);
    }
    obj.endDate = tmp3;
    return obj;
  }
};
export const getScheduleFromEventData = function getScheduleFromEventData(scheduledStartTime) {
  return _getSchedule(scheduledStartTime.scheduledStartTime, scheduledStartTime.scheduledEndTime);
};
export { getScheduleFromEvent };
export const hasValidSchedule = function hasValidSchedule(arg0, arg1) {
  let endDate;
  let startDate;
  ({ startDate, endDate } = arg0);
  let tmp = null != startDate;
  if (tmp) {
    const tmp4 = startDate < importDefault(3712)();
    let tmp5 = !tmp4;
    if (!tmp4) {
      let tmp7 = !tmp6;
      if (!(null != endDate && endDate < startDate)) {
        tmp7 = arg1 !== constants.EXTERNAL || null != endDate;
        const tmp10 = arg1 !== constants.EXTERNAL || null != endDate;
      }
      tmp5 = tmp7;
    }
    tmp = tmp5;
  }
  return tmp;
};
export { areDatesIdentical };
export const areSchedulesIdentical = function areSchedulesIdentical(startDate, baseScheduleForRecurrence) {
  if (null != startDate) {
    if (null != baseScheduleForRecurrence) {
      let tmp2 = areDatesIdentical(startDate.startDate, baseScheduleForRecurrence.startDate);
      if (tmp2) {
        tmp2 = areDatesIdentical(startDate.endDate, baseScheduleForRecurrence.endDate);
      }
    }
    return tmp2;
  }
  tmp2 = null == startDate && null == baseScheduleForRecurrence;
};
export { getRRule };
export const generateNextRecurrences = function generateNextRecurrences(length, rRule, date, arg3) {
  let flag = arg3;
  let closure_0 = length;
  if (arg3 === undefined) {
    flag = false;
  }
  let date1 = date;
  if (date <= date) {
    const _Date = Date;
    date1 = new Date();
  }
  const date2 = new Date();
  date2.setFullYear(date2.getFullYear() + 4);
  const betweenResult = rRule.between(date1, date2, true, (arg0, arg1) => arg1 < closure_0 + 1);
  if (flag) {
    if (betweenResult.length > 0) {
      const first = betweenResult[0];
      const time = date.getTime();
      if (time === first.getTime()) {
        let substr = betweenResult.slice(1);
      }
      return substr;
    }
  }
  substr = betweenResult.slice(0, length);
};
export { getNextRecurrenceInEvent };
export const getNextRecurrenceIdInEvent = function getNextRecurrenceIdInEvent(event) {
  if (null == event) {
    return null;
  } else {
    const obj2 = getNextRecurrenceInEvent(event);
    let fromTimestampResult = null;
    if (null != obj2) {
      const _Math = Math;
      const time = obj2.getTime();
      const rounded = Math.floor(time / importDefault(664).Millis.SECOND);
      fromTimestampResult = importDefault(21).fromTimestamp(rounded * importDefault(664).Millis.SECOND);
      const obj = importDefault(21);
    }
    return fromTimestampResult;
  }
};
export const isValidRecurrence = function isValidRecurrence(start) {
  if (null != arg1) {
    if (null != start) {
      const _Date = Date;
      const date = new Date(start.start);
      const _Date2 = Date;
      const date1 = new Date(importDefault(21).extractTimestamp(arg1));
      const uTCHours = date.getUTCHours();
      if (uTCHours === date1.getUTCHours()) {
        const uTCMinutes = date.getUTCMinutes();
        if (uTCMinutes === date1.getUTCMinutes()) {
          const uTCSeconds = date.getUTCSeconds();
          if (uTCSeconds === date1.getUTCSeconds()) {
            const frequency = start.frequency;
            if (require(8348) /* w */.RRule.WEEKLY === frequency) {
              const uTCDay = date.getUTCDay();
              return uTCDay === date1.getUTCDay();
            } else if (require(8348) /* w */.RRule.YEARLY === frequency) {
              const uTCDate = date.getUTCDate();
              return uTCDate === date1.getUTCDate();
            } else {
              return true;
            }
          }
        }
      }
      return false;
    }
  }
  return false;
};
export { getValidWeekdays };
export { getValidWeekends };
export const recurrenceOptionToRecurrenceRule = function recurrenceOptionToRecurrenceRule(closure_7, memo) {
  let bymonth;
  let bymonthday;
  let bynweekday;
  let byweekday;
  let byyearday;
  let count;
  let dtstart;
  let freq;
  let interval;
  let until;
  const tmp = getValidWeekdays(memo);
  const tmp2 = getValidWeekends(memo);
  let obj1 = convertJSDayToRRuleDay(memo.toDate().getUTCDay());
  const toDateResult = memo.toDate();
  const rounded = Math.ceil(memo.toDate().getUTCDate() / 7);
  const toDateResult2 = memo.toDate();
  toDateResult2.setMilliseconds(0);
  let rRule6 = null;
  if (RecurrenceOptions.NONE !== closure_7) {
    if (RecurrenceOptions.WEEKLY === closure_7) {
      const RRule6 = require(8348) /* w */.RRule;
      let obj = { dtstart: toDateResult2, freq: require(8348) /* w */.RRule.WEEKLY };
      const prototype6 = RRule6.prototype;
      rRule6 = new RRule6(obj);
    } else if (RecurrenceOptions.BIWEEKLY === closure_7) {
      const RRule5 = require(8348) /* w */.RRule;
      obj = { dtstart: toDateResult2, freq: require(8348) /* w */.RRule.WEEKLY, interval: 2 };
      const prototype5 = RRule5.prototype;
      rRule6 = new RRule5(obj);
    } else if (RecurrenceOptions.MONTHLY === closure_7) {
      const RRule4 = require(8348) /* w */.RRule;
      obj1 = { dtstart: toDateResult2, freq: require(8348) /* w */.RRule.MONTHLY };
      const items = [obj1.nth(rounded)];
      obj1.byweekday = items;
      const prototype4 = RRule4.prototype;
      rRule6 = new RRule4(obj1);
    } else if (RecurrenceOptions.YEARLY === closure_7) {
      const RRule3 = require(8348) /* w */.RRule;
      const obj2 = { dtstart: toDateResult2, freq: require(8348) /* w */.RRule.YEARLY };
      const prototype3 = RRule3.prototype;
      rRule6 = new RRule3(obj2);
    } else if (RecurrenceOptions.DAILY === closure_7) {
      const RRule2 = require(8348) /* w */.RRule;
      const obj3 = { dtstart: toDateResult2, freq: require(8348) /* w */.RRule.DAILY };
      const prototype2 = RRule2.prototype;
      rRule6 = new RRule2(obj3);
    } else if (RecurrenceOptions.WEEKDAY_ONLY === closure_7) {
      const RRule = require(8348) /* w */.RRule;
      const obj4 = { dtstart: toDateResult2, freq: require(8348) /* w */.RRule.DAILY, byweekday: tmp };
      const prototype = RRule.prototype;
      rRule6 = new RRule(obj4);
    } else if (RecurrenceOptions.WEEKEND_ONLY === closure_7) {
      const RRule7 = require(8348) /* w */.RRule;
      const obj5 = { dtstart: toDateResult2, freq: require(8348) /* w */.RRule.DAILY, byweekday: tmp2 };
      const prototype7 = RRule7.prototype;
      rRule6 = new RRule7(obj5);
    }
  }
  if (null == rRule6) {
    return null;
  } else {
    const options = rRule6.options;
    ({ dtstart, until, bynweekday } = options);
    let mapped;
    ({ freq, interval, byweekday, bymonth, bymonthday, byyearday, count } = options);
    if (null != bynweekday) {
      mapped = bynweekday.map((arg0) => ({ n: arg0[1], day: arg0[0] }));
    }
    const obj6 = { start: dtstart.toISOString() };
    let toISOStringResult;
    if (null != until) {
      toISOStringResult = until.toISOString();
    }
    obj6.end = toISOStringResult;
    obj6.frequency = freq;
    obj6.interval = interval;
    obj6.byWeekday = byweekday;
    obj6.byNWeekday = mapped;
    obj6.byMonth = bymonth;
    obj6.byMonthDay = bymonthday;
    obj6.byYearDay = byyearday;
    obj6.count = count;
    return obj6;
  }
  const toDateResult1 = memo.toDate();
};
export const recurrenceRuleToOption = function recurrenceRuleToOption(startDate, recurrenceRule) {
  if (null == recurrenceRule) {
    return RecurrenceOptions.NONE;
  } else {
    const tmp15 = getRRule(recurrenceRule);
    const freq = tmp15.options.freq;
    if (require(8348) /* w */.RRule.WEEKLY === freq) {
      if (tmp15.options.interval >= 1) {
        if (tmp15.options.interval <= 2) {
          if (1 === tmp15.options.interval) {
            let NONE = RecurrenceOptions.WEEKLY;
          } else {
            NONE = RecurrenceOptions.BIWEEKLY;
          }
        }
        return NONE;
      }
      NONE = RecurrenceOptions.NONE;
    } else if (require(8348) /* w */.RRule.YEARLY === freq) {
      return RecurrenceOptions.YEARLY;
    } else if (require(8348) /* w */.RRule.MONTHLY === freq) {
      return RecurrenceOptions.MONTHLY;
    } else if (require(8348) /* w */.RRule.DAILY === freq) {
      if (null != tmp15.options.byweekday) {
        if (0 !== tmp15.options.byweekday.length) {
          if (obj2.isEqual(tmp15.options.byweekday, getValidWeekdays(startDate))) {
            let DAILY = RecurrenceOptions.WEEKDAY_ONLY;
          } else {
            DAILY = require(22) /* apply */.isEqual(tmp15.options.byweekday, getValidWeekends(startDate)) ? tmp5.WEEKEND_ONLY : tmp5.NONE;
            const obj = require(22) /* apply */;
          }
          obj2 = require(22) /* apply */;
        }
        return DAILY;
      }
      DAILY = RecurrenceOptions.DAILY;
    } else {
      return RecurrenceOptions.NONE;
    }
  }
};
export const hasScheduleChanges = function hasScheduleChanges(closure_1, guildEvent) {
  let scheduled_start_time;
  if (null != closure_1) {
    scheduled_start_time = closure_1.scheduled_start_time;
  }
  let tmp2 = scheduled_start_time !== guildEvent.scheduledStartTime || closure_1.scheduled_end_time !== guildEvent.scheduledEndTime;
  if (!tmp2) {
    tmp2 = !require(22) /* apply */.isEqual(closure_1.recurrence_rule, guildEvent.recurrenceRule);
    const obj = require(22) /* apply */;
  }
  return tmp2;
};
export const getRecurrenceStatus = function getRecurrenceStatus(eventException, startTime, _Date) {
  if (null != eventException) {
    if (eventException.is_canceled) {
      let CANCELED = constants2.CANCELED;
    }
    return CANCELED;
  }
  if (startTime < _Date) {
    CANCELED = constants2.COMPLETED;
  } else {
    CANCELED = null;
    if (null != eventException) {
      CANCELED = constants2.SCHEDULED;
    }
  }
};
