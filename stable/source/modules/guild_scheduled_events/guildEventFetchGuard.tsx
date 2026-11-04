// Module ID: 8926
// Function ID: 8927
// Name: guildEventFetchGuard
// Dependencies: [1104, 11, 8927, 569, 2]
// Exports: forgetTransientGuildEventFetchFailures, guardGuildEventFetch, isGuildEventUnavailableError, isPlausibleGuildEventTarget, onGuildEventFetchRetryable, resetGuildEventFetchGuardForTest

// Module 8926 (guildEventFetchGuard)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import BackoffDefault from "Backoff" /* 569 */;
import DurationsDefault from "Durations" /* 1104 */;
import guildEventEmbedFetchQueue from "guildEventEmbedFetchQueue" /* 8927 */;
import size from "module_2" /* 2 */;

let set3;

const notifyRetryable2 = function notifyRetryable(arg0) {
  const value = map7.get(arg0);
  obj = map7;
  if (null != value) {
    obj.delete(arg0);
    const item = value.forEach(f146079);
  }
};
const guard2 = function guard(arg0, arg1, arg2) {
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let str = obj.priority;
  if (str === undefined) {
    str = "background";
  }
  let value18;
  let cleanupPromise;
  const combined = "" + arg0 + "/" + arg1;
  const obj2 = combined;
  let value2 = combined.get(combined);
  if (null != value2) {
    if ("foreground" === str) {
      const request2 = value2.request;
      let value3 = map6.get(combined);
      const deleteResult = map6.delete(combined);
      let request1;
      set3 = map6.set;
      const tmp45 = map6;
      if (value3 != null) {
        request1 = value3.request;
      }
      if (request1 !== request2) {
        const _Date4 = Date;
        value3 = { startedAt: Date.now(), request: request2 };
        const obj6 = { startedAt: Date.now(), request: request2 };
      }
      set3(combined, value3);
      if (tmp45.size > map6) {
        const iter4 = map6.keys();
        const value4 = iter4.next().value;
        while (null != value4) {
          let deleteResult1 = obj13.delete(value4);
          if (obj13.size <= map6) {
            break;
          }
        }
      }
    }
    return value2.request;
  }
  const value15 = map6.get(combined);
  if ("foreground" === str) {
    if (null != value15) {
      const _Date = Date;
      if (Date.now() - value15.startedAt < 2000) {
        let request = value15.request;
        let value16 = obj3.get(combined);
        let deleteResult2 = obj3.delete(combined);
        let request3;
        set2 = obj3.set;
        if (value16 != null) {
          request3 = value16.request;
        }
        if (request3 !== request) {
          const _Date3 = Date;
          value16 = { startedAt: Date.now(), request };
          const obj8 = { startedAt: Date.now(), request };
        }
        set2(combined, value16);
        if (map6.size > map6) {
          const iter3 = map6.keys();
          const value17 = iter3.next().value;
          while (null != value17) {
            let deleteResult3 = obj11.delete(value17);
            if (obj11.size <= map6) {
              break;
            }
          }
        }
        return value15.request;
      }
    }
  }
  if ("background" === str) {
    if (cleanupPromise.has(combined)) {
      const self5 = this;
      return Promise.reject(new GuildEventUnavailableError("guild event is unavailable"));
    }
  }
  let obj4 = value18;
  value18 = value18.get(combined);
  if (null != value18) {
    let deleteResult4 = obj4.delete(combined);
    result = obj4.set(combined, value18);
    if (obj4.size > map6) {
      let obj5 = value18;
      let iter = value18.keys();
      let value = iter.next().value;
      while (null != value) {
        let value19 = obj5.get(value);
        if (value19 != null) {
          let cancelResult = value19.cancel();
        }
        let deleteResult5 = obj5.delete(value);
        let obj7 = map7;
        let value20 = map7.get(value);
        if (null != value20) {
          let deleteResult6 = obj7.delete(value);
          let item = value20.forEach(f146079);
        }
        if (obj5.size <= map6) {
          break;
        }
      }
    }
    if ("background" === str) {
      if (value18.pending) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const reject2 = Promise.reject;
        const error = new Error("guild event fetch is backing off");
        return reject2(error);
      }
    }
  }
  if ("background" === str) {
    if (obj2.size >= map6) {
      const _Error = Error;
      let self = this;
      let self2 = this;
      const error1 = new Error("too many pending guild event fetches");
      return reject(error1);
    }
  }
  const resolved = Promise.resolve();
  const nextPromise = resolved.then(arg2);
  const nextPromise1 = nextPromise.then((result) => {
    const value = map4.get(combined);
    let request;
    if (value != null) {
      request = value.request;
    }
    if (request === cleanupPromise) {
      const value2 = map5.get(tmp);
      obj = map5;
      if (value2 != null) {
        value2.succeed();
      }
      obj.delete(combined);
      set2.delete(combined);
    }
    return result;
  });
  const catchPromise = nextPromise1.catch(function(error) {
    let tmp = dependencyMap;
    if (!(error instanceof guildEventEmbedFetchQueue.GuildEventEmbedFetchQueueError)) {
      const value2 = map4.get(combined);
      let request;
      if (value2 != null) {
        request = value2.request;
      }
      if (request === cleanupPromise) {
        let flag = true;
        if (!(error instanceof GuildEventUnavailableError)) {
          let status;
          if (typeof error === "object") {
            if (null != error) {
              if ("status" in error) {
                status = error.status;
              }
            }
          }
          let hasItem = typeof status === "number";
          if (typeof status === "number") {
            hasItem = set.has(status);
          }
          flag = hasItem;
        }
        if (flag) {
          const value7 = map5.get(tmp3);
          const obj5 = map5;
          if (value7 != null) {
            value7.cancel();
          }
          obj5.delete(tmp3);
          set2.delete(combined);
          set2.add(combined);
          if (set2.size > c3) {
            const iter2 = set2.values();
            const value8 = iter2.next().value;
            while (null != value8) {
              let deleteResult2 = obj7.delete(value8);
              if (obj7.size <= c3) {
                break;
              }
            }
          }
          throw error;
        } else {
          let tmp112 = value18;
          if (value18 == null) {
            const tmp11 = BackoffDefault;
            result = 10 * DurationsDefault.Millis.SECOND;
            const self = this;
            const self2 = this;
            tmp112 = new tmp11(result, 10 * DurationsDefault.Millis.MINUTE, true);
          }
          map5.delete(combined);
          const result1 = map5.set(tmp3, tmp112);
          if (map5.size > map6) {
            const iter = map5.keys();
            let value = iter.next().value;
            while (null != value) {
              let value9 = obj2.get(value);
              if (value9 != null) {
                let cancelResult1 = value9.cancel();
              }
              let deleteResult4 = obj2.delete(value);
              let obj4 = map7;
              let value10 = map7.get(value);
              if (null != value10) {
                let deleteResult5 = obj4.delete(value);
                let item = value10.forEach(f146079);
              }
              if (obj2.size <= map6) {
                break;
              }
            }
          }
          tmp112.cancel();
          tmp112.fail(() => queueMicrotask(() => {
            const value = closure_2_4.get(closure_1_0);
            obj = closure_2_4;
            const tmp = closure_1_0;
            if (null != value) {
              obj.delete(tmp);
              const item = value.forEach(f146079);
            }
          }));
          throw error;
        }
      }
    }
    throw error;
  });
  cleanupPromise = catchPromise.finally(() => {
    const value = map4.get(combined);
    let request;
    obj = map4;
    const tmp = combined;
    if (value != null) {
      request = value.request;
    }
    if (request === cleanupPromise) {
      obj.delete(tmp);
    }
  });
  let result1 = obj2.set(combined, { request: cleanupPromise, priority: str });
  if ("foreground" === str) {
    let value21 = map6.get(combined);
    map6.delete(combined);
    let request4;
    set = map6.set;
    const tmp16 = map6;
    if (value21 != null) {
      request4 = value21.request;
    }
    if (request4 !== cleanupPromise) {
      const _Date2 = Date;
      value21 = { startedAt: Date.now(), request: cleanupPromise };
      const obj10 = { startedAt: Date.now(), request: cleanupPromise };
    }
    const result2 = set(combined, value21);
    if (tmp16.size > map6) {
      let iter2 = map6.keys();
      const value22 = iter2.next().value;
      while (null != value22) {
        let deleteResult8 = obj9.delete(value22);
        if (obj9.size <= map6) {
          break;
        }
      }
    }
  }
  return cleanupPromise;
};
function onRetryable(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const value = map7.get(arg0);
  set = value;
  let obj2 = value;
  obj = map7;
  if (null == value) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    result = obj.set(arg0, set);
    obj2 = set;
  }
  obj2.add(arg1);
  return () => {
    set.delete(closure_1);
    let tmp3 = 0 === set.size;
    const tmp = set;
    if (tmp3) {
      tmp3 = map7.get(closure_0) === tmp;
    }
    if (tmp3) {
      map7.delete(closure_0);
    }
  };
}
function forgetTransientFailures() {
  const items = [...map5.keys()];
  const values = map5.values();
  for (const item10013 of values) {
    let cancelResult = item10013.cancel();
    continue;
  }
  map5.clear();
  const item = items.forEach(notifyRetryable);
}
function reset() {
  map4.clear();
  map6.clear();
  set2.clear();
  map7.clear();
  const values = map5.values();
  for (const item10019 of values) {
    let cancelResult = item10019.cancel();
    continue;
  }
  map5.clear();
}
const f146079 = (fn) => fn();
let c3 = 1024;
const UTCResult = Date.UTC(2021, 0, 1);
let result = 15 * DurationsDefault.Millis.MINUTE;
const hasOwnProperty = result;
class GuildEventUnavailableError extends Error {
}
let set = new Set([400, 403, 404]);
new Map();
new Map();
new Set();
new Map();
new Map();
const navigation = { guard: guard2, onRetryable, forgetTransientFailures, reset };
const notifyRetryable = notifyRetryable2;
const map4 = new Map();
const map5 = new Map();
let set2 = new Set();
const map6 = new Map();
const map7 = new Map();
let obj = { guard: guard2, onRetryable, forgetTransientFailures, reset };
const guard = obj.guard;
let result1 = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventFetchGuard.tsx");

export const MAX_TRACKED_GUILD_EVENT_FETCHES = 1024;
export const GUILD_EVENT_FOREGROUND_THROTTLE_MS = 2000;
export const GUILD_EVENT_MIN_TIMESTAMP = UTCResult;
export const GUILD_EVENT_FUTURE_SKEW_MS = result;
export const isPlausibleGuildEventTarget = function isPlausibleGuildEventTarget(arg0, arg1) {
  let timestamp = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  obj = SnowflakeUtilsDefault;
  if (obj.isProbablyAValidSnowflake(arg0)) {
    const tmp3Result = SnowflakeUtilsDefault;
    if (tmp3Result.isProbablyAValidSnowflake(arg1)) {
      const tmp3Result2 = SnowflakeUtilsDefault;
      const extractTimestampResult = tmp3Result2.extractTimestamp(arg1);
      return extractTimestampResult >= UTCResult && extractTimestampResult <= timestamp + hasOwnProperty;
    }
  }
  return false;
};
export { GuildEventUnavailableError };
export const isGuildEventUnavailableError = function isGuildEventUnavailableError(status) {
  if (status instanceof GuildEventUnavailableError) {
    return true;
  } else {
    status = undefined;
    if (typeof status === "object") {
      if (null != status) {
        if ("status" in status) {
          status = status.status;
        }
      }
    }
    let hasItem = typeof status === "number";
    if (typeof status === "number") {
      hasItem = set.has(status);
    }
    return hasItem;
  }
};
export const guardGuildEventFetch = function guardGuildEventFetch(c0, c1, arg2, arg3) {
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let str = obj.priority;
  if (str == null) {
    str = "background";
  }
  if ("background" === str) {
    let rejectResult;
    const _Date = Date;
    const timestamp = Date.now();
    let flag = false;
    const obj4 = SnowflakeUtilsDefault;
    if (obj4.isProbablyAValidSnowflake(c0)) {
      flag = false;
      const tmp9Result = SnowflakeUtilsDefault;
      if (tmp9Result.isProbablyAValidSnowflake(c1)) {
        const tmp9Result2 = SnowflakeUtilsDefault;
        const extractTimestampResult = tmp9Result2.extractTimestamp(c1);
        flag = extractTimestampResult >= UTCResult && extractTimestampResult <= timestamp + hasOwnProperty;
        const tmp3 = extractTimestampResult >= UTCResult && extractTimestampResult <= timestamp + hasOwnProperty;
      }
    }
    if (!flag) {
      const self = this;
      rejectResult = Promise.reject(new GuildEventUnavailableError("guild event id is not plausible"));
    }
    return rejectResult;
  }
  rejectResult = navigation.guard(c0, c1, arg2, obj);
};
export const guardGuildEventUserCountFetch = guard;
export const onGuildEventFetchRetryable = function onGuildEventFetchRetryable(arg0, arg1, arg2) {
  return navigation.onRetryable("" + arg0 + "/" + arg1, arg2);
};
export const forgetTransientGuildEventFetchFailures = function forgetTransientGuildEventFetchFailures() {
  result = navigation.forgetTransientFailures();
  const result1 = obj.forgetTransientFailures();
};
export const resetGuildEventFetchGuardForTest = function resetGuildEventFetchGuardForTest() {
  navigation.reset();
  obj.reset();
};
