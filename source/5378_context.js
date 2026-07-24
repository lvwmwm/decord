// Module ID: 5378
// Function ID: 46059
// Name: context
// Dependencies: [31]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 5378 (context)
import result from "result";

const useContext = result.useContext;
const context = result.createContext(undefined);

export const RecyclerViewContextProvider = context.Provider;
export const useRecyclerViewContext = function useRecyclerViewContext() {
  return useContext(context);
};
export const useFlashListContext = function useFlashListContext() {
  return useContext(context);
};
