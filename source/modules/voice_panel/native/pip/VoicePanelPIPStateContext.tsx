// Module ID: 16673
// Function ID: 16674
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16673 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: 354, containerHeight: null, showSecondaryPIP: "\u{1F1FC}\u{1F1F8}" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
