// Module ID: 9273
// Function ID: 72431
// Name: _fetchChannelConversations
// Dependencies: [5, 6831, 9274, 6833, 653, 9271, 686, 507, 6691, 9275, 9276, 9283, 2]
// Exports: clearConversationSelection, fetchChannelConversations, setConversationFeedbackRating, setSelectedConversation, toggleConversationHighlighting, trackTopicalNavigationEntrypointImpression

// Module 9273 (_fetchChannelConversations)
import useGuildHasFeature from "useGuildHasFeature";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { FETCH_LIMIT } from "CONVERSATION_COLORS";
import { Endpoints } from "ME";

const require = arg1;
function _fetchChannelConversations() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function fetchConversationMessages(channelId, guildId, id, arg3) {
  return _fetchConversationMessages(...arguments);
}
function _fetchConversationMessages() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/conversations/ConversationsActionCreators.tsx");

export const fetchChannelConversations = function fetchChannelConversations(arg0) {
  return _fetchChannelConversations(...arguments);
};
export const toggleConversationHighlighting = function toggleConversationHighlighting() {
  importDefault(686).dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
};
export const setSelectedConversation = function setSelectedConversation(channelId, guildId, conversationId) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  let obj = importDefault(686);
  obj = { type: "SET_SELECTED_CONVERSATION", channelId, conversationId };
  obj.dispatch(obj);
  fetchConversationMessages(channelId, guildId, conversationId, { includeReactions: true, includeMessageReferences: true });
  conversationMetadata = conversationMetadata.getConversationMetadata(channelId, conversationId);
  if (flag) {
    let startMessageId;
    if (null != conversationMetadata) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    flag = null != startMessageId;
  }
  if (flag) {
    obj = { channelId, messageId: conversationMetadata.conversation.startMessageId, flash: false };
    importDefault(6691).jumpToMessage(obj);
    const obj3 = importDefault(6691);
  }
};
export const clearConversationSelection = function clearConversationSelection(channelId, conversationId) {
  let obj = importDefault(686);
  obj = { type: "CLEAR_CONVERSATION_SELECTION", channelId, conversationId };
  obj.dispatch(obj);
};
export const setConversationFeedbackRating = function setConversationFeedbackRating(outer1_0, outer1_1, down) {
  let obj = importDefault(686);
  obj = { type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: outer1_0, conversationId: outer1_1, rating: down };
  obj.dispatch(obj);
};
export { fetchConversationMessages };
export const trackTopicalNavigationEntrypointImpression = function trackTopicalNavigationEntrypointImpression(id, stateFromStores1) {
  const ConversationsAnalytics = require(9275) /* channelProps */.ConversationsAnalytics;
  const result = ConversationsAnalytics.trackEntrypointImpression({ channelId: id, conversationCount: stateFromStores1 });
  if (closure_5.shouldTriggerOnNextExposure()) {
    importDefault(9276).fireSurveyAction(require(9283) /* SurveyActionTypes */.SurveyActionTypes.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS);
    const obj2 = importDefault(9276);
  }
  importDefault(686).dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" });
};
