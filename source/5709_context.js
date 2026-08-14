// Module ID: 5709
// Function ID: 5710
// Name: context
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 5709 (context)
import noop from "noop";

const useContext = noop.useContext;
const context = noop.createContext(undefined);

export const RecyclerViewContextProvider = context.Provider;
export const useRecyclerViewContext = function useRecyclerViewContext() {
  return useContext(context);
};
export const useFlashListContext = function useFlashListContext() {
  return useContext(context);
};
