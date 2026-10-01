// Module ID: 10908
// Function ID: 10909
// Name: useIsMessageRequest
// Dependencies: [6640, 6641, 504, 2]
// Exports: useIsEitherTypeOfMessageRequest, useIsMessageRequest

// Module 10908 (useIsMessageRequest)
import MessageRequestStore from "MessageRequestStore" /* 6640 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6641 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequest.tsx");

export const useIsMessageRequest = function useIsMessageRequest(id) {
  _require = id;
  const items = [MessageRequestStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => MessageRequestStore.isMessageRequest(id), items1);
};
export const useIsEitherTypeOfMessageRequest = function useIsEitherTypeOfMessageRequest(arg0) {
  let closure_0;
  _require = arg0;
  const items = [MessageRequestStore, SpamMessageRequestStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = MessageRequestStore.isMessageRequest(tmp) || SpamMessageRequestStore.isSpam(tmp);
      const isMessageRequestResult = MessageRequestStore.isMessageRequest(tmp) || SpamMessageRequestStore.isSpam(tmp);
    }
    return tmp2;
  });
};
