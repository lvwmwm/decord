// Module ID: 5710
// Function ID: 49089
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 5710 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let tmp2 = (arg0) => {
  class LurkerPreviewManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, LurkerPreviewManager);
      items1 = [...items];
      obj = closure_7(LurkerPreviewManager);
      tmp2 = closure_6;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      LurkerPreviewManager = tmp2Result;
      map = new Map();
      tmp2Result.timers = map;
      set = new Set();
      tmp2Result.viewedLurkingGuildIds = set;
      set1 = new Set();
      tmp2Result.navigatedAwayFromLurkingGuildIds = set1;
      tmp2Result.handleStoreChange = () => {
        const result = tmp2Result.trackViewedLurkingGuilds();
        const result1 = tmp2Result.evictOverflowingLurkers();
        const result2 = tmp2Result.ensureMissingExpiries();
        tmp2Result.expireElapsed();
        tmp2Result.syncTimers();
      };
      tmp2Result.trackViewedLurkingGuilds = () => {
        let iter2;
        const set = new Set(store2.lurkingGuildIds());
        let arr = Array.from(tmp2Result.viewedLurkingGuildIds);
        for (let num = 0; num < arr.length; num = num + 1) {
          let tmp = arr[num];
          if (!set.has(tmp)) {
            let tmp2 = tmp2Result;
            let viewedLurkingGuildIds = tmp2Result.viewedLurkingGuildIds;
            let deleteResult = viewedLurkingGuildIds.delete(tmp);
          }
        }
        arr = Array.from(tmp2Result.navigatedAwayFromLurkingGuildIds);
        for (let num2 = 0; num2 < arr.length; num2 = num2 + 1) {
          let tmp4 = arr[num2];
          if (!set.has(tmp4)) {
            let tmp5 = tmp2Result;
            let navigatedAwayFromLurkingGuildIds = tmp2Result.navigatedAwayFromLurkingGuildIds;
            let deleteResult1 = navigatedAwayFromLurkingGuildIds.delete(tmp4);
          }
        }
        const guildId = store.getGuildId();
        const tmp8 = callback3(tmp2Result.viewedLurkingGuildIds);
        let iter = tmp8();
        if (!iter.done) {
          do {
            let value = iter.value;
            if (value !== guildId) {
              let tmp9 = closure_0;
              let navigatedAwayFromLurkingGuildIds2 = closure_0.navigatedAwayFromLurkingGuildIds;
              let addResult = navigatedAwayFromLurkingGuildIds2.add(value);
            }
            iter2 = tmp8();
            iter = iter2;
          } while (!iter2.done);
        }
        if (tmp11) {
          const viewedLurkingGuildIds2 = tmp2Result.viewedLurkingGuildIds;
          viewedLurkingGuildIds2.add(guildId);
        }
      };
      tmp2Result.evictOverflowingLurkers = () => {
        const lurkingGuildIdsResult = store2.lurkingGuildIds();
        if (lurkingGuildIdsResult.length > 3) {
          if (obj.getMobileLurkerServerPreview("LurkerPreviewManager.evictOverflowingLurkers").stickyLurk) {
            tmp2Result.expireLurkerPreviews(lurkingGuildIdsResult.slice(0, lurkingGuildIdsResult.length - 3));
          }
          const obj = tmp2Result(closure_2[9]);
        }
      };
      tmp2Result.ensureMissingExpiries = () => {
        const lurkingGuildIdsResult = store2.lurkingGuildIds();
        if (0 !== lurkingGuildIdsResult.length) {
          const tmp2Result = store2.getLurkingPreviewExpirations();
          const callback = store.getGuildId();
          const found = lurkingGuildIdsResult.filter((arg0) => {
            let hasItem = null == obj[arg0];
            if (hasItem) {
              hasItem = arg0 !== closure_1;
            }
            if (hasItem) {
              const viewedLurkingGuildIds = obj.viewedLurkingGuildIds;
              hasItem = viewedLurkingGuildIds.has(arg0);
            }
            return hasItem;
          });
          let stickyLurk = 0 !== found.length;
          if (stickyLurk) {
            let obj = tmp2Result(closure_2[9]);
            stickyLurk = obj.getMobileLurkerServerPreview("LurkerPreviewManager.ensureMissingExpiries").stickyLurk;
          }
          if (stickyLurk) {
            obj = { type: "LURKER_PREVIEW_SET_EXPIRY", guildIds: found };
            const _Date = Date;
            obj.expiresAt = Date.now() + 60000;
            callback(closure_2[10]).dispatch(obj);
            const obj2 = callback(closure_2[10]);
          }
        }
      };
      tmp2Result.expireElapsed = () => {
        const lurkingPreviewExpirations = store2.getLurkingPreviewExpirations();
        const guildId = store.getGuildId();
        const guildId1 = guildId.getGuildId();
        const items = [];
        const timestamp = Date.now();
        const keys = Object.keys(lurkingPreviewExpirations);
        for (let num = 0; num < keys.length; num = num + 1) {
          let tmp5 = keys[num];
          if (tmp5 !== guildId) {
            let tmp6 = tmp5 !== guildId1 && lurkingPreviewExpirations[tmp5] <= timestamp;
            if (tmp6) {
              let arr = items.push(tmp5);
            }
          }
        }
        if (items.length > 0) {
          tmp2Result.expireLurkerPreviews(items);
        }
      };
      tmp2Result.syncTimers = () => {
        let length;
        const lurkingPreviewExpirations = store2.getLurkingPreviewExpirations();
        const timers = tmp2Result.timers;
        const arr = Array.from(timers.keys());
        for (let num = 0; num < arr.length; num = num + 1) {
          let tmp2 = arr[num];
          if (null == lurkingPreviewExpirations[tmp2]) {
            let tmp3 = tmp2Result;
            let timers2 = tmp2Result.timers;
            let value = timers2.get(tmp2);
            if (null != value) {
              let _clearTimeout = clearTimeout;
              let clearTimeoutResult = clearTimeout(value);
            }
            let tmp6 = tmp2Result;
            let timers3 = tmp2Result.timers;
            let deleteResult = timers3.delete(tmp2);
            let tmp8 = value;
          }
        }
        function _loop(arg0) {
          const lurkingPreviewExpirations = arg0;
          const timers = lurkingPreviewExpirations.timers;
          if (timers.has(arg0)) {
            return 0;
          } else {
            const _Date = Date;
            if (lurkingPreviewExpirations[arg0] <= Date.now()) {
              return 0;
            } else {
              const _Date2 = Date;
              const _setTimeout = setTimeout;
              const timers2 = lurkingPreviewExpirations.timers;
              const result = timers2.set(arg0, setTimeout((self) => {
                const timers = self.timers;
                timers.delete(self);
                self.handleStoreChange();
              }, tmp2 - Date.now()));
            }
          }
        }
        const keys = Object.keys(lurkingPreviewExpirations);
        let num2 = 0;
        if (0 < keys.length) {
          do {
            let _loopResult = _loop(keys[num2]);
            num2 = num2 + 1;
            length = keys.length;
          } while (num2 < length);
        }
      };
      tmp2Result.expireLurkerPreviews = () => {
        let closure_0 = callback2(async (arg0) => {
          yield Promise.all(arg0.map((arg0) => callback(closure_2[11]).stopLurkingForGuild(arg0)));
        });
        return function(arg0) {
          return callback(...arguments);
        };
      }();
      return tmp2Result;
    }
  }
  const arg1 = LurkerPreviewManager;
  callback2(LurkerPreviewManager, arg0);
  let obj = {
    key: "hasNavigatedAway",
    value: function hasNavigatedAway(guildId) {
      const navigatedAwayFromLurkingGuildIds = this.navigatedAwayFromLurkingGuildIds;
      return navigatedAwayFromLurkingGuildIds.has(guildId);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_initialize",
    value: function _initialize() {
      closure_11.addChangeListener(this.handleStoreChange);
      closure_10.addChangeListener(this.handleStoreChange);
      closure_9.addChangeListener(this.handleStoreChange);
      this.handleStoreChange();
    }
  };
  items[1] = obj;
  obj = {
    key: "_terminate",
    value: function _terminate() {
      let done;
      const self = this;
      closure_11.removeChangeListener(this.handleStoreChange);
      closure_10.removeChangeListener(this.handleStoreChange);
      closure_9.removeChangeListener(this.handleStoreChange);
      const timers = this.timers;
      const tmp4 = callback3(timers.values());
      let iter = tmp4();
      if (!iter.done) {
        do {
          let _clearTimeout = clearTimeout;
          let clearTimeoutResult = clearTimeout(iter.value);
          let iter2 = tmp4();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const timers2 = self.timers;
      timers2.clear();
      const viewedLurkingGuildIds = self.viewedLurkingGuildIds;
      viewedLurkingGuildIds.clear();
      const navigatedAwayFromLurkingGuildIds = self.navigatedAwayFromLurkingGuildIds;
      navigatedAwayFromLurkingGuildIds.clear();
    }
  };
  items[2] = obj;
  return callback(LurkerPreviewManager, items);
}(importDefault(dependencyMap[12]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/lurker_mode/LurkerPreviewManager.tsx");

export default tmp2;
export const LURKER_PREVIEW_PERSIST_MS = 60000;
export const LURKER_PREVIEW_MAX_CONCURRENT = 3;
