// Module ID: 17520
// Function ID: 17521
// Name: useSpamMessageRequestsCount
// Dependencies: [6063, 558, 576, 504, 2]

// Module 17520 (useSpamMessageRequestsCount)
import react from "react" /* 576 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6063 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSpamMessageRequestCount() {
  let spamChannelsCount;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SpamMessageRequestStore];
    const fn = function u() {
      return spamChannelsCount.getSpamChannelsCount();
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
}) : (function useSpamMessageRequestCount() {
  let spamChannelsCount;
  const items = [SpamMessageRequestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = tmp2;
