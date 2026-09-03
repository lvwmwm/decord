// Module ID: 6126
// Function ID: 6127
// Name: isSystemMessage
// Dependencies: [683, 2]
// Exports: default

// Module 6126 (isSystemMessage)
import set from "set" /* 2 */;
import set2 from "set" /* 683 */;

const result = set.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = set2.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
