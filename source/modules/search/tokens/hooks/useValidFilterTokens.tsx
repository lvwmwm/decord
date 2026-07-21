// Module ID: 15205
// Function ID: 114746
// Name: useValidOrderedFilterTokens
// Dependencies: []
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 15205 (useValidOrderedFilterTokens)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  const arg1 = searchContext;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStoresArray(items, () => {
    const items = [closure_2];
    return arg0(closure_1[2]).getValidOrderedFilterTokens(arg0, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  const arg1 = searchContext;
  const items = [closure_2];
  const items1 = [searchContext];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    const items = [closure_2];
    return arg0(closure_1[2]).getValidFilterTokens(arg0, items);
  }, items1, arg1(dependencyMap[3]).areSetsEqual);
};
