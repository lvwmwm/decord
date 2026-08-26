// Module ID: 16312
// Function ID: 16313
// Name: useSpamMessageRequestCount
// Dependencies: [6014, 589, 2]
// Exports: useSpamMessageRequestCount

// Module 16312 (useSpamMessageRequestCount)
import initialize from "initialize" /* 589 */;
import closure_2 from "processChannel" /* 6014 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
