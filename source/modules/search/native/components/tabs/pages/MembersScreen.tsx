// Module ID: 15379
// Function ID: 117363
// Name: SearchableMembersScreen
// Dependencies: [31, 27, 5658, 1348, 1917, 1838, 1906, 11409, 10077, 9103, 9133, 653, 33, 4130, 624, 5464, 10078, 15340, 3763, 1820, 10076, 8492, 1212, 3843, 15380, 15378, 15333, 10867, 15344, 15381, 5484, 11309, 2]

// Module 15379 (SearchableMembersScreen)
import importAllResult from "module_11309";
import { View } from "module_10867";
import { EVERYONE_CHANNEL_ID } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchResultContentEntityTypes as closure_15 } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_16;
let closure_17;
const require = arg1;
function SearchableMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const guildId = searchContext.guildId;
  const analyticsLocations = guildId(5464)().analyticsLocations;
  let obj = searchContext(10078);
  const dependencyMap = obj.getSearchContextId(searchContext);
  let obj1 = searchContext(624);
  let items = [stateFromStores5];
  let stateFromStores = obj1.useStateFromStores(items, () => stateFromStores5.getResults(closure_3));
  const tmp3 = (function useMemberScreenChannelId(searchContext) {
    let closure_0 = searchContext;
    const items = [outer1_12];
    const items1 = [searchContext];
    const stateFromStores = searchContext(624).useStateFromStores(items, () => outer2_12.getChannelIds(closure_0), items1);
    if (0 === stateFromStores.size) {
      let first = stateFromStores1;
    } else {
      first = null;
      if (1 === stateFromStores.size) {
        const _Array = Array;
        first = Array.from(stateFromStores)[0];
      }
    }
    return first;
  })(searchContext);
  const View = tmp3;
  let obj2 = searchContext(624);
  let items1 = [stateFromStores4];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores4.getChannelId());
  const tmp = callback();
  obj = { placeholderHeight: closure_13, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(15340).useFullscreenPlaceholderCount(obj);
  const obj4 = searchContext(15340);
  const items2 = [callback];
  const stateFromStores2 = searchContext(624).useStateFromStores(items2, () => {
    const guild = callback.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = analyticsLocations(3763).getGuildVisualOwnerId(guild);
      const obj = analyticsLocations(3763);
    }
    return guildVisualOwnerId;
  });
  const obj6 = searchContext(624);
  const items3 = [fullscreenPlaceholderCount];
  const stateFromStores3 = searchContext(624).useStateFromStores(items3, () => {
    if (closure_5 === stateFromStores1) {
      return closure_5;
    } else {
      const channel = fullscreenPlaceholderCount.getChannel(closure_5);
      if (null == channel) {
        let parent_id = closure_5;
      } else {
        if (channel.isAnnouncementThread()) {
          if (null != channel.parent_id) {
            parent_id = channel.parent_id;
          }
        }
        parent_id = closure_5;
      }
      return parent_id;
    }
  });
  const items4 = [searchContext, tmp3, stateFromStores1, analyticsLocations];
  callback = stateFromStores.useCallback((userId, index) => {
    let obj = searchContext(1820);
    const result = obj.dismissGlobalKeyboard();
    obj = { searchContext, userId: userId.id, index, entityType: outer1_15.USER };
    const result1 = guildId(10076).trackSearchResultClicked(obj);
    obj = { userId: userId.id, channelId: closure_5 !== stateFromStores1 ? closure_5 : stateFromStores1, sourceAnalyticsLocations: analyticsLocations };
    guildId(8492)(obj);
  }, items4);
  const items5 = [searchContext];
  const items6 = [callback];
  const callback1 = stateFromStores.useCallback((arg0) => {
    let index;
    let user;
    ({ user, index } = arg0);
    let obj = guildId(10076);
    obj = { searchContext, userId: user.id, index, entityType: outer1_15.USER };
    const result = obj.trackSearchResultClicked(obj);
    const result1 = searchContext(1820).dismissGlobalKeyboard();
  }, items5);
  const callback2 = stateFromStores.useCallback((user) => {
    callback(user.user, user.index);
  }, items6);
  const obj7 = searchContext(624);
  const items7 = [closure_12];
  const items8 = [searchContext];
  stateFromStores4 = searchContext(624).useStateFromStores(items7, () => outer1_12.isInitialSearchQuery(searchContext), items8);
  const obj8 = searchContext(624);
  const items9 = [stateFromStores5];
  stateFromStores5 = searchContext(624).useStateFromStores(items9, () => stateFromStores5.getIsFetching(closure_3));
  const items10 = [stateFromStores, stateFromStores4, stateFromStores5];
  const effect = stateFromStores.useEffect(() => {
    if (!stateFromStores4) {
      if (!stateFromStores5) {
        if (stateFromStores.length > 0) {
          const intl2 = searchContext(1212).intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(searchContext(1212).t.ZGVL3g, obj);
        } else {
          const intl = searchContext(1212).intl;
          formatToPlainStringResult = intl.string(searchContext(1212).t.tuL9TW);
        }
        const AccessibilityAnnouncer = searchContext(3843).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items10);
  const items11 = [stateFromStores, stateFromStores5, stateFromStores4, guildId, stateFromStores2, callback, fullscreenPlaceholderCount];
  const memo = stateFromStores.useMemo(() => {
    let items = [];
    const item = stateFromStores.forEach((record) => {
      const items = arg1;
      const member = stateFromStores2.getMember(outer1_1, record.record.id);
      let obj = { type: outer2_14.GUILD_CHANNEL_MEMBER };
      obj = { type: outer2_16.NONE, user: record.record };
      let nick;
      if (null != member) {
        nick = member.nick;
      }
      obj.nickname = nick;
      let colorString;
      if (null != member) {
        colorString = member.colorString;
      }
      obj.usernameColor = colorString;
      let colorStrings;
      if (null != member) {
        colorStrings = member.colorStrings;
      }
      obj.roleColors = colorStrings;
      obj.isNameplatedRow = true;
      let premiumSince;
      if (null != member) {
        premiumSince = member.premiumSince;
      }
      let tmp7;
      if (null != premiumSince) {
        tmp7 = premiumSince;
      }
      obj.premiumSince = tmp7;
      obj.isOwner = outer1_8 === record.record.id;
      obj.guildId = outer1_1;
      obj.onLongPress = function onLongPress(arg0) {
        return outer2_9(arg0, closure_0);
      };
      obj.onPress = function onPress(arg0) {
        return outer2_9(arg0, closure_0);
      };
      obj.start = 0 === arg1;
      obj.end = arg1 === outer1_4.length - 1;
      obj.canShowDisplayNameStylesFont = true;
      obj.props = obj;
      items.push(obj);
    });
    if (stateFromStores5) {
      let num2 = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = {};
          let tmp5 = outer1_14;
          obj.type = outer1_14.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj.key = "guild-channel-member-placeholder-" + num2;
          let arr = items.push(obj);
          num2 = num2 + 1;
          let tmp7 = fullscreenPlaceholderCount;
        } while (num2 < fullscreenPlaceholderCount);
      }
    }
    return items;
  }, items11);
  const obj9 = searchContext(624);
  const contentContainerStyles = searchContext(15380).useContentContainerStyles();
  const obj10 = searchContext(15380);
  const messageTabCountsErrorText = searchContext(15378).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp20 = jsx(guildId(15333), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores4) {
      if (null != stateFromStores3) {
        obj1 = { onUserPress: callback1, onUserLongPress: callback2, channelId: stateFromStores3, guildId, disableStickySections: true, listStyleOverride: tmp.userList, isNameplatedList: true, canShowDisplayNameStylesFont: true };
        tmp20 = jsx(guildId(10867), { onUserPress: callback1, onUserLongPress: callback2, channelId: stateFromStores3, guildId, disableStickySections: true, listStyleOverride: tmp.userList, isNameplatedList: true, canShowDisplayNameStylesFont: true });
      }
    }
    obj2 = { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo };
    tmp20 = jsx(guildId(15344), { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo });
  }
  return tmp20;
}
function ThreadMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const channelId = searchContext.channelId;
  const guildId = searchContext.guildId;
  let obj = searchContext(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = outer1_7.getChannel(channelId);
    let isAnnouncementThreadResult;
    if (null != channel) {
      isAnnouncementThreadResult = channel.isAnnouncementThread();
    }
    return null != isAnnouncementThreadResult && isAnnouncementThreadResult;
  });
  const items1 = [closure_12];
  const items2 = [searchContext];
  if (!stateFromStores) {
    if (obj2.useStateFromStores(items1, () => {
      let isInitialSearchQueryResult = outer1_12.isInitialSearchQuery(searchContext);
      if (isInitialSearchQueryResult) {
        isInitialSearchQueryResult = !outer1_12.isTagsEmpty(searchContext);
      }
      return isInitialSearchQueryResult;
    }, items2)) {
      obj = { channelId, guildId, onUserPress: searchContext(1820).dismissGlobalKeyboard, disableStickySections: true };
      let tmp7 = jsx(channelId(15381), { channelId, guildId, onUserPress: searchContext(1820).dismissGlobalKeyboard, disableStickySections: true });
      const tmp5 = channelId(15381);
    }
    return tmp7;
  }
  tmp7 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
}
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_13, SearchListItemTypes: closure_14 } = SearchAutocompleteSelectAnalyticsActions);
({ RelationshipTypes: closure_16, SearchTypes: closure_17 } = ME);
let closure_19 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, flexGrow: 1 }, userList: { backgroundColor: "transparent" } });
const memoResult = importAllResult.memo(function MembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tmp = callback();
  const analyticsLocations = importDefault(5464)(importDefault(5484).SEARCH_MEMBERS).analyticsLocations;
  const type = searchContext.type;
  if (constants.CHANNEL === type) {
    let obj = { value: analyticsLocations };
    obj = { style: tmp.container };
    const obj1 = { channelId: searchContext.channelId, disableStickySections: true, listStyleOverride: tmp.userList, onUserPress: require(1820) /* dismissGlobalKeyboard */.dismissGlobalKeyboard };
    obj.children = jsx(importDefault(11309), { channelId: searchContext.channelId, disableStickySections: true, listStyleOverride: tmp.userList, onUserPress: require(1820) /* dismissGlobalKeyboard */.dismissGlobalKeyboard });
    obj.children = <View style={tmp.container} />;
    return jsx(require(5464) /* mergeLocations */.AnalyticsLocationProvider, { style: tmp.container });
  } else if (constants.THREAD === type) {
    const obj2 = { searchContext };
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = searchContext);
    return <ThreadMembersScreen searchContext={searchContext} />;
  } else {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.GUILD !== type) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("[MembersScreen] Unsupported search context type: " + searchContext.type);
        throw error;
      }
    }
    obj = { value: analyticsLocations };
    const obj3 = { searchContext, guildId: searchContext.guildId };
    obj.children = <SearchableMembersScreen searchContext={searchContext} guildId={searchContext.guildId} />;
    return jsx(require(5464) /* mergeLocations */.AnalyticsLocationProvider, { value: analyticsLocations });
  }
  const tmp2 = importDefault(5464);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default memoResult;
