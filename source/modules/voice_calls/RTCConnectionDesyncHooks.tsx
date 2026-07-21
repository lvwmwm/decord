// Module ID: 14934
// Function ID: 112425
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useEnsureSyncedChannelParticipants, useEnsureSyncedChannelVoiceStates, useIsRTCDisconnectedUIVisible

// Module 14934 (_createForOfIteratorHelperLoose)
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
function useDesyncedChannelParticipants(channelId) {
  const arg1 = channelId;
  const items = [closure_9, closure_10];
  return arg1(dependencyMap[12]).useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (arg0 === channelId.getChannelId()) {
      desyncedParticipants = desyncedParticipants.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = function useEnsureSyncedChannelVoiceStates(id, voiceStates) {
  voiceStates = id;
  const dependencyMap = voiceStates;
  let guild_id;
  const items = [closure_9, closure_10];
  const stateFromStores = voiceStates(dependencyMap[12]).useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (arg0 === channelId.getChannelId()) {
      desyncedVoiceStates = desyncedVoiceStates.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  let closure_2 = stateFromStores;
  const obj = voiceStates(dependencyMap[12]);
  const items1 = [closure_4];
  const React = voiceStates(dependencyMap[12]).useStateFromStoresArray(items1, () => {
    if (null == arg0) {
      let items = [];
    } else {
      items = [];
      HermesBuiltin.arraySpread(stateFromStoresArray.getGuildRingingUsers(arg0), 0);
    }
    return items;
  });
  const obj2 = voiceStates(dependencyMap[12]);
  const items2 = [closure_11];
  const stateFromStoresArray = voiceStates(dependencyMap[12]).useStateFromStoresArray(items2, () => {
    const mapped = closure_3.map((arg0) => user.getUser(arg0));
    return mapped.filter(arg0(arg1[13]).isNotNullish);
  });
  closure_4 = stateFromStoresArray;
  const obj3 = voiceStates(dependencyMap[12]);
  const items3 = [closure_7];
  const stateFromStores1 = voiceStates(dependencyMap[12]).useStateFromStores(items3, () => basicChannel.getBasicChannel(arg0));
  let closure_5 = stateFromStores1;
  const items4 = [stateFromStoresArray, ];
  if (null != stateFromStores1) {
    guild_id = stateFromStores1.guild_id;
  }
  items4[1] = guild_id;
  const memo = React.useMemo(() => stateFromStoresArray.map((id) => {
    const obj = { voiceState: new closure_5(id.id), user: id };
    let guild_id;
    if (null != closure_5) {
      guild_id = closure_5.guild_id;
    }
    let member = null;
    if (null != guild_id) {
      let guild_id1;
      if (null != closure_5) {
        guild_id1 = closure_5.guild_id;
      }
      member = member.getMember(guild_id1, id.id);
    }
    obj.member = member;
    ({ globalName: obj.nick, globalName: obj.comparator } = id);
    obj._isPlaceholder = false;
    return obj;
  }), items4);
  let closure_6 = memo;
  const items5 = [stateFromStores, voiceStates, memo];
  return React.useMemo(() => function syncChannelVoiceStates(stateFromStores, arg1, memo) {
    let done;
    if (null == stateFromStores) {
      if (0 === memo.length) {
        return arg1;
      }
    }
    const items = [];
    const set = new Set();
    const tmp = callback(arg1);
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
  }(stateFromStores, arg1, memo), items5);
};
export { useDesyncedChannelParticipants };
export const useEnsureSyncedChannelParticipants = function useEnsureSyncedChannelParticipants(channelId) {
  const tmp = useDesyncedChannelParticipants(channelId);
  const dependencyMap = tmp;
  const items = [tmp, arg1];
  return React.useMemo(() => function syncChannelParticipants(arr, arg1) {
    if (null != arr) {
      if (0 !== arr.length) {
        const items = [];
        HermesBuiltin.arraySpread(arg1, 0);
        const item = arr.forEach((arg0) => {
          items.splice(items(closure_1[11]).sortedIndexBy(items, arg0, (arg0) => callback(closure_1[14]).sortKey(arg0)), 0, arg0);
        });
        return items;
      }
    }
    return arg1;
  }(tmp, arg1), items);
};
export const useIsRTCDisconnectedUIVisible = function useIsRTCDisconnectedUIVisible(arg0, id) {
  let tmp4;
  let tmp6;
  id = arg0;
  const dependencyMap = id;
  const items = [closure_6];
  const stateFromStores = id(dependencyMap[12]).useStateFromStores(items, () => stateFromStores2.getId() === arg1);
  const obj = id(dependencyMap[12]);
  const items1 = [closure_10];
  const stateFromStores1 = id(dependencyMap[12]).useStateFromStores(items1, () => authStore.getChannelId());
  const callback = stateFromStores1;
  const React = React.useRef(null);
  const obj2 = id(dependencyMap[12]);
  [tmp4, closure_4] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(false), 2);
  [tmp6, closure_5] = callback(React.useState(false), 2);
  const tmp5 = callback(React.useState(false), 2);
  const items2 = [closure_10, closure_12];
  const stateFromStores2 = id(dependencyMap[12]).useStateFromStores(items2, () => {
    let isUserConnectedResult = null != arg1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != arg0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = authStore.getChannelId() === arg0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_12.isInChannel(arg0, arg1);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = authStore.isUserConnected(arg1);
    }
    return isUserConnectedResult;
  });
  closure_6 = stateFromStores2;
  const obj3 = id(dependencyMap[12]);
  const items3 = [closure_10, closure_12];
  const stateFromStores3 = id(dependencyMap[12]).useStateFromStores(items3, () => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = null != arg0;
    }
    if (tmp) {
      tmp = authStore.getChannelId() === arg0;
    }
    if (tmp) {
      tmp = null != closure_12.isInChannel(arg0, arg1);
    }
    if (tmp) {
      tmp = !authStore.isUserConnected(arg1);
    }
    return tmp;
  });
  let closure_7 = stateFromStores3;
  const items4 = [stateFromStores2];
  const effect = React.useEffect(() => {
    if (stateFromStores2) {
      callback2(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = React.useEffect(() => {
    if (stateFromStores1 !== arg0) {
      callback2(false);
    }
  }, items5);
  const items6 = [stateFromStores3];
  const effect2 = React.useEffect(() => {
    if (stateFromStores3) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_3.current = null;
          callback(true);
        }, 250);
      }
      return () => {
        clearTimeout(ref.current);
        ref.current = null;
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
    callback(false);
  }, items6);
  return !stateFromStores && tmp6 && tmp4;
};
