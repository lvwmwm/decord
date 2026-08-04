// Module ID: 15829
// Function ID: 15830
// Name: useSpamMessageRequestCount
// Dependencies: [5751, 589, 2]
// Exports: useSpamMessageRequestCount

// Module 15829 (useSpamMessageRequestCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
