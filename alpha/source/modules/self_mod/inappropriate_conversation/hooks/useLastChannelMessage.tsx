// Module ID: 10400
// Function ID: 10401
// Name: useLastChannelMessage
// Dependencies: [5428, 558, 576, 504, 2]

// Module 10400 (useLastChannelMessage)
import MessageStore from "MessageStore" /* 5428 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLastChannelMessage(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(closure_0);
      const obj = MessageStore;
      const tmp = closure_0;
      if (lastNonCurrentUserMessage == null) {
        lastNonCurrentUserMessage = obj.getLastMessage(tmp);
      }
      return lastNonCurrentUserMessage;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useLastChannelMessage(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [MessageStore];
  return obj.useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(closure_0);
    const obj = MessageStore;
    const tmp = closure_0;
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = obj.getLastMessage(tmp);
    }
    return lastNonCurrentUserMessage;
  });
});
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = tmp2;
