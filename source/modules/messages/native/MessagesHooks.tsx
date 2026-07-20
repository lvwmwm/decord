// Module ID: 10440
// Function ID: 80594
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useChatUpdatesQueue, useFetchMessageApplications, useFetchVoiceChannelInviteStartTimes, useMessageAuthorActivities, useMessagesLifecycle, useMessagesState, useScrollState

// Module 10440 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const findNodeHandle = arg1(dependencyMap[2]).findNodeHandle;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).updateShouldShowJumpToPresentButton;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/messages/native/MessagesHooks.tsx");

export const useMessageAuthorActivities = function useMessageAuthorActivities(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const obj = {};
    const arg0 = obj;
    const item = arg0.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items);
  const importDefault = memo;
  const items1 = [closure_10];
  const items2 = [memo];
  return arg1(dependencyMap[8]).useStateFromStoresObject(items1, () => memo(closure_2[9]).mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1)), items2);
};
export const useFetchMessageApplications = function useFetchMessageApplications(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const set = new Set();
    const arg0 = set;
    const item = arg0.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    return Array.from(set);
  }, items);
  const importDefault = memo;
  let closure_2 = React.useRef([]);
  const items1 = [memo];
  const effect = React.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const obj2 = memo(ref[11]);
      const found = memo(ref[9])(memo).filter(arg0(ref[12]).isNotNullish);
      const arr = memo(ref[9])(memo);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = memo;
      const iter = found.uniq();
    }
  }, items1);
};
export const useFetchVoiceChannelInviteStartTimes = function useFetchVoiceChannelInviteStartTimes(stateFromStores4) {
  const arg1 = stateFromStores4;
  const items = [closure_9, closure_8];
  const items1 = [stateFromStores4];
  const stateFromStoresObject = arg1(dependencyMap[8]).useStateFromStoresObject(items, () => {
    let iter3;
    const obj = {};
    const tmp = callback(arg0.values());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = tmp2;
        if (null != value.guild) {
          let tmp4 = closure_0;
          let tmp5 = closure_2;
          let obj2 = closure_0(closure_2[13]);
          tmp3 = tmp2;
          if (obj2.isVoiceChannelInvite(value)) {
            let id = value.guild.id;
            let tmp6 = closure_9;
            let tmp7 = null != closure_9.getGuild(id);
            if (tmp7) {
              let tmp8 = closure_8;
              tmp7 = !closure_8.isUnavailable(id);
            }
            obj[id] = tmp7;
            tmp3 = id;
          }
        }
        iter3 = tmp();
        let tmp2 = tmp3;
        iter2 = iter3;
      } while (!iter3.done);
    }
    return obj;
  }, items1);
  const importDefault = stateFromStoresObject;
  const items2 = [stateFromStores4, stateFromStoresObject];
  const effect = React.useEffect(() => {
    let iter3;
    const tmp = callback(arg0.values());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = tmp2;
        if (null != value.guild) {
          let tmp4 = closure_0;
          let tmp5 = closure_2;
          let obj = closure_0(closure_2[13]);
          tmp3 = tmp2;
          if (obj.isVoiceChannelInvite(value)) {
            let id = value.guild.id;
            let tmp6 = closure_1;
            let result = true !== closure_1[id];
            if (!result) {
              let tmp8 = closure_6;
              result = closure_6.hasRequestedStartTimes(id);
            }
            tmp3 = id;
            if (!result) {
              let tmp9 = closure_0;
              let tmp10 = closure_2;
              let obj2 = closure_0(closure_2[14]);
              let channelInfo = obj2.fetchChannelInfo(id);
              tmp3 = id;
            }
          }
        }
        iter3 = tmp();
        let tmp2 = tmp3;
        iter2 = iter3;
      } while (!iter3.done);
    }
  }, items2);
};
export const useMessagesLifecycle = function useMessagesLifecycle(screenIndex) {
  let channelId;
  ({ messages: closure_0, isMessagesReady: closure_1, oldestUnreadMessageId: closure_2, channelId } = screenIndex);
  let closure_3 = channelId;
  screenIndex = screenIndex.screenIndex;
  const React = screenIndex;
  ({ updateRows: closure_5, scrollToMessageId: closure_6 } = screenIndex);
  const effect = React.useEffect(() => {
    let obj = callback(closure_2[15]);
    obj = { messages: callback, isMessagesReady: closure_1, oldestUnreadMessageId: closure_2, channelId, screenIndex, updateRows: closure_5, scrollToMessageId: closure_6 };
    obj.syncMessageDisplay(obj);
    callback(closure_2[15]).recordTimings(channelId, callback);
  }, []);
  const items = [channelId, screenIndex];
  const effect1 = React.useEffect(() => () => {
    callback(closure_3, closure_4, false);
  }, items);
};
export const useScrollState = function useScrollState() {
  const tmp = callback(React.useState({}), 2);
  let closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const callback = arg0;
      callback((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(arg0);
        return {};
      });
    }, [])
  ];
  return items;
};
export const useChatUpdatesQueue = function useChatUpdatesQueue(ref5, callback) {
  callback = ref5;
  const importDefault = callback;
  const items = [ref5, callback];
  const memo = React.useMemo(() => {
    let tmp = arg1(memo[16]);
    tmp = new tmp(() => {
      let tmp = null;
      if (null !== ref.current) {
        tmp = callback2(ref.current);
      }
      return tmp;
    }, (arg0) => {
      callback(arg0);
    });
    return tmp;
  }, items);
  const dependencyMap = memo;
  const items1 = [memo];
  const effect = React.useEffect(() => () => {
    closure_2.cleanup();
  }, items1);
  return memo;
};
export const useMessagesState = function useMessagesState() {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(React.useState(false), 2);
  const tmp4 = callback(React.useState(false), 2);
  return { shouldForceRender: tmp2, hasJumpedToOriginalPost: tmp4[0], setHasJumpedToOriginalPost: tmp4[1], setShouldForceRender: tmp3 };
};
