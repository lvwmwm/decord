// Module ID: 7270
// Function ID: 7271
// Name: isSystemMessage
// Dependencies: [1089, 2]
// Exports: default

// Module 7270 (isSystemMessage)
import set from "set" /* 2 */;
import set2 from "set" /* 1089 */;

const result = set.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = set2.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
