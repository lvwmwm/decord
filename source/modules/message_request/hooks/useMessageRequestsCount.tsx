// Module ID: 16050
// Function ID: 16051
// Name: useMessageRequestsCount
// Dependencies: [5902, 589, 2]
// Exports: useMessageRequestsCount

// Module 16050 (useMessageRequestsCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
