// Module ID: 6547
// Function ID: 6548
// Name: isSystemMessage
// Dependencies: [1087, 2]
// Exports: default

// Module 6547 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1087 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
