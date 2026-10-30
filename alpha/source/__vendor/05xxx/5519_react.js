// Module ID: 5519
// Function ID: 5520
// Name: react
// Dependencies: [19]
// Exports: useFlashListContext, useRecyclerViewContext

// Module 5519 (react)
import react from "react" /* 19 */;

const useContext = react.useContext;
const context = react.createContext(undefined);

export const RecyclerViewContextProvider = context.Provider;
export function useRecyclerViewContext() {
  return useContext(context);
}
export function useFlashListContext() {
  return useContext(context);
}
