// Module ID: 8611
// Function ID: 8612
// Name: getAdaptiveMessageLimit
// Dependencies: [1071, 2]
// Exports: getMessageLimit, useMessageLimit

// Module 8611 (getAdaptiveMessageLimit)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const MAX_MESSAGES_PER_CHANNEL = Constants.MAX_MESSAGES_PER_CHANNEL;
const result = size.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
