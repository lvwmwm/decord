// Module ID: 11697
// Function ID: 11698
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 7331, 2]
// Exports: usePIPState

// Module 11697 (VoicePanelPIPStateContext)
import react from "react" /* 19 */;
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7331 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let size = { id: "sa", mode: "isArray", width: false, height: null, containerHeight: "yes", showSecondaryPIP: null, scale: ReanimatedHelperTypes.createFakeSharedValue(1) };
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(size);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return react.useContext(context);
}
