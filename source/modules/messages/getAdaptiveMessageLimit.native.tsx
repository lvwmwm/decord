// Module ID: 9838
// Function ID: 76307
// Name: getMessageLimit
// Dependencies: [653, 2]
// Exports: getMessageLimit, useMessageLimit

// Module 9838 (getMessageLimit)
import { MAX_MESSAGES_PER_CHANNEL } from "ME";

const result = require("set").fileFinishedImporting("modules/messages/getAdaptiveMessageLimit.native.tsx");

export function getMessageLimit(arg0) {
  return MAX_MESSAGES_PER_CHANNEL;
}
export function useMessageLimit() {
  return MAX_MESSAGES_PER_CHANNEL;
}
