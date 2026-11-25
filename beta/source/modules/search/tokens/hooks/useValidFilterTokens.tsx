// Module ID: 18730
// Function ID: 18731
// Name: useValidFilterTokens
// Dependencies: [4970, 504, 13213, 4779, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 18730 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 13213 */;
import StreamerModeStore from "StreamerModeStore" /* 4970 */;
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
