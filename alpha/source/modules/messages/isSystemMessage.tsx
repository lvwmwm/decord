// Module ID: 7026
// Function ID: 7027
// Name: isSystemMessage
// Dependencies: [1088, 2]
// Exports: default

// Module 7026 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1088 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
