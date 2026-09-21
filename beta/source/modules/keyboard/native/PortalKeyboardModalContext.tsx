// Module ID: 10498
// Function ID: 10499
// Name: PortalKeyboardModalContext
// Dependencies: [19, 558, 2]
// Exports: useIsPortalKeyboardInModal

// Module 10498 (PortalKeyboardModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(false);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = () => noop.useContext(context);
