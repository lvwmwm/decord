// Module ID: 18953
// Function ID: 18954
// Name: MembersScreen
// Dependencies: [19, 17, 7622, 4861, 4924, 4883, 4915, 1386, 13268, 13248, 8977, 8976, 1071, 21, 5012, 575, 563, 1628, 11756, 6348, 13241, 18893, 4949, 2018, 13261, 6102, 1112, 5021, 18954, 18897, 18952, 18884, 12036, 18955, 6349, 12052, 13100, 18957, 2]

// Module 18953 (MembersScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2018 */;
import PermissionUtilsAll from "PermissionUtils" /* 4949 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5021 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 6102 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7622 */;
import TrackingConstants from "TrackingConstants" /* 8976 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 12052 */;
import TrackingDefault from "Tracking" /* 13261 */;
import SearchList from "SearchList" /* 18897 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildMemberStore from "GuildMemberStore" /* 4924 */;
import GuildStore from "GuildStore" /* 4883 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4915 */;
import UserStore from "UserStore" /* 1386 */;
import SearchMemberTabStore from "SearchMemberTabStore" /* 13268 */;
import SearchQueryStore from "SearchQueryStore" /* 13248 */;
import SearchConstants from "SearchConstants" /* 8977 */;
import Constants from "Constants" /* 1071 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let obj2;
function SearchableMembersScreen(searchContext) {
  let closure_3;
  let tmp29;
  searchContext = searchContext.searchContext;
  const guildId = searchContext.guildId;
  dependencyMap = undefined;
  let first;
  let stateFromStores2;
  let fullscreenPlaceholderCount;
  let stateFromStores3;
  let callback;
  let stateFromStores5;
  let stateFromStores6;
  let contentContainerStyles;
  let bound;
  let tmp2 = guildId;
  let tmp3 = dependencyMap;
  let tmp = closure_21();
  const analyticsLocations = guildId(6348)().analyticsLocations;
  let tmp4 = searchContext;
  let obj = searchContext(13241);
  dependencyMap = obj.getSearchContextId(searchContext);
  let obj2 = searchContext(563);
  let items = [contentContainerStyles];
  const stateFromStores = obj2.useStateFromStores(items, () => SearchMemberTabStore.getResults(closure_3));
  let obj3 = searchContext(563);
  const items1 = [bound];
  const items2 = [searchContext];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => bound.getChannelIds(searchContext), items2);
  const tmp5 = contentContainerStyles;
  const tmp7 = bound;
  if (0 === stateFromStores1.size) {
    first = stateFromStores2;
  } else {
    first = null;
    if (1 === stateFromStores1.size) {
      const _Array = Array;
      first = Array.from(stateFromStores1)[0];
    }
  }
  const items3 = [stateFromStores5];
  const tmp4Result = tmp4(563);
  stateFromStores2 = tmp4Result.useStateFromStores(items3, () => stateFromStores5.getChannelId());
  let obj4 = { placeholderHeight, numColumns: 1 };
  const tmp4Result9 = tmp4(18893);
  fullscreenPlaceholderCount = tmp4Result9.useFullscreenPlaceholderCount(obj4);
  const items4 = [callback];
  const tmp4Result10 = tmp4(563);
  stateFromStores3 = tmp4Result10.useStateFromStores(items4, () => {
    const guild = GuildStore.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      const obj = PermissionUtilsAll;
      guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
    }
    return guildVisualOwnerId;
  });
  const items5 = [fullscreenPlaceholderCount];
  const tmp4Result11 = tmp4(563);
  const stateFromStores4 = tmp4Result11.useStateFromStores(items5, () => {
    if (first === EVERYONE_CHANNEL_ID) {
      return first;
    } else {
      const channel = ChannelStore.getChannel(tmp);
      let tmp4 = tmp;
      if (null != channel) {
        let parent_id = tmp;
        if (channel.isAnnouncementThread()) {
          parent_id = tmp;
          if (null != channel.parent_id) {
            parent_id = channel.parent_id;
          }
        }
        tmp4 = parent_id;
      }
      return tmp4;
    }
  });
  const items6 = [searchContext, first, stateFromStores2, analyticsLocations];
  callback = stateFromStores.useCallback((userId, index) => {
    let tmp4;
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = TrackingDefault;
    const obj3 = { searchContext, userId: userId.id, index, entityType: constants2.USER };
    const result1 = obj2.trackSearchResultClicked(obj3);
    const obj4 = { userId: userId.id, channelId: tmp4, sourceAnalyticsLocations: analyticsLocations };
    tmp4 = first;
    const tmp3 = showUserProfileActionSheetDefault;
    if (first === EVERYONE_CHANNEL_ID) {
      tmp4 = stateFromStores2;
    }
    tmp3(obj4);
  }, items6);
  const items7 = [searchContext];
  const items8 = [callback];
  const callback1 = stateFromStores.useCallback((arg0) => {
    let index;
    let user;
    ({ user, index } = arg0);
    const obj = TrackingDefault;
    const obj2 = { searchContext, userId: user.id, index, entityType: constants2.USER };
    const result = obj.trackSearchResultClicked(obj2);
    const obj3 = KeyboardManagerUtils;
    const result1 = obj3.dismissGlobalKeyboard();
  }, items7);
  const callback2 = stateFromStores.useCallback((user) => {
    callback(user.user, user.index);
  }, items8);
  const items9 = [tmp7];
  const items10 = [searchContext];
  const tmp4Result12 = tmp4(563);
  stateFromStores5 = tmp4Result12.useStateFromStores(items9, () => SearchQueryStore.isInitialSearchQuery(searchContext), items10);
  const items11 = [tmp5];
  const tmp4Result13 = tmp4(563);
  stateFromStores6 = tmp4Result13.useStateFromStores(items11, () => SearchMemberTabStore.getIsFetching(closure_3));
  const items12 = [stateFromStores, stateFromStores5, stateFromStores6];
  const effect = stateFromStores.useEffect(() => {
    const tmp = stateFromStores5;
    if (!tmp) {
      const tmp2 = stateFromStores6;
      if (!tmp2) {
        let formatToPlainStringResult;
        if (stateFromStores.length > 0) {
          const intl2 = intl3.intl;
          const obj = { count: stateFromStores.length };
          formatToPlainStringResult = intl2.formatToPlainString(intl3.t.ZGVL3g, obj);
        } else {
          const intl = intl3.intl;
          formatToPlainStringResult = intl.string(intl3.t.tuL9TW);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items12);
  const items13 = [stateFromStores, stateFromStores6, stateFromStores5, guildId, stateFromStores3, callback, fullscreenPlaceholderCount];
  const memo = stateFromStores.useMemo(() => {
    const items = [];
    const item = stateFromStores.forEach((record, index) => {
      let colorString;
      let colorStrings;
      let nick;
      let obj;
      let premiumSince;
      let tmp;
      let closure_0 = index;
      const member = GuildMemberStore.getMember(guildId, record.record.id);
      const element = { type: constants.GUILD_CHANNEL_MEMBER, props: obj };
      obj = {
        type: constants2.NONE,
        user: record.record,
        nickname: nick,
        usernameColor: colorString,
        roleColors: colorStrings,
        isNameplatedRow: true,
        premiumSince,
        isOwner: stateFromStores3 === record.record.id,
        guildId: tmp,
        onLongPress(arg0) {
          return closure_2_9(arg0, closure_0);
        },
        onPress(arg0) {
          return closure_2_9(arg0, closure_0);
        },
        start: 0 === index,
        end: index === stateFromStores.length - 1,
        canShowDisplayNameStylesFont: true
      };
      nick = undefined;
      const push = items.push;
      tmp = guildId;
      if (member != null) {
        nick = member.nick;
      }
      colorString = undefined;
      if (member != null) {
        colorString = member.colorString;
      }
      colorStrings = undefined;
      if (member != null) {
        colorStrings = member.colorStrings;
      }
      premiumSince = undefined;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      push(element);
    });
    const tmp2 = stateFromStores6;
    if (tmp2) {
      let num2 = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = { type: constants.GUILD_CHANNEL_MEMBER_PLACEHOLDER, key: "guild-channel-member-placeholder-" + num2 };
          let _HermesInternal = HermesInternal;
          let push = items.push;
          let arr = push(obj);
          num2 = num2 + 1;
        } while (num2 < fullscreenPlaceholderCount);
      }
    }
    return items;
  }, items13);
  const tmp4Result14 = tmp4(18954);
  contentContainerStyles = tmp4Result14.useContentContainerStyles();
  const bottom = tmp2(1628)().bottom;
  const tmp4Result15 = tmp4(11756);
  const channelDockHeight = tmp4Result15.useChannelDockHeight();
  bound = undefined;
  const obj9 = stateFromStores;
  if (channelDockHeight > 0) {
    const _Math = Math;
    bound = Math.max(bottom, channelDockHeight);
  }
  const items14 = [contentContainerStyles.membersContentContainer, bound];
  const memo1 = obj9.useMemo(() => {
    let membersContentContainer;
    if (null != bound) {
      const obj = { paddingBottom: SearchList.SEARCH_LIST_BOTTOM_PADDING + tmp };
      const merged = Object.assign(contentContainerStyles.membersContentContainer);
      membersContentContainer = obj;
    } else {
      membersContentContainer = contentContainerStyles.membersContentContainer;
    }
    return membersContentContainer;
  }, items14);
  const tmp4Result16 = tmp4(18952);
  const messageTabCountsErrorText = tmp4Result16.useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    tmp29 = jsx(tmp2(18884), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores5) {
      if (null != stateFromStores4) {
        tmp29 = jsx(tmp2(12036), { onUserPress: callback1, onUserLongPress: callback2, channelId: stateFromStores4, guildId, disableStickySections: true, listStyleOverride: tmp.userList, isNameplatedList: true, canShowDisplayNameStylesFont: true, disableBottomSafeZone: null != bound, insetEnd: bound });
      }
    }
    tmp29 = jsx(tmp2(18897), { contentContainerStyle: memo1, data: memo });
  }
  return tmp29;
}
function ThreadMembersScreen(searchContext) {
  let bound;
  searchContext = searchContext.searchContext;
  const channelId = searchContext.channelId;
  const guildId = searchContext.guildId;
  let tmp2 = dependencyMap;
  const bottom = channelId(1628)().bottom;
  const obj = searchContext(11756);
  const channelDockHeight = obj.useChannelDockHeight();
  const tmp = channelId;
  if (channelDockHeight > 0) {
    const _Math = Math;
    bound = Math.max(bottom, channelDockHeight);
  }
  const items = [ChannelStore];
  const tmp3Result = searchContext(563);
  const stateFromStores = tmp3Result.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isAnnouncementThread();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [SearchQueryStore];
  const items2 = [searchContext];
  const tmp3Result2 = searchContext(563);
  if (!stateFromStores) {
    let tmp11;
    if (tmp3Result2.useStateFromStores(items1, () => {
      const tmp2 = SearchQueryStore.isInitialSearchQuery(searchContext) && !SearchQueryStore.isTagsEmpty(searchContext);
      return tmp2;
    }, items2)) {
      tmp(18955);
      tmp11 = <tmpResult channelId={channelId} guildId={guildId} onUserPress={searchContext(2018).dismissGlobalKeyboard} disableStickySections disableBottomSafeZone={null != bound} insetEnd={bound} />;
    }
    return tmp11;
  }
  tmp11 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
}
const View = react_native.View;
const EVERYONE_CHANNEL_ID = ChannelMemberStore.EVERYONE_CHANNEL_ID;
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_14, SearchListItemTypes: closure_15 } = SearchConstants);
let closure_16 = TrackingConstants.SearchResultContentEntityTypes;
({ MAX_GROUP_DM_PARTICIPANTS: closure_17, RelationshipTypes: closure_18, SearchTypes: closure_19 } = Constants);
const jsx = Fragment.jsx;
let obj = { container: { flex: 1, flexGrow: 1 }, userList: { backgroundColor: "transparent" }, promoBanner: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_24, paddingBottom: 0, paddingHorizontal: 0 };
let closure_21 = createStyles.createStyles(obj);
const memoResult = react.memo(function MembersScreen(searchContext) {
  let bound;
  let tmp22Result;
  searchContext = searchContext.searchContext;
  let channelId;
  let stateFromStores;
  let tmp = closure_21();
  let tmp2 = stateFromStores;
  const tmp4 = stateFromStores(6348);
  const analyticsLocations = tmp4(stateFromStores(6349).SEARCH_MEMBERS).analyticsLocations;
  const bottom = stateFromStores(1628)().bottom;
  const obj = channelId(11756);
  const channelDockHeight = obj.useChannelDockHeight();
  if (channelDockHeight > 0) {
    const _Math = Math;
    bound = Math.max(bottom, channelDockHeight);
  }
  channelId = undefined;
  if (searchContext.type === constants3.CHANNEL) {
    channelId = searchContext.channelId;
  }
  const items = [ChannelStore];
  const items1 = [channelId];
  const tmp5Result = channelId(563);
  stateFromStores = tmp5Result.useStateFromStores(items, () => {
    let tmp2 = null != channelId;
    if (tmp2) {
      const channel = ChannelStore.getChannel(tmp);
      let flag;
      if (channel != null) {
        flag = channel.isMultiUserDM();
      }
      if (flag == null) {
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  }, items1);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const tmp5Result3 = channelId(563);
  const stateFromStores1 = tmp5Result3.useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    let num = 0;
    if (null != channel) {
      const recipients = channel.recipients;
      let num2;
      if (recipients != null) {
        num2 = recipients.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2 + 1;
    }
    return num;
  }, items3);
  channelId(563);
  [][0] = stateFromStores;
  const type = searchContext.type;
  if (constants3.CHANNEL === type) {
    const AnalyticsLocationProvider2 = tmp5(6348).AnalyticsLocationProvider;
    ({ channelId: searchContext.channelId, disableStickySections: true, listStyleOverride: tmp.userList, onUserPress: channelId(2018).dismissGlobalKeyboard, disableBottomSafeZone: null != bound, insetEnd: bound, listHeaderContent: tmp22Result });
    tmp2(13100);
    tmp22Result = null;
    if (stateFromStores) {
      const obj5 = { location: "GroupDMDetailsMembers", memberCount: stateFromStores1, recipientLimit: tmp14, wrapperStyle: tmp.promoBanner };
      tmp22Result = tmp22(tmp2(18957), obj5);
    }
    return <AnalyticsLocationProvider2 value={analyticsLocations}>{null}</AnalyticsLocationProvider2>;
  } else if (constants3.THREAD === type) {
    ({ channelId: obj6.channelId, guildId: obj6.guildId } = searchContext);
    return <ThreadMembersScreen searchContext={searchContext} channelId={null} guildId={null} />;
  } else {
    if (constants3.GUILD_CHANNEL !== type) {
      if (constants3.GUILD !== type) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("[MembersScreen] Unsupported search context type: " + searchContext.type);
        throw error;
      }
    }
    const AnalyticsLocationProvider = tmp5(6348).AnalyticsLocationProvider;
    return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default memoResult;
