// Module ID: 10587
// Function ID: 10588
// Name: PortalKeyboardModalContext
// Dependencies: [19, 2]
// Exports: useIsPortalKeyboardInModal

// Module 10587 (PortalKeyboardModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(false);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = function useIsPortalKeyboardInModal() {
  return noop.useContext(context);
};
