// Module ID: 16395
// Function ID: 16396
// Name: useSpamMessageRequestCount
// Dependencies: [6032, 589, 2]
// Exports: useSpamMessageRequestCount

// Module 16395 (useSpamMessageRequestCount)
import initialize from "initialize" /* 589 */;
import closure_2 from "processChannel" /* 6032 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
