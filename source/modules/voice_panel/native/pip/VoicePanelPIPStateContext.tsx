// Module ID: 16184
// Function ID: 16185
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 16184 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "dispatch", mode: "isArray", width: false, height: "woman_feeding_baby_tone3", containerHeight: "woman_feeding_baby_medium_skin_tone", showSecondaryPIP: "woman_feeding_baby_tone4" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
