// Module ID: 9696
// Function ID: 9697
// Name: getAdaptiveMessageLimit
// Dependencies: [1087, 2]
// Exports: getMessageLimit, useMessageLimit

// Module 9696 (getAdaptiveMessageLimit)
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const MAX_MESSAGES_PER_CHANNEL = Constants.MAX_MESSAGES_PER_CHANNEL;
const result = size.fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
