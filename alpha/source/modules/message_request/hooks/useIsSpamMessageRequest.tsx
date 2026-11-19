// Module ID: 11723
// Function ID: 11724
// Name: useIsSpamMessageRequest
// Dependencies: [6514, 504, 2]
// Exports: useIsSpamMessageRequest

// Module 11723 (useIsSpamMessageRequest)
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6514 */;
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
