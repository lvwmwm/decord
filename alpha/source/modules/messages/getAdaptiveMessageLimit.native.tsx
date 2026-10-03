// Module ID: 7520
// Function ID: 7521
// Name: getAdaptiveMessageLimit
// Dependencies: [1085, 2]
// Exports: getMessageLimit, useMessageLimit

// Module 7520 (getAdaptiveMessageLimit)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const MAX_MESSAGES_PER_CHANNEL = Constants.MAX_MESSAGES_PER_CHANNEL;
const result = size.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
