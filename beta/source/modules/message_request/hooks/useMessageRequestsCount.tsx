// Module ID: 19753
// Function ID: 19754
// Name: useMessageRequestsCount
// Dependencies: [7030, 504, 2]
// Exports: useMessageRequestsCount

// Module 19753 (useMessageRequestsCount)
import get_initialized from "get initialized" /* 504 */;
import MessageRequestStore from "MessageRequestStore" /* 7030 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export function useMessageRequestsCount() {
  let messageRequestsCount;
  const items = [MessageRequestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
}
