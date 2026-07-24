// Module ID: 15105
// Function ID: 114957
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4143, 4147, 1194, 1348, 1917, 12732, 4202, 1849, 4146, 22, 566, 1327, 10561, 2]
// Exports: useEnsureSyncedChannelParticipants, useEnsureSyncedChannelVoiceStates, useIsRTCDisconnectedUIVisible

// Module 15105 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";

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
function useDesyncedChannelParticipants(channelId) {
  const _require = channelId;
  const items = [closure_9, closure_10];
  return _require(566).useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === outer1_10.getChannelId()) {
      desyncedParticipants = outer1_9.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = function useEnsureSyncedChannelVoiceStates(id, voiceStates) {
  const _require = id;
  const dependencyMap = voiceStates;
  let guild_id;
  let items = [closure_9, closure_10];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (closure_0 === outer1_10.getChannelId()) {
      desyncedVoiceStates = outer1_9.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  let obj = _require(566);
  const items1 = [stateFromStoresArray];
  const React = _require(566).useStateFromStoresArray(items1, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      items = [];
      HermesBuiltin.arraySpread(stateFromStoresArray.getGuildRingingUsers(closure_0), 0);
    }
    return items;
  });
  const obj2 = _require(566);
  const items2 = [closure_11];
  stateFromStoresArray = _require(566).useStateFromStoresArray(items2, () => {
    const mapped = result.map((arg0) => outer2_11.getUser(arg0));
    return mapped.filter(id(voiceStates[13]).isNotNullish);
  });
  const obj3 = _require(566);
  const items3 = [closure_7];
  const stateFromStores1 = _require(566).useStateFromStores(items3, () => outer1_7.getBasicChannel(closure_0));
  const items4 = [stateFromStoresArray, ];
  if (null != stateFromStores1) {
    guild_id = stateFromStores1.guild_id;
  }
  items4[1] = guild_id;
  const memo = React.useMemo(() => stateFromStoresArray.map((id) => {
    const obj = { voiceState: new stateFromStores1(id.id), user: id };
    let guild_id;
    if (null != outer1_5) {
      guild_id = outer1_5.guild_id;
    }
    let member = null;
    if (null != guild_id) {
      let guild_id1;
      if (null != outer1_5) {
        guild_id1 = outer1_5.guild_id;
      }
      member = outer2_8.getMember(guild_id1, id.id);
    }
    obj.member = member;
    ({ globalName: obj.nick, globalName: obj.comparator } = id);
    obj._isPlaceholder = false;
    return obj;
  }), items4);
  const items5 = [stateFromStores, voiceStates, memo];
  return React.useMemo(() => (function syncChannelVoiceStates(stateFromStores, closure_1, memo) {
    let done;
    if (null == stateFromStores) {
      if (0 === memo.length) {
        return closure_1;
      }
    }
    const items = [];
    const set = new Set();
    const tmp = outer2_13(closure_1);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let arr = items.push(value);
        let addResult = set.add(value.user.id);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (null != stateFromStores) {
      const item = stateFromStores.forEach((arg0) => {
        items.splice(items(set[11]).sortedIndexBy(items, arg0, (comparator) => comparator.comparator), 0, arg0);
      });
    }
    if (memo.length > 0) {
      const item1 = memo.forEach((user) => {
        if (!set.has(user.user.id)) {
          items.splice(items(set[11]).sortedIndexBy(items, user, (comparator) => comparator.comparator), 0, user);
          const obj = items(set[11]);
        }
      });
    }
    return items;
  })(stateFromStores, closure_1, memo), items5);
};
export { useDesyncedChannelParticipants };
export const useEnsureSyncedChannelParticipants = function useEnsureSyncedChannelParticipants(channelId) {
  let closure_0 = arg1;
  const tmp = useDesyncedChannelParticipants(channelId);
  const dependencyMap = tmp;
  let items = [tmp, arg1];
  return React.useMemo(() => (function syncChannelParticipants(closure_1, closure_0) {
    if (null != closure_1) {
      if (0 !== closure_1.length) {
        const items = [];
        HermesBuiltin.arraySpread(closure_0, 0);
        const item = closure_1.forEach((arg0) => {
          items.splice(items(table[11]).sortedIndexBy(items, arg0, (arg0) => callback(table[14]).sortKey(arg0)), 0, arg0);
        });
        return items;
      }
    }
    return closure_0;
  })(closure_1, closure_0), items);
};
export const useIsRTCDisconnectedUIVisible = function useIsRTCDisconnectedUIVisible(arg0, id) {
  let _isNativeReflectConstruct;
  let closure_5;
  let tmp4;
  let tmp6;
  const _require = arg0;
  const dependencyMap = id;
  const items = [stateFromStores2];
  const stateFromStores = _require(566).useStateFromStores(items, () => stateFromStores2.getId() === closure_1);
  const obj = _require(566);
  const items1 = [closure_10];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_10.getChannelId());
  React = React.useRef(null);
  const obj2 = _require(566);
  [tmp4, _isNativeReflectConstruct] = stateFromStores1(React.useState(false), 2);
  const tmp3 = stateFromStores1(React.useState(false), 2);
  [tmp6, closure_5] = stateFromStores1(React.useState(false), 2);
  const tmp5 = stateFromStores1(React.useState(false), 2);
  const items2 = [closure_10, closure_12];
  stateFromStores2 = _require(566).useStateFromStores(items2, () => {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_10.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != outer1_12.isInChannel(closure_0, closure_1);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_10.isUserConnected(closure_1);
    }
    return isUserConnectedResult;
  });
  const obj3 = _require(566);
  const items3 = [closure_10, closure_12];
  const stateFromStores3 = _require(566).useStateFromStores(items3, () => {
    let tmp = null != closure_1;
    if (tmp) {
      tmp = null != closure_0;
    }
    if (tmp) {
      tmp = outer1_10.getChannelId() === closure_0;
    }
    if (tmp) {
      tmp = null != outer1_12.isInChannel(closure_0, closure_1);
    }
    if (tmp) {
      tmp = !outer1_10.isUserConnected(closure_1);
    }
    return tmp;
  });
  const items4 = [stateFromStores2];
  const effect = React.useEffect(() => {
    if (stateFromStores2) {
      callback2(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = React.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      callback2(false);
    }
  }, items5);
  const items6 = [stateFromStores3];
  const effect2 = React.useEffect(() => {
    if (stateFromStores3) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          outer1_3.current = null;
          outer1_4(true);
        }, 250);
      }
      return () => {
        clearTimeout(outer1_3.current);
        outer1_3.current = null;
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
    callback(false);
  }, items6);
  return !stateFromStores && tmp6 && tmp4;
};
