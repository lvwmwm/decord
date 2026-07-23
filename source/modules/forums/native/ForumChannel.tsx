// Module ID: 11795
// Function ID: 91496
// Name: forumKeyExtractor
// Dependencies: [31, 27, 3759, 5040, 1348, 4468, 4946, 11125, 653, 1277, 482, 33, 4130, 689, 5052, 477, 8829, 4126, 1212, 9137, 5681, 566, 11796, 14, 4098, 11798, 1934, 1324, 4543, 11274, 4660, 8525, 11799, 8729, 9141, 11800, 4320, 11151, 11124, 11801, 7879, 7009, 4662, 3831, 7415, 5650, 5464, 5484, 4619, 10436, 9139, 7019, 9545, 9564, 4099, 4100, 9562, 9145, 5160, 10434, 8379, 11804, 11386, 2]
// Exports: default

// Module 11795 (forumKeyExtractor)
import ChevronSmallDownIcon from "ChevronSmallDownIcon";
import { View } from "useIsMobileVisualRefreshExperimentEnabled";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { useForumChannelStore } from "set";
import ME from "ME";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import { Fonts } from "sum";
import jsxProd from "TagIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_11;
let closure_12;
let closure_13;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function forumKeyExtractor(arg0, arg1) {
  let combined = arg0;
  if (arg0 === loading_section) {
    const _HermesInternal = HermesInternal;
    combined = "" + loading_section + "-" + arg1;
  }
  return combined;
}
function ArchivedSection() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(8829) /* useGradientBottom */;
  obj = {};
  const items = [tmp.section, obj.useClientThemesOverride()];
  obj.style = items;
  obj = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["3+LO1w"]);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(View, obj);
}
function SearchSection(numPosts) {
  numPosts = numPosts.numPosts;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.section };
  obj = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted" };
  if (0 === numPosts) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.DbgHxi);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { numPosts, query: numPosts.searchQuery };
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["tBz/8b"], obj);
  }
  obj.children = stringResult;
  obj.children = closure_15(require(4126) /* Text */.Text, obj);
  return closure_15(View, obj);
}
function ArchivedMissingReadHistoryPermission(channelName) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.missingPermissionContainer };
  obj = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.TycmzM, { channelName: channelName.channelName });
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(View, obj);
}
function SearchMissingReadHistoryPermission(channelName) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.section };
  obj = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.OWZJdS, { channelName: channelName.channelName });
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(View, obj);
}
function SortAndViewOptions(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  const id = channel.id;
  const items = [id];
  let ArrowsUpDownIcon = React.useCallback(() => {
    combined = "ForumDisplaySettingsActionSheet-" + combined;
    let obj = outer1_1(outer1_2[24]);
    obj = {
      channelId: combined,
      onClose() {
        outer2_1(outer2_2[24]).hideActionSheet(combined);
      }
    };
    obj.openLazy(id(outer1_2[26])(outer1_2[25], outer1_2.paths), combined, obj);
  }, items);
  const isMediaChannelResult = channel.isMediaChannel();
  if (importDefault(1324)("SortAndViewOptions")) {
    let obj = { variant: "secondary" };
    const intl3 = id(1212).intl;
    const string3 = intl3.string;
    let str4 = id(1212).t;
    if (isMediaChannelResult) {
      let string3Result = string3(str4.JxU0wr);
    } else {
      string3Result = string3(str4.xyYt8A);
    }
    obj.text = string3Result;
    obj.onPress = ArrowsUpDownIcon;
    obj.size = "sm";
    ArrowsUpDownIcon = id(11274).ArrowsUpDownIcon;
    obj = {};
    str4 = "xxs";
    obj.size = "xxs";
    obj.icon = callback(ArrowsUpDownIcon, obj);
    tmp3(tmp4(4543).Button, obj);
  } else {
    obj = { accessibilityRole: "button" };
    const intl = id(1212).intl;
    const string = intl.string;
    const t = id(1212).t;
    if (isMediaChannelResult) {
      let stringResult = string(t["kQN/bi"]);
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
    const items1 = [callback(id(11274).ArrowsUpDownIcon, obj2), , ];
    const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", style: tmp.sortOptionsText };
    const intl2 = id(1212).intl;
    const string2 = intl2.string;
    const t2 = id(1212).t;
    if (isMediaChannelResult) {
      let string2Result = string2(t2.JxU0wr);
    } else {
      string2Result = string2(t2.xyYt8A);
    }
    obj3.children = string2Result;
    items1[1] = callback(id(4126).Text, obj3);
    const obj4 = { size: "xs" };
    items1[2] = callback(id(8525).ChevronSmallDownIcon, obj4);
    obj1.children = items1;
    obj.children = closure_16(View, obj1);
    return tmp3(tmp4(4660).PressableOpacity, obj);
  }
}
function TagFilter(channel) {
  channel = channel.channel;
  function handlePress() {
    let obj = outer1_1(outer1_2[24]);
    obj = { channel };
    obj.openLazy(channel(outer1_2[26])(outer1_2[32], outer1_2.paths), "ForumTagFilterActionSheet", obj);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tagFilter = useForumChannelStore(channel.id).tagFilter;
  if (importDefault(1324)("TagFilter")) {
    let obj = { variant: "secondary" };
    const intl3 = tmp3(1212).intl;
    obj.text = intl3.string(tmp3(1212).t["112vVE"]);
    obj.onPress = handlePress;
    obj.size = "sm";
    obj = { size: "xxs" };
    obj.icon = callback(tmp3(8729).TagIcon, obj);
    let tmp2Result = tmp2(tmp3(4543).Button, obj);
  } else {
    obj = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.8 };
    const intl = tmp3(1212).intl;
    obj.accessibilityLabel = intl.string(tmp3(1212).t.TdqRTh);
    obj.style = tmp.optionsContainer;
    obj.onPress = handlePress;
    const obj1 = { style: tmp.optionsPill };
    let tmp7 = tagFilter.size > 0;
    if (tmp7) {
      const obj2 = { style: tmp.countContainer };
      const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.countText, children: tagFilter.size };
      obj2.children = callback(channel(4126).Text, obj3);
      tmp7 = callback(View, obj2);
    }
    const items = [tmp7, , ];
    const obj4 = { variant: "text-sm/medium", color: "interactive-text-default", style: tmp.sortOptionsText };
    const intl2 = channel(1212).intl;
    obj4.children = intl2.string(channel(1212).t["112vVE"]);
    items[1] = callback(channel(4126).Text, obj4);
    const obj5 = { size: "xs" };
    items[2] = callback(channel(8525).ChevronSmallDownIcon, obj5);
    obj1.children = items;
    obj.children = closure_16(View, obj1);
    tmp2Result = tmp2(tmp3(4660).PressableOpacity, obj);
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
  let item = changed.forEach((item) => {
    item = item.item;
    if (!outer1_23.has(item)) {
      const channel = outer1_7.getChannel(item);
      let parent_id;
      if (null != channel) {
        parent_id = channel.parent_id;
      }
      if (null != parent_id) {
        const obj = outer1_0(outer1_2[34]);
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
  const searchQuery = channel.searchQuery;
  const ref = activeThreadIds.useRef(null);
  const tmp3 = searchResults(channel.id);
  ({ sortOrder, tagFilter } = tmp3);
  let obj = searchQuery(ref[35]);
  obj = { guildId: channel.guild_id, channelId: channel.id };
  const forumChannelSeenManager = obj.useForumChannelSeenManager(obj);
  let items = [channel.id];
  let effect = activeThreadIds.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  const tmp6 = (function useForumData(channel, sortOrder, tagFilter, tagSetting) {
    let canLoadMore;
    let isSearchLoading;
    let loadMore;
    let loading;
    let searchResults;
    let closure_0 = channel;
    let obj = channel(ref[19]);
    obj = { channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true };
    const forumActiveThreadIds = obj.useForumActiveThreadIds(obj);
    const substr = forumActiveThreadIds.slice(0, channel(ref[20]).BATCH_SIZE);
    const joined = substr.join();
    const items = [channel, joined];
    const effect = activeThreadIds.useEffect(() => {
      if ("" !== joined) {
        channel(ref[20]).preloadForumThreads(closure_0);
        const obj = channel(ref[20]);
      }
    }, items);
    const items1 = [loadMore, canLoadMore];
    const stateFromStores = channel(ref[21]).useStateFromStores(items1, () => {
      const hasLoadedResult = loadMore.hasLoaded(channel.guild_id);
      return !loadMore.hasLoaded(channel.guild_id) && !canLoadMore.isLurking(channel.guild_id);
    });
    const obj4 = channel(ref[21]);
    obj = { channelId: channel.id };
    const forumSearchState = channel(ref[19]).useForumSearchState(obj);
    ({ searchResults, isSearchLoading } = forumSearchState);
    const obj5 = channel(ref[19]);
    const automaticForumSearch = channel(ref[19]).useAutomaticForumSearch(channel, tagFilter, tagSetting);
    const obj7 = channel(ref[19]);
    const canViewArchivedPosts = channel(ref[19]).useCanViewArchivedPosts(channel);
    const obj8 = channel(ref[19]);
    const archivedThreads = channel(ref[22]).useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
    const threadIds = archivedThreads.threadIds;
    ({ loading, canLoadMore, loadMore } = archivedThreads);
    const obj9 = channel(ref[22]);
    const loadForumUnreadCounts = channel(ref[19]).useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting);
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
      searchQuery(ref[23]).recordRender(forumActiveThreadIds.length + threadIds.length, !stateFromStores);
    }, items2);
    const obj1 = { activeThreadIds: forumActiveThreadIds, archivedThreadIds: threadIds, canLoadMore, loadMore, activeThreadsLoading: stateFromStores, archivedThreadsLoading: loading, isSearchLoading, isEmpty: tmp9, searchResults };
    return obj1;
  })(channel, sortOrder, tagFilter, tmp3.tagSetting);
  activeThreadIds = tmp6.activeThreadIds;
  const archivedThreadIds = tmp6.archivedThreadIds;
  const canLoadMore = tmp6.canLoadMore;
  const loadMore = tmp6.loadMore;
  const archivedThreadsLoading = tmp6.archivedThreadsLoading;
  const activeThreadsLoading = tmp6.activeThreadsLoading;
  const isSearchLoading = tmp6.isSearchLoading;
  searchResults = tmp6.searchResults;
  const tmp7 = searchQuery(ref[36])(channel);
  let closure_11 = tmp7;
  let obj2 = channel(ref[19]);
  let canViewArchivedPosts = obj2.useCanViewArchivedPosts(channel);
  let obj3 = channel(ref[19]);
  const canSearchForumPosts = obj3.useCanSearchForumPosts(channel);
  let obj4 = channel(ref[16]);
  let items1 = [archivedThreadsLoading, canLoadMore, canViewArchivedPosts, loadMore, searchResults];
  const clientThemesOverride = obj4.useClientThemesOverride();
  let items2 = [976, archivedThreadsLoading, canLoadMore, canViewArchivedPosts, loadMore, searchResults];
  const callback = activeThreadIds.useCallback(() => {
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
  let items3 = [searchResults, canViewArchivedPosts, canSearchForumPosts, activeThreadIds, activeThreadsLoading, archivedThreadIds, archivedThreadsLoading, isSearchLoading];
  const callback1 = activeThreadIds.useCallback((nativeEvent) => {
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
  const memo = activeThreadIds.useMemo(() => {
    const items = [];
    if (null != searchResults) {
      items.push(outer1_19);
      const push3 = items.push;
      if (canSearchForumPosts) {
        const items1 = [];
        HermesBuiltin.arraySpread(searchResults, 0);
        HermesBuiltin.apply(items1, items);
      } else {
        push3(outer1_20);
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
          items.push(outer1_18);
          const push2 = items.push;
          const items3 = [];
          HermesBuiltin.arraySpread(archivedThreadIds, 0);
          HermesBuiltin.apply(items3, items);
        }
      } else {
        items.push(outer1_18);
        items.push(outer1_21);
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
      let tmp39 = outer1_22;
      let arr3 = items.push(outer1_22);
      num5 = num5 + 1;
      let num6 = 20;
    } while (num5 < 20);
  }, items3);
  if (null != searchResults) {
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
    return tmp16(searchQuery(ref[39]), obj);
  } else {
    let obj1 = {};
    const items5 = [tmp.list, clientThemesOverride];
    obj1.style = items5;
    obj2 = { ref };
    obj3 = {};
    let num2 = 0;
    if (0 !== activeThreadIds.length) {
      num2 = searchQuery(ref[13]).space.PX_8;
    }
    obj3.paddingTop = num2;
    obj3.paddingBottom = channel.insets.bottom + searchQuery(ref[13]).space.PX_16;
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
    obj1.children = callback(channel(ref[40]).FlashList, obj2);
    obj4 = {};
    const items6 = [callback(searchQuery(ref[42]), { absolute: true, mix: true }), tmp16(archivedThreadIds, obj1)];
    obj4.children = items6;
    return callback2(closure_17, obj4);
  }
  tmp = _createForOfIteratorHelperLoose();
}
function onCreatePostWithoutPermission() {
  let obj = importDefault(3831);
  obj = { key: "FORUM_NO_POST_PERMISSION_HELP" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.iyzwnD);
  obj.icon = importDefault(7415);
  obj.open(obj);
}
({ AnalyticsObjects: closure_11, AnalyticsPages: closure_12, AnalyticsSections: closure_13 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const archived_section = "archived_section";
const search_section = "search_section";
const missing_permission_search = "missing_permission_search";
const missing_permission_archived_threads = "missing_permission_archived_threads";
const loading_section = "loading_section";
let items = ["archived_section", "search_section", "missing_permission_search", "missing_permission_archived_threads", "loading_section"];
let set = new Set(items);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerRow = { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 8 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, width: "100%", height: 1 };
_createForOfIteratorHelperLoose.headerDivider = obj1;
_createForOfIteratorHelperLoose.container = { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" };
_createForOfIteratorHelperLoose.noHeight = { height: 0 };
_createForOfIteratorHelperLoose.list = { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 };
_createForOfIteratorHelperLoose.section = { alignItems: "flex-start", justifyContent: "flex-end" };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_BOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }));
_createForOfIteratorHelperLoose.divider = { marginTop: 12, paddingStart: 4 };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center", height: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.missingPermissionContainer = obj3;
let obj2 = { marginTop: 12, paddingStart: 4 };
let obj4 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_NORMAL, require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, 12));
_createForOfIteratorHelperLoose.missingPermissionText = obj4;
_createForOfIteratorHelperLoose.optionsContainer = { overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
let obj6 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 32, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.optionsPill = obj6;
let obj5 = { overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
_createForOfIteratorHelperLoose.sortOptionsIcon = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 4 };
_createForOfIteratorHelperLoose.sortOptionsText = { marginHorizontal: 4 };
let obj8 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: 20, marginRight: 4, minWidth: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.countContainer = obj8;
let obj9 = {};
let num;
if (set.isAndroid()) {
  num = 14;
}
obj9.lineHeight = num;
_createForOfIteratorHelperLoose.countText = obj9;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_25 = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 100 };
let result = set.fileFinishedImporting("modules/forums/native/ForumChannel.tsx");

export default function ForumChannel(channel) {
  channel = channel.channel;
  let importDefault;
  let analyticsLocations;
  let searchQuery;
  let showMemberVerificationGate;
  let stateFromStores1;
  let callback;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(analyticsLocations[21]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.canChatInGuild(channel.guild_id));
  let obj1 = channel(analyticsLocations[45]);
  let tmp4 = null != channel.topic;
  const canStartThread = obj1.useCanStartThread(channel);
  if (tmp4) {
    tmp4 = 0 !== channel.topic.length;
  }
  importDefault = tmp4;
  analyticsLocations = importDefault(analyticsLocations[46])(importDefault(analyticsLocations[47]).FORUM_CHANNEL).analyticsLocations;
  let obj2 = channel(analyticsLocations[19]);
  obj = { channelId: channel.id };
  searchQuery = obj2.useForumSearchState(obj).searchQuery;
  let obj4 = channel(analyticsLocations[48]);
  showMemberVerificationGate = obj4.useShowMemberVerificationGate(channel.guild_id);
  let obj5 = channel(analyticsLocations[21]);
  const items1 = [closure_8];
  const items2 = [channel.id];
  stateFromStores1 = obj5.useStateFromStores(items1, () => outer1_8.getThreadSettings(channel.id), items2);
  const items3 = [channel.id];
  const tmp5 = importDefault(analyticsLocations[46]);
  const effect = searchQuery.useEffect(() => () => {
    if (null != outer1_0.id) {
      callback(analyticsLocations[50]).clearForumSearch(outer1_0.id);
      const obj = callback(analyticsLocations[50]);
    }
  }, items3);
  const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
  callback = searchQuery.useCallback((analyticsLocationObject) => {
    let obj = _undefined(analyticsLocations[51]);
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
      _undefined(analyticsLocations[51]).changeThreadSettings(channel.id, obj);
      const obj2 = _undefined(analyticsLocations[51]);
    }
    obj = { guildId: channel.guild_id, parentChannelId: channel.id, analyticsLocationObject, analyticsLocations };
    const result = channel(analyticsLocations[52]).openCreateForumPostModal(obj);
  }, items4);
  const items5 = [channel, showMemberVerificationGate, tmp4, callback];
  let tmp12 = !stateFromStores;
  const callback1 = searchQuery.useCallback(() => {
    function startCreateForumPostFlow() {
      if (outer1_1) {
        let obj = callback(analyticsLocations[53]);
        if (!obj.hasSeen(outer1_0.id)) {
          obj = {
            channel: outer1_0,
            onPress() {
                  return outer2_6({ page: outer3_12.GUILD_CHANNEL, section: outer3_13.FORUM_CHANNEL_GUIDELINES, object: outer3_11.BUTTON_CTA });
                }
          };
          const result = channel(analyticsLocations[56]).openForumGuidelinesActionSheet(obj);
          const obj2 = channel(analyticsLocations[56]);
        }
      }
      const result1 = channel(analyticsLocations[54]).triggerHapticFeedback(callback(analyticsLocations[55]).IMPACT_LIGHT);
      obj = { page: outer2_12.GUILD_CHANNEL, section: outer2_13.FORUM_CHANNEL_FOOTER, object: outer2_11.BUTTON_CTA };
      outer1_6(obj);
    }
    let obj = channel(analyticsLocations[41]);
    obj = { guildId: channel.guild_id, channelId: channel.id };
    let result = obj.trackForumCreateNewPostClick(obj);
    if (showMemberVerificationGate) {
      let result1 = channel(analyticsLocations[57]).openMemberVerificationModal(channel.guild_id, startCreateForumPostFlow);
      const obj3 = channel(analyticsLocations[57]);
    } else {
      const result2 = startCreateForumPostFlow();
    }
  }, items5);
  if (!tmp12) {
    tmp12 = !canStartThread && !showMemberVerificationGate;
    const tmp13 = !canStartThread && !showMemberVerificationGate;
  }
  const insets = importDefault(analyticsLocations[58])({ includeKeyboardHeight: true }).insets;
  let obj6 = channel(analyticsLocations[16]);
  obj = { style: tmp.background };
  let tmp17 = null;
  const clientThemesOverride = obj6.useClientThemesOverride(tmp.noHeight);
  if (tmp8) {
    obj1 = { channel };
    obj2 = { variant: "secondary" };
    obj1.ctaProps = obj2;
    obj1.topBorder = true;
    tmp17 = callback(channel(analyticsLocations[59]).OptInChannelBanner, obj1);
  }
  const items6 = [tmp17, , , , , ];
  let obj3 = { style: tmp.headerRow };
  const items7 = [callback(SortAndViewOptions, { channel }), ];
  let tmp23 = channel.availableTags.length > 0;
  if (tmp23) {
    obj4 = { channel };
    tmp23 = callback(TagFilter, obj4);
  }
  items7[1] = tmp23;
  obj3.children = items7;
  items6[1] = closure_16(showMemberVerificationGate, obj3);
  const items8 = [tmp.headerDivider, clientThemesOverride];
  items6[2] = callback(showMemberVerificationGate, { style: items8 });
  obj5 = { style: tmp.container, children: callback(ForumChannelContent, { channel, insets, searchQuery }) };
  items6[3] = callback(showMemberVerificationGate, obj5);
  obj6 = {};
  const intl = channel(analyticsLocations[18]).intl;
  obj6.accessibilityLabel = intl.string(channel(analyticsLocations[18]).t.TyAuoT);
  obj6.icon = importDefault(analyticsLocations[61]);
  obj6.disabled = tmp12;
  obj6.positionBottom = insets.bottom + importDefault(analyticsLocations[13]).space.PX_16;
  obj6.onPress = callback1;
  obj6.onPressDisabled = onCreatePostWithoutPermission;
  let stringResult;
  if (tmp12) {
    const intl2 = channel(analyticsLocations[18]).intl;
    stringResult = intl2.string(channel(analyticsLocations[18]).t.iyzwnD);
  }
  obj6.accessibilityHint = stringResult;
  items6[4] = callback(channel(analyticsLocations[60]).FloatingActionButton, obj6);
  let tmp30 = null;
  if (null != channel.guild_id) {
    const obj7 = { channel };
    tmp30 = callback(channel(analyticsLocations[62]).MemberActionChatInputBannerGuarded, obj7);
  }
  items6[5] = tmp30;
  obj.children = items6;
  return closure_16(showMemberVerificationGate, obj);
};
