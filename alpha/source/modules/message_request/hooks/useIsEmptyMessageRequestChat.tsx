// Module ID: 13531
// Function ID: 13532
// Name: useIsEmptyMessageRequestChat
// Dependencies: [6010, 558, 576, 504, 10930, 2]
// Exports: isEmptyLoadedChat

// Module 13531 (useIsEmptyMessageRequestChat)
import useIsMessageRequest from "useIsMessageRequest" /* 10930 */;
import MessageStore from "MessageStore" /* 6010 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEmptyChat(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const messages = MessageStore.getMessages(closure_0);
      const ready = messages.ready && 0 === messages.length && !messages.hasMoreBefore && !messages.hasMoreAfter;
      return ready;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useIsEmptyChat(arg0) {
  let closure_0;
  _require = arg0;
  const items = [MessageStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const messages = MessageStore.getMessages(closure_0);
    const ready = messages.ready && 0 === messages.length && !messages.hasMoreBefore && !messages.hasMoreAfter;
    return ready;
  }, items1);
});
let closure_3 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
function isEmptyLoadedChat(messages) {
  const ready = messages.ready && 0 === messages.length && !messages.hasMoreBefore && !messages.hasMoreAfter;
  return ready;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEmptyMessageRequestChat(arg0) {
  const obj = useIsMessageRequest;
  const isEitherTypeOfMessageRequest = obj.useIsEitherTypeOfMessageRequest(arg0) && closure_3(arg0);
  return isEitherTypeOfMessageRequest;
}) : (function useIsEmptyMessageRequestChat(arg0) {
  const obj = useIsMessageRequest;
  const isEitherTypeOfMessageRequest = obj.useIsEitherTypeOfMessageRequest(arg0) && closure_3(arg0);
  return isEitherTypeOfMessageRequest;
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsEmptyMessageRequestChat.tsx");

export { isEmptyLoadedChat };
export const useIsEmptyChat = tmp2;
export const useIsEmptyMessageRequestChat = tmp3;
