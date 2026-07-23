// Module ID: 7815
// Function ID: 62348
// Name: calculateTimestampDurations
// Dependencies: [664, 21, 1212, 3712, 7816, 3355, 7810, 2]
// Exports: formatActiveA11yTimestamp, formatEntryTimestamp, getAggregateRange, getEpisodeBadgeText, getFullResurrectedBadgeText, getMarathonDescription, getResurrectedEntryLastPlayTime, getRichGameStateBadgeText, getTrendingType, isEntryLive, isEntryMarathon, isEntryNew, isEntryRecent, isEntryTopGame, isValidStreak

// Module 7815 (calculateTimestampDurations)
function calculateTimestampDurations(end, now) {
  const bound = Math.max(end - now, 0);
  const result = bound / importDefault(664).Millis.SECOND;
  const obj = {};
  const rounded = Math.floor(result);
  obj.seconds = rounded % importDefault(664).Seconds.MINUTE;
  const rounded1 = Math.floor(result / importDefault(664).Seconds.MINUTE);
  obj.minutes = rounded1 % importDefault(664).Seconds.MINUTE;
  obj.hours = Math.floor(result / importDefault(664).Seconds.HOUR);
  obj.days = Math.floor(result / importDefault(664).Seconds.DAY);
  return obj;
}
function calculateActiveTimestampDurations(end, now) {
  end = undefined;
  if ("end" in end) {
    end = end.end;
  }
  let isCountDown = "isCountDown" in end;
  if (isCountDown) {
    isCountDown = null != end.isCountDown;
  }
  if (isCountDown) {
    isCountDown = end.isCountDown;
  }
  if (isCountDown) {
    if (null != end) {
      if (end > now) {
        return calculateTimestampDurations(end, now);
      }
    }
  }
  if ("id" in end) {
    let start = importDefault(21).extractTimestamp(end.id);
    const obj = importDefault(21);
  } else {
    start = end.start;
  }
  let bound = now;
  if (null != end) {
    bound = now;
    if (!isCountDown) {
      const _Math = Math;
      bound = Math.min(end, now);
    }
  }
  return calculateTimestampDurations(bound, start);
}
function formatActiveTimestamp(entry, now) {
  let hours;
  let minutes;
  function padNumber(minutes) {
    return String(minutes).padStart(2, "0");
  }
  const tmp = calculateActiveTimestampDurations(entry, now);
  ({ minutes, hours } = tmp);
  let padNumberResult = minutes;
  if (hours > 0) {
    padNumberResult = padNumber(minutes);
  }
  const padNumberResult1 = padNumber(tmp.seconds);
  if (hours > 0) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + hours + ":" + padNumberResult + ":" + padNumberResult1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + padNumberResult + ":" + padNumberResult1;
  }
  return combined;
}
function formatTimestampToA11yLabel(hours) {
  let minutes;
  let seconds;
  hours = hours.hours;
  const items = [];
  ({ minutes, seconds } = hours);
  if (hours > 0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { hours };
    items.push(intl.formatToPlainString(require(1212) /* getSystemLocale */.t.xCjYxK, obj));
  }
  const intl2 = require(1212) /* getSystemLocale */.intl;
  items.push(intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes }));
  const intl3 = require(1212) /* getSystemLocale */.intl;
  items.push(intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.geSp4K, { seconds }));
  return items.join(", ");
}
function formatEndedTimestamp(entry, arg1, timestamp, arg3) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let formatSet = obj.formatSet;
  if (formatSet === undefined) {
    formatSet = closure_3;
  }
  const obj2 = importDefault(3712)(timestamp);
  const tmp = importDefault(3712);
  const diffResult = obj2.diff(tmp(importDefault(21).extractTimestamp(entry.id)), "s");
  const absolute = Math.abs(diffResult);
  if (absolute < importDefault(664).Seconds.MINUTE) {
    return formatSet.secondsAgo(diffResult);
  } else if (absolute < importDefault(664).Seconds.HOUR) {
    const _Math5 = Math;
    return formatSet.minutesAgo(Math.round(diffResult / importDefault(664).Seconds.MINUTE));
  } else if (absolute < 12 * importDefault(664).Seconds.HOUR) {
    const _Math4 = Math;
    return formatSet.hoursAgo(Math.round(diffResult / importDefault(664).Seconds.HOUR));
  } else if (absolute < 9 * importDefault(664).Seconds.DAY) {
    const _Math3 = Math;
    return formatSet.daysAgo(Math.round(diffResult / importDefault(664).Seconds.DAY));
  } else if (absolute < 4 * importDefault(664).Seconds.WEEK) {
    const _Math2 = Math;
    return formatSet.weeksAgo(Math.round(diffResult / (7 * importDefault(664).Seconds.DAY)));
  } else {
    const _Math = Math;
    return formatSet.monthsAgo(Math.round(diffResult / importDefault(664).Seconds.DAYS_30));
  }
  const obj3 = importDefault(21);
}
function getTrait(contentInventoryEntry, AGGREGATE_COUNT) {
  let closure_0 = AGGREGATE_COUNT;
  const traits = contentInventoryEntry.traits;
  return traits.find((type) => type.type === closure_0);
}
function isEntryActive(entry) {
  let is_live;
  const tmp2 = getTrait(entry, require(7816) /* ContentInventoryTraitType */.ContentInventoryTraitType.IS_LIVE);
  if (null != tmp2) {
    is_live = tmp2.is_live;
  }
  return null != is_live && is_live;
}
function isEntryExpired(content) {
  let tmp = null != content.expires_at;
  if (tmp) {
    const _Date = Date;
    const date = new Date(content.expires_at);
    const _Date2 = Date;
    const date1 = new Date();
    tmp = date < date1;
  }
  return tmp;
}
function getEntryDuration(contentInventoryEntry) {
  let duration_seconds;
  const tmp2 = getTrait(contentInventoryEntry, require(7816) /* ContentInventoryTraitType */.ContentInventoryTraitType.DURATION_SECONDS);
  if (null != tmp2) {
    duration_seconds = tmp2.duration_seconds;
  }
  return duration_seconds;
}
function getStreakCount(entry) {
  let streak_count_days;
  const tmp2 = getTrait(entry, require(7816) /* ContentInventoryTraitType */.ContentInventoryTraitType.STREAK_DAYS);
  if (null != tmp2) {
    streak_count_days = tmp2.streak_count_days;
  }
  return streak_count_days;
}
let closure_3 = {
  secondsAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.EOrEJl, { count });
  },
  minutesAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.LRNgHp, { count });
  },
  hoursAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.raJpz3, { count });
  },
  daysAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.KkvKhi, { count });
  },
  weeksAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.sDtO6D, { count });
  },
  monthsAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.ITymou, { count });
  }
};
let result = require("getSystemLocale").fileFinishedImporting("modules/content_inventory/utils.tsx");

export { calculateTimestampDurations };
export { calculateActiveTimestampDurations };
export { formatActiveTimestamp };
export { formatTimestampToA11yLabel };
export const formatActiveA11yTimestamp = function formatActiveA11yTimestamp(end, now) {
  const tmp = calculateActiveTimestampDurations(end, now);
  return formatTimestampToA11yLabel({ hours: tmp.hours, minutes: tmp.minutes, seconds: tmp.seconds });
};
export const A11Y_FORMAT_SET = {
  secondsAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.jfUoRQ, { count });
  },
  minutesAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.DmvRVO, { count });
  },
  hoursAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.AfXezt, { count });
  },
  daysAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Lru1rV, { count });
  },
  weeksAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["jovF+x"], { count });
  },
  monthsAgo(count) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.nmSbST, { count });
  }
};
export { formatEndedTimestamp };
export const formatEntryTimestamp = function formatEntryTimestamp(contentInventoryEntry, locale, time, arg3) {
  let timestamp = time;
  let obj = arg3;
  if (time === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (obj === undefined) {
    obj = {};
  }
  if (isEntryActive(contentInventoryEntry)) {
    let tmp7 = formatActiveTimestamp(contentInventoryEntry, timestamp);
  } else {
    tmp7 = formatEndedTimestamp(contentInventoryEntry, 0, timestamp, obj);
  }
  return tmp7;
};
export { getTrait };
export { isEntryActive };
export const isEntryNew = function isEntryNew(entry) {
  let first_time;
  const tmp2 = getTrait(entry, require(7816) /* ContentInventoryTraitType */.ContentInventoryTraitType.FIRST_TIME);
  if (null != tmp2) {
    first_time = tmp2.first_time;
  }
  return null != first_time && first_time;
};
export const isEntryRecent = function isEntryRecent(id) {
  const obj = importDefault(21);
  return importDefault(21).age(id.id) / importDefault(664).Millis.HOUR < 48;
};
export { isEntryExpired };
export const isEntryLive = function isEntryLive(entry) {
  let tmp = isEntryActive(entry);
  if (tmp) {
    tmp = !isEntryExpired(entry);
  }
  return tmp;
};
export { getEntryDuration };
export const getAggregateRange = function getAggregateRange(contentInventoryEntry) {
  let range;
  const tmp2 = getTrait(contentInventoryEntry, require(7816) /* ContentInventoryTraitType */.ContentInventoryTraitType.AGGREGATE_RANGE);
  if (null != tmp2) {
    range = tmp2.range;
  }
  return range;
};
export const isEntryMarathon = function isEntryMarathon(entry) {
  let marathon;
  const tmp2 = getTrait(entry, require(7816) /* ContentInventoryTraitType */.ContentInventoryTraitType.MARATHON);
  if (null != tmp2) {
    marathon = tmp2.marathon;
  }
  return marathon;
};
export const getResurrectedEntryLastPlayTime = function getResurrectedEntryLastPlayTime(entry) {
  const tmp = getTrait(entry, require(7816) /* ContentInventoryTraitType */.ContentInventoryTraitType.RESURRECTED);
  let prop;
  if (null != tmp) {
    prop = tmp.resurrected_last_played;
  }
  let date;
  if (null != prop) {
    const _Date = Date;
    date = new Date(tmp.resurrected_last_played);
  }
  return date;
};
export const getFullResurrectedBadgeText = function getFullResurrectedBadgeText(start) {
  let obj = require(3355);
  obj = { start, end: new Date() };
  const intervalToDurationResult = obj.intervalToDuration(obj);
  const months = intervalToDurationResult.months;
  let num = 0;
  if (undefined !== months) {
    num = months;
  }
  const weeks = intervalToDurationResult.weeks;
  let num2 = 0;
  if (undefined !== weeks) {
    num2 = weeks;
  }
  const days = intervalToDurationResult.days;
  let num3 = 0;
  if (undefined !== days) {
    num3 = days;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { months: num };
  let num4 = 0;
  if (num <= 0) {
    num4 = num2;
  }
  obj.weeks = num4;
  let num5 = 0;
  if (num <= 0) {
    num5 = 0;
    if (num2 <= 0) {
      num5 = num3;
    }
  }
  obj.days = num5;
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.NXBtjF, obj);
};
export const getEpisodeBadgeText = function getEpisodeBadgeText(large_text) {
  if (null != large_text) {
    if ("" !== large_text) {
      let obj = /\w+ (\d+), \w+ (\d+)/;
      const match = obj.exec(large_text);
      let formatToPlainStringResult = null;
      if (null != match) {
        const intl = require(1212) /* getSystemLocale */.intl;
        obj = { seasonNum: match[1], episodeNum: match[2] };
        formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.ijVm6y, obj);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};
export const getRichGameStateBadgeText = function getRichGameStateBadgeText(state, party) {
  let first;
  if (null != party) {
    const size = party.size;
    if (null != size) {
      first = size[0];
    }
  }
  let tmp2;
  if (null != first) {
    tmp2 = first;
  }
  let tmp3;
  if (null != party) {
    const size2 = party.size;
    if (null != size2) {
      tmp3 = size2[1];
    }
  }
  if (null != tmp2) {
    if (null != tmp4) {
      if (tmp2 > 0) {
        if (tmp4 > 0) {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          let obj = { count: tmp2, max: tmp4 };
          let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.wmUSiy, obj);
        }
        if (null != formatToPlainStringResult) {
          if (null != state) {
            const _HermesInternal = HermesInternal;
            let combined = "" + state + " (" + formatToPlainStringResult + ")";
          }
          return combined;
        }
        combined = formatToPlainStringResult;
        if (null != state) {
          combined = state;
        }
      }
    }
  }
  let tmp5 = null != tmp2;
  if (tmp5) {
    tmp5 = tmp2 > 0;
  }
  if (tmp5) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { count: tmp2 };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.UTYMsa, obj);
  }
};
export const isEntryTopGame = function isEntryTopGame(contentInventoryEntry) {
  return contentInventoryEntry.content_type === require(7810) /* ContentInventoryEntryType */.ContentInventoryEntryType.TOP_GAME;
};
export { getStreakCount };
export const isValidStreak = function isValidStreak(id) {
  const tmp = getStreakCount(id);
  if (null == tmp) {
    return false;
  } else if (tmp < 3) {
    return false;
  } else {
    const _Date = Date;
    const obj = importDefault(21);
    const diff = Date.now() - importDefault(21).extractTimestamp(id.id);
    return diff <= 48 * importDefault(664).Millis.HOUR;
  }
};
export const getMarathonDescription = function getMarathonDescription(entry) {
  const tmp = getEntryDuration(entry);
  if (null == tmp) {
    return { text: null, tooltipText: null };
  } else {
    const _Math = Math;
    const rounded = Math.round(tmp / importDefault(664).Seconds.HOUR);
    if (rounded <= 0) {
      let obj = { text: null, tooltipText: null };
    } else {
      obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { hours: rounded };
      obj.text = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.vZaMem, obj);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { hours: rounded };
      obj.tooltipText = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.S5F485, obj);
    }
    return obj;
  }
};
export const getTrendingType = function getTrendingType(entry) {
  let trending;
  const tmp2 = getTrait(entry, require(7816) /* ContentInventoryTraitType */.ContentInventoryTraitType.TRENDING_CONTENT);
  if (null != tmp2) {
    trending = tmp2.trending;
  }
  return trending;
};
