// Module ID: 11545
// Function ID: 11546
// Name: MessagesHooks
// Dependencies: [32, 19, 17, 10116, 9895, 6774, 4885, 5761, 504, 12, 558, 6881, 1379, 7878, 11546, 9894, 11547, 2]
// Exports: useChatUpdatesQueue, useFetchMessageApplications, useFetchVoiceChannelInviteStartTimes, useMessageAuthorActivities, useMessagesLifecycle, useMessagesState, useScrollState

// Module 11545 (MessagesHooks)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import shallowEqual from "shallowEqual" /* 558 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6881 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7878 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9894 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9895 */;
import ChatUpdatesQueueDefault from "ChatUpdatesQueue" /* 11547 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10116 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6774 */;
import GuildStore from "GuildStore" /* 4885 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let tmp;
const GlobalUtils = tmp(1379);
const findNodeHandle = react_native.findNodeHandle;
let closure_7 = useChatBottomManagerUIStore.updateShouldShowJumpToPresentButton;
let result = size.fileFinishedImporting("modules/messages/native/MessagesHooks.tsx");

export function useMessageAuthorActivities(arg0) {
  let closure_0;
  _require = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    const obj = {};
    const item = closure_0.forEach((author) => {
      const tmp = null != author.author && null != author.activity;
      if (tmp) {
        obj[author.author.id] = null;
      }
    });
    return obj;
  }, items);
  let obj = require("get initialized");
  const items1 = [PresenceStore];
  const items2 = [memo];
  return obj.useStateFromStoresObject(items1, () => {
    let primaryActivity;
    const obj = _modDef12;
    return obj.mapValues(memo, (arg0, arg1) => primaryActivity.getPrimaryActivity(arg1));
  }, items2);
}
export function useFetchMessageApplications(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    set = new Set();
    const item = closure_0.forEach((applicationId) => {
      const tmp = null != applicationId.applicationId && null == applicationId.application;
      if (tmp) {
        set.add(applicationId.applicationId);
      }
    });
    return Array.from(set);
  }, items);
  const ref = react.useRef([]);
  const items1 = [memo];
  const effect = react.useEffect(() => {
    const obj = shallowEqual;
    const tmp4 = ref;
    if (!obj.areArraysShallowEqual(memo, ref.current)) {
      const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
      ApplicationActionCreatorsDefault;
      const arr = _modDef12(memo);
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.uniq();
      const applications = fetchApplications(iter.value(), false);
      tmp4.current = memo;
    }
  }, items1);
}
export function useFetchVoiceChannelInviteStartTimes(stateFromStores4) {
  _require = stateFromStores4;
  let obj = require("get initialized");
  const items = [GuildStore, GuildAvailabilityStore];
  const items1 = [stateFromStores4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    const values = stateFromStores4.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.guild) {
        let obj2 = InviteTypeUtils;
        if (obj2.isVoiceChannelInvite(tmp3)) {
          let id = tmp3.guild.id;
          let tmp8 = id;
          let tmp10 = null != GuildStore.getGuild(id);
          if (tmp10) {
            tmp10 = !GuildAvailabilityStore.isUnavailable(tmp8);
          }
          obj[id] = tmp10;
        }
      }
      continue;
    }
    return obj;
  }, items1);
  const items2 = [stateFromStores4, stateFromStoresObject];
  const effect = react.useEffect(() => {
    const values = stateFromStores4.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.guild) {
        let tmp4 = require;
        let obj = InviteTypeUtils;
        if (obj.isVoiceChannelInvite(tmp3)) {
          let id = tmp3.guild.id;
          let tmp8 = id;
          let result = true !== stateFromStoresObject[id];
          if (!result) {
            result = VoiceChannelStartTimeStore.hasRequestedStartTimes(tmp8);
          }
          if (!result) {
            let tmp4Result = tmp4(11546);
            let channelInfo = tmp4Result.fetchChannelInfo(tmp8);
          }
        }
      }
      continue;
    }
  }, items2);
}
export function useMessagesLifecycle(screenIndex) {
  let channelId;
  let isMessagesReady;
  let messages;
  let oldestUnreadMessageId;
  let require;
  let scrollToMessageId;
  let updateRows;
  ({ messages: require, isMessagesReady: importDefault, oldestUnreadMessageId: dependencyMap, channelId } = screenIndex);
  screenIndex = screenIndex.screenIndex;
  ({ updateRows: findNodeHandle, scrollToMessageId: VoiceChannelStartTimeStore } = screenIndex);
  const effect = screenIndex.useEffect(() => {
    const obj = messages_MessagesUtils;
    const obj2 = { messages: require, isMessagesReady: importDefault, oldestUnreadMessageId: dependencyMap, channelId, screenIndex, updateRows: findNodeHandle, scrollToMessageId: VoiceChannelStartTimeStore };
    obj.syncMessageDisplay(obj2);
    const obj3 = messages_MessagesUtils;
    obj3.recordTimings(channelId, require);
  }, []);
  const items = [channelId, screenIndex];
  const effect1 = screenIndex.useEffect(() => () => {
    closure_2_7(channelId, screenIndex, false);
  }, items);
}
export function useScrollState() {
  const tmp = _slicedToArray(react.useState({ animated: false, hasHandledScroll: false, isAtBottom: false, isNearBottom: false, isNearTop: false, decelerating: false, dragging: false, hasMoreMessagesAfterForLastUpdate: false, _loaded: false }), 2);
  let closure_0 = tmp[1];
  const items = [
    tmp[0],
    react.useCallback((arg0) => {
      closure_0 = arg0;
      closure_0((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return obj;
      });
    }, [])
  ];
  return items;
}
export function useChatUpdatesQueue(ref6, callback) {
  let closure_0 = ref6;
  let closure_1 = callback;
  const items = [ref6, callback];
  const memo = react.useMemo(() => {
    let ref;
    const tmp = new ChatUpdatesQueueDefault(() => {
      let tmp2 = null;
      if (null !== ref.current) {
        tmp2 = findNodeHandle(tmp.current);
      }
      return tmp2;
    }, (arg0) => {
      callback(arg0);
    });
    return tmp;
  }, items);
  const items1 = [memo];
  const effect = react.useEffect(() => () => {
    memo.cleanup();
  }, items1);
  return memo;
}
export function useMessagesState() {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  return { shouldForceRender: tmp2, hasJumpedToOriginalPost: tmp4[0], setHasJumpedToOriginalPost: tmp4[1], setShouldForceRender: tmp3 };
}
