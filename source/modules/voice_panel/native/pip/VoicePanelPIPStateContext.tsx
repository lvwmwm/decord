// Module ID: 16017
// Function ID: 16018
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16017 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "displayName", mode: "isArray", width: false, height: "Marshall Islands", containerHeight: "MH", showSecondaryPIP: "+692" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
