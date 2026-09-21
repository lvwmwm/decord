// Module ID: 7514
// Function ID: 7515
// Name: isSystemMessage
// Dependencies: [1094, 2]
// Exports: default

// Module 7514 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
