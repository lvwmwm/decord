// Module ID: 15940
// Function ID: 15941
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 15940 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "disabled", mode: "isArray", width: false, height: "WaterDepth", containerHeight: null, showSecondaryPIP: "\u{1F1E7}\u{1F1F9}" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
