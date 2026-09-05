// Module ID: 17092
// Function ID: 17093
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 17092 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "sa", mode: "isArray", width: false, height: "comp_0", containerHeight: "DIS_Nitro_Gifcard_004", showSecondaryPIP: 24 });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
