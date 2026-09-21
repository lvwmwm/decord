// Module ID: 17556
// Function ID: 17557
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 7319, 2]
// Exports: usePIPState

// Module 17556 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

let size = { id: "sa", mode: "isArray", width: false, height: null, containerHeight: "sku", showSecondaryPIP: null, scale: null };
const ReanimatedHelperTypes = fn(7319);
size.scale = ReanimatedHelperTypes.createFakeSharedValue(1);
const context = noop.createContext(size);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};
