// Module ID: 9871
// Function ID: 76449
// Name: getMessageLimit
// Dependencies: []
// Exports: getMessageLimit, useMessageLimit

// Module 9871 (getMessageLimit)
const MAX_MESSAGES_PER_CHANNEL = require(dependencyMap[0]).MAX_MESSAGES_PER_CHANNEL;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit(arg0) {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
