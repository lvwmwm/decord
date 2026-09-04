// Module ID: 17014
// Function ID: 17015
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 17014 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "sa", mode: "isArray", width: false, height: "center", containerHeight: "center", showSecondaryPIP: "row" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
