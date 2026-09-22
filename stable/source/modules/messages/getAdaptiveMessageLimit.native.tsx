// Module ID: 10073
// Function ID: 10074
// Name: getAdaptiveMessageLimit
// Dependencies: [1074, 2]
// Exports: getMessageLimit, useMessageLimit

// Module 10073 (getAdaptiveMessageLimit)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const MAX_MESSAGES_PER_CHANNEL = Constants.MAX_MESSAGES_PER_CHANNEL;
const result = size.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
