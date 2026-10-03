// Module ID: 17041
// Function ID: 17042
// Name: useSpamMessageRequestsCount
// Dependencies: [6721, 558, 576, 504, 2]

// Module 17041 (useSpamMessageRequestsCount)
import react from "react" /* 576 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6721 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let spamChannelsCount;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SpamMessageRequestStore];
    const fn = function n() {
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
}) : (() => {
  let spamChannelsCount;
  const items = [SpamMessageRequestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = tmp2;
