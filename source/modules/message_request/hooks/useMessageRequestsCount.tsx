// Module ID: 15829
// Function ID: 15830
// Name: useMessageRequestsCount
// Dependencies: [5750, 589, 2]
// Exports: useMessageRequestsCount

// Module 15829 (useMessageRequestsCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
