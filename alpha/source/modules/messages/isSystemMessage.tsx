// Module ID: 6852
// Function ID: 6853
// Name: isSystemMessage
// Dependencies: [1100, 2]
// Exports: default

// Module 6852 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
