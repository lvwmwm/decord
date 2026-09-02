// Module ID: 5881
// Function ID: 5882
// Name: context
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 5881 (context)
import noop from "noop" /* 19 */;

const useContext = noop.useContext;
const context = noop.createContext(undefined);

export const RecyclerViewContextProvider = context.Provider;
export const useRecyclerViewContext = function useRecyclerViewContext() {
  return useContext(context);
};
export const useFlashListContext = function useFlashListContext() {
  return useContext(context);
};
