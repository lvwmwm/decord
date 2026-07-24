// Module ID: 10245
// Function ID: 79025
// Name: context
// Dependencies: [31, 2]
// Exports: useVoiceChatNavigationContext

// Module 10245 (context)
import importAllResult from "result";

const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
