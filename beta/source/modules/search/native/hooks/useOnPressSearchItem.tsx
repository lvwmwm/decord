// Module ID: 16458
// Function ID: 16459
// Name: useOnPressSearchItem
// Dependencies: [5, 19, 7014, 2045, 11822, 7303, 16459, 7302, 1074, 2052, 11821, 11844, 1366, 4527, 1115, 7818, 4525, 1485, 16435, 16460, 11849, 7333, 7351, 1110, 6747, 7707, 4849, 4847, 5043, 1981, 5046, 12488, 5314, 5364, 5881, 1101, 11841, 2]
// Exports: useOnPressConversationCitation, useOnPressDMItem, useOnPressGroupDMItem, useOnPressGuildTextChannel, useOnPressGuildVoiceChannel, useOnPressMediaItem, useOnPressMessageItem, useOnPressSearchHistoryText, useOnPressSearchLink

// Module 16458 (useOnPressSearchItem)
import intl2 from "intl" /* 1115 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11821 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11844 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 16459 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7014 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SearchPlatformUtilsDefault = SearchPlatformUtils;
let _require, c3, c4, c5, navigation;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
function addCurrentSearchQueryToSearchHistory(type) {
  const tags = SearchQueryStore.getTags(type);
  ({ type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(type), tags });
  _require = type;
  type = type.type;
  if (constants3.DMS === type) {
    const obj2 = require("SearchPlatformUtils");
    const result = obj2.delayUntilNavigationComplete(() => {
      obj = tags(closure_2_2[11]);
      return obj.addSearchHistoryItem(closure_0, obj);
    });
  }
}
function handleVoiceOrStageChannelConnectPress() {
  return obj(...arguments);
}
let obj = function _handleVoiceOrStageChannelConnectPress() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[28], paths.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          value.openGuildVoiceModal(closure_0, "Channel List");
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
({ SearchMediaTypes: metroImportAll, SearchHistoryItemTypes: c9, SearchQueryTagTypes: c10 } = SearchConstants);
const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
({ Routes: map1, ComponentActions: closure_14, ME: closure_15, SearchTypes: closure_16 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = function useOnPressSearchLink(searchContext) {
  const items = [searchContext];
  return react.useCallback((target, arg1) => {
    searchContext = arg1;
    const tags = SearchQueryStore.getTags(searchContext);
    obj = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (constants2.DMS === type) {
      const obj2 = SearchPlatformUtils;
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = tags(closure_2_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const obj3 = URLUtilsDefault;
    const url = obj3.safeParseWithQuery(target);
    if (null != url) {
      if (null != url.protocol) {
        if (null != url.hostname) {
          const tmp6Result = URLUtilsDefault;
          const formatResult = tmp6Result.format(url);
          const obj4 = {
            href: formatResult,
            onConfirm() {
                    obj = closure_2_1(closure_2_2[16]);
                    return obj.openURL(formatResult);
                  },
            trusted() {
                    return closure_0;
                  }
          };
          const obj5 = MaskedLinkUtils;
          obj5.handleClick(obj4);
        }
      }
    }
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const intl = intl2.intl;
    presentFailedToast(intl.string(intl2.t.XiqzAp));
  }, items);
};
export const useOnPressMessageItem = function useOnPressMessageItem(searchContext) {
  searchContext = searchContext.searchContext;
  let context;
  obj = searchContext(context[17]);
  navigation = obj.useNavigation();
  context = react.useContext(searchContext(context[18]).SwipeForMemberListContext);
  const items = [navigation, searchContext, context];
  return react.useCallback((arg0, arg1) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      const tags = SearchQueryStore.getTags(channel);
      let obj4 = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(channel), tags };
      let closure_0 = channel;
      const type = channel.type;
      if (constants2.DMS === type) {
        let tmp2 = searchContext;
        obj = searchContext(context[10]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = tags(closure_2_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      let obj2 = navigation(context[19]);
      const messages = obj2.fetchMessages(arg0, arg1);
      let obj3 = searchContext(context[10]);
      const result1 = obj3.performKeyboardAwareNavigation(() => {
        let guildId;
        let obj4;
        let tmp;
        let closure_0 = channel;
        let closure_1 = context;
        const obj2 = { channelId: channel.id, guildId, searchContext: tmp };
        guildId = channel.getGuildId();
        tmp = searchContext;
        const tmp2 = context;
        if (guildId == null) {
          guildId = closure_15;
        }
        if (null != tmp2) {
          const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: obj4 };
          const navigate = obj.navigate;
          obj4 = {
            onBeforeJumpToMessage() {
                const ComponentDispatch = channel(closure_2_2[23]).ComponentDispatch;
                obj = { channelId: id.id, screenIndex: screenIndex.screenIndex };
                ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, obj);
              }
          };
          const merged = Object.assign(obj2);
          navigate("sidebar", obj3);
        } else {
          navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
        }
      });
    }
  }, items);
};
export const useOnPressConversationCitation = function useOnPressConversationCitation(searchContext) {
  searchContext = searchContext.searchContext;
  let context;
  obj = searchContext(context[17]);
  navigation = obj.useNavigation();
  context = react.useContext(searchContext(context[18]).SwipeForMemberListContext);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async function(arg0, value) {
    let c1;
    let c2;
    let obj9;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let _var;
        let messageId;
        let channelId;
        let conversationId;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp2;
            _var = undefined;
            messageId = undefined;
            channelId = closure_0.channelId;
            ({ guildId: c1, messageId: c2 } = closure_0);
            const sourceId = closure_0.sourceId;
            const obj8 = closure_0(context[20]);
            const parseConversationIdResult = obj8.parseConversationId(sourceId);
            conversationId = parseConversationIdResult;
            addCurrentSearchQueryToSearchHistory(closure_0);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj9.fetchConversation(channelId, parseConversationIdResult), done: false };
            obj9 = closure_0(context[21]);
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj6 = closure_0(context[21]);
          const conversationMessages = obj6.fetchConversationMessages(channelId, conversationId, { includeReactions: true, includeMessageReferences: true, isStandalone: true });
          if (null == ConversationPreviewStore.getConversation(conversationId)) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Conversation not found");
            throw error;
          } else {
            const obj7 = { channelId, guildId: _var, conversationId, title: _var, messageId };
            const conversation = ConversationPreviewStore.getConversation(conversationId);
            let title;
            if (conversation != null) {
              title = conversation.title;
            }
            _var = title;
            if (title == null) {
              const str = "";
              _var = "";
            }
            obj = closure_0(context[10]);
            const result = obj.performKeyboardAwareNavigation(() => {
              if (null != messageId) {
                const navigate = navigation.navigate;
                obj = { screen: closure_0(context[22]).ConversationNavigatorScreens.FOCUS, params };
                navigate("sidebar", obj);
              } else {
                navigation.navigate(closure_0(context[22]).ConversationNavigatorScreens.FOCUS, params);
              }
            });
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp17) {
        c5 = 3;
        throw tmp17;
      }
    }
  });
  const items = [navigation, searchContext, context];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
};
export const useOnPressMediaItem = function useOnPressMediaItem(searchContext) {
  searchContext = searchContext.searchContext;
  const allMediaResults = searchContext.allMediaResults;
  let onEndReached = searchContext.onEndReached;
  let onEndReachedThreshold = searchContext.onEndReachedThreshold;
  obj = searchContext(onEndReached[17]);
  navigation = obj.useNavigation();
  const context = navigation.useContext(searchContext(onEndReached[18]).SwipeForMemberListContext);
  let items = [searchContext, navigation, context, allMediaResults, onEndReached, onEndReachedThreshold];
  return navigation.useCallback((channelId, originViewOrOriginLayout) => {
    searchContext = channelId;
    const tags = SearchQueryStore.getTags(searchContext);
    obj = { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (constants3.DMS === type) {
      let obj2 = searchContext(onEndReached[10]);
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = tags(closure_2_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    channel = channel.getChannel(channelId.channelId);
    const type2 = channelId.type;
    if (constants.AUDIO === type2) {
      if (null != channel) {
        const obj8 = allMediaResults(onEndReached[19]);
        const messages = obj8.fetchMessages(channelId.channelId, channelId.messageId);
        const obj9 = searchContext(onEndReached[10]);
        const result1 = obj9.performKeyboardAwareNavigation(() => {
          let guildId;
          let obj4;
          let tmp;
          let closure_0 = channel;
          let closure_1 = context;
          const obj2 = { channelId: channel.id, guildId, searchContext: tmp };
          guildId = channel.getGuildId();
          tmp = searchContext;
          const tmp2 = context;
          if (guildId == null) {
            guildId = closure_15;
          }
          if (null != tmp2) {
            const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: obj4 };
            const navigate = obj.navigate;
            obj4 = {
              onBeforeJumpToMessage() {
                  const ComponentDispatch = channel(closure_2_2[23]).ComponentDispatch;
                  obj = { channelId: id.id, screenIndex: screenIndex.screenIndex };
                  ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, obj);
                }
            };
            const merged = Object.assign(obj2);
            navigate("sidebar", obj3);
          } else {
            navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
          }
        });
      }
    } else {
      if (null != channel) {
        let obj3 = searchContext(onEndReached[24]);
        const tmp9 = searchContext;
        if (obj3.isChannelSpoilerGated(channel)) {
          const obj6 = allMediaResults(onEndReached[19]);
          const messages1 = obj6.fetchMessages(channelId.channelId, channelId.messageId);
          const tmp9Result = tmp9(onEndReached[10]);
          const result2 = tmp9Result.performKeyboardAwareNavigation(() => {
            let guildId;
            let obj4;
            let tmp;
            obj = navigation;
            let closure_1 = context;
            const obj2 = { channelId: channel.id, guildId, searchContext: tmp };
            guildId = channel.getGuildId();
            tmp = searchContext;
            const tmp2 = context;
            if (guildId == null) {
              guildId = closure_15;
            }
            if (null != tmp2) {
              const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: obj4 };
              const navigate = obj.navigate;
              obj4 = {
                onBeforeJumpToMessage() {
                    const ComponentDispatch = channel(closure_2_2[23]).ComponentDispatch;
                    obj = { channelId: id.id, screenIndex: screenIndex.screenIndex };
                    ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, obj);
                  }
              };
              const merged = Object.assign(obj2);
              navigate("sidebar", obj3);
            } else {
              obj.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
            }
          });
        }
      }
      onEndReached = 0;
      onEndReachedThreshold = 0;
      const items = [];
      const item = channel.forEach((type) => {
        const tmp2 = type.type !== metroImportAll.ATTACHMENT && type.type !== metroImportAll.EMBED && type.type !== metroImportAll.COMPONENT;
        if (!tmp2) {
          items.push(type.sources);
          const tmp6 = type.messageId === channelId.messageId && type.mediaIndex === tmp5.mediaIndex;
          if (tmp6) {
            closure_3 = closure_2;
          }
          closure_2 = closure_2 + 1;
        }
      });
      let obj4 = searchContext(onEndReached[25]);
      const obj5 = { initialSources: items, initialIndex: onEndReachedThreshold, onEndReached, onEndReachedThreshold, analyticsSource: "Search", originViewOrOriginLayout };
      obj4.openMediaModal(obj5);
    }
  }, items);
};
export const useOnPressGroupDMItem = function useOnPressGroupDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  obj = searchContext(1485);
  navigation = obj.useNavigation();
  const items = [navigation, searchContext];
  return react.useCallback((channelId) => {
    obj = { type: constants.GROUP_DM, channelId };
    let closure_0 = searchContext;
    const type = searchContext.type;
    if (constants2.DMS === type) {
      const obj2 = SearchPlatformUtils;
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = tags(closure_2_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    const obj4 = ChannelActionCreatorsDefault;
    obj4.preload(closure_15, channelId);
    const obj5 = SearchPlatformUtils;
    const result1 = obj5.performKeyboardAwareNavigation(() => {
      obj = searchContext(closure_2_2[27]);
      obj.transitionToChannel(closure_0);
    });
  }, items);
};
export const useOnPressDMItem = function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  obj = searchContext(1485);
  navigation = obj.useNavigation();
  const items = [navigation, searchContext];
  return react.useCallback((userId, arg1) => {
    obj = { type: constants.DM, userId };
    let closure_0 = searchContext;
    const type = searchContext.type;
    if (constants2.DMS === type) {
      const obj2 = SearchPlatformUtils;
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = tags(closure_2_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    const obj4 = ChannelActionCreatorsDefault;
    obj4.preload(closure_15, arg1);
    const obj5 = SearchPlatformUtils;
    const result1 = obj5.performKeyboardAwareNavigation(() => {
      obj = searchContext(closure_2_2[27]);
      obj.transitionToChannel(closure_0);
    });
    return arg1;
  }, items);
};
export const useOnPressGuildTextChannel = function useOnPressGuildTextChannel(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return react.useCallback((arg0) => {
    const channel = ChannelStore.getChannel(arg0);
    if (null == channel) {
      return null;
    } else {
      let closure_0 = searchContext;
      const type = searchContext.type;
      if (constants.DMS === type) {
        obj = SearchPlatformUtils;
        const result = obj.delayUntilNavigationComplete(() => {
          obj = tags(closure_2_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const obj2 = ChannelActionCreatorsDefault;
      obj2.preload(channel.guild_id, channel.id);
      const obj3 = SearchPlatformUtils;
      const result1 = obj3.performKeyboardAwareNavigation(() => {
        obj = searchContext(closure_2_2[27]);
        return obj.transitionToChannel(channel.id);
      });
    }
  }, items);
};
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = function useOnPressGuildVoiceChannel(searchContext) {
  searchContext = searchContext.searchContext;
  let callback;
  obj = searchContext(callback[17]);
  navigation = obj.useNavigation();
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let c2;
    closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let guildId;
        let result;
        c3 = 2;
        if (0 === paths) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            guildId = undefined;
            const obj11 = closure_0(paths[30]);
            if (!obj11.maybeOpenAgeGateForVoiceChannel(closure_0.id)) {
              const tmp19Result = closure_0(paths[31]);
              if (!tmp19Result.maybeOpenSpoilerGateForVoiceChannel(closure_0.id)) {
                let transitionToResult;
                const tmp19Result4 = closure_0(paths[32]);
                const needSubscriptionToAccess = tmp19Result4.getChannelRoleSubscriptionStatus(obj10.id).needSubscriptionToAccess;
                guildId = obj10.getGuildId();
                if (null != guildId) {
                  const tmp19Result5 = closure_0(paths[33]);
                  if (tmp19Result5.shouldShowMembershipVerificationGate(guildId)) {
                    paths = 1;
                    c3 = 1;
                    const obj4 = { value: closure_0(paths[29])(paths[34], paths.paths), done: false };
                    return obj4;
                  }
                }
                if (needSubscriptionToAccess) {
                  const tmp19Result6 = closure_0(paths[35]);
                  transitionToResult = tmp19Result6.transitionTo(closure_1_13.CHANNEL(closure_0.guild_id, constants.ROLE_SUBSCRIPTIONS));
                } else {
                  closure_1_19(closure_0);
                }
                result = transitionToResult;
              }
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          result = value.openMemberVerificationModal(guildId, () => closure_2_19(closure_1_0));
        }
        c3 = 3;
        const obj5 = { value: result, done: true };
        return obj5;
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  });
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const items = [navigation, callback, searchContext];
  return react.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    if (null == channel) {
      return null;
    } else {
      let closure_0 = channel;
      const type = channel.type;
      if (constants2.DMS === type) {
        obj = searchContext(callback[10]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = tags(closure_2_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const parent = navigation.getParent();
      if (parent != null) {
        parent.goBack();
      }
      const obj3 = searchContext(callback[10]);
      const result1 = obj3.performKeyboardAwareNavigation(() => callback(channel));
    }
  }, items);
};
export const useOnPressSearchHistoryText = function useOnPressSearchHistoryText(searchContext) {
  let constants4;
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return react.useCallback((text, tags) => {
    searchContext = text;
    let closure_1 = tags;
    const tmp = searchContext;
    obj = { type: constants.TEXT, text, tags };
    const type = searchContext.type;
    if (constants4.DMS === type) {
      let obj2 = searchContext(dependencyMap[10]);
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = tags(closure_2_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const obj3 = SearchPlatformActionCreatorsDefault;
    obj3.updateSearchQuery(tmp, (setTags) => {
      if (null != tags) {
        setTags.setTags(tmp);
      }
      setTags.setTextInputValue(searchContext);
    });
    const obj4 = SearchPlatformUtilsDefault;
    const initialMessages = obj4.fetchInitialMessages(tmp);
    if (tags != null) {
      const item = tags.forEach((type) => {
        if (type.type === constants2.COMPLETE) {
          const obj2 = { searchContext, searchTokenType: type.searchTokenType, location: constants3.SEARCH_HISTORY };
          obj = search_tracking_TrackingDefault;
          obj.trackSearchFilterAdd(obj2);
        }
      });
    }
  }, items);
};
