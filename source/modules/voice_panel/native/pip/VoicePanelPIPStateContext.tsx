// Module ID: 15657
// Function ID: 119566
// Name: context
// Dependencies: []
// Exports: usePIPState

// Module 15657 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext({ id: undefined, mode: undefined });
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
