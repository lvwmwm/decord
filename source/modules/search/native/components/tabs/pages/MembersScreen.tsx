// Module ID: 15262
// Function ID: 115189
// Name: SearchableMembersScreen
// Dependencies: []

// Module 15262 (SearchableMembersScreen)
function SearchableMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const guildId = searchContext.guildId;
  const importDefault = guildId;
  const analyticsLocations = importDefault(searchContextId[15])().analyticsLocations;
  const importAll = analyticsLocations;
  let obj = arg1(searchContextId[16]);
  const searchContextId = obj.getSearchContextId(searchContext);
  let obj1 = arg1(searchContextId[14]);
  const items = [closure_11];
  const stateFromStores = obj1.useStateFromStores(items, () => stateFromStores5.getResults(closure_3));
  const tmp3 = function useMemberScreenChannelId(searchContext) {
    const items = [closure_12];
    const items1 = [searchContext];
    const stateFromStores = searchContext(closure_3[14]).useStateFromStores(items, () => channelIds.getChannelIds(arg0), items1);
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
  }(searchContext);
  const View = tmp3;
  let obj2 = arg1(searchContextId[14]);
  const items1 = [closure_10];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores4.getChannelId());
  const EVERYONE_CHANNEL_ID = stateFromStores1;
  const tmp = callback();
  obj = { placeholderHeight: closure_13, numColumns: 1 };
  const fullscreenPlaceholderCount = arg1(searchContextId[17]).useFullscreenPlaceholderCount(obj);
  let closure_7 = fullscreenPlaceholderCount;
  const obj4 = arg1(searchContextId[17]);
  const items2 = [closure_9];
  const stateFromStores2 = arg1(searchContextId[14]).useStateFromStores(items2, () => {
    const guild = callback.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = analyticsLocations(closure_3[18]).getGuildVisualOwnerId(guild);
      const obj = analyticsLocations(closure_3[18]);
    }
    return guildVisualOwnerId;
  });
  let closure_8 = stateFromStores2;
  const obj6 = arg1(searchContextId[14]);
  const items3 = [closure_7];
  const stateFromStores3 = arg1(searchContextId[14]).useStateFromStores(items3, () => {
    if (tmp3 === stateFromStores1) {
      return tmp3;
    } else {
      const channel = fullscreenPlaceholderCount.getChannel(tmp3);
      if (null == channel) {
        let parent_id = tmp3;
      } else {
        if (channel.isAnnouncementThread()) {
          if (null != channel.parent_id) {
            parent_id = channel.parent_id;
          }
        }
        parent_id = tmp3;
      }
      return parent_id;
    }
  });
  const items4 = [searchContext, tmp3, stateFromStores1, analyticsLocations];
  const callback = importAllResult.useCallback((userId, index) => {
    let obj = searchContext(closure_3[19]);
    const result = obj.dismissGlobalKeyboard();
    obj = { searchContext, userId: userId.id, index, entityType: constants.USER };
    const result1 = guildId(closure_3[20]).trackSearchResultClicked(obj);
    obj = { userId: userId.id, channelId: tmp3 !== stateFromStores1 ? tmp3 : stateFromStores1, sourceAnalyticsLocations: analyticsLocations };
    const tmp3 = guildId(closure_3[21])(obj);
  }, items4);
  closure_9 = callback;
  const items5 = [searchContext];
  const items6 = [callback];
  const callback1 = importAllResult.useCallback((arg0) => {
    let index;
    let user;
    ({ user, index } = arg0);
    let obj = guildId(closure_3[20]);
    obj = { searchContext, userId: user.id, index, entityType: constants.USER };
    const result = obj.trackSearchResultClicked(obj);
    const result1 = searchContext(closure_3[19]).dismissGlobalKeyboard();
  }, items5);
  const callback2 = importAllResult.useCallback((user) => {
    callback(user.user, user.index);
  }, items6);
  const obj7 = arg1(searchContextId[14]);
  const items7 = [closure_12];
  const items8 = [searchContext];
  const stateFromStores4 = arg1(searchContextId[14]).useStateFromStores(items7, () => initialSearchQuery.isInitialSearchQuery(searchContext), items8);
  closure_10 = stateFromStores4;
  const obj8 = arg1(searchContextId[14]);
  const items9 = [closure_11];
  const stateFromStores5 = arg1(searchContextId[14]).useStateFromStores(items9, () => stateFromStores5.getIsFetching(closure_3));
  closure_11 = stateFromStores5;
  const items10 = [stateFromStores, stateFromStores4, stateFromStores5];
  const effect = importAllResult.useEffect(() => {
    if (!stateFromStores4) {
      if (!stateFromStores5) {
        if (stateFromStores.length > 0) {
          const intl2 = searchContext(closure_3[22]).intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(searchContext(closure_3[22]).t.ZGVL3g, obj);
        } else {
          const intl = searchContext(closure_3[22]).intl;
          formatToPlainStringResult = intl.string(searchContext(closure_3[22]).t.tuL9TW);
        }
        const AccessibilityAnnouncer = searchContext(closure_3[23]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items10);
  const items11 = [stateFromStores, stateFromStores5, stateFromStores4, guildId, stateFromStores2, callback, fullscreenPlaceholderCount];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    const searchContext = items;
    const item = stateFromStores.forEach((record) => {
      const items = arg1;
      const member = member.getMember(closure_1, record.record.id);
      let obj = { type: constants.GUILD_CHANNEL_MEMBER };
      obj = { type: constants2.NONE, user: record.record };
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
      obj.isOwner = member === record.record.id;
      obj.guildId = closure_1;
      obj.onLongPress = function onLongPress(arg0) {
        return callback(arg0, arg1);
      };
      obj.onPress = function onPress(arg0) {
        return callback(arg0, arg1);
      };
      obj.start = 0 === arg1;
      obj.end = arg1 === length.length - 1;
      obj.canShowDisplayNameStylesFont = true;
      obj.props = obj;
      items.push(obj);
    });
    if (stateFromStores5) {
      let num2 = 0;
      if (0 < fullscreenPlaceholderCount) {
        do {
          let obj = {};
          let tmp5 = closure_14;
          obj.type = closure_14.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
          let _HermesInternal = HermesInternal;
          obj.key = "guild-channel-member-placeholder-" + num2;
          let arr = items.push(obj);
          num2 = num2 + 1;
          let tmp7 = closure_7;
        } while (num2 < closure_7);
      }
    }
    return items;
  }, items11);
  const obj9 = arg1(searchContextId[14]);
  const contentContainerStyles = arg1(searchContextId[24]).useContentContainerStyles();
  const obj10 = arg1(searchContextId[24]);
  const messageTabCountsErrorText = arg1(searchContextId[25]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp20 = jsx(importDefault(searchContextId[26]), obj);
  } else {
    if (stateFromStores4) {
      if (null != stateFromStores3) {
        obj1 = { onUserPress: callback1, onUserLongPress: callback2, channelId: stateFromStores3, guildId, disableStickySections: true, listStyleOverride: tmp.userList, isNameplatedList: true, canShowDisplayNameStylesFont: true };
        tmp20 = jsx(importDefault(searchContextId[27]), obj1);
      }
    }
    obj2 = { contentContainerStyle: contentContainerStyles.membersContentContainer, data: memo };
    tmp20 = jsx(importDefault(searchContextId[28]), obj2);
  }
  return tmp20;
}
function ThreadMembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const channelId = searchContext.channelId;
  const importDefault = channelId;
  const guildId = searchContext.guildId;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = channel.getChannel(channelId);
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
      let isInitialSearchQueryResult = closure_12.isInitialSearchQuery(searchContext);
      if (isInitialSearchQueryResult) {
        isInitialSearchQueryResult = !closure_12.isTagsEmpty(searchContext);
      }
      return isInitialSearchQueryResult;
    }, items2)) {
      obj = { channelId, guildId, onUserPress: arg1(dependencyMap[19]).dismissGlobalKeyboard, disableStickySections: true };
      let tmp7 = jsx(importDefault(dependencyMap[29]), obj);
      const tmp5 = importDefault(dependencyMap[29]);
    }
    return tmp7;
  }
  tmp7 = <SearchableMembersScreen searchContext={searchContext} guildId={guildId} />;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const EVERYONE_CHANNEL_ID = arg1(dependencyMap[2]).EVERYONE_CHANNEL_ID;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
({ MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_13, SearchListItemTypes: closure_14 } = arg1(dependencyMap[9]));
let closure_15 = arg1(dependencyMap[10]).SearchResultContentEntityTypes;
const tmp2 = arg1(dependencyMap[9]);
({ RelationshipTypes: closure_16, SearchTypes: closure_17 } = arg1(dependencyMap[11]));
const jsx = arg1(dependencyMap[12]).jsx;
const tmp3 = arg1(dependencyMap[11]);
let closure_19 = arg1(dependencyMap[13]).createStyles({ container: { "Bool(true)": "<string:2491613185>", "Bool(true)": "<string:2941583362>" }, userList: { backgroundColor: "transparent" } });
const obj2 = arg1(dependencyMap[13]);
const memoResult = importAllResult.memo(function MembersScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const tmp = callback();
  const analyticsLocations = importDefault(dependencyMap[15])(importDefault(dependencyMap[30]).SEARCH_MEMBERS).analyticsLocations;
  const type = searchContext.type;
  if (constants.CHANNEL === type) {
    let obj = { value: analyticsLocations };
    obj = { style: tmp.container };
    const obj1 = { channelId: searchContext.channelId, disableStickySections: true, listStyleOverride: tmp.userList, onUserPress: arg1(dependencyMap[19]).dismissGlobalKeyboard };
    obj.children = jsx(importDefault(dependencyMap[31]), obj1);
    obj.children = <View {...obj} />;
    return jsx(arg1(dependencyMap[15]).AnalyticsLocationProvider, obj);
  } else if (constants.THREAD === type) {
    const obj2 = { searchContext };
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = searchContext);
    return <ThreadMembersScreen {...obj2} />;
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
    obj.children = <SearchableMembersScreen {...obj3} />;
    return jsx(arg1(dependencyMap[15]).AnalyticsLocationProvider, obj);
  }
  const tmp2 = importDefault(dependencyMap[15]);
});
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/search/native/components/tabs/pages/MembersScreen.tsx");

export default memoResult;
