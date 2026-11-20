// Module ID: 18881
// Function ID: 18882
// Name: useSpamMessageRequestsCount
// Dependencies: [6516, 504, 2]
// Exports: useSpamMessageRequestCount

// Module 18881 (useSpamMessageRequestsCount)
import get_initialized from "get initialized" /* 504 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6516 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export function useSpamMessageRequestCount() {
  let spamChannelsCount;
  const items = [SpamMessageRequestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
}
