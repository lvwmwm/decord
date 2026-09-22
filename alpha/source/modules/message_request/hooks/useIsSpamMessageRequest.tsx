// Module ID: 11632
// Function ID: 11633
// Name: useIsSpamMessageRequest
// Dependencies: [7467, 504, 2]
// Exports: useIsSpamMessageRequest

// Module 11632 (useIsSpamMessageRequest)
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7467 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  _require = id;
  const items = [SpamMessageRequestStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => SpamMessageRequestStore.isSpam(closure_0), items1);
};
