// Module ID: 16252
// Function ID: 16253
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16252 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: "0", containerHeight: "10", showSecondaryPIP: "10:00" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
