// Module ID: 16004
// Function ID: 16005
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16004 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "description", mode: "isArray", width: false, height: "#C3BFFF", containerHeight: 0, showSecondaryPIP: 100 });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
