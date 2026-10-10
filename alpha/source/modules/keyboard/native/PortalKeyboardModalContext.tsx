// Module ID: 9528
// Function ID: 9529
// Name: PortalKeyboardModalContext
// Dependencies: [19, 558, 2]
// Exports: useIsPortalKeyboardInModal

// Module 9528 (PortalKeyboardModalContext)
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const context = react.createContext(false);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = function useIsPortalKeyboardInModal() {
  return react.useContext(context);
};
