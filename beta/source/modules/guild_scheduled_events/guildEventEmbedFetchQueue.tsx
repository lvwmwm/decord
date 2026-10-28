// Module ID: 8927
// Function ID: 8928
// Name: guildEventEmbedFetchQueue
// Dependencies: [2]
// Exports: resetGuildEventEmbedFetchQueueForTest

// Module 8927 (guildEventEmbedFetchQueue)
import size from "module_2" /* 2 */;

let closure_8;

let onCapacity;
let schedule;
const drain2 = function drain() {
  let timeout;
  let tmp11;
  function notifyCapacity() {
    let diff = closure_1_3 - length.length;
    const iter = set[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (diff <= 0) {
        iter.return();
        break;
      } else {
        let deleteResult = set.delete(tmp4);
        diff = diff - 1;
        let tmp4Result = tmp4();
        continue;
      }
    }
  }
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = undefined;
  }
  const timestamp = Date.now();
  let tmp5 = closure_6;
  let arr = closure_6;
  if (closure_6.length > 0) {
    let tmp6 = c2;
    arr = tmp5;
    if (tmp5[0] <= timestamp - c2) {
      let tmp7 = closure_6;
      closure_6.shift();
      arr = closure_6;
      while (closure_6.length > 0) {
        let tmp9 = c2;
        arr = tmp7;
        if (tmp7[0] > timestamp - c2) {
          break;
        }
      }
    }
  }
  if (c8 < c0) {
    if (arr.length < c1) {
      const arr6 = length.shift();
      if (null != arr6) {
        let runResult;
        closure_6.push(timestamp);
        c8 = c8 + 1;
        try {
          runResult = arr6.run();
        } catch (tmp11) {
          runResult = Promise.reject(tmp11);
        }
        const nextPromise = runResult.then(arr6.resolve, arr6.reject);
        nextPromise.finally(() => {
          closure_8 = closure_8 - 1;
          drain();
        });
      }
    }
  }
  const tmp17 = length.length > 0 && closure_6.length >= c1;
  if (tmp17) {
    const _setTimeout = setTimeout;
    timeout = setTimeout(drain, closure_6[0] + c2 - timestamp);
  }
  notifyCapacity();
};
const schedule3 = function schedule(run) {
  let rejectResult;
  if (closure_5.length >= c3) {
    const self3 = this;
    rejectResult = Promise.reject(new c0("guild event embed fetch queue is full"));
  } else {
    const self = this;
    const self2 = this;
    rejectResult = new Promise((arg0, reject) => {
      run = arg0;
      obj = {
        run,
        resolve(arg0) {
          return closure_0(arg0);
        },
        reject
      };
      closure_5.push(obj);
      drain();
    });
  }
  return rejectResult;
};
const onCapacity2 = function onCapacity(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => set1.delete(closure_0);
};
function reset() {
  if (null != c4) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c4);
  }
  c4 = undefined;
  set1.clear();
  const spliceResult = closure_5.splice(0);
  const item = spliceResult.forEach((reject) => reject.reject(new closure_1_0("guild event embed fetch queue reset")));
  closure_6.splice(0);
  c8 = 0;
}
class GuildEventEmbedFetchQueueError extends Error {
}
let closure_5 = [];
let closure_6 = [];
const set = new Set();
let obj = { schedule: schedule3, onCapacity: onCapacity2, reset };
let c0 = 4;
let c1 = 20;
let c2 = 10000;
let c3 = 64;
let c4;
const drain = drain2;
closure_5 = [];
closure_6 = [];
const set1 = new Set();
let c8 = 0;
const obj2 = { schedule: schedule3, onCapacity: onCapacity2, reset };
({ schedule, onCapacity } = obj);
const schedule2 = obj2.schedule;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventEmbedFetchQueue.tsx");

export const GUILD_EVENT_EMBED_MAX_ACTIVE = 4;
export const GUILD_EVENT_EMBED_MAX_WAITING = 64;
export const GUILD_EVENT_FETCH_MAX_STARTS = 5;
export const GUILD_EVENT_FETCH_WINDOW_MS = 5000;
export const GUILD_EVENT_EMBED_MAX_STARTS = 20;
export const GUILD_EVENT_EMBED_WINDOW_MS = 10000;
export { GuildEventEmbedFetchQueueError };
export const scheduleGuildEventFetch = schedule;
export const onGuildEventFetchCapacity = onCapacity;
export const scheduleGuildEventEmbedFetch = schedule2;
export const resetGuildEventEmbedFetchQueueForTest = function resetGuildEventEmbedFetchQueueForTest() {
  obj.reset();
  obj2.reset();
};
