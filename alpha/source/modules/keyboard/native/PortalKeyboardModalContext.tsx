// Module ID: 11227
// Function ID: 11228
// Name: PortalKeyboardModalContext
// Dependencies: [19, 2]
// Exports: useIsPortalKeyboardInModal

// Module 11227 (PortalKeyboardModalContext)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(false);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export function useIsPortalKeyboardInModal() {
  return react.useContext(context);
}
