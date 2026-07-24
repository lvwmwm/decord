// Module ID: 15821
// Function ID: 122061
// Name: context
// Dependencies: [31, 2]
// Exports: usePIPState

// Module 15821 (context)
import importAllResult from "result";

const obj = { id: undefined, mode: undefined, width: 0, height: 0, containerHeight: 0, showSecondaryPIP: false };
const context = importAllResult.createContext(obj);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
