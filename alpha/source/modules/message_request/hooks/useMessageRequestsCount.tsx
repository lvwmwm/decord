// Module ID: 17519
// Function ID: 17520
// Name: useMessageRequestsCount
// Dependencies: [6062, 558, 576, 504, 2]

// Module 17519 (useMessageRequestsCount)
import react from "react" /* 576 */;
import MessageRequestStore from "MessageRequestStore" /* 6062 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageRequestsCount() {
  let messageRequestsCount;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageRequestStore];
    const fn = function u() {
      return messageRequestsCount.getMessageRequestsCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useMessageRequestsCount() {
  let messageRequestsCount;
  const items = [MessageRequestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = tmp2;
