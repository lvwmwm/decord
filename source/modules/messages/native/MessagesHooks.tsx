// Module ID: 10457
// Function ID: 80691
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 9478, 9313, 4469, 1838, 4217, 566, 22, 620, 5465, 1327, 6978, 10458, 9312, 10459, 2]
// Exports: useChatUpdatesQueue, useFetchMessageApplications, useFetchVoiceChannelInviteStartTimes, useMessageAuthorActivities, useMessagesLifecycle, useMessagesState, useScrollState

// Module 10457 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { findNodeHandle } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { updateShouldShowJumpToPresentButton as closure_7 } from "getChatInputContainerHeight";
import closure_8 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";

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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/messages/native/MessagesHooks.tsx");

export const useMessageAuthorActivities = function useMessageAuthorActivities(arg0) {
  const _require = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const obj = {};
    const item = obj.forEach((author) => {
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items);
  const items1 = [closure_10];
  const items2 = [memo];
  return _require(566).useStateFromStoresObject(items1, () => memo(outer1_2[9]).mapValues(memo, (arg0, arg1) => outer2_10.getPrimaryActivity(arg1)), items2);
};
export const useFetchMessageApplications = function useFetchMessageApplications(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    const set = new Set();
    const item = set.forEach((applicationId) => {
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    return Array.from(set);
  }, items);
  let closure_2 = React.useRef([]);
  const items1 = [memo];
  const effect = React.useEffect(() => {
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const obj2 = memo(ref[11]);
      const found = memo(ref[9])(memo).filter(callback(ref[12]).isNotNullish);
      const arr = memo(ref[9])(memo);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = memo;
      const iter = found.uniq();
    }
  }, items1);
};
export const useFetchVoiceChannelInviteStartTimes = function useFetchVoiceChannelInviteStartTimes(stateFromStores4) {
  const _require = stateFromStores4;
  const items = [_createForOfIteratorHelperLoose, closure_8];
  const items1 = [stateFromStores4];
  const stateFromStoresObject = _require(566).useStateFromStoresObject(items, () => {
    let iter3;
    const obj = {};
    const tmp = outer1_11(stateFromStores4.values());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = tmp2;
        if (null != value.guild) {
          let tmp4 = stateFromStores4;
          let tmp5 = outer1_2;
          let obj2 = stateFromStores4(outer1_2[13]);
          tmp3 = tmp2;
          if (obj2.isVoiceChannelInvite(value)) {
            let id = value.guild.id;
            let tmp6 = outer1_9;
            let tmp7 = null != outer1_9.getGuild(id);
            if (tmp7) {
              let tmp8 = outer1_8;
              tmp7 = !outer1_8.isUnavailable(id);
            }
            obj[id] = tmp7;
            tmp3 = id;
          }
        }
        iter3 = tmp();
        tmp2 = tmp3;
        iter2 = iter3;
      } while (!iter3.done);
    }
    return obj;
  }, items1);
  const items2 = [stateFromStores4, stateFromStoresObject];
  const effect = React.useEffect(() => {
    let iter3;
    const tmp = outer1_11(stateFromStores4.values());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = tmp2;
        if (null != value.guild) {
          let tmp4 = stateFromStores4;
          let tmp5 = outer1_2;
          let obj = stateFromStores4(outer1_2[13]);
          tmp3 = tmp2;
          if (obj.isVoiceChannelInvite(value)) {
            let id = value.guild.id;
            let tmp6 = stateFromStoresObject;
            let result = true !== stateFromStoresObject[id];
            if (!result) {
              let tmp8 = outer1_6;
              result = outer1_6.hasRequestedStartTimes(id);
            }
            tmp3 = id;
            if (!result) {
              let tmp9 = stateFromStores4;
              let tmp10 = outer1_2;
              let obj2 = stateFromStores4(outer1_2[14]);
              let channelInfo = obj2.fetchChannelInfo(id);
              tmp3 = id;
            }
          }
        }
        iter3 = tmp();
        tmp2 = tmp3;
        iter2 = iter3;
      } while (!iter3.done);
    }
  }, items2);
};
export const useMessagesLifecycle = function useMessagesLifecycle(screenIndex) {
  let channelId;
  let _isNativeReflectConstruct;
  let dependencyMap;
  let findNodeHandle;
  let importDefault;
  let require;
  ({ messages: require, isMessagesReady: importDefault, oldestUnreadMessageId: dependencyMap, channelId } = screenIndex);
  screenIndex = screenIndex.screenIndex;
  ({ updateRows: findNodeHandle, scrollToMessageId: _isNativeReflectConstruct } = screenIndex);
  const effect = screenIndex.useEffect(() => {
    let obj = outer1_0(outer1_2[15]);
    obj = { messages: closure_0, isMessagesReady: closure_1, oldestUnreadMessageId: closure_2, channelId, screenIndex, updateRows: closure_5, scrollToMessageId: _isNativeReflectConstruct };
    obj.syncMessageDisplay(obj);
    outer1_0(outer1_2[15]).recordTimings(channelId, closure_0);
  }, []);
  const items = [channelId, screenIndex];
  const effect1 = screenIndex.useEffect(() => () => {
    outer2_7(outer1_3, outer1_4, false);
  }, items);
};
export const useScrollState = function useScrollState() {
  const tmp = callback(React.useState({ animated: false, hasHandledScroll: false, isAtBottom: false, isNearBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, _loaded: false }), 2);
  let closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const callback = arg0;
      callback((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return {};
      });
    }, [])
  ];
  return items;
};
export const useChatUpdatesQueue = function useChatUpdatesQueue(ref5, callback) {
  let closure_0 = ref5;
  let closure_1 = callback;
  const items = [ref5, callback];
  const memo = React.useMemo(() => {
    let tmp = callback(memo[16]);
    tmp = new tmp(() => {
      let tmp = null;
      if (null !== outer1_0.current) {
        tmp = outer2_5(outer1_0.current);
      }
      return tmp;
    }, (arg0) => {
      outer1_1(arg0);
    });
    return tmp;
  }, items);
  const items1 = [memo];
  const effect = React.useEffect(() => () => {
    outer1_2.cleanup();
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
