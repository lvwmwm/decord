// Module ID: 10393
// Function ID: 10394
// Name: context
// Dependencies: [19, 2]
// Exports: useVoiceChatNavigationContext

// Module 10393 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return importAllResult.useContext(context);
};
