// Module ID: 11446
// Function ID: 11447
// Name: useIsMessageRequest
// Dependencies: [6991, 6992, 504, 2]
// Exports: useIsEitherTypeOfMessageRequest, useIsMessageRequest

// Module 11446 (useIsMessageRequest)
import MessageRequestStore from "MessageRequestStore" /* 6991 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6992 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export function useIsMessageRequest(id) {
  _require = id;
  const items = [MessageRequestStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => MessageRequestStore.isMessageRequest(id), items1);
}
export function useIsEitherTypeOfMessageRequest(id) {
  _require = id;
  const items = [MessageRequestStore, SpamMessageRequestStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = MessageRequestStore.isMessageRequest(tmp) || SpamMessageRequestStore.isSpam(tmp);
      const isMessageRequestResult = MessageRequestStore.isMessageRequest(tmp) || SpamMessageRequestStore.isSpam(tmp);
    }
    return tmp2;
  });
}
