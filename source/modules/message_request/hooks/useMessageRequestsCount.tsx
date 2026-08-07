// Module ID: 15873
// Function ID: 15874
// Name: useMessageRequestsCount
// Dependencies: [5781, 589, 2]
// Exports: useMessageRequestsCount

// Module 15873 (useMessageRequestsCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
