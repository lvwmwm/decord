// Module ID: 9748
// Function ID: 9749
// Name: context
// Dependencies: [19, 2]
// Exports: useVoiceChatNavigationContext

// Module 9748 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
