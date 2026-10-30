// Module ID: 14320
// Function ID: 14321
// Name: ForumChannel
// Dependencies: [19, 17, 4942, 6855, 4858, 7694, 6702, 13713, 1072, 1083, 21, 5009, 575, 6717, 9800, 5619, 1114, 9817, 7469, 504, 14321, 7447, 9, 9297, 9320, 6974, 9300, 7328, 5253, 14323, 1995, 5629, 12304, 14324, 9544, 9821, 14325, 5647, 13740, 13712, 14326, 7288, 8196, 10716, 5707, 5730, 7437, 7320, 7345, 8624, 11321, 11293, 11310, 9819, 14329, 8335, 10182, 10211, 5255, 5256, 10209, 6938, 5602, 11319, 8990, 14333, 13785, 2]
// Exports: default

// Module 14320 (ForumChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants2 from "Constants" /* 1083 */;
import intl3 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import Tracking from "Tracking" /* 8196 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8335 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9300 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9800 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10182 */;
import ForumPostDefault from "ForumPost" /* 13712 */;
import ForumChannelStore from "ForumChannelStore" /* 13713 */;
import ForumPostPlaceholderDefault from "ForumPostPlaceholder" /* 13740 */;
import CreateGameInvitePostModalActionCreators from "CreateGameInvitePostModalActionCreators" /* 14329 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6855 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import DraftStore from "DraftStore" /* 7694 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6702 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles_mod from "TextStyles" /* 6717 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, nativeEvent;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let tmp;
let unpackModuleId;
const MemberVerificationModalActionCreators = tmp(6938);
function forumKeyExtractor(arg0, arg1) {
  let combined = arg0;
  if (arg0 === loading_section) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp2 + "-" + arg1;
  }
  return combined;
}
function ArchivedSection() {
  let Text;
  let intl;
  let items;
  let obj3;
  const tmp = closure_24();
  const obj2 = { style: items, children: authStore3(Text, obj3) };
  items = [tmp.section, ];
  const obj = ClientThemesOverrides;
  items[1] = obj.useClientThemesOverride();
  obj3 = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: intl.string(intl3.t["3+LO1w"]) };
  Text = Text_Text.Text;
  intl = intl3.intl;
  return authStore3(View, obj2);
}
function SearchSection(numPosts) {
  let Text;
  let obj2;
  let stringResult;
  numPosts = numPosts.numPosts;
  const searchQuery = numPosts.searchQuery;
  const tmp = closure_24();
  const obj = { style: tmp.section, children: authStore3(Text, obj2) };
  obj2 = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: stringResult };
  Text = Text_Text.Text;
  const tmp3 = View;
  if (0 === numPosts) {
    const intl2 = tmp4(1114).intl;
    stringResult = intl2.string(tmp4(1114).t.DbgHxi);
  } else {
    const intl = tmp4(1114).intl;
    const obj3 = { numPosts, query: searchQuery };
    stringResult = intl.formatToPlainString(tmp4(1114).t["tBz/8b"], obj3);
  }
  return authStore3(tmp3, obj);
}
function ArchivedMissingReadHistoryPermission(channelName) {
  let Text;
  let intl;
  let obj2;
  channelName = channelName.channelName;
  const tmp = closure_24();
  const obj = { style: tmp.missingPermissionContainer, children: authStore3(Text, obj2) };
  obj2 = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: intl.format(intl3.t.TycmzM, { channelName }) };
  Text = Text_Text.Text;
  intl = intl3.intl;
  return authStore3(View, obj);
}
function SearchMissingReadHistoryPermission(channelName) {
  let Text;
  let intl;
  let obj2;
  channelName = channelName.channelName;
  const tmp = closure_24();
  const obj = { style: tmp.section, children: authStore3(Text, obj2) };
  obj2 = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: intl.format(intl3.t.OWZJdS, { channelName }) };
  Text = Text_Text.Text;
  intl = intl3.intl;
  return authStore3(View, obj);
}
function GameInvitesChannelHeaderGameIcon(channel) {
  let gameProfileModalChecks;
  let obj4;
  let tmp3Result;
  let tmp9;
  _require = undefined;
  let shouldOpenGameProfile;
  let gameId;
  let tmp = _require;
  channel = channel.channel;
  let obj = require("GameInvitesChannelUtils");
  const application = obj.useGameInvitesChannelOfficialApplication(channel.id).application;
  let id;
  const tmp3 = shouldOpenGameProfile;
  const tmp4 = shouldOpenGameProfile(gameId[23]);
  if (application != null) {
    id = application.id;
  }
  const obj2 = { applicationId: id, source: tmp(gameId[24]).GameProfileSources.GameInvitesChannel };
  const tmp4Result = tmp4(obj2);
  _require = tmp4Result;
  shouldOpenGameProfile = tmp4Result.shouldOpenGameProfile;
  gameId = tmp4Result.gameId;
  let tmp8Result = null;
  if (null != application) {
    const obj3 = {
      accessibilityRole: "button",
      accessibilityLabel: application.name,
      disabled: tmp9,
      onPress() {
          const tmp = shouldOpenGameProfile && null != gameId;
          if (tmp) {
            const obj = { gameId, gameProfileModalChecks, source: GameProfileAnalyticUtils.GameProfileSources.GameInvitesChannel };
            const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
            GameProfileActionCreatorsDefault;
            openGameProfileModal(obj);
          }
        },
      children: closure_14(tmp3Result, obj4)
    };
    tmp9 = !shouldOpenGameProfile;
    const PressableOpacity = tmp(tmp2[25]).PressableOpacity;
    if (shouldOpenGameProfile) {
      tmp9 = null == gameId;
    }
    obj4 = { game: application, size: tmp(gameId[27]).GameIconSizes.SMALL };
    tmp3Result = tmp3(gameId[27]);
    tmp8Result = tmp8(PressableOpacity, obj3);
  }
  return tmp8Result;
}
function SortAndViewOptions(channel) {
  let stringResult;
  channel = channel.channel;
  const id = channel.id;
  const items = [id];
  const callback = react.useCallback(() => {
    const combined = "ForumDisplaySettingsActionSheet-" + id;
    let obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      channelId: id,
      onClose() {
        const obj = closure_2_1(closure_2_2[28]);
        obj.hideActionSheet(combined);
      }
    };
    obj.openLazy(asyncRequire(14323, dependencyMap.paths), combined, obj2);
  }, items);
  const isMediaChannelResult = channel.isMediaChannel();
  const Button = id(5629).Button;
  const intl = id(1114).intl;
  const string = intl.string;
  const t = id(1114).t;
  const tmp4 = id;
  if (isMediaChannelResult) {
    stringResult = string(t.JxU0wr);
  } else {
    stringResult = string(t.xyYt8A);
  }
  let obj = { variant: "secondary", text: stringResult, onPress: callback, size: "sm", icon: tmp3(tmp4(12304).ArrowsUpDownIcon, { size: "xxs" }) };
  return closure_14(Button, obj);
}
function TagFilter(channel) {
  let intl;
  channel = channel.channel;
  let obj = {
    variant: "secondary",
    text: intl.string(channel(1114).t["112vVE"]),
    onPress: function handlePress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channel };
      obj.openLazy(asyncRequire(14324, dependencyMap.paths), "ForumTagFilterActionSheet", obj2);
    },
    size: "sm",
    icon: closure_14(channel(9544).TagIcon, { size: "xxs" })
  };
  const Button = channel(5629).Button;
  intl = channel(1114).intl;
  return closure_14(Button, obj);
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
    if (!set.has(item)) {
      channel = channel.getChannel(item);
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      if (null != parent_id) {
        const isViewable = item.isViewable;
        const obj = require("ForumChannelSeenManager");
        if (isViewable) {
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
  let FlashList;
  let canLoadMore;
  let isSearchLoading;
  let items8;
  let items9;
  let loadMore;
  let loading;
  let obj15;
  let obj16;
  let searchResults;
  let sortOrder;
  let tagFilter;
  let tagSetting;
  let threadIds;
  channel = channel.channel;
  const searchQuery = channel.searchQuery;
  let activeThreadIds;
  canLoadMore = undefined;
  loadMore = undefined;
  loading = undefined;
  isSearchLoading = undefined;
  searchResults = undefined;
  let channelName;
  let canViewArchivedPosts1;
  let canSearchForumPosts;
  const insets = channel.insets;
  let obj = activeThreadIds;
  let tmp = closure_24();
  const ref = activeThreadIds.useRef(null);
  ({ sortOrder, tagFilter, tagSetting } = searchResults(channel.id));
  const tmp3 = searchResults(channel.id);
  let obj2 = searchQuery(ref[36]);
  let obj3 = { guildId: channel.guild_id, channelId: channel.id };
  const forumChannelSeenManager = obj2.useForumChannelSeenManager(obj3);
  let items = [channel.id];
  const effect = activeThreadIds.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  activeThreadIds = undefined;
  let obj4 = channel(ref[17]);
  const forumActiveThreadIds = obj4.useForumActiveThreadIds({ channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true });
  const substr = forumActiveThreadIds.slice(0, channel(ref[18]).BATCH_SIZE);
  const joined = substr.join();
  let items1 = [channel, joined];
  const effect1 = activeThreadIds.useEffect(() => {
    if ("" !== joined) {
      const obj = channel(ref[18]);
      obj.preloadForumThreads(channel);
    }
  }, items1);
  let items2 = [loadMore, canLoadMore];
  const obj6 = channel(ref[19]);
  const stateFromStores = obj6.useStateFromStores(items2, () => {
    const hasLoadedResult = loadMore.hasLoaded(channel.guild_id);
    const tmp2 = !hasLoadedResult && !canLoadMore.isLurking(channel.guild_id);
    return tmp2;
  });
  const obj5 = { channelId: channel.id };
  const obj7 = channel(ref[17]);
  const forumSearchState = obj7.useForumSearchState(obj5);
  ({ searchResults, isSearchLoading } = forumSearchState);
  const obj9 = channel(ref[17]);
  const automaticForumSearch = obj9.useAutomaticForumSearch(channel, tagFilter, tagSetting);
  const obj10 = channel(ref[17]);
  const canViewArchivedPosts = obj10.useCanViewArchivedPosts(channel);
  const obj11 = channel(ref[20]);
  const archivedThreads = obj11.useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
  ({ canLoadMore, loadMore, loading, threadIds } = archivedThreads);
  const obj12 = channel(ref[17]);
  const loadForumUnreadCounts = obj12.useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting);
  const obj13 = channel(ref[21]);
  const gameInvitesActiveAndArchivedThreads = obj13.useGameInvitesActiveAndArchivedThreads(channel, forumActiveThreadIds, threadIds);
  activeThreadIds = gameInvitesActiveAndArchivedThreads.activeThreadIds;
  const archivedThreadIds = gameInvitesActiveAndArchivedThreads.archivedThreadIds;
  let tmp18 = null == searchResults && canViewArchivedPosts;
  if (tmp18) {
    tmp18 = !(stateFromStores || loading || isSearchLoading);
    const tmp19 = stateFromStores || loading || isSearchLoading;
  }
  if (tmp18) {
    tmp18 = 0 === activeThreadIds.length;
  }
  if (tmp18) {
    tmp18 = 0 === archivedThreadIds.length;
  }
  let items3 = [activeThreadIds.length, archivedThreadIds.length, stateFromStores];
  const effect2 = obj.useEffect(() => {
    const obj = searchQuery(ref[22]);
    obj.recordRender(activeThreadIds.length + archivedThreadIds.length, !stateFromStores);
  }, items3);
  const tmp21 = searchQuery(tmp5[37])(channel);
  channelName = tmp21;
  const tmp8Result = channel(ref[17]);
  canViewArchivedPosts1 = tmp8Result.useCanViewArchivedPosts(channel);
  const tmp8Result3 = channel(ref[17]);
  canSearchForumPosts = tmp8Result3.useCanSearchForumPosts(channel);
  const items4 = [loading, canLoadMore, canViewArchivedPosts1, loadMore, searchResults];
  const tmp8Result4 = channel(ref[14]);
  const clientThemesOverride = tmp8Result4.useClientThemesOverride();
  const items5 = [976, loading, canLoadMore, canViewArchivedPosts1, loadMore, searchResults];
  const callback = obj.useCallback(() => {
    const tmp = null == searchResults && canViewArchivedPosts1 && !loading && canLoadMore;
    if (tmp) {
      loadMore();
    }
  }, items4);
  const items6 = [searchResults, canViewArchivedPosts1, canSearchForumPosts, activeThreadIds, stateFromStores, archivedThreadIds, loading, isSearchLoading];
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    let tmp = null == searchResults;
    const y = nativeEvent.contentOffset.y;
    const height = nativeEvent.contentSize.height;
    const height2 = nativeEvent.layoutMeasurement.height;
    if (tmp) {
      tmp = canViewArchivedPosts1;
    }
    if (tmp) {
      tmp = !loading;
    }
    if (tmp) {
      tmp = canLoadMore;
    }
    if (tmp) {
      tmp = y + height2 > height - 976;
    }
    if (tmp) {
      loadMore();
    }
  }, items5);
  let length;
  const memo = obj.useMemo(() => {
    const items = [];
    if (null != searchResults) {
      items.push(search_section);
      const push3 = items.push;
      if (canSearchForumPosts) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, searchResults, 0);
        HermesBuiltin.apply(push3, items1, items);
      } else {
        push3(missing_permission_search);
      }
    } else {
      const tmp41 = stateFromStores;
      if (!tmp41) {
        const push = items.push;
        const items2 = [];
        HermesBuiltin.arraySpread(items2, activeThreadIds, 0);
        HermesBuiltin.apply(push, items2, items);
        const tmp10 = canViewArchivedPosts1;
        if (tmp10) {
          const tmp15 = null != archivedThreadIds && archivedThreadIds.length > 0;
          if (tmp15) {
            items.push(archived_section);
            const push2 = items.push;
            const items3 = [];
            HermesBuiltin.arraySpread(items3, archivedThreadIds, 0);
            HermesBuiltin.apply(push2, items3, items);
          }
        } else {
          items.push(archived_section);
          items.push(missing_permission_archived_threads);
        }
      }
    }
    let num5 = 0;
    if (!stateFromStores) {
      num5 = 0;
      if (!loading) {
        num5 = 0;
      }
      return items;
    }
    do {
      let arr10 = items.push(loading_section);
      num5 = num5 + 1;
    } while (num5 < 20);
  }, items6);
  if (searchResults != null) {
    length = searchResults.length;
  }
  const items7 = [length, searchQuery, tmp21];
  if (tmp18) {
    let str = tmp21;
    const tmp4Result = searchQuery(ref[40]);
    if (tmp21 == null) {
      str = "";
    }
    const obj8 = { topViewHeight: 92, channelName: str, tagFilter };
    return closure_14(tmp4Result, obj8);
  } else {
    const obj14 = { style: items8, children: closure_14(FlashList, obj15) };
    items8 = [tmp.list, clientThemesOverride];
    let num = 0;
    obj15 = {
      ref,
      contentContainerStyle: obj16,
      getItemType: getForumItemType,
      keyExtractor: forumKeyExtractor,
      renderItem: tmp29,
      data: memo,
      onScroll: callback1,
      onScrollBeginDrag() {
          const obj = Tracking;
          const obj2 = { guildId: channel.guild_id, channelId: channel.id };
          return obj.trackForumScrolled(obj2);
        },
      onEndReached: callback,
      onViewableItemsChanged: onForumViewableItemsChanged,
      viewabilityConfig
    };
    FlashList = tmp8(tmp5[41]).FlashList;
    const tmp31 = archivedThreadIds;
    if (0 !== activeThreadIds.length) {
      num = tmp4(tmp5[12]).space.PX_8;
    }
    const obj17 = { children: items9 };
    items9 = [, ];
    obj16 = { paddingTop: num, paddingBottom: insets.bottom + searchQuery(ref[12]).space.PX_16 };
    const tmp30Result = closure_14(tmp31, obj14);
    items9[0] = closure_14(searchQuery(ref[43]), { absolute: true, mix: true });
    items9[1] = tmp30Result;
    return closure_16(closure_15, obj17);
  }
}
function onCreatePostWithoutPermission() {
  let intl;
  const obj = { text: intl.string(intl3.t.iyzwnD), icon: CircleInformationIcon.CircleInformationIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl3.intl;
  open("FORUM_NO_POST_PERMISSION_HELP", obj);
}
const View = react_native.View;
const useForumChannelStore = ForumChannelStore.useForumChannelStore;
({ AnalyticsObjects: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1 } = Constants);
const Fonts = Constants2.Fonts;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
const archived_section = "archived_section";
const search_section = "search_section";
const missing_permission_search = "missing_permission_search";
const missing_permission_archived_threads = "missing_permission_archived_threads";
const loading_section = "loading_section";
let items = ["archived_section", "search_section", "missing_permission_search", "missing_permission_archived_threads", "loading_section"];
const set = new Set(items);
let createStyles = createStyles_mod;
let obj = { background: obj2, headerRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 8 }, headerLeftContainer: { flexDirection: "row", alignItems: "center", gap: 8 }, headerDivider: size, container: { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" }, noHeight: { height: 0 }, list: { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 }, section: { alignItems: "flex-start", justifyContent: "flex-end" }, divider: obj3, missingPermissionContainer: obj4, missingPermissionText: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: "100%", height: 1 };
obj3 = { marginTop: 12, paddingStart: 4 };
const PRIMARY_BOLD = Fonts.PRIMARY_BOLD;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(PRIMARY_BOLD, nativeDefault.colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }));
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center", height: 48, borderRadius: nativeDefault.radii.xs };
obj5 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_MUTED, 12));
let closure_24 = createStyles(obj);
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 100 };
size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/ForumChannel.tsx");

export default function ForumChannel(channel) {
  let closure_1;
  let constants2;
  let constants3;
  let intl;
  let items6;
  let items7;
  let items8;
  let items9;
  let stringResult;
  channel = channel.channel;
  importDefault = undefined;
  let analyticsLocations;
  let searchQuery;
  let showMemberVerificationGate;
  let stateFromStores1;
  let callback;
  let tmp = closure_24();
  const tmp2 = channel;
  let tmp3 = analyticsLocations;
  let obj = channel(analyticsLocations[19]);
  const items = [GuildVerificationStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildVerificationStore.canChatInGuild(channel.guild_id));
  let obj2 = channel(analyticsLocations[46]);
  const canStartThread = obj2.useCanStartThread(channel);
  let tmp6 = null != channel.topic;
  if (tmp6) {
    tmp6 = 0 !== channel.topic.length;
  }
  importDefault = tmp6;
  let tmp8 = require("useAnalyticsLocations");
  analyticsLocations = tmp8(require("AnalyticsLocation").FORUM_CHANNEL).analyticsLocations;
  const tmp2Result = tmp2(tmp3[17]);
  let obj3 = { channelId: channel.id };
  searchQuery = tmp2Result.useForumSearchState(obj3).searchQuery;
  const tmp2Result6 = tmp2(tmp3[49]);
  showMemberVerificationGate = tmp2Result6.useShowMemberVerificationGate(channel.guild_id);
  const items1 = [DraftStore];
  const items2 = [channel.id];
  const tmp2Result7 = tmp2(tmp3[19]);
  stateFromStores1 = tmp2Result7.useStateFromStores(items1, () => DraftStore.getThreadSettings(channel.id), items2);
  const tmp11 = require("useShowChannelOptInNotice")(channel);
  const tmp2Result8 = tmp2(tmp3[51]);
  const pinotMemberNotice = tmp2Result8.usePinotMemberNotice(channel, "mobile_forum_channel");
  const items3 = [channel.id];
  const tmp2Result9 = tmp2(tmp3[52]);
  const isForumChannelSearchActive = tmp2Result9.useIsForumChannelSearchActive(channel.id);
  const effect = searchQuery.useEffect(() => {
    let id;
    return () => {
      if (null != id.id) {
        const obj = closure_1(analyticsLocations[53]);
        obj.clearForumSearch(tmp.id);
      }
    };
  }, items3);
  const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
  callback = searchQuery.useCallback((analyticsLocationObject) => {
    if (channel.isGameInvitesChannel()) {
      const obj2 = { parentChannelId: channel.id, analyticsLocations };
      const obj5 = CreateGameInvitePostModalActionCreators;
      const result = obj5.openCreateGameInvitePostModal(obj2);
    } else {
      const obj = DraftActionCreatorsDefault;
      obj.changeThreadSettings(channel.id, { isPrivate: false });
      let name;
      if (stateFromStores1 != null) {
        name = tmp5.name;
      }
      let tmp8 = null != name;
      if (tmp8) {
        let length;
        if (stateFromStores1 != null) {
          if (stateFromStores1.name != null) {
            const trimmed = str.trim();
            if (trimmed != null) {
              length = trimmed.length;
            }
          }
        }
        tmp8 = 0 !== length;
      }
      if (!tmp8) {
        let trimmed1;
        const changeThreadSettings = tmp2(8335).changeThreadSettings;
        const id = tmp.id;
        DraftActionCreatorsDefault;
        if (null != searchQuery) {
          if (searchQuery.trim().length > 0) {
            trimmed1 = str2.trim();
          }
        }
        const obj6 = { name: trimmed1 };
        changeThreadSettings(id, obj6);
      }
      const obj9 = { guildId: null, parentChannelId: null, analyticsLocationObject, analyticsLocations };
      ({ guild_id: obj4.guildId, id: obj4.parentChannelId } = channel);
      const obj3 = ForumComposerModalActionCreators;
      const result1 = obj3.openCreateForumPostModal(obj9);
    }
  }, items4);
  const items5 = [channel, showMemberVerificationGate, tmp6, callback];
  let tmp17 = !stateFromStores;
  const callback1 = searchQuery.useCallback(() => {
    let id;
    function startCreateForumPostFlow() {
      const tmp = closure_1_1;
      if (tmp) {
        let obj = closure_1(analyticsLocations[57]);
        const tmp4 = id;
        if (!obj.hasSeen(id.id)) {
          const obj3 = {
            channel: tmp4,
            onPress() {
                  const obj = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_GUIDELINES, object: constants.BUTTON_CTA };
                  return closure_1_6(obj);
                }
          };
          const obj2 = channel(analyticsLocations[60]);
          const result = obj2.openForumGuidelinesActionSheet(obj3);
        }
      }
      const obj4 = channel(analyticsLocations[58]);
      const result1 = obj4.triggerHapticFeedback(closure_1(analyticsLocations[59]).IMPACT_LIGHT);
      const obj5 = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_FOOTER, object: constants.BUTTON_CTA };
      callback(obj5);
    }
    let tmp = require;
    let obj = Tracking;
    let obj2 = { guildId: channel.guild_id, channelId: channel.id };
    let result = obj.trackForumCreateNewPostClick(obj2);
    const tmp3 = channel;
    const tmp5 = showMemberVerificationGate;
    if (tmp5) {
      const tmpResult = MemberVerificationModalActionCreators;
      let result1 = tmpResult.openMemberVerificationModal(tmp3.guild_id, startCreateForumPostFlow);
    } else {
      const result2 = startCreateForumPostFlow();
    }
  }, items5);
  if (stateFromStores) {
    tmp17 = !canStartThread && !showMemberVerificationGate;
  }
  const insets = tmp7(tmp3[62])({ includeKeyboardHeight: true }).insets;
  let obj4 = { style: tmp.background, children: items6 };
  let visible = pinotMemberNotice.visible;
  const tmp2Result10 = tmp2(tmp3[14]);
  const clientThemesOverride = tmp2Result10.useClientThemesOverride(tmp.noHeight);
  if (visible) {
    visible = !isForumChannelSearchActive;
  }
  if (visible) {
    let obj5 = { onDismiss: pinotMemberNotice.dismiss };
    visible = closure_14(tmp2(tmp3[51]).PinotMemberNoticeBar, obj5);
  }
  items6 = [visible, , , , , , ];
  let tmp23 = !pinotMemberNotice.visible && tmp11;
  if (tmp23) {
    let obj6 = { channel, ctaProps: { variant: "secondary" }, topBorder: true };
    tmp23 = closure_14(tmp2(tmp3[63]).OptInChannelBanner, obj6);
  }
  items6[1] = tmp23;
  const obj7 = { style: tmp.headerRow, children: items8 };
  const obj8 = { style: tmp.headerLeftContainer, children: items7 };
  let isGameInvitesChannelResult = channel.isGameInvitesChannel();
  if (isGameInvitesChannelResult) {
    let obj9 = { channel };
    isGameInvitesChannelResult = closure_14(GameInvitesChannelHeaderGameIcon, obj9);
  }
  items7 = [isGameInvitesChannelResult, closure_14(SortAndViewOptions, { channel })];
  items8 = [tmp20(tmp21, obj8), ];
  let tmp28Result = channel.availableTags.length > 0;
  if (tmp28Result) {
    const obj10 = { channel };
    tmp28Result = tmp28(TagFilter, obj10);
  }
  items8[1] = tmp28Result;
  items6[2] = closure_16(showMemberVerificationGate, obj7);
  const obj11 = { style: items9 };
  items9 = [tmp.headerDivider, clientThemesOverride];
  items6[3] = closure_14(showMemberVerificationGate, obj11);
  const obj12 = { style: tmp.container, children: closure_14(ForumChannelContent, { channel, insets, searchQuery }) };
  items6[4] = closure_14(showMemberVerificationGate, obj12);
  const obj13 = { accessibilityLabel: intl.string(tmp2(tmp3[16]).t.TyAuoT), icon: require("AssetRegistry"), disabled: tmp17, positionBottom: insets.bottom + require("native").space.PX_16, onPress: callback1, onPressDisabled: onCreatePostWithoutPermission, accessibilityHint: stringResult };
  const FloatingActionButton = tmp2(tmp3[64]).FloatingActionButton;
  intl = tmp2(tmp3[16]).intl;
  stringResult = undefined;
  if (tmp17) {
    const intl2 = tmp2(tmp3[16]).intl;
    stringResult = intl2.string(tmp2(tmp3[16]).t.iyzwnD);
  }
  items6[5] = closure_14(FloatingActionButton, obj13);
  let tmp28Result2 = null;
  if (null != channel.guild_id) {
    const obj14 = { channel };
    tmp28Result2 = tmp28(tmp2(tmp3[66]).MemberActionChatInputBannerGuarded, obj14);
  }
  items6[6] = tmp28Result2;
  return closure_16(showMemberVerificationGate, obj4);
};
