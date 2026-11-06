// Module ID: 18988
// Function ID: 18989
// Name: useValidFilterTokens
// Dependencies: [5225, 504, 14107, 5036, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 18988 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 14107 */;
import StreamerModeStore from "StreamerModeStore" /* 5225 */;
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
