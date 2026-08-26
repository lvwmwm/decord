// Module ID: 16311
// Function ID: 16312
// Name: useMessageRequestsCount
// Dependencies: [6013, 589, 2]
// Exports: useMessageRequestsCount

// Module 16311 (useMessageRequestsCount)
import initialize from "initialize" /* 589 */;
import closure_2 from "processChannel" /* 6013 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
