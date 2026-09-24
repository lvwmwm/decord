// Module ID: 7206
// Function ID: 7207
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 7206
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
