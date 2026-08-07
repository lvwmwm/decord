// Module ID: 16083
// Function ID: 16084
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16083 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "displayName", mode: "isArray", width: false, height: "crown", containerHeight: "monarch", showSecondaryPIP: "noble" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
