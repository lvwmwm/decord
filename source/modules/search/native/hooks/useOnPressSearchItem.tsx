// Module ID: 15210
// Function ID: 114828
// Name: addSearchHistoryItem
// Dependencies: []
// Exports: useOnPressDMItem, useOnPressGroupDMItem, useOnPressGuildTextChannel, useOnPressGuildVoiceChannel, useOnPressMediaItem, useOnPressMessageItem, useOnPressSearchHistoryText, useOnPressSearchLink

// Module 15210 (addSearchHistoryItem)
function addSearchHistoryItem(type) {
  const arg1 = type;
  const importDefault = arg1;
  type = type.type;
  if (constants2.DMS === type) {
    const result = arg1(dependencyMap[9]).delayUntilNavigationComplete(() => arg1(closure_2[10]).addSearchHistoryItem(arg0, arg1));
    const obj = arg1(dependencyMap[9]);
  }
}
function addCurrentSearchQueryToSearchHistory(arg0) {
  const tags = store.getTags(arg0);
  addSearchHistoryItem(arg0, { type: constants.TEXT, text: store.getTextInputValue(arg0), tags });
}
function navigateToSearchPreview(navigate, channelId, searchContext) {
  const importDefault = arg3;
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
      const ComponentDispatch = arg1(closure_2[19]).ComponentDispatch;
      ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, { channelId: arg1.id, screenIndex: arg3.screenIndex });
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
  const _handleVoiceOrStageChannelConnectPress = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ SearchMediaTypes: closure_7, SearchHistoryItemTypes: closure_8, SearchQueryTagTypes: closure_9 } = arg1(dependencyMap[4]));
const SearchNavigatorScreens = arg1(dependencyMap[5]).SearchNavigatorScreens;
const SearchFilterAddLocations = arg1(dependencyMap[6]).SearchFilterAddLocations;
const tmp2 = arg1(dependencyMap[4]);
({ Routes: closure_12, ComponentActions: closure_13, ME: closure_14, SearchTypes: closure_15 } = arg1(dependencyMap[7]));
const StaticChannelRoute = arg1(dependencyMap[8]).StaticChannelRoute;
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = function useOnPressSearchLink(searchContext) {
  const arg1 = searchContext;
  const items = [searchContext];
  return React.useCallback((aPIEndpoint) => {
    aPIEndpoint = arg1;
    callback(aPIEndpoint);
    let obj = formatResult(closure_2[11]);
    const url = obj.safeParseWithQuery(aPIEndpoint);
    if (null != url) {
      if (null != url.protocol) {
        if (null != url.hostname) {
          const formatResult = formatResult(closure_2[11]).format(url);
          const obj3 = formatResult(closure_2[11]);
          obj = {
            href: formatResult,
            onConfirm() {
                    return formatResult(closure_2[15]).openURL(formatResult);
                  },
            trusted() {
                    return arg1;
                  }
          };
          aPIEndpoint(closure_2[14]).handleClick(obj);
          const obj4 = aPIEndpoint(closure_2[14]);
        }
      }
    }
    const intl = aPIEndpoint(closure_2[13]).intl;
    aPIEndpoint(closure_2[12]).presentFailedToast(intl.string(aPIEndpoint(closure_2[13]).t.XiqzAp));
  }, items);
};
export const useOnPressMessageItem = function useOnPressMessageItem(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const navigation = arg1(dependencyMap[16]).useNavigation();
  const importDefault = navigation;
  const context = React.useContext(arg1(dependencyMap[17]).SwipeForMemberListContext);
  const dependencyMap = context;
  const items = [navigation, searchContext, context];
  return React.useCallback((channelId) => {
    const channel = channel.getChannel(channelId);
    const searchContext = channel;
    if (null != channel) {
      callback(searchContext);
      const messages = navigation(context[18]).fetchMessages(channelId, arg1);
      const obj = navigation(context[18]);
      const result = searchContext(context[9]).performKeyboardAwareNavigation(() => {
        callback(closure_1, channel, channel, closure_2);
      });
      const obj2 = searchContext(context[9]);
    }
  }, items);
};
export const useOnPressMediaItem = function useOnPressMediaItem(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const importDefault = allMediaResults;
  const onEndReached = searchContext.onEndReached;
  const dependencyMap = onEndReached;
  const onEndReachedThreshold = searchContext.onEndReachedThreshold;
  let closure_3 = onEndReachedThreshold;
  const navigation = arg1(dependencyMap[16]).useNavigation();
  const React = navigation;
  const context = React.useContext(arg1(dependencyMap[17]).SwipeForMemberListContext);
  let closure_5 = context;
  const items = [searchContext, navigation, context, searchContext.allMediaResults, onEndReached, onEndReachedThreshold];
  return React.useCallback((type, originViewOrOriginLayout) => {
    const searchContext = type;
    callback(searchContext);
    type = type.type;
    if (constants.AUDIO === type) {
      const channel = context.getChannel(type.channelId);
      if (null != channel) {
        const messages = allMediaResults(closure_2[18]).fetchMessages(type.channelId, type.messageId);
        const obj3 = allMediaResults(closure_2[18]);
        const result = searchContext(closure_2[9]).performKeyboardAwareNavigation(() => {
          callback(items, channel, arg0, closure_5);
        });
      }
    } else {
      closure_2 = 0;
      let closure_3 = 0;
      const items = [];
      const navigation = items;
      const item = allMediaResults.forEach((type) => {
        let tmp = type.type !== constants.ATTACHMENT;
        if (tmp) {
          tmp = type.type !== constants.EMBED;
        }
        if (tmp) {
          tmp = type.type !== constants.COMPONENT;
        }
        if (!tmp) {
          items.push(type.sources);
          let tmp7 = type.messageId === type.messageId;
          if (tmp7) {
            tmp7 = type.mediaIndex === type.mediaIndex;
          }
          if (tmp7) {
            let closure_3 = closure_2;
          }
          closure_2 = closure_2 + 1;
        }
      });
      let obj = searchContext(closure_2[20]);
      obj = { initialSources: items, initialIndex: closure_3, onEndReached: closure_2, onEndReachedThreshold: closure_3, analyticsSource: "Search", originViewOrOriginLayout };
      obj.openMediaModal(obj);
    }
  }, items);
};
export const useOnPressGroupDMItem = function useOnPressGroupDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const navigation = arg1(dependencyMap[16]).useNavigation();
  const importDefault = navigation;
  const items = [navigation, searchContext];
  return React.useCallback((channelId) => {
    const searchContext = channelId;
    callback(searchContext, { type: constants.GROUP_DM, channelId });
    const parent = navigation.getParent();
    if (null != parent) {
      parent.goBack();
    }
    navigation(closure_2[21]).preload(closure_14, channelId);
    const obj = { type: constants.GROUP_DM, channelId };
    const obj3 = navigation(closure_2[21]);
    const result = searchContext(closure_2[9]).performKeyboardAwareNavigation(() => {
      arg0(closure_2[22]).transitionToChannel(arg0);
    });
  }, items);
};
export const useOnPressDMItem = function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const navigation = arg1(dependencyMap[16]).useNavigation();
  const importDefault = navigation;
  const items = [navigation, searchContext];
  return React.useCallback((userId) => {
    const searchContext = arg1;
    callback(searchContext, { type: constants.DM, userId });
    const parent = navigation.getParent();
    if (null != parent) {
      parent.goBack();
    }
    navigation(closure_2[21]).preload(closure_14, arg1);
    const obj = { type: constants.DM, userId };
    const obj3 = navigation(closure_2[21]);
    const result = searchContext(closure_2[9]).performKeyboardAwareNavigation(() => {
      arg1(closure_2[22]).transitionToChannel(arg1);
    });
    return arg1;
  }, items);
};
export const useOnPressGuildTextChannel = function useOnPressGuildTextChannel(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const items = [searchContext];
  return React.useCallback((channelId) => {
    const channel = channel.getChannel(channelId);
    const searchContext = channel;
    if (null == channel) {
      return null;
    } else {
      const obj = { type: constants.GUILD_TEXT_CHANNEL, channelId: channel.id };
      callback2(searchContext, obj);
      callback(closure_2[21]).preload(channel.guild_id, channel.id);
      const obj2 = callback(closure_2[21]);
      const result = searchContext(closure_2[9]).performKeyboardAwareNavigation(() => channel(closure_2[22]).transitionToChannel(channel.id));
    }
  }, items);
};
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = function useOnPressGuildVoiceChannel(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const navigation = arg1(dependencyMap[16]).useNavigation();
  const importDefault = navigation;
  const tmp2 = function useVoiceChannelOnPressHandler() {
    return React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), []);
  }();
  const dependencyMap = tmp2;
  const items = [navigation, tmp2, searchContext];
  return React.useCallback((channelId) => {
    const channel = channel.getChannel(channelId);
    const searchContext = channel;
    if (null == channel) {
      return null;
    } else {
      const obj = { type: constants.GUILD_VOICE_CHANNEL, channelId: channel.id };
      callback(searchContext, obj);
      const parent = navigation.getParent();
      if (null != parent) {
        parent.goBack();
      }
      const result = searchContext(callback[9]).performKeyboardAwareNavigation(() => callback(channel));
    }
  }, items);
};
export const useOnPressSearchHistoryText = function useOnPressSearchHistoryText(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const items = [searchContext];
  return React.useCallback((text, arr) => {
    const searchContext = text;
    callback(searchContext, { type: constants.TEXT, text, tags: arr });
    arr(closure_2[10]).updateSearchQuery(searchContext, (setTags) => {
      if (null != arg1) {
        setTags.setTags(arg1);
      }
      setTags.setTextInputValue(setTags);
    });
    const obj = { type: constants.TEXT, text, tags: arr };
    const obj2 = arr(closure_2[10]);
    const initialMessages = arr(closure_2[9]).fetchInitialMessages(searchContext);
    if (null != arr) {
      const item = arr.forEach((type) => {
        if (type.type === constants.COMPLETE) {
          let obj = arg1(closure_2[32]);
          obj = { searchContext: type, searchTokenType: type.searchTokenType, location: constants2.SEARCH_HISTORY };
          obj.trackSearchFilterAdd(obj);
        }
      });
    }
  }, items);
};
