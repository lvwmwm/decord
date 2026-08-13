// Module ID: 16042
// Function ID: 16043
// Name: useSpamMessageRequestCount
// Dependencies: [5882, 589, 2]
// Exports: useSpamMessageRequestCount

// Module 16042 (useSpamMessageRequestCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
