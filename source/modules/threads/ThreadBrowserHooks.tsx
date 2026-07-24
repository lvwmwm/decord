// Module ID: 11823
// Function ID: 91769
// Name: useActiveThreadIds
// Dependencies: [57, 31, 11824, 1348, 3758, 4142, 5040, 7007, 3760, 482, 7022, 566, 22, 1327, 21, 7006, 9175, 2]
// Exports: useActiveGuildThreads, useActiveThreads, useArchivedThreads, useTrackThreadBrowserTab

// Module 11823 (useActiveThreadIds)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useShouldShowResolvedFlagsForChannel as closure_5 } from "useReportToModChannelFiltersStore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

let require = arg1;
function useActiveThreadIds(channel) {
  const _require = channel;
  const items = [closure_7, closure_9, _isNativeReflectConstruct];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(outer1_2[12]);
    const values = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForParent(channel.guild_id, channel.id)).values();
    const mapped = values.map((id) => outer2_6.getChannel(id.id));
    const found = mapped.filter(channel(outer1_2[13]).isNotNullish);
    const found1 = found.filter((channel) => outer2_7.can(outer2_12.VIEW_CHANNEL, channel));
    const tmpResult = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForParent(channel.guild_id, channel.id));
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const sorted = stateFromStoresArray(outer1_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = stateFromStoresArray(outer2_2[14]);
      return obj.compare(outer2_8.lastMessageId(arg0), outer2_8.lastMessageId(arg1));
    });
    let obj = stateFromStoresArray(outer1_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
}
let result = require("useReportToModChannelFiltersStore").fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = function useTrackThreadBrowserTab() {
  const effect = React.useEffect(() => {
    const result = outer1_0(outer1_2[10]).trackThreadBrowserTab();
  }, []);
};
export { useActiveThreadIds };
export const useActiveThreads = function useActiveThreads(channel) {
  const tmp = useActiveThreadIds(channel);
  const require = tmp;
  let obj = require(566) /* initialize */;
  const items = [closure_11];
  const items1 = [tmp];
  const tmp2 = callback(obj.useStateFromStores(items, () => outer1_1(outer1_2[12]).partition(closure_0, (arg0) => outer2_11.hasJoined(arg0)), items1, require(566) /* initialize */.statesWillNeverBeEqual), 2);
  obj = { joinedThreadIds: tmp2[0], unjoinedThreadIds: tmp2[1] };
  return obj;
};
export const useActiveGuildThreads = function useActiveGuildThreads(arg0) {
  const _require = arg0;
  const items = [closure_7, closure_9, _isNativeReflectConstruct];
  const items1 = [arg0];
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(outer1_2[12]);
    const values = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForGuild(callback)).values();
    const mapped = values.map((arg0) => stateFromStoresArray(outer2_2[12]).values(arg0));
    const tmpResult = stateFromStoresArray(outer1_2[12])(outer1_9.getThreadsForGuild(callback));
    const mapped1 = mapped.flatten().map((id) => outer2_6.getChannel(id.id));
    const found = mapped1.filter(callback(outer1_2[13]).isNotNullish);
    const found1 = found.filter((channel) => outer2_7.can(outer2_12.VIEW_CHANNEL, channel));
    const flattenResult = mapped.flatten();
    return found1.map((id) => id.id).value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const sorted = stateFromStoresArray(outer1_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = stateFromStoresArray(outer2_2[14]);
      return obj.compare(outer2_8.lastMessageId(arg0), outer2_8.lastMessageId(arg1));
    });
    let obj = stateFromStoresArray(outer1_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
};
export const useArchivedThreads = function useArchivedThreads(channel, LATEST_ACTIVITY, canLoadMore, MATCH_SOME) {
  let loading;
  let nextOffset;
  const _require = channel;
  let closure_1 = LATEST_ACTIVITY;
  const dependencyMap = canLoadMore;
  let _slicedToArray = MATCH_SOME;
  const result = channel.isModeratorReportChannel();
  showResolvedFlags = showResolvedFlags(channel.id).showResolvedFlags;
  let obj = _require(566);
  const items = [closure_10];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ loading: outer1_10.isLoading(user.id, closure_1, closure_2, _slicedToArray), isInitialLoad: outer1_10.getIsInitialLoad(user.id, closure_1, closure_2, _slicedToArray), canLoadMore: outer1_10.getCanLoadMore(user.id, closure_1, closure_2, _slicedToArray), nextOffset: outer1_10.getNextOffset(user.id, closure_1, closure_2, _slicedToArray) }));
  ({ loading, nextOffset } = stateFromStoresObject);
  const isInitialLoad = stateFromStoresObject.isInitialLoad;
  const items1 = [channel, LATEST_ACTIVITY, canLoadMore, MATCH_SOME, nextOffset, showResolvedFlags, result];
  const callback = result.useCallback(() => {
    let tmp = !isInitialLoad.can(outer1_12.READ_MESSAGE_HISTORY, closure_0);
    if (!tmp) {
      let tmp2 = result;
      if (result) {
        tmp2 = !showResolvedFlags;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      let obj = LATEST_ACTIVITY(7006);
      obj = {};
      ({ guild_id: obj2.guildId, id: obj2.channelId } = closure_0);
      obj.sortOrder = LATEST_ACTIVITY;
      obj.tagFilter = dependencyMap;
      obj.tagSetting = _slicedToArray;
      obj.offset = nextOffset;
      const archivedThreads = obj.loadArchivedThreads(obj);
    }
  }, items1);
  let closure_9 = result.useRef(callback);
  const effect = result.useEffect(() => {
    closure_9.current = callback;
  });
  const items2 = [channel.id, LATEST_ACTIVITY, canLoadMore, isInitialLoad, showResolvedFlags];
  const effect1 = result.useEffect(() => {
    if (isInitialLoad) {
      ref.current();
    }
  }, items2);
  const items3 = [channel.id, showResolvedFlags];
  const effect2 = result.useEffect(() => {
    LATEST_ACTIVITY(9175).resort(user.id);
  }, items3);
  obj = {};
  const items4 = [closure_10, nextOffset, isInitialLoad];
  obj.threadIds = _require(566).useStateFromStoresArray(items4, () => {
    const tmp = LATEST_ACTIVITY(22);
    const tmpResult = LATEST_ACTIVITY(22)(outer1_10.getThreads(user.id, LATEST_ACTIVITY, dependencyMap, _slicedToArray));
    return LATEST_ACTIVITY(22)(outer1_10.getThreads(user.id, LATEST_ACTIVITY, dependencyMap, _slicedToArray)).filter((channelId) => {
      if (outer1_4) {
        if (!outer1_5) {
          return false;
        }
      }
      const channel = nextOffset.getChannel(channelId);
      let canResult = null != channel;
      if (canResult) {
        canResult = isInitialLoad.can(outer2_12.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        canResult = !channel.isMediaThread();
      }
      return canResult;
    }).value();
  });
  obj.canLoadMore = stateFromStoresObject.canLoadMore;
  if (!loading) {
    loading = isInitialLoad;
  }
  if (loading) {
    loading = showResolvedFlags;
  }
  if (loading) {
    loading = isInitialLoad.can(Permissions.READ_MESSAGE_HISTORY, channel);
  }
  obj.loading = loading;
  obj.loadMore = callback;
  return obj;
};
