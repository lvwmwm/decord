// Module ID: 17517
// Function ID: 17518
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 6754, 558, 2]
// Exports: usePIPState

// Module 17517 (VoicePanelPIPStateContext)
import react from "react" /* 19 */;
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6754 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let size = { id: "end", mode: "toCharArray$esjava$1", width: false, height: null, containerHeight: 0, showSecondaryPIP: false, scale: ReanimatedHelperTypes.createFakeSharedValue(1) };
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(size);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
size = size_mod;
const result1 = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return react.useContext(context);
};
