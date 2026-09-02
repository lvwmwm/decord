// Module ID: 16700
// Function ID: 16701
// Name: useSpamMessageRequestCount
// Dependencies: [6075, 586, 2]
// Exports: useSpamMessageRequestCount

// Module 16700 (useSpamMessageRequestCount)
import initialize from "initialize" /* 586 */;
import closure_2 from "processChannel" /* 6075 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
