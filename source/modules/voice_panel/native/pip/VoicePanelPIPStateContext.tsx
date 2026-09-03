// Module ID: 16928
// Function ID: 16929
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16928 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "sa", mode: "isArray", width: false, height: "IMPERSONATE_STOP", containerHeight: null, showSecondaryPIP: "flex" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
