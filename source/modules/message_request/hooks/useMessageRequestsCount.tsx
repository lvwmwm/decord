// Module ID: 16376
// Function ID: 16377
// Name: useMessageRequestsCount
// Dependencies: [6018, 589, 2]
// Exports: useMessageRequestsCount

// Module 16376 (useMessageRequestsCount)
import initialize from "initialize" /* 589 */;
import closure_2 from "processChannel" /* 6018 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
