// Module ID: 16311
// Function ID: 16312
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16311 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: "money_mouth", containerHeight: "money_mouth_face", showSecondaryPIP: "none" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
