// Module ID: 6364
// Function ID: 6365
// Name: isSystemMessage
// Dependencies: [1103, 2]
// Exports: default

// Module 6364 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1103 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
