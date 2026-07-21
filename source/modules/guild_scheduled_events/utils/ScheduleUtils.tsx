// Module ID: 8339
// Function ID: 66128
// Name: getNextBucketedTime
// Dependencies: []
// Exports: areSchedulesIdentical, generateNextRecurrences, getBaseScheduleForRecurrence, getEventTimeData, getInitialEventEndDate, getInitialEventStartDate, getNextRecurrenceIdInEvent, getRecurrenceOptions, getRecurrenceStatus, getScheduleForRecurrenceWithException, getScheduleFromEventData, hasScheduleChanges, hasValidSchedule, isValidRecurrence, recurrenceOptionToRecurrenceRule, recurrenceRuleToOption

// Module 8339 (getNextBucketedTime)
function getNextBucketedTime(minutes) {
  const diff = arg1 - minutes.minutes() % arg1;
  const obj = importDefault(dependencyMap[5])(minutes);
  return importDefault(dependencyMap[5])(minutes).add(diff, "minutes").seconds(0);
}
function formatDatePreferShorter(get, get2) {
  const value = get.get("years");
  let str = "ddd MMM Do, YYYY \u00B7 LT";
  if (value === get2.get("years")) {
    str = "ddd MMM Do \u00B7 LT";
  }
  return get2(dependencyMap[6]).dateFormat(get, str);
}
function formatDatePrefersRelativeTime(toDate, toDate2) {
  const obj = toDate2(dependencyMap[6]);
  const result = obj.differenceInCalendarDays(toDate.toDate(), toDate2.toDate());
  if (result <= 1) {
    if (result >= 0) {
      const obj2 = toDate2(dependencyMap[6]);
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
  const weekday = new arg1(dependencyMap[3]).Weekday(items6[uTCDay]);
  return weekday;
}
function _getSchedule(scheduledStartTime, scheduledEndTime) {
  let tmp;
  if (null != scheduledStartTime) {
    const obj = { startDate: importDefault(dependencyMap[5])(scheduledStartTime), endDate: undefined };
    tmp = obj;
    if (null != scheduledEndTime) {
      obj.endDate = importDefault(dependencyMap[5])(scheduledEndTime);
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
function getRRule(byWeekday) {
  let tmp = null;
  if (null != byWeekday.byWeekday) {
    const items = [];
    HermesBuiltin.arraySpread(byWeekday.byWeekday, 0);
    tmp = items;
  }
  const byNWeekday = byWeekday.byNWeekday;
  let mapped;
  if (null != byNWeekday) {
    mapped = byNWeekday.map((day) => {
      const weekday = new callback(closure_2[3]).Weekday(day.day, day.n);
      return weekday;
    });
  }
  const date = new Date(byWeekday.start);
  date.setMilliseconds(0);
  const obj = { dtstart: date };
  let date1 = null;
  if (null != byWeekday.end) {
    const _Date = Date;
    date1 = new Date(byWeekday.end);
  }
  obj.until = date1;
  ({ frequency: obj2.freq, interval: obj2.interval } = byWeekday);
  if (null != tmp) {
    mapped = tmp;
  }
  obj.byweekday = mapped;
  let tmp9 = null;
  if (null != byWeekday.byMonth) {
    const items1 = [];
    HermesBuiltin.arraySpread(byWeekday.byMonth, 0);
    tmp9 = items1;
  }
  obj.bymonth = tmp9;
  let tmp12 = null;
  if (null != byWeekday.byMonthDay) {
    const items2 = [];
    HermesBuiltin.arraySpread(byWeekday.byMonthDay, 0);
    tmp12 = items2;
  }
  obj.bymonthday = tmp12;
  let tmp15 = null;
  if (null != byWeekday.byYearDay) {
    const items3 = [];
    HermesBuiltin.arraySpread(byWeekday.byYearDay, 0);
    tmp15 = items3;
  }
  obj.byyearday = tmp15;
  obj.count = byWeekday.count;
  const rRule = new arg1(dependencyMap[3]).RRule(obj);
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
let closure_3 = importDefault(dependencyMap[0]);
const RecurrenceOptions = arg1(dependencyMap[1]).RecurrenceOptions;
({ GuildScheduledEventEntityTypes: closure_5, GuildScheduledEventStatus: closure_6 } = arg1(dependencyMap[2]));
const items = [arg1(dependencyMap[3]).RRule.MO.weekday, arg1(dependencyMap[3]).RRule.TU.weekday, arg1(dependencyMap[3]).RRule.WE.weekday, arg1(dependencyMap[3]).RRule.TH.weekday, arg1(dependencyMap[3]).RRule.FR.weekday];
const items1 = [arg1(dependencyMap[3]).RRule.SU.weekday, arg1(dependencyMap[3]).RRule.MO.weekday, arg1(dependencyMap[3]).RRule.TU.weekday, arg1(dependencyMap[3]).RRule.WE.weekday, arg1(dependencyMap[3]).RRule.TH.weekday];
const items2 = [arg1(dependencyMap[3]).RRule.TU.weekday, arg1(dependencyMap[3]).RRule.WE.weekday, arg1(dependencyMap[3]).RRule.TH.weekday, arg1(dependencyMap[3]).RRule.FR.weekday, arg1(dependencyMap[3]).RRule.SA.weekday];
const items3 = [arg1(dependencyMap[3]).RRule.SA.weekday, arg1(dependencyMap[3]).RRule.SU.weekday];
const items4 = [arg1(dependencyMap[3]).RRule.FR.weekday, arg1(dependencyMap[3]).RRule.SA.weekday];
const items5 = [arg1(dependencyMap[3]).RRule.SU.weekday, arg1(dependencyMap[3]).RRule.MO.weekday];
const items6 = [arg1(dependencyMap[3]).RRule.SU.weekday, arg1(dependencyMap[3]).RRule.MO.weekday, arg1(dependencyMap[3]).RRule.TU.weekday, arg1(dependencyMap[3]).RRule.WE.weekday, arg1(dependencyMap[3]).RRule.TH.weekday, arg1(dependencyMap[3]).RRule.FR.weekday, arg1(dependencyMap[3]).RRule.SA.weekday];
const set = new Set(["STRATEGY_GENRES", "brandColorPrimary"]);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_scheduled_events/utils/ScheduleUtils.tsx");

export const MAX_DAYS_AHEAD_AN_EVENT_CAN_START = 365;
export const MAX_DAYS_AHEAD_AN_EVENT_CAN_END = 366;
export const MAX_YEARS_AHEAD_RECURRING_EVENT = 4;
export const getRecurrenceOptions = function getRecurrenceOptions(startDate) {
  const toDateResult = startDate.toDate();
  const rounded = Math.ceil(toDateResult.getDate() / 7);
  const formatResult = startDate.format("dddd");
  let obj = { id: "none", value: RecurrenceOptions.NONE };
  const intl = arg1(dependencyMap[4]).intl;
  obj.label = intl.string(arg1(dependencyMap[4]).t.0bK0B1);
  const items = [obj, , , , , ];
  obj = { id: "weekly", value: RecurrenceOptions.WEEKLY };
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.label = intl2.formatToPlainString(arg1(dependencyMap[4]).t.B8/yfp, { weekday: formatResult });
  items[1] = obj;
  const obj1 = { id: "biweekly", value: RecurrenceOptions.BIWEEKLY };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj1.label = intl3.formatToPlainString(arg1(dependencyMap[4]).t.z+aIuX, { weekday: formatResult });
  items[2] = obj1;
  const obj2 = { id: "monthly", value: RecurrenceOptions.MONTHLY };
  const intl4 = arg1(dependencyMap[4]).intl;
  obj2.label = intl4.formatToPlainString(arg1(dependencyMap[4]).t.mjOEBk, { nth: rounded, weekday: formatResult });
  items[3] = obj2;
  const obj3 = { id: "yearly", value: RecurrenceOptions.YEARLY };
  const intl5 = arg1(dependencyMap[4]).intl;
  const obj4 = { date: toDateResult.toLocaleString(arg1(dependencyMap[4]).intl.currentLocale, { 1618834222: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003337610788552319, -1200702078: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000171145873638141 }) };
  obj3.label = intl5.formatToPlainString(arg1(dependencyMap[4]).t.5DFcVl, obj4);
  items[4] = obj3;
  const obj5 = { id: "daily", value: RecurrenceOptions.DAILY };
  const intl6 = arg1(dependencyMap[4]).intl;
  obj5.label = intl6.string(arg1(dependencyMap[4]).t.JX8E1E);
  items[5] = obj5;
  if (set.has(toDateResult.getDay())) {
    const currentUser = currentUser.getCurrentUser();
    if (tmp9) {
      const obj6 = { id: "weekendOnly", value: RecurrenceOptions.WEEKEND_ONLY };
      const intl8 = arg1(dependencyMap[4]).intl;
      obj6.label = intl8.string(arg1(dependencyMap[4]).t.hRpynV);
      items.push(obj6);
    }
    const tmp9 = null != currentUser && currentUser.isStaff();
  } else {
    const obj7 = { id: "weekdayOnly", value: RecurrenceOptions.WEEKDAY_ONLY };
    const intl7 = arg1(dependencyMap[4]).intl;
    obj7.label = intl7.string(arg1(dependencyMap[4]).t.jYR/MY);
    items.push(obj7);
  }
  return items;
};
export const getInitialEventStartDate = function getInitialEventStartDate() {
  const addResult = importDefault(dependencyMap[5])().add(1, "hour");
  const hourResult = addResult.hour();
  let sum = hourResult;
  if (addResult.minutes() >= 30) {
    sum = hourResult + 1;
  }
  const obj = importDefault(dependencyMap[5])();
  const hourResult1 = addResult.hour(sum);
  return addResult.hour(sum).minutes(0).seconds(0);
};
export const getInitialEventEndDate = function getInitialEventEndDate(arg0) {
  if (null != arg0) {
    let obj = importDefault(dependencyMap[5])(arg0);
  } else {
    obj = importDefault(dependencyMap[5])();
  }
  return getNextBucketedTime(obj.add(1, "hour"), 60);
};
export { getNextBucketedTime };
export const getEventTimeData = function getEventTimeData(toISOStringResult, toISOStringResult1, get2) {
  let tmp = get2;
  if (null == get2) {
    tmp = importDefault(dependencyMap[5])();
  }
  let obj = importDefault(dependencyMap[5])(toISOStringResult);
  let tmp4;
  if (null != toISOStringResult1) {
    if ("" !== toISOStringResult1) {
      tmp4 = importDefault(dependencyMap[5])(toISOStringResult1);
    }
  }
  let isSameResult = null != toISOStringResult1;
  if (isSameResult) {
    isSameResult = obj.isSame(tmp4, "day");
  }
  obj = {};
  obj.startDateTimeString = formatDatePrefersRelativeTime(obj, tmp);
  if (null == tmp4) {
    obj.endDateTimeString = undefined;
    obj.currentOrPastEvent = obj <= tmp;
    obj.upcomingEvent = obj <= importDefault(dependencyMap[5])().add(1, "hour");
    const obj3 = importDefault(dependencyMap[5])();
    obj.withinStartWindow = obj <= importDefault(dependencyMap[5])().add(15, "minute");
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
  let obj = importDefault(dependencyMap[7]);
  const tmp2Result = importDefault(dependencyMap[5])(obj.extractTimestamp(recurrenceId));
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
      let startDate = importDefault(dependencyMap[5])(scheduled_end_time.scheduled_start_time);
    } else {
      startDate = baseScheduleForRecurrence.startDate;
    }
    obj.startDate = startDate;
    let tmp3;
    if (null != endDate) {
      tmp3 = importDefault(dependencyMap[5])(endDate);
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
    const tmp4 = startDate < importDefault(dependencyMap[5])();
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
  rRule = length;
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
  const betweenResult = rRule.between(date1, date2, true, (arg0, arg1) => arg1 < arg0 + 1);
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
      const rounded = Math.floor(time / importDefault(dependencyMap[8]).Millis.SECOND);
      fromTimestampResult = importDefault(dependencyMap[7]).fromTimestamp(rounded * importDefault(dependencyMap[8]).Millis.SECOND);
      const obj = importDefault(dependencyMap[7]);
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
      const date1 = new Date(importDefault(dependencyMap[7]).extractTimestamp(arg1));
      const uTCHours = date.getUTCHours();
      if (uTCHours === date1.getUTCHours()) {
        const uTCMinutes = date.getUTCMinutes();
        if (uTCMinutes === date1.getUTCMinutes()) {
          const uTCSeconds = date.getUTCSeconds();
          if (uTCSeconds === date1.getUTCSeconds()) {
            const frequency = start.frequency;
            if (arg1(dependencyMap[3]).RRule.WEEKLY === frequency) {
              const uTCDay = date.getUTCDay();
              return uTCDay === date1.getUTCDay();
            } else if (arg1(dependencyMap[3]).RRule.YEARLY === frequency) {
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
      const RRule6 = memo(dependencyMap[3]).RRule;
      let obj = { dtstart: toDateResult2, freq: memo(dependencyMap[3]).RRule.WEEKLY };
      const prototype6 = RRule6.prototype;
      rRule6 = new RRule6(obj);
    } else if (RecurrenceOptions.BIWEEKLY === closure_7) {
      const RRule5 = memo(dependencyMap[3]).RRule;
      obj = { dtstart: toDateResult2, freq: memo(dependencyMap[3]).RRule.WEEKLY, interval: 2 };
      const prototype5 = RRule5.prototype;
      rRule6 = new RRule5(obj);
    } else if (RecurrenceOptions.MONTHLY === closure_7) {
      const RRule4 = memo(dependencyMap[3]).RRule;
      obj1 = { dtstart: toDateResult2, freq: memo(dependencyMap[3]).RRule.MONTHLY };
      const items = [obj1.nth(rounded)];
      obj1.byweekday = items;
      const prototype4 = RRule4.prototype;
      rRule6 = new RRule4(obj1);
    } else if (RecurrenceOptions.YEARLY === closure_7) {
      const RRule3 = memo(dependencyMap[3]).RRule;
      const obj2 = { dtstart: toDateResult2, freq: memo(dependencyMap[3]).RRule.YEARLY };
      const prototype3 = RRule3.prototype;
      rRule6 = new RRule3(obj2);
    } else if (RecurrenceOptions.DAILY === closure_7) {
      const RRule2 = memo(dependencyMap[3]).RRule;
      const obj3 = { dtstart: toDateResult2, freq: memo(dependencyMap[3]).RRule.DAILY };
      const prototype2 = RRule2.prototype;
      rRule6 = new RRule2(obj3);
    } else if (RecurrenceOptions.WEEKDAY_ONLY === closure_7) {
      const RRule = memo(dependencyMap[3]).RRule;
      const obj4 = { dtstart: toDateResult2, freq: memo(dependencyMap[3]).RRule.DAILY, byweekday: tmp };
      const prototype = RRule.prototype;
      rRule6 = new RRule(obj4);
    } else if (RecurrenceOptions.WEEKEND_ONLY === closure_7) {
      const RRule7 = memo(dependencyMap[3]).RRule;
      const obj5 = { dtstart: toDateResult2, freq: memo(dependencyMap[3]).RRule.DAILY, byweekday: tmp2 };
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
    if (recurrenceRule(dependencyMap[3]).RRule.WEEKLY === freq) {
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
    } else if (recurrenceRule(dependencyMap[3]).RRule.YEARLY === freq) {
      return RecurrenceOptions.YEARLY;
    } else if (recurrenceRule(dependencyMap[3]).RRule.MONTHLY === freq) {
      return RecurrenceOptions.MONTHLY;
    } else if (recurrenceRule(dependencyMap[3]).RRule.DAILY === freq) {
      if (null != tmp15.options.byweekday) {
        if (0 !== tmp15.options.byweekday.length) {
          if (obj2.isEqual(tmp15.options.byweekday, getValidWeekdays(startDate))) {
            let DAILY = RecurrenceOptions.WEEKDAY_ONLY;
          } else {
            DAILY = recurrenceRule(dependencyMap[9]).isEqual(tmp15.options.byweekday, getValidWeekends(startDate)) ? tmp5.WEEKEND_ONLY : tmp5.NONE;
            const obj = recurrenceRule(dependencyMap[9]);
          }
          const obj2 = recurrenceRule(dependencyMap[9]);
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
    tmp2 = !guildEvent(dependencyMap[9]).isEqual(closure_1.recurrence_rule, guildEvent.recurrenceRule);
    const obj = guildEvent(dependencyMap[9]);
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
