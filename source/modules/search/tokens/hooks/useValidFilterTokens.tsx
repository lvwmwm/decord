// Module ID: 15709
// Function ID: 15710
// Name: useValidOrderedFilterTokens
// Dependencies: [4147, 589, 11716, 1414, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 15709 (useValidOrderedFilterTokens)
import initialize from "initialize";

const require = arg1;
const result = require("getValidOrderedFilterTokens").fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [initialize];
  return _require(589).useStateFromStoresArray(items, () => {
    const items = [outer1_2];
    return searchContext(outer1_1[2]).getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [initialize];
  const items1 = [searchContext];
  return _require(589).useStateFromStores(items, () => {
    const items = [outer1_2];
    return searchContext(outer1_1[2]).getValidFilterTokens(searchContext, items);
  }, items1, _require(1414).areSetsEqual);
};
