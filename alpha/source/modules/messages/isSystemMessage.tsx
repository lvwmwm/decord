// Module ID: 6683
// Function ID: 6684
// Name: isSystemMessage
// Dependencies: [1090, 2]
// Exports: default

// Module 6683 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1090 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
