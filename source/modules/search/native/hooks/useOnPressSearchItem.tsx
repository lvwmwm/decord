// Module ID: 15384
// Function ID: 117397
// Name: addSearchHistoryItem
// Dependencies: [5, 31, 1348, 10109, 9141, 15385, 9169, 653, 1355, 11426, 11434, 1443, 3830, 1212, 8380, 3827, 1456, 15363, 10060, 1207, 8318, 4140, 4138, 7557, 1934, 4341, 4345, 12380, 4574, 4619, 9181, 1198, 10108, 2]
// Exports: useOnPressDMItem, useOnPressGroupDMItem, useOnPressGuildTextChannel, useOnPressGuildVoiceChannel, useOnPressMediaItem, useOnPressMessageItem, useOnPressSearchHistoryText, useOnPressSearchLink

// Module 15384 (addSearchHistoryItem)
import SearchNavigatorScreens from "SearchNavigatorScreens";
import shouldNavigate from "shouldNavigate";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchNavigatorScreens } from "SearchNavigatorScreens";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";
import { StaticChannelRoute } from "set";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function addSearchHistoryItem(type) {
  const _require = type;
  let closure_1 = arg1;
  type = type.type;
  if (constants2.DMS === type) {
    const result = _require(11426).delayUntilNavigationComplete(() => callback(outer1_2[10]).addSearchHistoryItem(closure_0, callback));
    const obj = _require(11426);
  }
}
function addCurrentSearchQueryToSearchHistory(arg0) {
  const tags = store.getTags(arg0);
  addSearchHistoryItem(arg0, { type: constants.TEXT, text: store.getTextInputValue(arg0), tags });
}
function navigateToSearchPreview(navigate, channelId, searchContext) {
  let closure_0 = channelId;
  let closure_1 = arg3;
  let obj = { channelId: channelId.id };
  let guildId = channelId.getGuildId();
  if (null == guildId) {
    guildId = closure_14;
  }
  obj.guildId = guildId;
  obj.searchContext = searchContext;
  if (null != arg3) {
    obj = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW };
    obj = {};
    const merged = Object.assign(obj);
    obj["onBeforeJumpToMessage"] = function onBeforeJumpToMessage() {
      const ComponentDispatch = channelId(outer1_2[19]).ComponentDispatch;
      ComponentDispatch.dispatch(outer1_13.HIDE_CHANNEL_DETAILS, { channelId: channelId.id, screenIndex: screenIndex.screenIndex });
    };
    obj.params = obj;
    navigate.navigate("sidebar", obj);
  } else {
    navigate.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj);
  }
}
function handleVoiceOrStageChannelConnectPress() {
  return _handleVoiceOrStageChannelConnectPress(...arguments);
}
function _handleVoiceOrStageChannelConnectPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ SearchMediaTypes: closure_7, SearchHistoryItemTypes: closure_8, SearchQueryTagTypes: closure_9 } = SearchAutocompleteSelectAnalyticsActions);
({ Routes: closure_12, ComponentActions: closure_13, ME: closure_14, SearchTypes: closure_15 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = function useOnPressSearchLink(searchContext) {
  let closure_0 = searchContext;
  const items = [searchContext];
  return React.useCallback((aPIEndpoint) => {
    const searchContext = arg1;
    outer1_18(searchContext);
    let obj = outer1_1(outer1_2[11]);
    const url = obj.safeParseWithQuery(aPIEndpoint);
    if (null != url) {
      if (null != url.protocol) {
        if (null != url.hostname) {
          const formatResult = outer1_1(outer1_2[11]).format(url);
          let closure_1 = formatResult;
          const obj3 = outer1_1(outer1_2[11]);
          obj = {
            href: formatResult,
            onConfirm() {
                    return outer2_1(outer2_2[15]).openURL(closure_1);
                  },
            trusted() {
                    return closure_0;
                  }
          };
          searchContext(outer1_2[14]).handleClick(obj);
          const obj4 = searchContext(outer1_2[14]);
        }
      }
    }
    const intl = searchContext(outer1_2[13]).intl;
    searchContext(outer1_2[12]).presentFailedToast(intl.string(searchContext(outer1_2[13]).t.XiqzAp));
  }, items);
};
export const useOnPressMessageItem = function useOnPressMessageItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(context[16]).useNavigation();
  context = React.useContext(searchContext(context[17]).SwipeForMemberListContext);
  const items = [navigation, searchContext, context];
  return React.useCallback((channelId) => {
    const channel = outer1_5.getChannel(channelId);
    if (null != channel) {
      outer1_18(channel);
      const messages = navigation(context[18]).fetchMessages(channelId, arg1);
      const obj = navigation(context[18]);
      const result = searchContext(context[9]).performKeyboardAwareNavigation(() => {
        outer2_19(outer1_1, channel, channel, outer1_2);
      });
      const obj2 = searchContext(context[9]);
    }
  }, items);
};
export const useOnPressMediaItem = function useOnPressMediaItem(searchContext) {
  searchContext = searchContext.searchContext;
  const allMediaResults = searchContext.allMediaResults;
  const onEndReached = searchContext.onEndReached;
  const onEndReachedThreshold = searchContext.onEndReachedThreshold;
  const navigation = searchContext(onEndReached[16]).useNavigation();
  const context = navigation.useContext(searchContext(onEndReached[17]).SwipeForMemberListContext);
  let items = [searchContext, navigation, context, allMediaResults, onEndReached, onEndReachedThreshold];
  return navigation.useCallback((type, originViewOrOriginLayout) => {
    let closure_0 = type;
    outer1_18(closure_0);
    type = type.type;
    if (outer1_7.AUDIO === type) {
      const channel = context.getChannel(type.channelId);
      if (null != channel) {
        const messages = allMediaResults(onEndReached[18]).fetchMessages(type.channelId, type.messageId);
        const obj3 = allMediaResults(onEndReached[18]);
        const result = searchContext(onEndReached[9]).performKeyboardAwareNavigation(() => {
          outer2_19(items, channel, closure_0, outer1_5);
        });
      }
    } else {
      let c2 = 0;
      let c3 = 0;
      const items = [];
      const item = channel.forEach((type) => {
        let tmp = type.type !== outer2_7.ATTACHMENT;
        if (tmp) {
          tmp = type.type !== outer2_7.EMBED;
        }
        if (tmp) {
          tmp = type.type !== outer2_7.COMPONENT;
        }
        if (!tmp) {
          items.push(type.sources);
          let tmp7 = type.messageId === type.messageId;
          if (tmp7) {
            tmp7 = type.mediaIndex === type.mediaIndex;
          }
          if (tmp7) {
            let SearchNavigatorScreens = closure_2;
          }
          closure_2 = closure_2 + 1;
        }
      });
      let obj = searchContext(onEndReached[20]);
      obj = { initialSources: items, initialIndex: c3, onEndReached: c2, onEndReachedThreshold: c3, analyticsSource: "Search", originViewOrOriginLayout };
      obj.openMediaModal(obj);
    }
  }, items);
};
export const useOnPressGroupDMItem = function useOnPressGroupDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1456).useNavigation();
  const items = [navigation, searchContext];
  return React.useCallback((channelId) => {
    let closure_0 = channelId;
    outer1_17(closure_0, { type: outer1_8.GROUP_DM, channelId });
    const parent = navigation.getParent();
    if (null != parent) {
      parent.goBack();
    }
    navigation(outer1_2[21]).preload(outer1_14, channelId);
    const obj = { type: outer1_8.GROUP_DM, channelId };
    const obj3 = navigation(outer1_2[21]);
    const result = searchContext(outer1_2[9]).performKeyboardAwareNavigation(() => {
      searchContext(outer2_2[22]).transitionToChannel(closure_0);
    });
  }, items);
};
export const useOnPressDMItem = function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1456).useNavigation();
  const items = [navigation, searchContext];
  return React.useCallback((userId) => {
    let closure_0 = arg1;
    outer1_17(closure_0, { type: outer1_8.DM, userId });
    const parent = navigation.getParent();
    if (null != parent) {
      parent.goBack();
    }
    navigation(outer1_2[21]).preload(outer1_14, arg1);
    const obj = { type: outer1_8.DM, userId };
    const obj3 = navigation(outer1_2[21]);
    const result = searchContext(outer1_2[9]).performKeyboardAwareNavigation(() => {
      searchContext(outer2_2[22]).transitionToChannel(closure_0);
    });
    return arg1;
  }, items);
};
export const useOnPressGuildTextChannel = function useOnPressGuildTextChannel(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return React.useCallback((channelId) => {
    const channel = outer1_5.getChannel(channelId);
    if (null == channel) {
      return null;
    } else {
      const obj = { type: outer1_8.GUILD_TEXT_CHANNEL, channelId: channel.id };
      outer1_17(channel, obj);
      outer1_1(outer1_2[21]).preload(channel.guild_id, channel.id);
      const obj2 = outer1_1(outer1_2[21]);
      const result = searchContext(outer1_2[9]).performKeyboardAwareNavigation(() => searchContext(outer2_2[22]).transitionToChannel(channel.id));
    }
  }, items);
};
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = function useOnPressGuildVoiceChannel(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1456).useNavigation();
  const tmp2 = (function useVoiceChannelOnPressHandler() {
    return outer1_4.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer2_3(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), []);
  })();
  const dependencyMap = tmp2;
  const items = [navigation, tmp2, searchContext];
  return React.useCallback((channelId) => {
    const channel = outer1_5.getChannel(channelId);
    if (null == channel) {
      return null;
    } else {
      const obj = { type: outer1_8.GUILD_VOICE_CHANNEL, channelId: channel.id };
      outer1_17(channel, obj);
      const parent = navigation.getParent();
      if (null != parent) {
        parent.goBack();
      }
      const result = searchContext(outer1_17[9]).performKeyboardAwareNavigation(() => outer1_2(channel));
    }
  }, items);
};
export const useOnPressSearchHistoryText = function useOnPressSearchHistoryText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return React.useCallback((text, arr) => {
    let closure_0 = text;
    let closure_1 = arr;
    outer1_17(closure_0, { type: outer1_8.TEXT, text, tags: arr });
    outer1_1(outer1_2[10]).updateSearchQuery(closure_0, (setTags) => {
      if (null != closure_1) {
        setTags.setTags(closure_1);
      }
      setTags.setTextInputValue(closure_0);
    });
    let obj = { type: outer1_8.TEXT, text, tags: arr };
    const obj2 = outer1_1(outer1_2[10]);
    const initialMessages = outer1_1(outer1_2[9]).fetchInitialMessages(closure_0);
    if (null != arr) {
      const item = arr.forEach((type) => {
        if (type.type === outer2_9.COMPLETE) {
          let obj = outer2_1(outer2_2[32]);
          obj = { searchContext: closure_0, searchTokenType: type.searchTokenType, location: outer2_11.SEARCH_HISTORY };
          obj.trackSearchFilterAdd(obj);
        }
      });
    }
  }, items);
};
