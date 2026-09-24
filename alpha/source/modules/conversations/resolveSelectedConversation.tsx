// Module ID: 8256
// Function ID: 8257
// Name: resolveSelectedConversation
// Dependencies: [2]
// Exports: default

// Module 8256 (resolveSelectedConversation)
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
