// Module ID: 19997
// Function ID: 19998
// Name: InterestGuildsResource
// Dependencies: [5, 18794, 2]
// Exports: interestGuildsKey

// Module 19997 (InterestGuildsResource)
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18794 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c3, c4, set;

function availableInterestGuilds(guilds) {
  set = new Set();
  guilds = guilds.guilds;
  const found = guilds.filter((joined) => {
    let flag = !joined.joined && !set.has(joined.id);
    if (flag) {
      set.add(joined.id);
      flag = true;
    }
    return flag;
  });
  return found.slice(0, 15);
}
let _asyncToGenerator = _asyncToGenerator_mod;
const MAX_SELECTIONS = InterestGamePickerConstants.MAX_SELECTIONS;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildsResource.tsx");
class InterestGuildsResource {
  constructor(fetchGuilds) {
    const obj = Object.create(new.target.prototype);
    obj.snapshot = { key: "", status: "idle", guilds: [], failed: false };
    obj.listeners = new Set();
    obj.disposed = false;
    obj.requestId = 0;
    obj.gameIds = [];
    obj.getSnapshot = function getSnapshot() {
      return obj.snapshot;
    };
    obj.subscribe = function subscribe(arg0) {
      let closure_0;
      listeners = arg0;
      listeners = listeners.listeners;
      listeners.add(arg0);
      return () => {
        listeners = obj.listeners;
        return listeners.delete(closure_0);
      };
    };
    obj.setPicks = function setPicks(gameIds, flag) {
      if (flag === undefined) {
        flag = false;
      }
      obj.updatePicks(gameIds, flag, false);
    };
    obj.loadPopular = function loadPopular() {
      return obj.updatePicks([], false, true);
    };
    obj.retry = function retry() {
      return obj.updatePicks(obj.gameIds, true, "popular" === obj.snapshot.key);
    };
    obj.fetchGuilds = fetchGuilds;
    new Set();
    return obj;
  }
  updatePicks(gameIds, flag, arg2) {
    let load;
    let requestId;
    const self = this;
    if (!this.disposed) {
      let str = "popular";
      if (!arg2) {
        const _Array = Array;
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        set = new Set(gameIds);
        const fromResult = from(set);
        const substr = fromResult.slice(0, MAX_SELECTIONS);
        const sorted = substr.sort();
        str = sorted.join(",");
      }
      const tmp8 = str !== self.snapshot.key || flag;
      if (tmp8) {
        const _Array2 = Array;
        const _Set2 = Set;
        const self5 = this;
        const from2 = Array.from;
        const self4 = this;
        const set1 = new Set(gameIds);
        const from2Result = from2(set1);
        self.gameIds = from2Result.slice(0, MAX_SELECTIONS);
        self.requestId = self.requestId + 1;
        if ("" !== str) {
          const obj = { key: str, status: "loading", guilds: [], failed: false };
          self.publish(obj);
          const items = [];
          ({ load, requestId } = self);
          HermesBuiltin.arraySpread(items, self.gameIds, 0);
          load(requestId, str, items);
        } else {
          const obj2 = { key: str, status: "idle", guilds: [], failed: false };
          self.publish(obj2);
        }
      }
    }
  }
  dispose() {
    this.disposed = true;
    const listeners = this.listeners;
    listeners.clear();
  }
  publish(snapshot) {
    this.snapshot = snapshot;
    const listeners = this.listeners;
    const item = listeners.forEach((fn) => fn());
  }
  load(arg0, arg1, guilds) {
    _asyncToGenerator = arg0;
    let closure_1 = arg1;
    const self = this;
    return (async (arg0, value) => {
      let str;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let obj;
          let degraded;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp4;
              obj = undefined;
              degraded = undefined;
              guilds = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: self.fetchGuilds(guilds), done: false };
              return obj4;
            }
          } else {
            if (1 === c3) {
              guilds = 0;
              const obj5 = { key: closure_129_1, guilds: [], status: "unavailable", failed: true };
              obj = obj5;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              guilds = 0;
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              degraded = value;
              guilds = guilds(degraded);
              obj = { key: closure_129_1, guilds, status: str, failed: degraded.degraded };
              str = "unavailable";
              if (guilds.length > 0) {
                str = "ready";
              }
              guilds = 0;
            }
            const disposed = closure_129_3.disposed || closure_129_0 !== closure_129_3.requestId;
            if (!disposed) {
              closure_129_3.publish(obj);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          if (0 === guilds) {
            c4 = 3;
            throw tmp29;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  }
}
const prototype = InterestGuildsResource.prototype;

export function interestGuildsKey(items) {
  set = new Set(items);
  const fromResult = from(set);
  const substr = fromResult.slice(0, MAX_SELECTIONS);
  const sorted = substr.sort();
  return sorted.join(",");
}
export { availableInterestGuilds };
export { InterestGuildsResource };
