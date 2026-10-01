// Module ID: 12277
// Function ID: 12278
// Name: ThreadBrowserHooks
// Dependencies: [32, 19, 12278, 2045, 4469, 4851, 5819, 7185, 4471, 1085, 7200, 504, 12, 1370, 11, 7184, 7324, 2]
// Exports: useActiveGuildThreads, useActiveThreadIds, useActiveThreads, useArchivedThreads, useTrackThreadBrowserTab

// Module 12277 (ThreadBrowserHooks)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7184 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7324 */;
import ReportToModChannelStore from "ReportToModChannelStore" /* 12278 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5819 */;
import ArchivedThreadsStore from "ArchivedThreadsStore" /* 7185 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let closure_5 = ReportToModChannelStore.useShouldShowResolvedFlagsForChannel;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = function useTrackThreadBrowserTab() {
  const effect = react.useEffect(() => {
    const obj = require("ThreadUtils");
    const result = obj.trackThreadBrowserTab();
  }, []);
};
export const useActiveThreadIds = function useActiveThreadIds(arg0) {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = arg0);
  const obj = require("get initialized");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let channel;
    const tmp = _modDef12;
    const tmpResult = tmp(threadsForParent.getThreadsForParent(closure_0.guild_id, closure_0.id));
    const values = tmpResult.values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(memo(dependencyMap[13]).isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const iter = found1.map((id) => id.id);
    return iter.value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return react.useMemo(() => {
    const obj = _modDef12(stateFromStoresArray);
    const sorted = obj.sort((arg0, arg1) => {
      const compare = stateFromStoresArray(closure_1_2[14]).compare;
      stateFromStoresArray(closure_1_2[14]);
      const lastMessageIdResult = closure_1_8.lastMessageId(arg0);
      return compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
    });
    const iter = sorted.reverse();
    return iter.value();
  }, items2);
};
export const useActiveThreads = function useActiveThreads(channel) {
  let memo;
  let threadsForParent;
  let closure_0 = channel;
  let obj = memo(504);
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let channel;
    const tmp = _modDef12;
    const tmpResult = tmp(threadsForParent.getThreadsForParent(closure_0.guild_id, closure_0.id));
    const values = tmpResult.values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(memo(dependencyMap[13]).isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const iter = found1.map((id) => id.id);
    return iter.value();
  }, items1);
  const items2 = [stateFromStoresArray];
  memo = react.useMemo(() => {
    const obj = _modDef12(stateFromStoresArray);
    const sorted = obj.sort((arg0, arg1) => {
      const compare = stateFromStoresArray(closure_1_2[14]).compare;
      stateFromStoresArray(closure_1_2[14]);
      const lastMessageIdResult = closure_1_8.lastMessageId(arg0);
      return compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
    });
    const iter = sorted.reverse();
    return iter.value();
  }, items2);
  const items3 = [JoinedThreadsStore];
  const items4 = [memo];
  const obj2 = memo(504);
  const tmp3 = _slicedToArray(obj2.useStateFromStores(items3, () => {
    const obj = _modDef12;
    return obj.partition(memo, (id) => closure_1_11.hasJoined(id));
  }, items4, memo(504).statesWillNeverBeEqual), 2);
  return { joinedThreadIds: tmp3[0], unjoinedThreadIds: tmp3[1] };
};
export const useActiveGuildThreads = function useActiveGuildThreads(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [arg0];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let channel;
    const tmp = _modDef12;
    const tmpResult = tmp(ActiveThreadsStore.getThreadsForGuild(closure_0));
    const values = tmpResult.values();
    const mapped = values.map((item) => {
      const obj = stateFromStoresArray(closure_1_2[12]);
      return obj.values(item);
    });
    const flattenResult = mapped.flatten();
    const mapped1 = flattenResult.map((id) => channel.getChannel(id.id));
    const found = mapped1.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const iter = found1.map((id) => id.id);
    return iter.value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return react.useMemo(() => {
    const obj = _modDef12(stateFromStoresArray);
    const sorted = obj.sort((arg0, arg1) => {
      const compare = stateFromStoresArray(closure_1_2[14]).compare;
      stateFromStoresArray(closure_1_2[14]);
      const lastMessageIdResult = closure_1_8.lastMessageId(arg0);
      return compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
    });
    const iter = sorted.reverse();
    return iter.value();
  }, items2);
};
export const useArchivedThreads = function useArchivedThreads(channel, LATEST_ACTIVITY, loadMore, MATCH_SOME) {
  let callback;
  let items4;
  let loading;
  let nextOffset;
  let obj3;
  let showResolvedFlags;
  let tagFilter;
  _require = channel;
  const sortOrder = LATEST_ACTIVITY;
  dependencyMap = loadMore;
  const tagSetting = MATCH_SOME;
  const result = channel.isModeratorReportChannel();
  react = result;
  showResolvedFlags = showResolvedFlags(channel.id).showResolvedFlags;
  let obj = require("get initialized");
  const items = [ArchivedThreadsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { loading: ArchivedThreadsStore.isLoading(channel.id, sortOrder, tagFilter, tagSetting), isInitialLoad: ArchivedThreadsStore.getIsInitialLoad(channel.id, sortOrder, tagFilter, tagSetting), canLoadMore: ArchivedThreadsStore.getCanLoadMore(channel.id, sortOrder, tagFilter, tagSetting), nextOffset: ArchivedThreadsStore.getNextOffset(channel.id, sortOrder, tagFilter, tagSetting) };
    return obj;
  });
  ({ loading, nextOffset } = stateFromStoresObject);
  const isInitialLoad = stateFromStoresObject.isInitialLoad;
  const items1 = [channel, LATEST_ACTIVITY, loadMore, MATCH_SOME, nextOffset, showResolvedFlags, result];
  const canLoadMore = stateFromStoresObject.canLoadMore;
  loadMore = react.useCallback(() => {
    const canResult = PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, channel);
    let tmp3 = !canResult;
    const tmp = channel;
    if (canResult) {
      tmp3 = react && !showResolvedFlags;
      const tmp4 = react && !showResolvedFlags;
    }
    if (!tmp3) {
      const obj3 = { guildId: null, channelId: null, sortOrder, tagFilter, tagSetting, offset: nextOffset };
      ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
      const obj = ThreadActionCreatorsDefault;
      const archivedThreads = obj.loadArchivedThreads(obj3);
    }
  }, items1);
  const ref = react.useRef(loadMore);
  const effect = react.useEffect(() => {
    ref.current = current;
  });
  const items2 = [channel.id, LATEST_ACTIVITY, loadMore, isInitialLoad, showResolvedFlags];
  const effect1 = react.useEffect(() => {
    const tmp = isInitialLoad;
    if (tmp) {
      ref.current();
    }
  }, items2);
  const items3 = [channel.id, showResolvedFlags];
  const effect2 = react.useEffect(() => {
    const obj = ForumActionCreatorsDefault;
    obj.resort(channel.id);
  }, items3);
  const obj2 = {
    threadIds: obj3.useStateFromStoresArray(items4, () => {
      let tmp = _modDef12;
      const tmpResult = tmp(ArchivedThreadsStore.getThreads(channel.id, sortOrder, tagFilter, tagSetting));
      const iter = tmpResult.filter((item) => {
        const tmp = closure_1_4;
        if (tmp) {
          const tmp2 = showResolvedFlags;
          if (!tmp2) {
            return false;
          }
        }
        channel = nextOffset.getChannel(item);
        const canResult = null != channel && isInitialLoad.can(constants.VIEW_CHANNEL, channel) && !channel.isMediaThread();
        return canResult;
      });
      return iter.value();
    }),
    canLoadMore,
    loading,
    loadMore
  };
  obj3 = require("get initialized");
  items4 = [ArchivedThreadsStore, nextOffset, isInitialLoad];
  const obj4 = isInitialLoad;
  if (!loading) {
    loading = isInitialLoad;
  }
  if (loading) {
    loading = showResolvedFlags;
  }
  if (loading) {
    loading = obj4.can(Permissions.READ_MESSAGE_HISTORY, channel);
  }
  return obj2;
};
