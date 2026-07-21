// Module ID: 15456
// Function ID: 117891
// Name: getRestrictedHiddenMediaCount
// Dependencies: []
// Exports: default

// Module 15456 (getRestrictedHiddenMediaCount)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = require(dependencyMap[0]).maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  const obj = require(dependencyMap[0]);
  return sum + require(dependencyMap[1]).getMessageStickers(message).length;
};
