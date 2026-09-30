// Module ID: 9066
// Function ID: 9067
// Name: VoiceChatModalContext
// Dependencies: [19, 2]
// Exports: useVoiceChatNavigationContext

// Module 9066 (VoiceChatModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return noop.useContext(context);
};
