// Module ID: 17368
// Function ID: 17369
// Name: useSpamMessageRequestsCount
// Dependencies: [7499, 558, 568, 504, 2]

// Module 17368 (useSpamMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7499 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [SpamMessageRequestStore];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
});
