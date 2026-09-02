// Module ID: 16699
// Function ID: 16700
// Name: useMessageRequestsCount
// Dependencies: [6074, 586, 2]
// Exports: useMessageRequestsCount

// Module 16699 (useMessageRequestsCount)
import initialize from "initialize" /* 586 */;
import closure_2 from "processChannel" /* 6074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
