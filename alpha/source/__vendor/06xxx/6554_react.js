// Module ID: 6554
// Function ID: 6555
// Name: react
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 6554 (react)
import react from "react" /* 19 */;

const useContext = react.useContext;
const context = react.createContext(undefined);

export const RecyclerViewContextProvider = context.Provider;
export const useRecyclerViewContext = function useRecyclerViewContext() {
  return useContext(context);
};
export const useFlashListContext = function useFlashListContext() {
  return useContext(context);
};
