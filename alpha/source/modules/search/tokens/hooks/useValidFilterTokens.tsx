// Module ID: 18936
// Function ID: 18937
// Name: useValidFilterTokens
// Dependencies: [5100, 504, 13299, 4909, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 18936 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 13299 */;
import StreamerModeStore from "StreamerModeStore" /* 5100 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export function useValidOrderedFilterTokens(searchContext) {
  _require = searchContext;
  let obj = require("get initialized");
  let items = [StreamerModeStore];
  return obj.useStateFromStoresArray(items, () => {
    const items = [StreamerModeStore];
    const obj = SearchTokenStreamerModeUtils;
    return obj.getValidOrderedFilterTokens(searchContext, items);
  });
}
export function useValidFilterTokens(searchContext) {
  _require = searchContext;
  let obj = require("get initialized");
  let items = [StreamerModeStore];
  const items1 = [searchContext];
  return obj.useStateFromStores(items, () => {
    const items = [StreamerModeStore];
    const obj = SearchTokenStreamerModeUtils;
    return obj.getValidFilterTokens(searchContext, items);
  }, items1, require("SetUtils").areSetsEqual);
}
