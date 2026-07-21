// Module ID: 15649
// Function ID: 119523
// Name: context
// Dependencies: []
// Exports: usePIPState

// Module 15649 (context)
const importAllResult = importAll(dependencyMap[0]);
const obj = { "Null": 24182785, "Null": 16777216, "Null": 117, "Null": 0, "Null": 38400, "Null": 0, id: undefined, mode: undefined };
const context = importAllResult.createContext(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
