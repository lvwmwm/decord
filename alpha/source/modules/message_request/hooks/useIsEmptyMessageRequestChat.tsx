// Module ID: 13407
// Function ID: 13408
// Name: useIsEmptyMessageRequestChat
// Dependencies: [5843, 504, 11724, 2]
// Exports: isEmptyLoadedChat, useIsEmptyChat, useIsEmptyMessageRequestChat

// Module 13407 (useIsEmptyMessageRequestChat)
import MessageStore from "MessageStore" /* 5843 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f105542 = () => {
  const messages = MessageStore.getMessages(id);
  const ready = messages.ready && 0 === messages.length && !messages.hasMoreBefore && !messages.hasMoreAfter;
  return ready;
};
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsEmptyMessageRequestChat.tsx");

export function isEmptyLoadedChat(messages) {
  const ready = messages.ready && 0 === messages.length && !messages.hasMoreBefore && !messages.hasMoreAfter;
  return ready;
}
export function useIsEmptyChat(arg0) {
  let closure_0;
  _require = arg0;
  const items = [MessageStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f105542, items1);
}
export function useIsEmptyMessageRequestChat(id) {
  const obj = require("useIsMessageRequest");
  let isEitherTypeOfMessageRequest = obj.useIsEitherTypeOfMessageRequest(id);
  _require = id;
  const items = [MessageStore];
  const items1 = [id];
  const obj2 = require("get initialized");
  if (isEitherTypeOfMessageRequest) {
    isEitherTypeOfMessageRequest = obj2.useStateFromStores(items, f105542, items1);
  }
  return isEitherTypeOfMessageRequest;
}
