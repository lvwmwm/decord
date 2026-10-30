// Module ID: 11232
// Function ID: 11233
// Name: useIsSpamMessageRequest
// Dependencies: [6851, 504, 2]
// Exports: useIsSpamMessageRequest

// Module 11232 (useIsSpamMessageRequest)
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6851 */;
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
