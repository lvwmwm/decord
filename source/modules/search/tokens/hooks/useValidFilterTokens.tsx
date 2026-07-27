// Module ID: 15399
// Function ID: 117458
// Name: useValidOrderedFilterTokens
// Dependencies: [3971, 566, 10047, 1390, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 15399 (useValidOrderedFilterTokens)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("isFromUserFilterSupported").fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items, () => {
    const items = [outer1_2];
    return searchContext(outer1_1[2]).getValidOrderedFilterTokens(searchContext, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const _require = searchContext;
  let items = [_isNativeReflectConstruct];
  const items1 = [searchContext];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_2];
    return searchContext(outer1_1[2]).getValidFilterTokens(searchContext, items);
  }, items1, _require(1390).areSetsEqual);
};
