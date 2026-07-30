// Module ID: 15912
// Function ID: 15913
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 15912 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: 20, containerHeight: 300, showSecondaryPIP: 1.5 });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
