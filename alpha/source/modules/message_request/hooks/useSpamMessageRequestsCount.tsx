// Module ID: 19062
// Function ID: 19063
// Name: useSpamMessageRequestsCount
// Dependencies: [6514, 504, 2]
// Exports: useSpamMessageRequestCount

// Module 19062 (useSpamMessageRequestsCount)
import get_initialized from "get initialized" /* 504 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6514 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export function useSpamMessageRequestCount() {
  let spamChannelsCount;
  const items = [SpamMessageRequestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
}
