// Module ID: 12481
// Function ID: 12482
// Name: ThreadBrowserHooks
// Dependencies: [32, 19, 12482, 2064, 4709, 6042, 6067, 7884, 4711, 1096, 558, 576, 7904, 12, 1388, 504, 11, 7883, 9301, 2]

// Module 12481 (ThreadBrowserHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1096 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7883 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9301 */;
import ReportToModChannelStore from "ReportToModChannelStore" /* 12482 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import ActiveThreadsStore_mod from "ActiveThreadsStore" /* 6067 */;
import ArchivedThreadsStore from "ArchivedThreadsStore" /* 7884 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4711 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, current, dependencyMap, importDefault;

let react = react_mod;
let closure_5 = ReportToModChannelStore.useShouldShowResolvedFlagsForChannel;
let ActiveThreadsStore = ActiveThreadsStore_mod;
const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackThreadBrowserTab() {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function a() {
      const obj = require("ThreadUtils");
      const result = obj.trackThreadBrowserTab();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (function useTrackThreadBrowserTab() {
  const effect = react.useEffect(() => {
    const obj = require("ThreadUtils");
    const result = obj.trackThreadBrowserTab();
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveThreadIds(guild_id) {
  let first;
  _require = guild_id;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id.guild_id) {
    let tmp8;
    let tmp9;
    let tmp11;
    if (cResult[2] === guild_id.id) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    let tmpResult = tmp(504);
    const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
    if (cResult[5] !== stateFromStoresArray) {
      let tmp12;
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0, arg1) {
            const compare = SnowflakeUtilsDefault.compare;
            SnowflakeUtilsDefault;
            const lastMessageIdResult = current.lastMessageId(arg0);
            return compare(lastMessageIdResult, current.lastMessageId(arg1));
          }
        }
        cResult[7] = S;
        tmp12 = S;
      } else {
        class S {
          constructor(arg0, arg1) {
            const compare = SnowflakeUtilsDefault.compare;
            SnowflakeUtilsDefault;
            const lastMessageIdResult = current.lastMessageId(arg0);
            return compare(lastMessageIdResult, current.lastMessageId(arg1));
          }
        }
      }
      const obj3 = _modDef12(stateFromStoresArray);
      const sorted = obj3.sort(tmp12);
      let iter = sorted.reverse();
      const valueResult = iter.value();
      cResult[5] = stateFromStoresArray;
      cResult[6] = valueResult;
      tmp11 = valueResult;
    } else {
      class S {
        constructor(arg0, arg1) {
          const compare = SnowflakeUtilsDefault.compare;
          SnowflakeUtilsDefault;
          const lastMessageIdResult = current.lastMessageId(arg0);
          return compare(lastMessageIdResult, current.lastMessageId(arg1));
        }
      }
    }
    return tmp11;
  }
  const fn = function s() {
    let channel;
    const tmp = _modDef12;
    const tmpResult = tmp(ActiveThreadsStore.getThreadsForParent(guild_id.guild_id, guild_id.id));
    const values = tmpResult.values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const iter = found1.map((id) => id.id);
    return iter.value();
  };
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = guild_id);
  cResult[1] = guild_id.guild_id;
  cResult[2] = guild_id.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : (function useActiveThreadIds(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = arg0);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let channel;
    const tmp = _modDef12;
    const tmpResult = tmp(ActiveThreadsStore.getThreadsForParent(closure_0.guild_id, closure_0.id));
    const values = tmpResult.values();
    const mapped = values.map((id) => channel.getChannel(id.id));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    const iter = found1.map((id) => id.id);
    return iter.value();
  }, items1);
  const items2 = [stateFromStoresArray];
  return react.useMemo(() => {
    const obj = _modDef12(stateFromStoresArray);
    const sorted = obj.sort((arg0, arg1) => {
      const compare = stateFromStoresArray(closure_1_2[16]).compare;
      stateFromStoresArray(closure_1_2[16]);
      const lastMessageIdResult = closure_1_8.lastMessageId(arg0);
      return compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
    });
    const iter = sorted.reverse();
    return iter.value();
  }, items2);
});
let closure_13 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveThreads(arg0) {
  let closure_0;
  let first;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(7);
  const tmp4 = closure_13(arg0);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [JoinedThreadsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function o() {
      const obj = _modDef12;
      return obj.partition(closure_0, (id) => closure_1_11.hasJoined(id));
    };
    const items1 = [tmp4];
    cResult[1] = tmp4;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("get initialized");
  [tmp10, tmp11] = tmpResult.useStateFromStores(first, tmp7, tmp8, require("get initialized").statesWillNeverBeEqual);
  _slicedToArray(tmpResult.useStateFromStores(first, tmp7, tmp8, require("get initialized").statesWillNeverBeEqual), 2);
  if (cResult[4] === tmp10) {
    let tmp12;
    if (cResult[5] === tmp11) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj2 = { joinedThreadIds: tmp10, unjoinedThreadIds: tmp11 };
  cResult[4] = tmp10;
  cResult[5] = tmp11;
  cResult[6] = obj2;
  tmp12 = obj2;
}) : (function useActiveThreads(arg0) {
  let closure_0;
  const tmp = closure_13(arg0);
  _require = tmp;
  let obj = require("get initialized");
  const items = [JoinedThreadsStore];
  const items1 = [tmp];
  const tmp2 = _slicedToArray(obj.useStateFromStores(items, () => {
    const obj = _modDef12;
    return obj.partition(closure_0, (id) => closure_1_11.hasJoined(id));
  }, items1, require("get initialized").statesWillNeverBeEqual), 2);
  return { joinedThreadIds: tmp2[0], unjoinedThreadIds: tmp2[1] };
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveGuildThreads(arg0) {
  let closure_0;
  let first;
  let tmp11;
  let tmp8;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let channel;
      const tmp = _modDef12;
      const tmpResult = tmp(ActiveThreadsStore.getThreadsForGuild(closure_0));
      const values = tmpResult.values();
      const mapped = values.map((item) => {
        const obj = closure_1_1(closure_1_2[13]);
        return obj.values(item);
      });
      const flattenResult = mapped.flatten();
      const mapped1 = flattenResult.map((id) => channel.getChannel(id.id));
      const found = mapped1.filter(GlobalUtils.isNotNullish);
      const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
      const iter = found1.map((id) => id.id);
      return iter.value();
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
  if (cResult[4] !== stateFromStoresArray) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0, arg1) {
          const compare = SnowflakeUtilsDefault.compare;
          SnowflakeUtilsDefault;
          const lastMessageIdResult = current.lastMessageId(arg0);
          return compare(lastMessageIdResult, current.lastMessageId(arg1));
        }
      }
      cResult[6] = S;
      tmp12 = S;
    } else {
      class S {
        constructor(arg0, arg1) {
          const compare = SnowflakeUtilsDefault.compare;
          SnowflakeUtilsDefault;
          const lastMessageIdResult = current.lastMessageId(arg0);
          return compare(lastMessageIdResult, current.lastMessageId(arg1));
        }
      }
    }
    const obj3 = _modDef12(stateFromStoresArray);
    const sorted = obj3.sort(tmp12);
    let iter = sorted.reverse();
    const valueResult = iter.value();
    cResult[4] = stateFromStoresArray;
    cResult[5] = valueResult;
    tmp11 = valueResult;
  } else {
    class S {
      constructor(arg0, arg1) {
        const compare = SnowflakeUtilsDefault.compare;
        SnowflakeUtilsDefault;
        const lastMessageIdResult = current.lastMessageId(arg0);
        return compare(lastMessageIdResult, current.lastMessageId(arg1));
      }
    }
  }
  return tmp11;
}) : (function useActiveGuildThreads(arg0) {
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
      const obj = stateFromStoresArray(closure_1_2[13]);
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
      const compare = stateFromStoresArray(closure_1_2[16]).compare;
      stateFromStoresArray(closure_1_2[16]);
      const lastMessageIdResult = closure_1_8.lastMessageId(arg0);
      return compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
    });
    const iter = sorted.reverse();
    return iter.value();
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useArchivedThreads(isModeratorReportChannel, sortOrder, tagFilter, tagSetting) {
  let canLoadMore;
  let closure_4;
  let loading;
  let nextOffset;
  let ref;
  let showResolvedFlags;
  let tmp4;
  let tmp6;
  _require = isModeratorReportChannel;
  importDefault = sortOrder;
  dependencyMap = tagFilter;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(49);
  if (cResult[0] !== isModeratorReportChannel) {
    const result = isModeratorReportChannel.isModeratorReportChannel();
    cResult[0] = isModeratorReportChannel;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  react = tmp4;
  showResolvedFlags = showResolvedFlags(isModeratorReportChannel.id).showResolvedFlags;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ArchivedThreadsStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === isModeratorReportChannel.id) {
    if (cResult[4] === sortOrder) {
      if (cResult[5] === tagFilter) {
        let tmp8;
        if (cResult[6] === tagSetting) {
          tmp8 = cResult[7];
        }
        let tmpResult = tmp(504);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp6, tmp8);
        ({ canLoadMore, loading, nextOffset } = stateFromStoresObject);
        const isInitialLoad = stateFromStoresObject.isInitialLoad;
        if (cResult[8] === isModeratorReportChannel) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === nextOffset) {
              if (cResult[11] === showResolvedFlags) {
                if (cResult[12] === sortOrder) {
                  if (cResult[13] === tagFilter) {
                    let tmp10;
                    let tmp11;
                    if (cResult[14] === tagSetting) {
                      tmp10 = cResult[15];
                    }
                    current = tmp10;
                    let obj3 = react;
                    ActiveThreadsStore = react.useRef(tmp10);
                    if (cResult[16] !== tmp10) {
                      class L {
                        constructor() {
                          ref.current = current;
                        }
                      }
                      cResult[16] = tmp10;
                      cResult[17] = L;
                      tmp11 = L;
                    } else {
                      class L {
                        constructor() {
                          ref.current = current;
                        }
                      }
                    }
                    const effect = obj3.useEffect(tmp11);
                    if (cResult[18] !== isInitialLoad) {
                      class F {
                        constructor() {
                          const tmp = isInitialLoad;
                          if (tmp) {
                            ref.current();
                          }
                        }
                      }
                      cResult[18] = isInitialLoad;
                      cResult[19] = F;
                    } else {
                      class F {
                        constructor() {
                          const tmp = isInitialLoad;
                          if (tmp) {
                            ref.current();
                          }
                        }
                      }
                    }
                    if (cResult[20] === isModeratorReportChannel.id) {
                      class F {
                        constructor() {
                          const tmp = isInitialLoad;
                          if (tmp) {
                            ref.current();
                          }
                        }
                      }
                    }
                    const items1 = [isModeratorReportChannel.id, , , , ];
                    class A {
                      constructor() {
                        const canResult = PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, isModeratorReportChannel);
                        let tmp3 = !canResult;
                        const tmp = isModeratorReportChannel;
                        if (canResult) {
                          tmp3 = closure_4 && !showResolvedFlags;
                          const tmp4 = closure_4 && !showResolvedFlags;
                        }
                        if (!tmp3) {
                          const obj3 = { guildId: null, channelId: null, sortOrder, tagFilter, tagSetting, offset: nextOffset };
                          ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
                          const obj = ThreadActionCreatorsDefault;
                          const archivedThreads = obj.loadArchivedThreads(obj3);
                        }
                      }
                    }
                    items1[2] = tagFilter;
                    items1[3] = isInitialLoad;
                    items1[4] = showResolvedFlags;
                    cResult[20] = isModeratorReportChannel.id;
                    cResult[21] = isInitialLoad;
                    cResult[22] = showResolvedFlags;
                    cResult[23] = sortOrder;
                    cResult[24] = tagFilter;
                    cResult[25] = items1;
                  }
                }
              }
            }
          }
        }
        class A {
          constructor() {
            const canResult = PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, isModeratorReportChannel);
            let tmp3 = !canResult;
            const tmp = isModeratorReportChannel;
            if (canResult) {
              tmp3 = closure_4 && !showResolvedFlags;
              const tmp4 = closure_4 && !showResolvedFlags;
            }
            if (!tmp3) {
              const obj3 = { guildId: null, channelId: null, sortOrder, tagFilter, tagSetting, offset: nextOffset };
              ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
              const obj = ThreadActionCreatorsDefault;
              const archivedThreads = obj.loadArchivedThreads(obj3);
            }
          }
        }
        cResult[8] = isModeratorReportChannel;
        cResult[9] = tmp4;
        cResult[10] = nextOffset;
        cResult[11] = showResolvedFlags;
        cResult[12] = sortOrder;
        cResult[13] = tagFilter;
        cResult[14] = tagSetting;
        cResult[15] = A;
        tmp10 = A;
      }
    }
  }
  const fn = function _() {
    const obj = { loading: ArchivedThreadsStore.isLoading(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting), isInitialLoad: ArchivedThreadsStore.getIsInitialLoad(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting), canLoadMore: ArchivedThreadsStore.getCanLoadMore(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting), nextOffset: ArchivedThreadsStore.getNextOffset(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting) };
    return obj;
  };
  cResult[3] = isModeratorReportChannel.id;
  cResult[4] = sortOrder;
  cResult[5] = tagFilter;
  cResult[6] = tagSetting;
  cResult[7] = fn;
  tmp8 = fn;
}) : (function useArchivedThreads(isModeratorReportChannel, sortOrder, tagFilter, tagSetting) {
  let callback;
  let items4;
  let loading;
  let nextOffset;
  let obj3;
  let showResolvedFlags;
  _require = isModeratorReportChannel;
  dependencyMap = tagFilter;
  const result = isModeratorReportChannel.isModeratorReportChannel();
  react = result;
  showResolvedFlags = showResolvedFlags(isModeratorReportChannel.id).showResolvedFlags;
  let obj = require("get initialized");
  const items = [ArchivedThreadsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { loading: ArchivedThreadsStore.isLoading(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting), isInitialLoad: ArchivedThreadsStore.getIsInitialLoad(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting), canLoadMore: ArchivedThreadsStore.getCanLoadMore(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting), nextOffset: ArchivedThreadsStore.getNextOffset(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting) };
    return obj;
  });
  ({ loading, nextOffset } = stateFromStoresObject);
  const isInitialLoad = stateFromStoresObject.isInitialLoad;
  const items1 = [isModeratorReportChannel, sortOrder, tagFilter, tagSetting, nextOffset, showResolvedFlags, result];
  const canLoadMore = stateFromStoresObject.canLoadMore;
  const loadMore = react.useCallback(() => {
    const canResult = PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, isModeratorReportChannel);
    let tmp3 = !canResult;
    const tmp = isModeratorReportChannel;
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
  const items2 = [isModeratorReportChannel.id, sortOrder, tagFilter, isInitialLoad, showResolvedFlags];
  const effect1 = react.useEffect(() => {
    const tmp = isInitialLoad;
    if (tmp) {
      ref.current();
    }
  }, items2);
  const items3 = [isModeratorReportChannel.id, showResolvedFlags];
  const effect2 = react.useEffect(() => {
    const obj = ForumActionCreatorsDefault;
    obj.resort(isModeratorReportChannel.id);
  }, items3);
  const obj2 = {
    threadIds: obj3.useStateFromStoresArray(items4, () => {
      let tmp = _modDef12;
      const tmpResult = tmp(ArchivedThreadsStore.getThreads(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting));
      const iter = tmpResult.filter((item) => {
        const tmp = closure_1_4;
        if (tmp) {
          const tmp2 = showResolvedFlags;
          if (!tmp2) {
            return false;
          }
        }
        const channel = nextOffset.getChannel(item);
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
    loading = obj4.can(Permissions.READ_MESSAGE_HISTORY, isModeratorReportChannel);
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = tmp2;
export const useActiveThreadIds = tmp3;
export const useActiveThreads = tmp4;
export const useActiveGuildThreads = tmp5;
export const useArchivedThreads = tmp6;
