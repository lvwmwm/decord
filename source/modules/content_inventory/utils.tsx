// Module ID: 7804
// Function ID: 62276
// Name: calculateTimestampDurations
// Dependencies: []
// Exports: formatActiveA11yTimestamp, formatEntryTimestamp, getAggregateRange, getEpisodeBadgeText, getFullResurrectedBadgeText, getMarathonDescription, getResurrectedEntryLastPlayTime, getRichGameStateBadgeText, getTrendingType, isEntryLive, isEntryMarathon, isEntryNew, isEntryRecent, isEntryTopGame, isValidStreak

// Module 7804 (calculateTimestampDurations)
function calculateTimestampDurations(end, now) {
  const bound = Math.max(end - now, 0);
  const result = bound / importDefault(dependencyMap[0]).Millis.SECOND;
  const obj = {};
  const rounded = Math.floor(result);
  obj.seconds = rounded % importDefault(dependencyMap[0]).Seconds.MINUTE;
  const rounded1 = Math.floor(result / importDefault(dependencyMap[0]).Seconds.MINUTE);
  obj.minutes = rounded1 % importDefault(dependencyMap[0]).Seconds.MINUTE;
  obj.hours = Math.floor(result / importDefault(dependencyMap[0]).Seconds.HOUR);
  obj.days = Math.floor(result / importDefault(dependencyMap[0]).Seconds.DAY);
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
    let start = importDefault(dependencyMap[1]).extractTimestamp(end.id);
    const obj = importDefault(dependencyMap[1]);
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
    const intl = require(dependencyMap[2]).intl;
    const obj = { hours };
    items.push(intl.formatToPlainString(require(dependencyMap[2]).t.xCjYxK, obj));
  }
  const intl2 = require(dependencyMap[2]).intl;
  items.push(intl2.formatToPlainString(require(dependencyMap[2]).t.iXLF9W, { minutes }));
  const intl3 = require(dependencyMap[2]).intl;
  items.push(intl3.formatToPlainString(require(dependencyMap[2]).t.geSp4K, { seconds }));
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
  const obj2 = importDefault(dependencyMap[3])(timestamp);
  const tmp = importDefault(dependencyMap[3]);
  const diffResult = obj2.diff(tmp(importDefault(dependencyMap[1]).extractTimestamp(entry.id)), "s");
  const absolute = Math.abs(diffResult);
  if (absolute < importDefault(dependencyMap[0]).Seconds.MINUTE) {
    return formatSet.secondsAgo(diffResult);
  } else if (absolute < importDefault(dependencyMap[0]).Seconds.HOUR) {
    const _Math5 = Math;
    return formatSet.minutesAgo(Math.round(diffResult / importDefault(dependencyMap[0]).Seconds.MINUTE));
  } else if (absolute < 12 * importDefault(dependencyMap[0]).Seconds.HOUR) {
    const _Math4 = Math;
    return formatSet.hoursAgo(Math.round(diffResult / importDefault(dependencyMap[0]).Seconds.HOUR));
  } else if (absolute < 9 * importDefault(dependencyMap[0]).Seconds.DAY) {
    const _Math3 = Math;
    return formatSet.daysAgo(Math.round(diffResult / importDefault(dependencyMap[0]).Seconds.DAY));
  } else if (absolute < 4 * importDefault(dependencyMap[0]).Seconds.WEEK) {
    const _Math2 = Math;
    return formatSet.weeksAgo(Math.round(diffResult / (7 * importDefault(dependencyMap[0]).Seconds.DAY)));
  } else {
    const _Math = Math;
    return formatSet.monthsAgo(Math.round(diffResult / importDefault(dependencyMap[0]).Seconds.DAYS_30));
  }
  const obj3 = importDefault(dependencyMap[1]);
}
function getTrait(contentInventoryEntry, AGGREGATE_COUNT) {
  const require = AGGREGATE_COUNT;
  const traits = contentInventoryEntry.traits;
  return traits.find((type) => type.type === arg1);
}
function isEntryActive(entry) {
  let is_live;
  const tmp2 = getTrait(entry, require(dependencyMap[4]).ContentInventoryTraitType.IS_LIVE);
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
  const tmp2 = getTrait(contentInventoryEntry, require(dependencyMap[4]).ContentInventoryTraitType.DURATION_SECONDS);
  if (null != tmp2) {
    duration_seconds = tmp2.duration_seconds;
  }
  return duration_seconds;
}
function getStreakCount(entry) {
  let streak_count_days;
  const tmp2 = getTrait(entry, require(dependencyMap[4]).ContentInventoryTraitType.STREAK_DAYS);
  if (null != tmp2) {
    streak_count_days = tmp2.streak_count_days;
  }
  return streak_count_days;
}
let closure_3 = {
  secondsAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.EOrEJl, { count });
  },
  minutesAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.LRNgHp, { count });
  },
  hoursAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.raJpz3, { count });
  },
  daysAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.KkvKhi, { count });
  },
  weeksAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.sDtO6D, { count });
  },
  monthsAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.ITymou, { count });
  }
};
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/content_inventory/utils.tsx");

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
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.jfUoRQ, { count });
  },
  minutesAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.DmvRVO, { count });
  },
  hoursAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.AfXezt, { count });
  },
  daysAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.Lru1rV, { count });
  },
  weeksAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.jovF+x, { count });
  },
  monthsAgo(count) {
    const intl = require(dependencyMap[2]).intl;
    return intl.formatToPlainString(require(dependencyMap[2]).t.nmSbST, { count });
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
  const tmp2 = getTrait(entry, require(dependencyMap[4]).ContentInventoryTraitType.FIRST_TIME);
  if (null != tmp2) {
    first_time = tmp2.first_time;
  }
  return null != first_time && first_time;
};
export const isEntryRecent = function isEntryRecent(id) {
  const obj = importDefault(dependencyMap[1]);
  return importDefault(dependencyMap[1]).age(id.id) / importDefault(dependencyMap[0]).Millis.HOUR < 48;
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
  const tmp2 = getTrait(contentInventoryEntry, require(dependencyMap[4]).ContentInventoryTraitType.AGGREGATE_RANGE);
  if (null != tmp2) {
    range = tmp2.range;
  }
  return range;
};
export const isEntryMarathon = function isEntryMarathon(entry) {
  let marathon;
  const tmp2 = getTrait(entry, require(dependencyMap[4]).ContentInventoryTraitType.MARATHON);
  if (null != tmp2) {
    marathon = tmp2.marathon;
  }
  return marathon;
};
export const getResurrectedEntryLastPlayTime = function getResurrectedEntryLastPlayTime(entry) {
  const tmp = getTrait(entry, require(dependencyMap[4]).ContentInventoryTraitType.RESURRECTED);
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
  let obj = require(dependencyMap[5]);
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
  const intl = require(dependencyMap[2]).intl;
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
  return intl.formatToPlainString(require(dependencyMap[2]).t.NXBtjF, obj);
};
export const getEpisodeBadgeText = function getEpisodeBadgeText(large_text) {
  if (null != large_text) {
    if ("" !== large_text) {
      let obj = /\w+ (\d+), \w+ (\d+)/;
      const match = obj.exec(large_text);
      let formatToPlainStringResult = null;
      if (null != match) {
        const intl = require(dependencyMap[2]).intl;
        obj = { seasonNum: match[1], episodeNum: match[2] };
        formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[2]).t.ijVm6y, obj);
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
          const intl2 = require(dependencyMap[2]).intl;
          let obj = { count: tmp2, max: tmp4 };
          let formatToPlainStringResult = intl2.formatToPlainString(require(dependencyMap[2]).t.wmUSiy, obj);
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
    const intl = require(dependencyMap[2]).intl;
    obj = { count: tmp2 };
    formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[2]).t.UTYMsa, obj);
  }
};
export const isEntryTopGame = function isEntryTopGame(contentInventoryEntry) {
  return contentInventoryEntry.content_type === require(dependencyMap[6]).ContentInventoryEntryType.TOP_GAME;
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
    const obj = importDefault(dependencyMap[1]);
    const diff = Date.now() - importDefault(dependencyMap[1]).extractTimestamp(id.id);
    return diff <= 48 * importDefault(dependencyMap[0]).Millis.HOUR;
  }
};
export const getMarathonDescription = function getMarathonDescription(entry) {
  const tmp = getEntryDuration(entry);
  if (null == tmp) {
    return {};
  } else {
    const _Math = Math;
    const rounded = Math.round(tmp / importDefault(dependencyMap[0]).Seconds.HOUR);
    if (rounded <= 0) {
      let obj = {};
    } else {
      obj = {};
      const intl = require(dependencyMap[2]).intl;
      obj = { hours: rounded };
      obj.text = intl.formatToPlainString(require(dependencyMap[2]).t.vZaMem, obj);
      const intl2 = require(dependencyMap[2]).intl;
      obj = { hours: rounded };
      obj.tooltipText = intl2.formatToPlainString(require(dependencyMap[2]).t.S5F485, obj);
    }
    return obj;
  }
};
export const getTrendingType = function getTrendingType(entry) {
  let trending;
  const tmp2 = getTrait(entry, require(dependencyMap[4]).ContentInventoryTraitType.TRENDING_CONTENT);
  if (null != tmp2) {
    trending = tmp2.trending;
  }
  return trending;
};
