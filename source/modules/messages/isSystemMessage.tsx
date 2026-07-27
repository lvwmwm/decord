// Module ID: 5870
// Function ID: 51850
// Name: isSystemMessage
// Dependencies: [663, 2]
// Exports: default

// Module 5870 (isSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = require(663) /* set */.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
