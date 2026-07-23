// Module ID: 5722
// Function ID: 49171
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 3982, 3981, 3984, 2]
// Exports: getIdFromHistoryItem, getNavigationHistory, handleHistoryStoreNavigationChange

// Module 5722 (_createForOfIteratorHelperLoose)
import dispatcher from "dispatcher";
import getRootNavigationRef from "getRootNavigationRef";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  let closure_0 = arg0;
  if (map.has(arg0)) {
    arr = arr.filter((arg0) => arg0 !== closure_0);
  }
  if (null != arr[arr.length - 1]) {
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
const regExp = new RegExp("^(?:" + "channel-" + "|" + "guild-" + ")");
let closure_8 = [];
const map = new Map();
let tmp4 = ((PersistedStore) => {
  class NavigationHistoryStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, NavigationHistoryStore);
      obj = outer1_5(NavigationHistoryStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(NavigationHistoryStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(history) {
      let done;
      outer1_9.clear();
      history = undefined;
      if (null != history) {
        history = history.history;
      }
      if (null == history) {
        history = [];
      }
      const tmp2Result = outer1_11(history);
      let iter = tmp2Result();
      if (!iter.done) {
        do {
          let tmp4 = outer1_9;
          let result = outer1_9.set(iter.value, undefined);
          let iter2 = tmp2Result();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      const outer1_8 = Array.from(outer1_9.keys());
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return { history: outer1_8 };
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
      return outer1_8[outer1_8.length - num];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastFocusedTimestampForHistoryItem",
    value(arg0) {
      return outer1_9.get(arg0);
    }
  };
  return callback(NavigationHistoryStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "NavigationHistoryStore";
tmp4.persistKey = "NavigationHistoryStore";
tmp4 = new tmp4(require("dispatcher"), {
  LOGOUT() {
    let closure_8 = [];
    map.clear();
  }
});
let closure_10 = tmp4;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/main_tabs_v2/native/NavigationHistoryStore.tsx");

export default tmp4;
export const CHANNEL_PREFIX = "channel-";
export const GUILD_PREFIX = "guild-";
export const getIdFromHistoryItem = function getIdFromHistoryItem(str) {
  return str.replace(regExp, "");
};
export const handleHistoryStoreNavigationChange = function handleHistoryStoreNavigationChange() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != rootNavigationRef) {
    const currentRoute = rootNavigationRef.getCurrentRoute();
    if (null != currentRoute) {
      if (null != currentRoute.params) {
        const coerceChannelRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceChannelRoute(currentRoute);
        if (null == coerceChannelRouteResult) {
          const coerceGuildsRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(currentRoute);
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
            obj5 = require(3984) /* useChatLayout */;
          }
          const obj3 = require(3981) /* _createForOfIteratorHelperLoose */;
        } else {
          const _HermesInternal = HermesInternal;
          cleanDuplicatesAndAppend("" + "channel-" + coerceChannelRouteResult.params.channelId);
        }
        const obj4 = require(3981) /* _createForOfIteratorHelperLoose */;
      }
    }
  }
};
export function getNavigationHistory() {
  return closure_8;
}
