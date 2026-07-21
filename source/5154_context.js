// Module ID: 5154
// Function ID: 43665
// Name: context
// Dependencies: []
// Exports: useFlashListContext, useRecyclerViewContext

// Module 5154 (context)
const _module = require(dependencyMap[0]);
const useContext = _module.useContext;
const context = _module.createContext(undefined);

export const RecyclerViewContextProvider = context.Provider;
export const useRecyclerViewContext = function useRecyclerViewContext() {
  return useContext(context);
};
export const useFlashListContext = function useFlashListContext() {
  return useContext(context);
};
