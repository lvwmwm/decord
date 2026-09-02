// Module ID: 6125
// Function ID: 6126
// Name: isSystemMessage
// Dependencies: [683, 2]
// Exports: default

// Module 6125 (isSystemMessage)
import set from "set" /* 2 */;
import set2 from "set" /* 683 */;

const result = set.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = set2.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
