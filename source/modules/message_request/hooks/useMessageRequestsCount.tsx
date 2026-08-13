// Module ID: 16041
// Function ID: 16042
// Name: useMessageRequestsCount
// Dependencies: [5881, 589, 2]
// Exports: useMessageRequestsCount

// Module 16041 (useMessageRequestsCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
