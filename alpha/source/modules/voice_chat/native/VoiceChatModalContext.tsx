// Module ID: 9684
// Function ID: 9685
// Name: VoiceChatModalContext
// Dependencies: [19, 2]
// Exports: useVoiceChatNavigationContext

// Module 9684 (VoiceChatModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return noop.useContext(context);
};
