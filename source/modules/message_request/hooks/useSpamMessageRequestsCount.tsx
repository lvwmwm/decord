// Module ID: 16807
// Function ID: 16808
// Name: useSpamMessageRequestCount
// Dependencies: [7160, 586, 2]
// Exports: useSpamMessageRequestCount

// Module 16807 (useSpamMessageRequestCount)
import initialize from "initialize" /* 586 */;
import closure_2 from "processChannel" /* 7160 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
