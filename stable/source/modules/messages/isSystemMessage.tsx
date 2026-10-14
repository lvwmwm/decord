// Module ID: 6773
// Function ID: 6774
// Name: isSystemMessage
// Dependencies: [1101, 2]
// Exports: default

// Module 6773 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1101 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
