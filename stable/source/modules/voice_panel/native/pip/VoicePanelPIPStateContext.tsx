// Module ID: 17203
// Function ID: 17204
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 17203 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ id: "sa", mode: "isArray", width: false, height: "Typing Indicator: always show the chat typing indicator as if you were typing", containerHeight: null, showSecondaryPIP: "\u{1F5C4}\uFE0F" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};
