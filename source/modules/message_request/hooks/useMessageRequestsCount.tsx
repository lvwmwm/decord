// Module ID: 16031
// Function ID: 16032
// Name: useMessageRequestsCount
// Dependencies: [5880, 589, 2]
// Exports: useMessageRequestsCount

// Module 16031 (useMessageRequestsCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
