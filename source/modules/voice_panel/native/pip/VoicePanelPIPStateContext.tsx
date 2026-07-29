// Module ID: 15918
// Function ID: 15919
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 15918 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: "linear", containerHeight: true, showSecondaryPIP: true });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
