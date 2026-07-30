// Module ID: 15705
// Function ID: 15706
// Name: useMessageRequestsCount
// Dependencies: [5655, 589, 2]
// Exports: useMessageRequestsCount

// Module 15705 (useMessageRequestsCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
