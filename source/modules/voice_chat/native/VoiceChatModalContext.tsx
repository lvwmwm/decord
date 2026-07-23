// Module ID: 10215
// Function ID: 78834
// Name: context
// Dependencies: [31, 2]
// Exports: useVoiceChatNavigationContext

// Module 10215 (context)
import importAllResult from "result";

const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
