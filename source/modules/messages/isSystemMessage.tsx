// Module ID: 5904
// Function ID: 51969
// Name: isSystemMessage
// Dependencies: [663, 2]
// Exports: default

// Module 5904 (isSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = require(663) /* set */.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
