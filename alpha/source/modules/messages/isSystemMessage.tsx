// Module ID: 6943
// Function ID: 6944
// Name: isSystemMessage
// Dependencies: [1088, 2]
// Exports: default

// Module 6943 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1088 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
