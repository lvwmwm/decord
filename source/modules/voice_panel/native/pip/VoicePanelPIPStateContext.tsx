// Module ID: 16604
// Function ID: 16605
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16604 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: 3072, containerHeight: 3073, showSecondaryPIP: 3074 });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
