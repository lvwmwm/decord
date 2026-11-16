// Module ID: 19378
// Function ID: 19379
// Name: useMessageRequestsCount
// Dependencies: [6944, 504, 2]
// Exports: useMessageRequestsCount

// Module 19378 (useMessageRequestsCount)
import get_initialized from "get initialized" /* 504 */;
import MessageRequestStore from "MessageRequestStore" /* 6944 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export function useMessageRequestsCount() {
  let messageRequestsCount;
  const items = [MessageRequestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
}
