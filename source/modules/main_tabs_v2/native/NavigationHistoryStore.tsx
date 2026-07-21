// Module ID: 5718
// Function ID: 49136
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getIdFromHistoryItem, getNavigationHistory, handleHistoryStoreNavigationChange

// Module 5718 (_createForOfIteratorHelperLoose)
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
function cleanDuplicatesAndAppend(arg0) {
  const arg1 = arg0;
  if (map.has(arg0)) {
    let arr = arr.filter((arg0) => arg0 !== arg0);
  }
  if (null != arr[closure_8.length - 1]) {
    const _Date = Date;
    const result = map.set(tmp, Date.now());
    const tmp4 = globalThis;
  }
  const result1 = map.set(arg0, undefined);
  arr = arr.push(arg0);
  if (arr.length > 100) {
    arr = arr.shift();
  }
  tmp4.emitChange();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const regExp = new RegExp("^(?:" + "channel-" + "|" + "guild-" + ")");
let closure_8 = [];
const map = new Map();
let tmp4 = (PersistedStore) => {
  class NavigationHistoryStore {
    constructor() {
      self = this;
      tmp = closure_2(this, NavigationHistoryStore);
      obj = closure_5(NavigationHistoryStore);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = NavigationHistoryStore;
  callback2(NavigationHistoryStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(history) {
      let done;
      closure_9.clear();
      history = undefined;
      if (null != history) {
        history = history.history;
      }
      if (null == history) {
        history = [];
      }
      const tmp2Result = closure_11(history);
      let iter = tmp2Result();
      if (!iter.done) {
        do {
          let tmp4 = closure_9;
          let result = closure_9.set(iter.value, undefined);
          let iter2 = tmp2Result();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      let closure_8 = Array.from(closure_9.keys());
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return { history: closure_8 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastHistory",
    value() {
      let num = arg0;
      if (arg0 === undefined) {
        num = 1;
      }
      return closure_8[closure_8.length - num];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastFocusedTimestampForHistoryItem",
    value(arg0) {
      return closure_9.get(arg0);
    }
  };
  return callback(NavigationHistoryStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp4.displayName = "NavigationHistoryStore";
tmp4.persistKey = "NavigationHistoryStore";
tmp4 = new tmp4(importDefault(dependencyMap[6]), {
  LOGOUT() {
    let closure_8 = [];
    map.clear();
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/NavigationHistoryStore.tsx");

export default tmp4;
export const CHANNEL_PREFIX = "channel-";
export const GUILD_PREFIX = "guild-";
export const getIdFromHistoryItem = function getIdFromHistoryItem(str) {
  return str.replace(regExp, "");
};
export const handleHistoryStoreNavigationChange = function handleHistoryStoreNavigationChange() {
  const rootNavigationRef = arg1(dependencyMap[7]).getRootNavigationRef();
  if (null != rootNavigationRef) {
    const currentRoute = rootNavigationRef.getCurrentRoute();
    if (null != currentRoute) {
      if (null != currentRoute.params) {
        const coerceChannelRouteResult = arg1(dependencyMap[8]).coerceChannelRoute(currentRoute);
        if (null == coerceChannelRouteResult) {
          const coerceGuildsRouteResult = arg1(dependencyMap[8]).coerceGuildsRoute(currentRoute);
          if (null != coerceGuildsRouteResult) {
            if (obj5.getChatLayout().isChatLockedOpen) {
              const params = coerceGuildsRouteResult.params;
              let channelId;
              if (null != params) {
                channelId = params.channelId;
              }
              if (null != channelId) {
                const _HermesInternal3 = HermesInternal;
                cleanDuplicatesAndAppend("" + "channel-" + channelId);
              }
            }
            const params2 = coerceGuildsRouteResult.params;
            let guildId;
            if (null != params2) {
              guildId = params2.guildId;
            }
            if (null != guildId) {
              const _HermesInternal2 = HermesInternal;
              cleanDuplicatesAndAppend("" + "guild-" + guildId);
            }
            const obj5 = arg1(dependencyMap[9]);
          }
          const obj3 = arg1(dependencyMap[8]);
        } else {
          const _HermesInternal = HermesInternal;
          cleanDuplicatesAndAppend("" + "channel-" + coerceChannelRouteResult.params.channelId);
        }
        const obj4 = arg1(dependencyMap[8]);
      }
    }
  }
};
export function getNavigationHistory() {
  return closure_8;
}
