// Module ID: 7373
// Function ID: 7374
// Name: isSystemMessage
// Dependencies: [1089, 2]
// Exports: default

// Module 7373 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1089 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
