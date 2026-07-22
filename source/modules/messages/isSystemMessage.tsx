// Module ID: 5646
// Function ID: 48309
// Name: isSystemMessage
// Dependencies: []
// Exports: default

// Module 5646 (isSystemMessage)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = require(dependencyMap[0]).MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
