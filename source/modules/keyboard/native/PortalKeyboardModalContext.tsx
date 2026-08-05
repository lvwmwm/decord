// Module ID: 8615
// Function ID: 8616
// Name: context
// Dependencies: [19, 2]
// Exports: useIsPortalKeyboardInModal

// Module 8615 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext(false);
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = function useIsPortalKeyboardInModal() {
  return importAllResult.useContext(context);
};
