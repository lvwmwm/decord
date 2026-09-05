// Module ID: 6876
// Function ID: 6877
// Name: context
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 6876 (context)
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
