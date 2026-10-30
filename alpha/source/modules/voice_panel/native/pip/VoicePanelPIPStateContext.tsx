// Module ID: 19146
// Function ID: 19147
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 7236, 2]
// Exports: usePIPState

// Module 19146 (VoicePanelPIPStateContext)
import react from "react" /* 19 */;
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7236 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let size = { id: "displayName", mode: "isArray", width: false, height: null, containerHeight: "box-none", showSecondaryPIP: null, scale: ReanimatedHelperTypes.createFakeSharedValue(1) };
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(size);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return react.useContext(context);
}
