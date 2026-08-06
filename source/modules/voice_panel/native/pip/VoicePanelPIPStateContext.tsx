// Module ID: 16057
// Function ID: 16058
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16057 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "displayName", mode: "isArray", width: false, height: "head_shaking_horizontally", containerHeight: "awful", showSecondaryPIP: "bored" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
