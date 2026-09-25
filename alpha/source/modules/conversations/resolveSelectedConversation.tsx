// Module ID: 7345
// Function ID: 7346
// Name: resolveSelectedConversation
// Dependencies: [2]
// Exports: default

// Module 7345 (resolveSelectedConversation)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/resolveSelectedConversation.tsx");

export default function resolveSelectedConversation(getConversationMetadata, getConversation, channelId, conversationId) {
  const conversationMetadata = getConversationMetadata.getConversationMetadata(channelId, conversationId);
  let conversation;
  if (conversationMetadata != null) {
    conversation = conversationMetadata.conversation;
  }
  if (conversation == null) {
    conversation = getConversation.getConversation(conversationId);
  }
  return conversation;
};
