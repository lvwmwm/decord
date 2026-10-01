// Module ID: 7350
// Function ID: 7351
// Name: resolveSelectedConversation
// Dependencies: [2]
// Exports: default

// Module 7350 (resolveSelectedConversation)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/resolveSelectedConversation.tsx");

export default function resolveSelectedConversation(getConversationMetadata, getConversation, channelId, c3) {
  const conversationMetadata = getConversationMetadata.getConversationMetadata(channelId, c3);
  let conversation;
  if (conversationMetadata != null) {
    conversation = conversationMetadata.conversation;
  }
  if (conversation == null) {
    conversation = getConversation.getConversation(c3);
  }
  return conversation;
};
