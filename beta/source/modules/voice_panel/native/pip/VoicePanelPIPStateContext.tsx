// Module ID: 16847
// Function ID: 16848
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 6496, 558, 2]
// Exports: usePIPState

// Module 16847 (VoicePanelPIPStateContext)
import react from "react" /* 19 */;
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6496 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let size = { id: "emoji", mode: "toCharArray$esjava$1", width: false, height: null, containerHeight: "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}", showSecondaryPIP: true, scale: ReanimatedHelperTypes.createFakeSharedValue(1) };
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(size);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
size = size_mod;
const result1 = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = () => react.useContext(context);
