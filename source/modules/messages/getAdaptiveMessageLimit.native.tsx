// Module ID: 10057
// Function ID: 10058
// Name: getMessageLimit
// Dependencies: [676, 2]
// Exports: getMessageLimit, useMessageLimit

// Module 10057 (getMessageLimit)
import { MAX_MESSAGES_PER_CHANNEL } from "ME";

const result = require("set").fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit(arg0) {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
