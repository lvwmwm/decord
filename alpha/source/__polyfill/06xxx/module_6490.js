// Module ID: 6490
// Function ID: 6491
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 6490
import noop from "module_19" /* 19 */;

const useContext = noop.useContext;
const context = noop.createContext(undefined);

export const RecyclerViewContextProvider = context.Provider;
export const useRecyclerViewContext = function useRecyclerViewContext() {
  return useContext(context);
};
export const useFlashListContext = function useFlashListContext() {
  return useContext(context);
};
