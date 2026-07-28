// Module ID: 10219
// Function ID: 78794
// Name: context
// Dependencies: [31, 2]
// Exports: useVoiceChatNavigationContext

// Module 10219 (context)
import importAllResult from "result";

const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
