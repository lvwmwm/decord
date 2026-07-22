// Module ID: 10203
// Function ID: 78762
// Name: context
// Dependencies: []
// Exports: useVoiceChatNavigationContext

// Module 10203 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
