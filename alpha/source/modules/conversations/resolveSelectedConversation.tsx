// Module ID: 7545
// Function ID: 7546
// Name: resolveSelectedConversation
// Dependencies: [2]
// Exports: default

// Module 7545 (resolveSelectedConversation)
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
