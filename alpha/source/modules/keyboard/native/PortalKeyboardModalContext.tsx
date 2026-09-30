// Module ID: 9984
// Function ID: 9985
// Name: PortalKeyboardModalContext
// Dependencies: [19, 2]
// Exports: useIsPortalKeyboardInModal

// Module 9984 (PortalKeyboardModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(false);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = function useIsPortalKeyboardInModal() {
  return noop.useContext(context);
};
