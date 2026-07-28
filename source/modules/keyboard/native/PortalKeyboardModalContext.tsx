// Module ID: 9374
// Function ID: 73063
// Name: context
// Dependencies: [31, 2]
// Exports: useIsPortalKeyboardInModal

// Module 9374 (context)
import importAllResult from "result";

const context = importAllResult.createContext(false);
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = function useIsPortalKeyboardInModal() {
  return importAllResult.useContext(context);
};
