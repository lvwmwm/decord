// Module ID: 5929
// Function ID: 5930
// Name: isSystemMessage
// Dependencies: [686, 2]
// Exports: default

// Module 5929 (isSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = require(686) /* set */.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
