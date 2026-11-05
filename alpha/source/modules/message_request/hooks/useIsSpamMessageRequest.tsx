// Module ID: 11454
// Function ID: 11455
// Name: useIsSpamMessageRequest
// Dependencies: [6995, 504, 2]
// Exports: useIsSpamMessageRequest

// Module 11454 (useIsSpamMessageRequest)
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6995 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export function useIsSpamMessageRequest(id) {
  _require = id;
  const items = [SpamMessageRequestStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => SpamMessageRequestStore.isSpam(id), items1);
}
