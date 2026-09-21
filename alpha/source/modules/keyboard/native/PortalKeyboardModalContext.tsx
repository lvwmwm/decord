// Module ID: 10581
// Function ID: 10582
// Name: PortalKeyboardModalContext
// Dependencies: [19, 2]
// Exports: useIsPortalKeyboardInModal

// Module 10581 (PortalKeyboardModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(false);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = function useIsPortalKeyboardInModal() {
  return noop.useContext(context);
};
