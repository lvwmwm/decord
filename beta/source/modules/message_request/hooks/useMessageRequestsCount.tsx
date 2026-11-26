// Module ID: 19022
// Function ID: 19023
// Name: useMessageRequestsCount
// Dependencies: [6634, 504, 2]
// Exports: useMessageRequestsCount

// Module 19022 (useMessageRequestsCount)
import get_initialized from "get initialized" /* 504 */;
import MessageRequestStore from "MessageRequestStore" /* 6634 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export function useMessageRequestsCount() {
  let messageRequestsCount;
  const items = [MessageRequestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
}
