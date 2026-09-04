// Module ID: 16806
// Function ID: 16807
// Name: useMessageRequestsCount
// Dependencies: [7159, 586, 2]
// Exports: useMessageRequestsCount

// Module 16806 (useMessageRequestsCount)
import initialize from "initialize" /* 586 */;
import closure_2 from "processChannel" /* 7159 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
