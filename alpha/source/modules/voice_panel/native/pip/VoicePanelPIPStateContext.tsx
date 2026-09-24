// Module ID: 17659
// Function ID: 17660
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 7407, 2]
// Exports: usePIPState

// Module 17659 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "sa", mode: "isArray", width: false, height: null, containerHeight: 0, showSecondaryPIP: false, scale: null };
const ReanimatedHelperTypes = fn(7407);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};
