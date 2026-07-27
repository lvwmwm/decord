// Module ID: 10179
// Function ID: 78665
// Name: context
// Dependencies: [31, 2]
// Exports: useVoiceChatNavigationContext

// Module 10179 (context)
import importAllResult from "result";

const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
