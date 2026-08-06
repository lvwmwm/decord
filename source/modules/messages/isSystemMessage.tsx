// Module ID: 5811
// Function ID: 5812
// Name: isSystemMessage
// Dependencies: [686, 2]
// Exports: default

// Module 5811 (isSystemMessage)
const result = require("set").fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = require(686) /* set */.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
