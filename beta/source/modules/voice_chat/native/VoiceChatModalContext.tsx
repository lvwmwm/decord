// Module ID: 10714
// Function ID: 10715
// Name: VoiceChatModalContext
// Dependencies: [19, 2]
// Exports: useVoiceChatNavigationContext

// Module 10714 (VoiceChatModalContext)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(null);
const result = size.fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export function useVoiceChatNavigationContext() {
  return react.useContext(context);
}
