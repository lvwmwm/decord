// Module ID: 17497
// Function ID: 17498
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 7353, 558, 2]
// Exports: usePIPState

// Module 17497 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "state", mode: "toCharArray$esjava$1", width: false, height: null, containerHeight: "sku", showSecondaryPIP: null, scale: null };
const ReanimatedHelperTypes = fn(7353);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = () => noop.useContext(context);
