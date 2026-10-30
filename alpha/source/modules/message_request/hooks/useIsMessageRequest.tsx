// Module ID: 11233
// Function ID: 11234
// Name: useIsMessageRequest
// Dependencies: [6850, 6851, 504, 2]
// Exports: useIsEitherTypeOfMessageRequest, useIsMessageRequest

// Module 11233 (useIsMessageRequest)
import MessageRequestStore from "MessageRequestStore" /* 6850 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6851 */;
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
