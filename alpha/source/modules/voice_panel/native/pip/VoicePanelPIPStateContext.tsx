// Module ID: 19793
// Function ID: 19794
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 7782, 2]
// Exports: usePIPState

// Module 19793 (VoicePanelPIPStateContext)
import react from "react" /* 19 */;
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7782 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let size = { id: "ip", mode: "isArray", width: false, height: null, containerHeight: 0, showSecondaryPIP: false, scale: ReanimatedHelperTypes.createFakeSharedValue(1) };
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(size);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return react.useContext(context);
}
