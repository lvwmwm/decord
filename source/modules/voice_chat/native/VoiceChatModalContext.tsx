// Module ID: 10202
// Function ID: 78738
// Name: context
// Dependencies: []
// Exports: useVoiceChatNavigationContext

// Module 10202 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
