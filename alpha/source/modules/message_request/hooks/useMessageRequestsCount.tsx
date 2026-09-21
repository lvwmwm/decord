// Module ID: 17353
// Function ID: 17354
// Name: useMessageRequestsCount
// Dependencies: [7464, 504, 2]
// Exports: useMessageRequestsCount

// Module 17353 (useMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import MessageRequestStore from "MessageRequestStore" /* 7464 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [MessageRequestStore];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
