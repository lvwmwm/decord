// Module ID: 9939
// Function ID: 9940
// Name: PortalKeyboardModalContext
// Dependencies: [19, 558, 2]
// Exports: useIsPortalKeyboardInModal

// Module 9939 (PortalKeyboardModalContext)
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const context = react.createContext(false);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = () => react.useContext(context);
