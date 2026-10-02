// Module ID: 6689
// Function ID: 6690
// Name: isSystemMessage
// Dependencies: [1102, 2]
// Exports: default

// Module 6689 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1102 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
