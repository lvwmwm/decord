// Module ID: 17200
// Function ID: 17201
// Name: useValidFilterTokens
// Dependencies: [4674, 504, 12688, 2061, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 17200 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 12688 */;
import StreamerModeStore from "StreamerModeStore" /* 4674 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  _require = searchContext;
  let items = [StreamerModeStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidOrderedFilterTokens(closure_0, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  _require = searchContext;
  let items = [StreamerModeStore];
  const items1 = [searchContext];
  return require("initialize").useStateFromStores(items, () => {
    const items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidFilterTokens(closure_0, items);
  }, items1, require("SetUtils").areSetsEqual);
};
