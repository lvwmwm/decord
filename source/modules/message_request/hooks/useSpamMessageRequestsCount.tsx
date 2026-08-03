// Module ID: 15799
// Function ID: 15800
// Name: useSpamMessageRequestCount
// Dependencies: [5722, 589, 2]
// Exports: useSpamMessageRequestCount

// Module 15799 (useSpamMessageRequestCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
