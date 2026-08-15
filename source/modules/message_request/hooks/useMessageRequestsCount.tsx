// Module ID: 16100
// Function ID: 16101
// Name: useMessageRequestsCount
// Dependencies: [4799, 589, 2]
// Exports: useMessageRequestsCount

// Module 16100 (useMessageRequestsCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
