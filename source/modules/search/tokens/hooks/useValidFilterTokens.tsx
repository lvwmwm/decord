// Module ID: 16557
// Function ID: 16558
// Name: useValidOrderedFilterTokens
// Dependencies: [4326, 586, 12277, 1429, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 16557 (useValidOrderedFilterTokens)
import closure_2 from "initialize" /* 4326 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  return _require(586).useStateFromStoresArray(items, () => {
    const items = [closure_1_2];
    return searchContext(closure_1_1[2]).getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [closure_2];
  const items1 = [searchContext];
  return _require(586).useStateFromStores(items, () => {
    const items = [closure_1_2];
    return searchContext(closure_1_1[2]).getValidFilterTokens(searchContext, items);
  }, items1, _require(1429).areSetsEqual);
};
