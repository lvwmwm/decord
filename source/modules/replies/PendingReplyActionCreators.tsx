// Module ID: 9536
// Function ID: 74278
// Name: createPendingReply
// Dependencies: []
// Exports: createPendingReply, createShallowPendingReply, deletePendingReply, setPendingReplyShouldMention

// Module 9536 (createPendingReply)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/replies/PendingReplyActionCreators.tsx");

export const createPendingReply = function createPendingReply(arg0) {
  let channel;
  let mediaMention;
  let message;
  let shouldMention;
  let showMentionToggle;
  let source;
  ({ message, channel, shouldMention, showMentionToggle, source, mediaMention } = arg0);
  importDefault(dependencyMap[0]).dispatch({ type: "CREATE_PENDING_REPLY", message, channel, shouldMention, showMentionToggle, source, mediaMention });
};
export const createShallowPendingReply = function createShallowPendingReply(arg0) {
  let channel;
  let messageId;
  let shouldMention;
  let showMentionToggle;
  ({ messageId, channel, shouldMention, showMentionToggle } = arg0);
  return importDefault(dependencyMap[0]).dispatch({ type: "CREATE_SHALLOW_PENDING_REPLY", messageId, channel, shouldMention, showMentionToggle });
};
export const setPendingReplyShouldMention = function setPendingReplyShouldMention(id, shouldMention) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: id, shouldMention };
  obj.dispatch(obj);
};
export const deletePendingReply = function deletePendingReply(id) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DELETE_PENDING_REPLY", channelId: id };
  obj.dispatch(obj);
};
