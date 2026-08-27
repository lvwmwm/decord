// Module ID: 6069
// Function ID: 6070
// Name: isSystemMessage
// Dependencies: [686, 2]
// Exports: default

// Module 6069 (isSystemMessage)
import set from "set" /* 2 */;
import set2 from "set" /* 686 */;

const result = set.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = set2.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
