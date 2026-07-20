// Module ID: 10196
// Function ID: 78720
// Name: context
// Dependencies: []
// Exports: useVoiceChatNavigationContext

// Module 10196 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
