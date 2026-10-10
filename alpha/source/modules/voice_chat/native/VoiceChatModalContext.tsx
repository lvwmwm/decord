// Module ID: 10359
// Function ID: 10360
// Name: VoiceChatModalContext
// Dependencies: [19, 558, 2]
// Exports: useVoiceChatNavigationContext

// Module 10359 (VoiceChatModalContext)
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const context = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return react.useContext(context);
};
