// Module ID: 11784
// Function ID: 91422
// Name: forumKeyExtractor
// Dependencies: []
// Exports: default

// Module 11784 (forumKeyExtractor)
function forumKeyExtractor(arg0, arg1) {
  let combined = arg0;
  if (arg0 === closure_22) {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_22 + "-" + arg1;
  }
  return combined;
}
function ArchivedSection() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[16]);
  obj = {};
  const items = [tmp.section, obj.useClientThemesOverride()];
  obj.style = items;
  obj = { "Null": "Array", "Null": "isArray", "Null": "constructor", style: tmp.divider };
  const intl = arg1(dependencyMap[18]).intl;
  obj.children = intl.string(arg1(dependencyMap[18]).t.3+LO1w);
  obj.children = callback(arg1(dependencyMap[17]).Text, obj);
  return callback(View, obj);
}
function SearchSection(numPosts) {
  numPosts = numPosts.numPosts;
  const tmp = callback3();
  let obj = { style: tmp.section };
  obj = { "Null": "Array", "Null": "isArray", "Null": "constructor", style: tmp.divider };
  if (0 === numPosts) {
    const intl2 = arg1(dependencyMap[18]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[18]).t.DbgHxi);
  } else {
    const intl = arg1(dependencyMap[18]).intl;
    obj = { numPosts, query: numPosts.searchQuery };
    stringResult = intl.formatToPlainString(arg1(dependencyMap[18]).t.tBz/8b, obj);
  }
  obj.children = stringResult;
  obj.children = closure_15(arg1(dependencyMap[17]).Text, obj);
  return closure_15(View, obj);
}
function ArchivedMissingReadHistoryPermission(channelName) {
  const tmp = callback3();
  let obj = { style: tmp.missingPermissionContainer };
  obj = { style: tmp.missingPermissionText };
  const intl = arg1(dependencyMap[18]).intl;
  obj.children = intl.format(arg1(dependencyMap[18]).t.TycmzM, { channelName: channelName.channelName });
  obj.children = callback(arg1(dependencyMap[17]).Text, obj);
  return callback(View, obj);
}
function SearchMissingReadHistoryPermission(channelName) {
  const tmp = callback3();
  let obj = { style: tmp.section };
  obj = { style: tmp.missingPermissionText };
  const intl = arg1(dependencyMap[18]).intl;
  obj.children = intl.format(arg1(dependencyMap[18]).t.OWZJdS, { channelName: channelName.channelName });
  obj.children = callback(arg1(dependencyMap[17]).Text, obj);
  return callback(View, obj);
}
function SortAndViewOptions(channel) {
  channel = channel.channel;
  const tmp = callback3();
  const id = channel.id;
  const arg1 = id;
  const items = [id];
  let ArrowsUpDownIcon = React.useCallback(() => {
    const combined = "ForumDisplaySettingsActionSheet-" + id;
    const id = combined;
    let obj = callback(paths[24]);
    obj = {
      channelId: id,
      onClose() {
        callback(closure_2[24]).hideActionSheet(combined);
      }
    };
    obj.openLazy(id(paths[26])(paths[25], paths.paths), combined, obj);
  }, items);
  const isMediaChannelResult = channel.isMediaChannel();
  if (importDefault(dependencyMap[27])("SortAndViewOptions")) {
    let obj = { variant: "secondary" };
    const intl3 = arg1(dependencyMap[18]).intl;
    const string3 = intl3.string;
    let str4 = arg1(dependencyMap[18]).t;
    if (isMediaChannelResult) {
      let string3Result = string3(str4.JxU0wr);
    } else {
      string3Result = string3(str4.xyYt8A);
    }
    obj.text = string3Result;
    obj.onPress = ArrowsUpDownIcon;
    obj.size = "sm";
    ArrowsUpDownIcon = arg1(dependencyMap[29]).ArrowsUpDownIcon;
    obj = {};
    str4 = "xxs";
    obj.size = "xxs";
    obj.icon = callback(ArrowsUpDownIcon, obj);
    tmp3(tmp4(tmp5[28]).Button, obj);
  } else {
    obj = { accessibilityRole: "button" };
    const intl = arg1(dependencyMap[18]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[18]).t;
    if (isMediaChannelResult) {
      let stringResult = string(t.kQN/bi);
    } else {
      stringResult = string(t.Iqetyr);
    }
    obj.accessibilityLabel = stringResult;
    obj.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
    obj.activeOpacity = 0.8;
    obj.style = tmp.optionsContainer;
    obj.onPress = ArrowsUpDownIcon;
    const obj1 = { style: tmp.optionsPill };
    const obj2 = { size: "xs", style: tmp.sortOptionsIcon };
    const items1 = [callback(arg1(dependencyMap[29]).ArrowsUpDownIcon, obj2), , ];
    const obj3 = { style: tmp.sortOptionsText };
    const intl2 = arg1(dependencyMap[18]).intl;
    const string2 = intl2.string;
    const t2 = arg1(dependencyMap[18]).t;
    if (isMediaChannelResult) {
      let string2Result = string2(t2.JxU0wr);
    } else {
      string2Result = string2(t2.xyYt8A);
    }
    obj3.children = string2Result;
    items1[1] = callback(arg1(dependencyMap[17]).Text, obj3);
    const obj4 = { size: "xs" };
    items1[2] = callback(arg1(dependencyMap[31]).ChevronSmallDownIcon, obj4);
    obj1.children = items1;
    obj.children = closure_16(View, obj1);
    return tmp3(tmp4(tmp5[30]).PressableOpacity, obj);
  }
}
function TagFilter(channel) {
  channel = channel.channel;
  const arg1 = channel;
  function handlePress() {
    let obj = callback(paths[24]);
    obj = { channel };
    obj.openLazy(channel(paths[26])(paths[32], paths.paths), "ForumTagFilterActionSheet", obj);
  }
  const tmp = callback3();
  const tagFilter = useForumChannelStore(channel.id).tagFilter;
  if (importDefault(dependencyMap[27])("TagFilter")) {
    let obj = { variant: "secondary" };
    const intl3 = tmp3(tmp4[18]).intl;
    obj.text = intl3.string(tmp3(tmp4[18]).t.112vVE);
    obj.onPress = handlePress;
    obj.size = "sm";
    obj = { size: "xxs" };
    obj.icon = callback(tmp3(tmp4[33]).TagIcon, obj);
    let tmp2Result = tmp2(tmp3(tmp4[28]).Button, obj);
  } else {
    obj = {};
    const intl = tmp3(tmp4[18]).intl;
    obj.accessibilityLabel = intl.string(tmp3(tmp4[18]).t.TdqRTh);
    obj.style = tmp.optionsContainer;
    obj.onPress = handlePress;
    const obj1 = { style: tmp.optionsPill };
    let tmp7 = tagFilter.size > 0;
    if (tmp7) {
      const obj2 = { style: tmp.countContainer };
      const obj3 = { style: tmp.countText, children: tagFilter.size };
      obj2.children = callback(arg1(dependencyMap[17]).Text, obj3);
      tmp7 = callback(View, obj2);
    }
    const items = [tmp7, , ];
    const obj4 = { style: tmp.sortOptionsText };
    const intl2 = arg1(dependencyMap[18]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[18]).t.112vVE);
    items[1] = callback(arg1(dependencyMap[17]).Text, obj4);
    const obj5 = { size: "xs" };
    items[2] = callback(arg1(dependencyMap[31]).ChevronSmallDownIcon, obj5);
    obj1.children = items;
    obj.children = closure_16(View, obj1);
    tmp2Result = tmp2(tmp3(tmp4[30]).PressableOpacity, obj);
    const tmp5 = closure_16;
    const tmp6 = View;
  }
  return tmp2Result;
}
function getForumItemType(arg0) {
  let str = "thread";
  if (set.has(arg0)) {
    str = arg0;
  }
  return str;
}
function onForumViewableItemsChanged(changed) {
  changed = changed.changed;
  const item = changed.forEach((item) => {
    item = item.item;
    if (!set.has(item)) {
      const channel = channel.getChannel(item);
      let parent_id;
      if (null != channel) {
        parent_id = channel.parent_id;
      }
      if (null != parent_id) {
        const obj = callback(closure_2[34]);
        if (item.isViewable) {
          const _Date2 = Date;
          const result = obj.markForumPostItemAsSeen(parent_id, item, Date.now());
        } else {
          const _Date = Date;
          const result1 = obj.markForumPostItemAsUnseen(parent_id, item, Date.now());
        }
      }
    }
  });
}
function ForumChannelContent(channel) {
  let sortOrder;
  let tagFilter;
  channel = channel.channel;
  const arg1 = channel;
  const searchQuery = channel.searchQuery;
  const importDefault = searchQuery;
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const tmp3 = useForumChannelStore(channel.id);
  ({ sortOrder, tagFilter } = tmp3);
  let obj = importDefault(dependencyMap[35]);
  obj = { guildId: channel.guild_id, channelId: channel.id };
  const forumChannelSeenManager = obj.useForumChannelSeenManager(obj);
  const items = [channel.id];
  const effect = React.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToOffset({ -437125116: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002488040065571517, -435748860: -823154013994709700000000000000000000000000000000000000000000000 });
    }
  }, items);
  const tmp6 = function useForumData(channel, sortOrder, tagFilter, tagSetting) {
    let canLoadMore;
    let isSearchLoading;
    let loadMore;
    let loading;
    let searchResults;
    let obj = channel(ref[19]);
    obj = { channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true };
    const forumActiveThreadIds = obj.useForumActiveThreadIds(obj);
    const searchQuery = forumActiveThreadIds;
    const substr = forumActiveThreadIds.slice(0, channel(ref[20]).BATCH_SIZE);
    const joined = substr.join();
    const items = [channel, joined];
    const effect = activeThreadIds.useEffect(() => {
      if ("" !== joined) {
        arg0(joined[20]).preloadForumThreads(arg0);
        const obj = arg0(joined[20]);
      }
    }, items);
    const items1 = [loadMore, canLoadMore];
    const stateFromStores = channel(joined[21]).useStateFromStores(items1, () => {
      const hasLoadedResult = closure_6.hasLoaded(arg0.guild_id);
      return !closure_6.hasLoaded(arg0.guild_id) && !lurking.isLurking(arg0.guild_id);
    });
    const activeThreadIds = stateFromStores;
    const obj4 = channel(joined[21]);
    obj = { channelId: channel.id };
    const forumSearchState = channel(joined[19]).useForumSearchState(obj);
    ({ searchResults, isSearchLoading } = forumSearchState);
    const obj5 = channel(joined[19]);
    const automaticForumSearch = channel(joined[19]).useAutomaticForumSearch(channel, tagFilter, tagSetting);
    const obj7 = channel(joined[19]);
    const canViewArchivedPosts = channel(joined[19]).useCanViewArchivedPosts(channel);
    const obj8 = channel(joined[19]);
    const archivedThreads = channel(joined[22]).useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
    const threadIds = archivedThreads.threadIds;
    const archivedThreadIds = threadIds;
    ({ loading, canLoadMore, loadMore } = archivedThreads);
    const obj9 = channel(joined[22]);
    const loadForumUnreadCounts = channel(joined[19]).useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting);
    let tmp9 = null == searchResults && canViewArchivedPosts;
    if (tmp9) {
      let tmp10 = stateFromStores;
      if (!stateFromStores) {
        tmp10 = loading;
      }
      if (!tmp10) {
        tmp10 = isSearchLoading;
      }
      tmp9 = !tmp10;
    }
    if (tmp9) {
      tmp9 = 0 === forumActiveThreadIds.length;
    }
    if (tmp9) {
      tmp9 = 0 === threadIds.length;
    }
    const items2 = [forumActiveThreadIds.length, threadIds.length, stateFromStores];
    const effect1 = activeThreadIds.useEffect(() => {
      forumActiveThreadIds(joined[23]).recordRender(forumActiveThreadIds.length + threadIds.length, !stateFromStores);
    }, items2);
    const obj1 = { activeThreadIds: forumActiveThreadIds, archivedThreadIds: threadIds, canLoadMore, loadMore, activeThreadsLoading: stateFromStores, archivedThreadsLoading: loading, isSearchLoading, isEmpty: tmp9, searchResults };
    return obj1;
  }(channel, sortOrder, tagFilter, tmp3.tagSetting);
  const activeThreadIds = tmp6.activeThreadIds;
  const React = activeThreadIds;
  const archivedThreadIds = tmp6.archivedThreadIds;
  const View = archivedThreadIds;
  const canLoadMore = tmp6.canLoadMore;
  let closure_5 = canLoadMore;
  const loadMore = tmp6.loadMore;
  let closure_6 = loadMore;
  const archivedThreadsLoading = tmp6.archivedThreadsLoading;
  let closure_7 = archivedThreadsLoading;
  const activeThreadsLoading = tmp6.activeThreadsLoading;
  let closure_8 = activeThreadsLoading;
  const isSearchLoading = tmp6.isSearchLoading;
  let closure_9 = isSearchLoading;
  const useForumChannelStore = searchResults;
  const tmp7 = importDefault(dependencyMap[36])(channel);
  let obj2 = arg1(dependencyMap[19]);
  const canViewArchivedPosts = obj2.useCanViewArchivedPosts(channel);
  let obj3 = arg1(dependencyMap[19]);
  const canSearchForumPosts = obj3.useCanSearchForumPosts(channel);
  let obj4 = arg1(dependencyMap[16]);
  const items1 = [archivedThreadsLoading, canLoadMore, canViewArchivedPosts, loadMore, tmp6.searchResults];
  const clientThemesOverride = obj4.useClientThemesOverride();
  const items2 = [, archivedThreadsLoading, canLoadMore, canViewArchivedPosts, loadMore, tmp6.searchResults];
  const callback = React.useCallback(() => {
    let tmp = null == searchResults && canViewArchivedPosts;
    if (tmp) {
      tmp = !archivedThreadsLoading;
    }
    if (tmp) {
      tmp = canLoadMore;
    }
    if (tmp) {
      loadMore();
    }
  }, items1);
  const items3 = [tmp6.searchResults, canViewArchivedPosts, canSearchForumPosts, activeThreadIds, activeThreadsLoading, archivedThreadIds, archivedThreadsLoading, isSearchLoading];
  const callback1 = React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    let tmp = null == searchResults;
    if (tmp) {
      tmp = canViewArchivedPosts;
    }
    if (tmp) {
      tmp = !archivedThreadsLoading;
    }
    if (tmp) {
      tmp = canLoadMore;
    }
    if (tmp) {
      tmp = nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height > nativeEvent.contentSize.height - 976;
    }
    if (tmp) {
      loadMore();
    }
  }, items2);
  let length;
  const memo = React.useMemo(() => {
    const items = [];
    if (null != searchResults) {
      items.push(closure_19);
      const push3 = items.push;
      if (canSearchForumPosts) {
        const items1 = [];
        HermesBuiltin.arraySpread(searchResults, 0);
        HermesBuiltin.apply(items1, items);
      } else {
        push3(closure_20);
      }
    } else if (!activeThreadsLoading) {
      const push = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(activeThreadIds, 0);
      HermesBuiltin.apply(items2, items);
      if (canViewArchivedPosts) {
        let tmp14 = null != archivedThreadIds;
        if (tmp14) {
          tmp14 = archivedThreadIds.length > 0;
        }
        if (tmp14) {
          items.push(closure_18);
          const push2 = items.push;
          const items3 = [];
          HermesBuiltin.arraySpread(archivedThreadIds, 0);
          HermesBuiltin.apply(items3, items);
        }
      } else {
        items.push(closure_18);
        items.push(closure_21);
      }
    }
    let num5 = 0;
    if (!activeThreadsLoading) {
      num5 = 0;
      if (!archivedThreadsLoading) {
        num5 = 0;
      }
      return items;
    }
    do {
      let tmp39 = closure_22;
      let arr3 = items.push(closure_22);
      num5 = num5 + 1;
      let num6 = 20;
    } while (num5 < 20);
  }, items3);
  if (null != tmp6.searchResults) {
    length = searchResults.length;
  }
  const items4 = [length, searchQuery, tmp7];
  if (tmp6.isEmpty) {
    obj = { topViewHeight: 92 };
    let str = "";
    if (null != tmp7) {
      str = tmp7;
    }
    obj.channelName = str;
    obj.tagFilter = tagFilter;
    return tmp16(importDefault(dependencyMap[39]), obj);
  } else {
    const obj1 = {};
    const items5 = [tmp.list, clientThemesOverride];
    obj1.style = items5;
    obj2 = { ref };
    obj3 = {};
    let num2 = 0;
    if (0 !== activeThreadIds.length) {
      num2 = importDefault(dependencyMap[13]).space.PX_8;
    }
    obj3.paddingTop = num2;
    obj3.paddingBottom = channel.insets.bottom + importDefault(dependencyMap[13]).space.PX_16;
    obj2.contentContainerStyle = obj3;
    obj2.getItemType = getForumItemType;
    obj2.keyExtractor = forumKeyExtractor;
    obj2.renderItem = tmp15;
    obj2.data = memo;
    obj2.onScroll = callback1;
    obj2.onScrollBeginDrag = function onScrollBeginDrag() {
      let obj = channel(ref[41]);
      obj = { guildId: channel.guild_id, channelId: channel.id };
      return obj.trackForumScrolled(obj);
    };
    obj2.onEndReached = callback;
    obj2.onViewableItemsChanged = onForumViewableItemsChanged;
    obj2.viewabilityConfig = closure_25;
    obj1.children = callback(arg1(dependencyMap[40]).FlashList, obj2);
    obj4 = {};
    const items6 = [callback(importDefault(dependencyMap[42]), { "Bool(true)": null, "Bool(true)": null }), tmp16(View, obj1)];
    obj4.children = items6;
    return callback2(closure_17, obj4);
  }
  const tmp = callback3();
}
function onCreatePostWithoutPermission() {
  let obj = importDefault(dependencyMap[43]);
  obj = { key: "FORUM_NO_POST_PERMISSION_HELP" };
  const intl = arg1(dependencyMap[18]).intl;
  obj.content = intl.string(arg1(dependencyMap[18]).t.iyzwnD);
  obj.icon = importDefault(dependencyMap[44]);
  obj.open(obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const useForumChannelStore = arg1(dependencyMap[7]).useForumChannelStore;
({ AnalyticsObjects: closure_11, AnalyticsPages: closure_12, AnalyticsSections: closure_13 } = arg1(dependencyMap[8]));
const ANDROID_FOREGROUND_RIPPLE = arg1(dependencyMap[9]).ANDROID_FOREGROUND_RIPPLE;
const Fonts = arg1(dependencyMap[10]).Fonts;
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = arg1(dependencyMap[11]));
let closure_18 = "archived_section";
let closure_19 = "search_section";
let closure_20 = "missing_permission_search";
let closure_21 = "missing_permission_archived_threads";
let closure_22 = "loading_section";
const items = ["archived_section", "search_section", "missing_permission_search", "missing_permission_archived_threads", "loading_section"];
const set = new Set(items);
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWER };
obj.background = obj;
obj.headerRow = {};
const tmp3 = arg1(dependencyMap[11]);
obj.headerDivider = { backgroundColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
obj.container = {};
obj.noHeight = { height: 0 };
obj.list = {};
obj.section = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
const obj2 = {};
const merged = Object.assign(importDefault(dependencyMap[14])(Fonts.PRIMARY_BOLD, importDefault(dependencyMap[13]).colors.TEXT_MUTED, 12, { 9223372036854775807: false, 0: false }));
obj.divider = obj2;
const obj3 = { flexDirection: false, alignItems: false, gap: false, overflow: false, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.xs };
obj.missingPermissionContainer = obj3;
const importDefaultResult = importDefault(dependencyMap[14]);
const obj4 = {};
const merged1 = Object.assign(importDefault(dependencyMap[14])(Fonts.PRIMARY_NORMAL, importDefault(dependencyMap[13]).colors.TEXT_MUTED, 12));
obj.missingPermissionText = obj4;
const importDefaultResult1 = importDefault(dependencyMap[14]);
obj.optionsContainer = { overflow: "hidden", borderRadius: importDefault(dependencyMap[13]).radii.xl };
const obj5 = { overflow: "hidden", borderRadius: importDefault(dependencyMap[13]).radii.xl };
obj.optionsPill = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST };
const obj6 = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST };
obj.sortOptionsIcon = { color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 4 };
obj.sortOptionsText = { marginHorizontal: 4 };
const obj7 = { color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 4 };
obj.countContainer = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BRAND };
const obj9 = {};
const obj8 = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BRAND };
let num;
if (obj13.isAndroid()) {
  num = 14;
}
obj9.lineHeight = num;
obj.countText = obj9;
let closure_24 = obj.createStyles(obj);
let closure_25 = { trackSelectGIF: null, ENABLE_COMMUNITY_FLOW_MODAL_KEY: null, zIndex: null };
const obj13 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[63]).fileFinishedImporting("modules/forums/native/ForumChannel.tsx");

export default function ForumChannel(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let dependencyMap;
  let React;
  let View;
  let closure_5;
  let closure_6;
  const tmp = callback3();
  let obj = arg1(dependencyMap[21]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_9.canChatInGuild(channel.guild_id));
  let obj1 = arg1(dependencyMap[45]);
  let tmp4 = null != channel.topic;
  const canStartThread = obj1.useCanStartThread(channel);
  if (tmp4) {
    tmp4 = 0 !== channel.topic.length;
  }
  importDefault = tmp4;
  const analyticsLocations = importDefault(dependencyMap[46])(importDefault(dependencyMap[47]).FORUM_CHANNEL).analyticsLocations;
  dependencyMap = analyticsLocations;
  let obj2 = arg1(dependencyMap[19]);
  obj = { channelId: channel.id };
  const searchQuery = obj2.useForumSearchState(obj).searchQuery;
  React = searchQuery;
  let obj4 = arg1(dependencyMap[48]);
  const showMemberVerificationGate = obj4.useShowMemberVerificationGate(channel.guild_id);
  View = showMemberVerificationGate;
  let obj5 = arg1(dependencyMap[21]);
  const items1 = [closure_8];
  const items2 = [channel.id];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => threadSettings.getThreadSettings(channel.id), items2);
  closure_5 = stateFromStores1;
  const items3 = [channel.id];
  const tmp5 = importDefault(dependencyMap[46]);
  const effect = React.useEffect(() => () => {
    if (null != user.id) {
      callback(closure_2[50]).clearForumSearch(user.id);
      const obj = callback(closure_2[50]);
    }
  }, items3);
  const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
  const callback = React.useCallback((analyticsLocationObject) => {
    let obj = tmp4(analyticsLocations[51]);
    obj.changeThreadSettings(channel.id, { isPrivate: false });
    let name;
    if (null != stateFromStores1) {
      name = stateFromStores1.name;
    }
    let tmp4 = null != name;
    if (tmp4) {
      let length;
      if (null != stateFromStores1) {
        if (null != stateFromStores1.name) {
          const trimmed = str.trim();
          if (null != trimmed) {
            length = trimmed.length;
          }
        }
      }
      tmp4 = 0 !== length;
    }
    if (!tmp4) {
      obj = {};
      let trimmed1;
      if (null != searchQuery) {
        if (searchQuery.trim().length > 0) {
          trimmed1 = searchQuery.trim();
        }
      }
      obj.name = trimmed1;
      tmp4(analyticsLocations[51]).changeThreadSettings(channel.id, obj);
      const obj2 = tmp4(analyticsLocations[51]);
    }
    obj = { guildId: channel.guild_id, parentChannelId: channel.id, analyticsLocationObject, analyticsLocations };
    const result = channel(analyticsLocations[52]).openCreateForumPostModal(obj);
  }, items4);
  closure_6 = callback;
  const items5 = [channel, showMemberVerificationGate, tmp4, callback];
  let tmp12 = !stateFromStores;
  const callback1 = React.useCallback(() => {
    function startCreateForumPostFlow() {
      if (callback) {
        let obj = callback(closure_2[53]);
        if (!obj.hasSeen(lib.id)) {
          obj = {
            channel: lib,
            onPress() {
                  return callback({ page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_GUIDELINES, object: constants.BUTTON_CTA });
                }
          };
          const result = lib(closure_2[56]).openForumGuidelinesActionSheet(obj);
          const obj2 = lib(closure_2[56]);
        }
      }
      const result1 = lib(closure_2[54]).triggerHapticFeedback(callback(closure_2[55]).IMPACT_LIGHT);
      obj = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_FOOTER, object: constants.BUTTON_CTA };
      callback2(obj);
    }
    let obj = channel(analyticsLocations[41]);
    obj = { guildId: channel.guild_id, channelId: channel.id };
    const result = obj.trackForumCreateNewPostClick(obj);
    if (showMemberVerificationGate) {
      const result1 = channel(analyticsLocations[57]).openMemberVerificationModal(channel.guild_id, startCreateForumPostFlow);
      const obj3 = channel(analyticsLocations[57]);
    } else {
      const result2 = startCreateForumPostFlow();
    }
  }, items5);
  if (!tmp12) {
    tmp12 = !canStartThread && !showMemberVerificationGate;
    const tmp13 = !canStartThread && !showMemberVerificationGate;
  }
  const insets = importDefault(dependencyMap[58])({ includeKeyboardHeight: true }).insets;
  let obj6 = arg1(dependencyMap[16]);
  obj = { style: tmp.background };
  let tmp17 = null;
  const clientThemesOverride = obj6.useClientThemesOverride(tmp.noHeight);
  if (tmp8) {
    obj1 = { channel };
    obj2 = { variant: "secondary" };
    obj1.ctaProps = obj2;
    obj1.flush = true;
    obj1.topBorder = true;
    tmp17 = callback(arg1(dependencyMap[59]).OptInChannelBanner, obj1);
  }
  const items6 = [tmp17, , , , , ];
  const obj3 = { style: tmp.headerRow };
  const items7 = [callback(SortAndViewOptions, { channel }), ];
  let tmp23 = channel.availableTags.length > 0;
  if (tmp23) {
    obj4 = { channel };
    tmp23 = callback(TagFilter, obj4);
  }
  items7[1] = tmp23;
  obj3.children = items7;
  items6[1] = closure_16(View, obj3);
  const items8 = [tmp.headerDivider, clientThemesOverride];
  items6[2] = callback(View, { style: items8 });
  obj5 = { style: tmp.container, children: callback(ForumChannelContent, { channel, insets, searchQuery }) };
  items6[3] = callback(View, obj5);
  obj6 = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj6.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.TyAuoT);
  obj6.icon = importDefault(dependencyMap[61]);
  obj6.disabled = tmp12;
  obj6.positionBottom = insets.bottom + importDefault(dependencyMap[13]).space.PX_16;
  obj6.onPress = callback1;
  obj6.onPressDisabled = onCreatePostWithoutPermission;
  let stringResult;
  if (tmp12) {
    const intl2 = arg1(dependencyMap[18]).intl;
    stringResult = intl2.string(arg1(dependencyMap[18]).t.iyzwnD);
  }
  obj6.accessibilityHint = stringResult;
  items6[4] = callback(arg1(dependencyMap[60]).FloatingActionButton, obj6);
  let tmp30 = null;
  if (null != channel.guild_id) {
    const obj7 = { channel };
    tmp30 = callback(arg1(dependencyMap[62]).MemberActionChatInputBannerGuarded, obj7);
  }
  items6[5] = tmp30;
  obj.children = items6;
  return closure_16(View, obj);
};
