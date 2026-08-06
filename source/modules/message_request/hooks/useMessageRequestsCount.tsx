// Module ID: 15849
// Function ID: 15850
// Name: useMessageRequestsCount
// Dependencies: [5762, 589, 2]
// Exports: useMessageRequestsCount

// Module 15849 (useMessageRequestsCount)
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require(589) /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
