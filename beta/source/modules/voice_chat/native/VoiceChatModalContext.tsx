// Module ID: 9673
// Function ID: 9674
// Name: VoiceChatModalContext
// Dependencies: [19, 558, 2]
// Exports: useVoiceChatNavigationContext

// Module 9673 (VoiceChatModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(null);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = () => noop.useContext(context);
