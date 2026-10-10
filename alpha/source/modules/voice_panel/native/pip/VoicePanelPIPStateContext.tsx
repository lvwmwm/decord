// Module ID: 17741
// Function ID: 17742
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 6762, 558, 2]
// Exports: usePIPState

// Module 17741 (VoicePanelPIPStateContext)
import react from "react" /* 19 */;
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6762 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let size = { id: "end", mode: "toCharArray$esjava$1", width: false, height: null, containerHeight: "\u{1F9D1}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F9D1}\u{1F3FB}", showSecondaryPIP: true, scale: ReanimatedHelperTypes.createFakeSharedValue(1) };
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
