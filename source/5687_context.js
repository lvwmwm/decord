// Module ID: 5687
// Function ID: 5688
// Name: context
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 5687 (context)
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
