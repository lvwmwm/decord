// Module ID: 9665
// Function ID: 9666
// Name: context
// Dependencies: [19, 2]
// Exports: useVoiceChatNavigationContext

// Module 9665 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
