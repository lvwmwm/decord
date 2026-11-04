// Module ID: 19832
// Function ID: 19833
// Name: InterestGuildsResource
// Dependencies: [5, 2]
// Exports: interestGuildsKey

// Module 19832 (InterestGuildsResource)
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5, set;

function availableInterestGuilds(degraded) {
  if (degraded.degraded) {
    return [];
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const guilds = degraded.guilds;
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
}
let _asyncToGenerator = _asyncToGenerator_mod;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildsResource.tsx");
class InterestGuildsResource {
  constructor(fetchGuilds) {
    const obj = Object.create(new.target.prototype);
    obj.snapshot = { key: "", status: "idle", guilds: [] };
    set = new Set();
    obj.listeners = set;
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
    obj.setPicks = function setPicks(items) {
      let load;
      let requestId;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      if (!obj.disposed) {
        const _Array = Array;
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(items);
        const fromResult = from(set);
        const substr = fromResult.slice(0, 5);
        const sorted = substr.sort();
        const joined = sorted.join(",");
        const tmp7 = joined !== obj.snapshot.key || flag;
        if (tmp7) {
          const _Array2 = Array;
          const _Set2 = Set;
          const self4 = this;
          const from2 = Array.from;
          const self3 = this;
          const set1 = new Set(items);
          const from2Result = from2(set1);
          obj.gameIds = from2Result.slice(0, 5);
          obj.requestId = obj.requestId + 1;
          if ("" !== joined) {
            const obj2 = { key: joined, status: "loading", guilds: [] };
            obj.publish(obj2);
            items = [];
            ({ load, requestId } = obj);
            HermesBuiltin.arraySpread(items, obj.gameIds, 0);
            load(requestId, joined, items);
          } else {
            const obj3 = { key: joined, status: "idle", guilds: [] };
            obj.publish(obj3);
          }
        }
      }
    };
    obj.retry = function retry() {
      return obj.setPicks(obj.gameIds, true);
    };
    obj.fetchGuilds = fetchGuilds;
    return obj;
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
  load(arg0, arg1, arg2) {
    _asyncToGenerator = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    const self = this;
    return (async (arg0, value) => {
      let str;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let obj;
          let guilds;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              obj = undefined;
              guilds = undefined;
              c3 = 1;
              closure_0 = guilds;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: self.fetchGuilds(closure_2), done: false };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const obj5 = { key: closure_130_1, guilds: [], status: "unavailable" };
              obj = obj5;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              guilds = closure_0(value);
              obj = { key: closure_130_1, guilds, status: str };
              str = "unavailable";
              if (guilds.length > 0) {
                str = "ready";
              }
              c3 = 0;
            }
            const disposed = closure_130_3.disposed || closure_130_0 !== closure_130_3.requestId;
            if (!disposed) {
              closure_130_3.publish(obj);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp28) {
          if (0 === c3) {
            c5 = 3;
            throw tmp28;
          } else {
            c4 = 1;
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
  const substr = fromResult.slice(0, 5);
  const sorted = substr.sort();
  return sorted.join(",");
}
export { availableInterestGuilds };
export { InterestGuildsResource };
