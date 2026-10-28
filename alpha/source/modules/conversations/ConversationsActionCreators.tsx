// Module ID: 9770
// Function ID: 9771
// Name: ConversationsActionCreators
// Dependencies: [5, 7732, 7736, 9771, 9772, 5643, 1084, 9768, 584, 1294, 7601, 9773, 7891, 7898, 2]
// Exports: clearConversationSelection, fetchChannelConversations, requestConversationFocus, setConversationFeedbackRating, setSelectedConversation, toggleConversationHighlighting, trackTopicalNavigationEntrypointImpression

// Module 9770 (ConversationsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import ConversationConstants from "ConversationConstants" /* 5643 */;
import QualtricsActionCreatorsDefault from "QualtricsActionCreators" /* 7891 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 9773 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7732 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7736 */;
import SelectedConversationStore from "SelectedConversationStore" /* 9771 */;
import TopicalNavigationSurveyStore from "TopicalNavigationSurveyStore" /* 9772 */;
import size from "module_2" /* 2 */;

let _false, _undefined, isJump, requestKey;

let tmp;
const SurveyActionTypes = tmp(7898);
let obj = function _fetchChannelConversations() {
  obj = _asyncToGenerator(async (channelId) => {
    let closure_4;
    let closure_5;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (async function(arg0, value) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c5;
      let hydrateMessages;
      let limit1;
      let limit2;
      let throwOnError;
      if (1 === c7) {
        if (arg0 === 1) {
          let c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        } else {
          const obj13 = closure_133_0(closure_133_2[7]);
          if (obj13.isTopicalNavEnabled(isJump, "fetch_channel_conversations")) {
            const _HermesInternal = HermesInternal;
            requestKey = "" + _undefined + ":" + _false + ":" + limit2 + ":" + true === c5;
            if (!closure_133_4.isListFetchPending(channelId, requestKey)) {
              const obj6 = { type: "CHANNEL_CONVERSATIONS_FETCH_START", channelId, direction: _undefined, requestKey, isJump };
              isJump = c5;
              const dispatch = closure_133_1(closure_133_2[8]).dispatch;
              closure_133_1(closure_133_2[8]);
              if (c5 == null) {
                isJump = false;
              }
              dispatch(obj6);
              const obj7 = { limit: limit2 };
              if (null != _false) {
                if ("before" === _undefined) {
                  obj7.before = _false;
                } else if ("after" === _undefined) {
                  obj7.after = _false;
                } else {
                  obj7.around = _false;
                }
              }
              if (null != hydrateMessages) {
                obj7.include_messages = true;
                const limit = hydrateMessages.limit;
                _undefined = limit;
                const tmp59 = obj7;
                if (limit == null) {
                  _undefined = undefined;
                }
                tmp59.message_limit = _undefined;
              }
              c6 = 1;
              const HTTP = closure_133_0(closure_133_2[9]).HTTP;
              const request = { url: closure_133_9.CHANNEL_CONVERSATIONS(channelId), query: obj7, oldFormErrors: true, rejectWithError: true };
              const get = HTTP.get;
              c7 = 3;
              c8 = 1;
              const obj8 = { value: get(request), done: false };
              return obj8;
            }
          }
        }
      } else if (2 === c7) {
        c6 = 0;
        const obj9 = { type: "CHANNEL_CONVERSATIONS_FETCH_FAILURE", channelId, requestKey };
        const obj3 = closure_133_1(closure_133_2[8]);
        obj3.dispatch(obj9);
        const tmp20 = throwOnError;
        if (tmp20) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Failed to fetch conversations");
          throw error;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        return { value, done: true };
      } else {
        const conversations = value.body.conversations;
        const obj11 = { type: "CHANNEL_CONVERSATIONS_FETCH_SUCCESS", channelId, rawConversations: conversations, direction: _undefined, requestKey, anchor: _false, isJump: _false, fullyHydrated: null == limit1, selectedConversationId: closure_133_6.getSelectedConversationId(channelId) };
        _false = c5;
        const dispatch2 = closure_133_1(closure_133_2[8]).dispatch;
        closure_133_1(closure_133_2[8]);
        if (c5 == null) {
          _false = false;
        }
        limit1 = undefined;
        if (hydrateMessages != null) {
          limit1 = hydrateMessages.limit;
        }
        dispatch2(obj11);
        c6 = 0;
        c8 = 3;
        return { value: conversations, done: true };
      }
      await "IconComponent";
      ({ channelId: c0, guildId: c1, direction: c2, anchor: c3, limit: limit2 } = closure_0);
      if (limit2 === undefined) {
        limit2 = FETCH_LIMIT;
      }
      ({ isJump: c5, throwOnError } = closure_0);
      if (throwOnError === undefined) {
        throwOnError = false;
      }
      hydrateMessages = tmp92.hydrateMessages;
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function fetchConversation() {
  return obj(...arguments);
}
obj = function _fetchConversation() {
  obj = _asyncToGenerator(async (channelId, arg1) => {
    let body = arg1;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              const tmp20 = channelId;
              const tmp21 = body;
              if (!ConversationPreviewStore.touchConversation(body)) {
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c5 = 2;
                c6 = 1;
                const obj4 = { url: Endpoints.CHANNEL_CONVERSATION(tmp20, tmp21), oldFormErrors: true, rejectWithError: true };
                const obj5 = { value: get(obj4), done: false };
                return obj5;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj7 = { type: "CONVERSATION_FETCH_SUCCESS", channelId, rawConversation: body.body };
            obj = closure_131_1(closure_131_2[8]);
            obj.dispatch(obj7);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          if (0 === c4) {
            c6 = 3;
            throw tmp15;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _hydrateSelectedConversation() {
  obj = _asyncToGenerator(async (arg0, arg1, cacheType) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              if ("preview" === cacheType) {
                c5 = 1;
                c6 = 1;
                const obj4 = { value: fetchConversation(tmp17, tmp18), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          }
          const obj5 = { includeReactions: true, includeMessageReferences: true, cacheType };
          closure_132_14(closure_0, closure_1, obj5);
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp13) {
          c6 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchConversationMessages() {
  return obj(...arguments);
}
obj = function _fetchConversationMessages() {
  obj = _asyncToGenerator(async (channelId, conversationId, arg2) => {
    let closure_3;
    let closure_4;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2) => {
      let cacheType;
      let includeMessageReferences;
      let includeReactions;
      let obj7;
      let previewLimit;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let fullyHydrated;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              let result;
              cacheType = undefined;
              tmp = undefined;
              ({ previewLimit, cacheType } = closure_2);
              fullyHydrated = tmp49;
              ({ includeMessageReferences, includeReactions } = closure_2);
              if (null == previewLimit) {
                let isFullyHydratedResult;
                if ("preview" === cacheType) {
                  isFullyHydratedResult = ConversationPreviewStore.isFullyHydrated(tmp47);
                } else {
                  isFullyHydratedResult = ChannelConversationsStore.isFullyHydrated(tmp46, tmp47);
                }
                if (isFullyHydratedResult) {
                  c7 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else {
                let hydratedMessages;
                if ("preview" === cacheType) {
                  hydratedMessages = ConversationPreviewStore.getHydratedMessages(tmp47);
                } else {
                  hydratedMessages = ChannelConversationsStore.getHydratedMessages(tmp46, tmp47);
                }
                if (null != hydratedMessages) {
                  c7 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              if ("preview" === cacheType) {
                result = ConversationPreviewStore.isConversationFetchPending(tmp47, tmp49);
              } else {
                result = ChannelConversationsStore.isConversationFetchPending(tmp47, tmp49);
              }
              if (!result) {
                const obj6 = { type: "CONVERSATION_MESSAGES_FETCH_START", channelId, conversationId, full: null == previewLimit, cacheType };
                const obj4 = DispatcherDefault;
                obj4.dispatch(obj6);
                c5 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: Endpoints.CHANNEL_CONVERSATION_MESSAGES(channelId, conversationId), query: obj7, oldFormErrors: true, rejectWithError: true };
                const get = HTTP.get;
                c6 = 2;
                c7 = 1;
                obj7 = { limit: previewLimit, include_message_references: includeMessageReferences, include_reactions: includeReactions };
                const obj8 = { value: get(request), done: false };
                return obj8;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            const obj9 = { type: "CONVERSATION_MESSAGES_FETCH_FAILURE", channelId, conversationId, full: fullyHydrated, cacheType };
            const obj2 = closure_132_1(closure_132_2[8]);
            obj2.dispatch(obj9);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            tmp = value;
            const obj10 = { type: "CONVERSATION_MESSAGES_FETCH_SUCCESS", channelId, conversationId, messages: tmp.body.messages, messageReferences: tmp.body.reference_messages, fullyHydrated, cacheType };
            const obj11 = closure_132_1(closure_132_2[8]);
            obj11.dispatch(obj10);
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp29) {
          if (0 === c5) {
            c7 = 3;
            throw tmp29;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const FETCH_LIMIT = ConversationConstants.FETCH_LIMIT;
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/conversations/ConversationsActionCreators.tsx");

export const fetchChannelConversations = function fetchChannelConversations() {
  return obj(...arguments);
};
export { fetchConversation };
export const toggleConversationHighlighting = function toggleConversationHighlighting() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
};
export const setSelectedConversation = function setSelectedConversation(channelId, id, arg2) {
  let cacheType;
  let shouldJump;
  function hydrateSelectedConversation() {
    return obj(...arguments);
  }
  ({ cacheType, shouldJump } = arg2);
  if (shouldJump === undefined) {
    shouldJump = true;
  }
  if (null != id) {
    obj = { type: "SET_SELECTED_CONVERSATION", channelId, conversationId: id, cacheType };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj);
    hydrateSelectedConversation(channelId, id, cacheType);
    const tmp6 = importDefault;
    if (shouldJump) {
      const conversation = SelectedConversationStore.getConversation(channelId);
      let startMessageId;
      if (conversation != null) {
        startMessageId = conversation.startMessageId;
      }
      if (null != startMessageId) {
        const obj2 = { channelId, messageId: startMessageId, flash: false };
        const tmp6Result = tmp6(7601);
        tmp6Result.jumpToMessage(obj2);
      }
    }
  }
};
export const clearConversationSelection = function clearConversationSelection(channelId, conversationId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CLEAR_CONVERSATION_SELECTION", channelId, conversationId };
  obj.dispatch(obj2);
};
export const requestConversationFocus = function requestConversationFocus() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CONVERSATION_FOCUS_REQUEST" });
};
export const setConversationFeedbackRating = function setConversationFeedbackRating(channelId, conversationId, down) {
  obj = DispatcherDefault;
  const obj2 = { type: "SET_CONVERSATION_FEEDBACK_RATING", channelId, conversationId, rating: down };
  obj.dispatch(obj2);
};
export { fetchConversationMessages };
export const trackTopicalNavigationEntrypointImpression = function trackTopicalNavigationEntrypointImpression(id, stateFromStores1) {
  const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
  obj = { channelId: id, conversationCount: stateFromStores1 };
  const result = ConversationsAnalytics.trackEntrypointImpression(obj);
  if (TopicalNavigationSurveyStore.shouldTriggerOnNextExposure()) {
    const obj2 = QualtricsActionCreatorsDefault;
    obj2.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS);
  }
  const obj3 = DispatcherDefault;
  obj3.dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" });
};
