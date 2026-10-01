// Module ID: 16448
// Function ID: 16449
// Name: useValidFilterTokens
// Dependencies: [4679, 504, 11828, 2062, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 16448 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 11828 */;
import StreamerModeStore from "StreamerModeStore" /* 4679 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  _require = searchContext;
  let obj = require("get initialized");
  let items = [StreamerModeStore];
  return obj.useStateFromStoresArray(items, () => {
    const items = [StreamerModeStore];
    const obj = SearchTokenStreamerModeUtils;
    return obj.getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  _require = searchContext;
  let obj = require("get initialized");
  let items = [StreamerModeStore];
  const items1 = [searchContext];
  return obj.useStateFromStores(items, () => {
    const items = [StreamerModeStore];
    const obj = SearchTokenStreamerModeUtils;
    return obj.getValidFilterTokens(searchContext, items);
  }, items1, require("SetUtils").areSetsEqual);
};
