// Module ID: 17354
// Function ID: 17355
// Name: useSpamMessageRequestsCount
// Dependencies: [7465, 504, 2]
// Exports: useSpamMessageRequestCount

// Module 17354 (useSpamMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7465 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [SpamMessageRequestStore];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
