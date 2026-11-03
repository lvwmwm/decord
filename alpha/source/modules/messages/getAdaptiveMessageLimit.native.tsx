// Module ID: 9963
// Function ID: 9964
// Name: getAdaptiveMessageLimit
// Dependencies: [1072, 2]
// Exports: getMessageLimit, useMessageLimit

// Module 9963 (getAdaptiveMessageLimit)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const MAX_MESSAGES_PER_CHANNEL = Constants.MAX_MESSAGES_PER_CHANNEL;
const result = size.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
