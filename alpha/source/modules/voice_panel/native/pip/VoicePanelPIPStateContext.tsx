// Module ID: 19197
// Function ID: 19198
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 7242, 2]
// Exports: usePIPState

// Module 19197 (VoicePanelPIPStateContext)
import react from "react" /* 19 */;
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 7242 */;
import size_mod from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let size = { id: "diversity", mode: "isArray", width: false, height: null, containerHeight: "slide_from_bottom", showSecondaryPIP: "motorcycle", scale: ReanimatedHelperTypes.createFakeSharedValue(1) };
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = createContext(size);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export function usePIPState() {
  return react.useContext(context);
}
