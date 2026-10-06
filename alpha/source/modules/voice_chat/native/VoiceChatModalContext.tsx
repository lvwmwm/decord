// Module ID: 9123
// Function ID: 9124
// Name: VoiceChatModalContext
// Dependencies: [19, 558, 2]
// Exports: useVoiceChatNavigationContext

// Module 9123 (VoiceChatModalContext)
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const context = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = () => react.useContext(context);
