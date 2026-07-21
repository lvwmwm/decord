// Module ID: 11785
// Function ID: 91457
// Name: useActiveThreadIds
// Dependencies: []
// Exports: useActiveGuildThreads, useActiveThreads, useArchivedThreads, useTrackThreadBrowserTab

// Module 11785 (useActiveThreadIds)
function useActiveThreadIds(channel) {
  const arg1 = channel;
  const items = [closure_7, closure_9, closure_6];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const stateFromStoresArray = arg1(dependencyMap[11]).useStateFromStoresArray(items, (self) => {
    const tmp = stateFromStoresArray(closure_2[12]);
    const values = stateFromStoresArray(closure_2[12])(threadsForParent.getThreadsForParent(self.guild_id, self.id)).values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(self(closure_2[13]).isNotNullish);
    const found1 = found.filter((channel) => closure_7.can(constants.VIEW_CHANNEL, channel));
    const tmpResult = stateFromStoresArray(closure_2[12])(threadsForParent.getThreadsForParent(self.guild_id, self.id));
    return found1.map((id) => id.id).value();
  }, items1);
  const importDefault = stateFromStoresArray;
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const sorted = stateFromStoresArray(closure_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = callback(closure_2[14]);
      return obj.compare(closure_8.lastMessageId(arg0), closure_8.lastMessageId(arg1));
    });
    const obj = stateFromStoresArray(closure_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).useShouldShowResolvedFlagsForChannel;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const Permissions = arg1(dependencyMap[9]).Permissions;
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = function useTrackThreadBrowserTab() {
  const effect = React.useEffect(() => {
    const result = callback(closure_2[10]).trackThreadBrowserTab();
  }, []);
};
export { useActiveThreadIds };
export const useActiveThreads = function useActiveThreads(channel) {
  const tmp = useActiveThreadIds(channel);
  const arg1 = tmp;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_11];
  const items1 = [tmp];
  const tmp2 = callback(obj.useStateFromStores(items, () => callback(closure_2[12]).partition(tmp, (arg0) => closure_11.hasJoined(arg0)), items1, arg1(dependencyMap[11]).statesWillNeverBeEqual), 2);
  obj = { joinedThreadIds: tmp2[0], unjoinedThreadIds: tmp2[1] };
  return obj;
};
export const useActiveGuildThreads = function useActiveGuildThreads(arg0) {
  const arg1 = arg0;
  const items = [closure_7, closure_9, closure_6];
  const items1 = [arg0];
  const stateFromStoresArray = arg1(dependencyMap[11]).useStateFromStoresArray(items, () => {
    const tmp = stateFromStoresArray(closure_2[12]);
    const values = stateFromStoresArray(closure_2[12])(threadsForGuild.getThreadsForGuild(arg0)).values();
    const mapped = values.map((arg0) => callback(closure_2[12]).values(arg0));
    const tmpResult = stateFromStoresArray(closure_2[12])(threadsForGuild.getThreadsForGuild(arg0));
    const mapped1 = mapped.flatten().map((id) => channel.getChannel(id.id));
    const found = mapped1.filter(arg0(closure_2[13]).isNotNullish);
    const found1 = found.filter((channel) => closure_7.can(constants.VIEW_CHANNEL, channel));
    const flattenResult = mapped.flatten();
    return found1.map((id) => id.id).value();
  }, items1);
  const importDefault = stateFromStoresArray;
  const items2 = [stateFromStoresArray];
  return React.useMemo(() => {
    const sorted = stateFromStoresArray(closure_2[12])(stateFromStoresArray).sort((arg0, arg1) => {
      const obj = callback(closure_2[14]);
      return obj.compare(closure_8.lastMessageId(arg0), closure_8.lastMessageId(arg1));
    });
    const obj = stateFromStoresArray(closure_2[12])(stateFromStoresArray);
    return sorted.reverse().value();
  }, items2);
};
export const useArchivedThreads = function useArchivedThreads(channel, LATEST_ACTIVITY, set, MATCH_SOME) {
  let loading;
  let nextOffset;
  LATEST_ACTIVITY = channel;
  const importDefault = LATEST_ACTIVITY;
  const dependencyMap = set;
  let closure_3 = MATCH_SOME;
  const result = channel.isModeratorReportChannel();
  const React = result;
  const showResolvedFlags = callback2(channel.id).showResolvedFlags;
  const callback2 = showResolvedFlags;
  let obj = LATEST_ACTIVITY(dependencyMap[11]);
  const items = [closure_10];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ loading: store.isLoading(arg0.id, arg1, arg2, arg3), isInitialLoad: store.getIsInitialLoad(arg0.id, arg1, arg2, arg3), canLoadMore: store.getCanLoadMore(arg0.id, arg1, arg2, arg3), nextOffset: store.getNextOffset(arg0.id, arg1, arg2, arg3) }));
  ({ loading, nextOffset } = stateFromStoresObject);
  let closure_6 = nextOffset;
  const isInitialLoad = stateFromStoresObject.isInitialLoad;
  let closure_7 = isInitialLoad;
  const items1 = [channel, LATEST_ACTIVITY, set, MATCH_SOME, nextOffset, showResolvedFlags, result];
  const callback = React.useCallback(() => {
    let tmp = !isInitialLoad.can(constants.READ_MESSAGE_HISTORY, arg0);
    if (!tmp) {
      let tmp2 = result;
      if (result) {
        tmp2 = !showResolvedFlags;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      let obj = arg1(arg2[15]);
      obj = {};
      ({ guild_id: obj2.guildId, id: obj2.channelId } = arg0);
      obj.sortOrder = arg1;
      obj.tagFilter = arg2;
      obj.tagSetting = arg3;
      obj.offset = nextOffset;
      const archivedThreads = obj.loadArchivedThreads(obj);
    }
  }, items1);
  let closure_8 = callback;
  let closure_9 = React.useRef(callback);
  const effect = React.useEffect(() => {
    closure_9.current = callback;
  });
  const items2 = [channel.id, LATEST_ACTIVITY, set, isInitialLoad, showResolvedFlags];
  const effect1 = React.useEffect(() => {
    if (isInitialLoad) {
      ref.current();
    }
  }, items2);
  const items3 = [channel.id, showResolvedFlags];
  const effect2 = React.useEffect(() => {
    arg1(arg2[16]).resort(arg0.id);
  }, items3);
  obj = {};
  const items4 = [closure_10, closure_6, closure_7];
  obj.threadIds = LATEST_ACTIVITY(dependencyMap[11]).useStateFromStoresArray(items4, () => {
    const tmp = arg1(arg2[12]);
    const tmpResult = arg1(arg2[12])(store.getThreads(arg0.id, arg1, arg2, arg3));
    return arg1(arg2[12])(store.getThreads(arg0.id, arg1, arg2, arg3)).filter((channelId) => {
      if (closure_4) {
        if (!closure_5) {
          return false;
        }
      }
      const channel = channel.getChannel(channelId);
      let canResult = null != channel;
      if (canResult) {
        canResult = closure_7.can(constants.VIEW_CHANNEL, channel);
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
    loading = closure_7.can(Permissions.READ_MESSAGE_HISTORY, channel);
  }
  obj.loading = loading;
  obj.loadMore = callback;
  return obj;
};
