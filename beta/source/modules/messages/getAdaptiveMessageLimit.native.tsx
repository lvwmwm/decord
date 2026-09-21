// Module ID: 10198
// Function ID: 10199
// Name: getAdaptiveMessageLimit
// Dependencies: [1078, 2]
// Exports: getMessageLimit, useMessageLimit

// Module 10198 (getAdaptiveMessageLimit)
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const MAX_MESSAGES_PER_CHANNEL = Constants.MAX_MESSAGES_PER_CHANNEL;
const result = size.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
