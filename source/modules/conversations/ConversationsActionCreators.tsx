// Module ID: 9266
// Function ID: 72390
// Name: _fetchChannelConversations
// Dependencies: []
// Exports: clearConversationSelection, fetchChannelConversations, setConversationFeedbackRating, setSelectedConversation, toggleConversationHighlighting, trackTopicalNavigationEntrypointImpression

// Module 9266 (_fetchChannelConversations)
function _fetchChannelConversations() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchChannelConversations = obj;
  return obj(...arguments);
}
function fetchConversationMessages(channelId, guildId, id, arg3) {
  return _fetchConversationMessages(...arguments);
}
function _fetchConversationMessages() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchConversationMessages = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const FETCH_LIMIT = arg1(dependencyMap[3]).FETCH_LIMIT;
const Endpoints = arg1(dependencyMap[4]).Endpoints;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/conversations/ConversationsActionCreators.tsx");

export const fetchChannelConversations = function fetchChannelConversations(arg0) {
  return _fetchChannelConversations(...arguments);
};
export const toggleConversationHighlighting = function toggleConversationHighlighting() {
  importDefault(dependencyMap[6]).dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
};
export const setSelectedConversation = function setSelectedConversation(channelId, guildId, conversationId) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "SET_SELECTED_CONVERSATION", channelId, conversationId };
  obj.dispatch(obj);
  fetchConversationMessages(channelId, guildId, conversationId, { <string:2874563683>: null, <string:1658610769>: null });
  const conversationMetadata = conversationMetadata.getConversationMetadata(channelId, conversationId);
  if (flag) {
    let startMessageId;
    if (null != conversationMetadata) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    flag = null != startMessageId;
  }
  if (flag) {
    obj = { channelId, messageId: conversationMetadata.conversation.startMessageId, flash: false };
    importDefault(dependencyMap[8]).jumpToMessage(obj);
    const obj3 = importDefault(dependencyMap[8]);
  }
};
export const clearConversationSelection = function clearConversationSelection(channelId, conversationId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "CLEAR_CONVERSATION_SELECTION", channelId, conversationId };
  obj.dispatch(obj);
};
export const setConversationFeedbackRating = function setConversationFeedbackRating(closure_0, closure_1, down) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: closure_0, conversationId: closure_1, rating: down };
  obj.dispatch(obj);
};
export { fetchConversationMessages };
export const trackTopicalNavigationEntrypointImpression = function trackTopicalNavigationEntrypointImpression(id, stateFromStores1) {
  const ConversationsAnalytics = stateFromStores1(dependencyMap[9]).ConversationsAnalytics;
  const result = ConversationsAnalytics.trackEntrypointImpression({ channelId: id, conversationCount: stateFromStores1 });
  if (closure_5.shouldTriggerOnNextExposure()) {
    importDefault(dependencyMap[10]).fireSurveyAction(stateFromStores1(dependencyMap[11]).SurveyActionTypes.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS);
    const obj2 = importDefault(dependencyMap[10]);
  }
  importDefault(dependencyMap[6]).dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" });
};
